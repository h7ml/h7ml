---
icon: wrap
order: 2
date: 2019-08-05
author: h7ml
title: redis实现分布式可重入锁
category: redis
tag: redis
star: false
---

## 不可重入锁

即若当前线程执行某个方法已经获取了该锁，那么在方法中尝试再次获取锁时，就会获取不到而阻塞，直到当前线程释放锁后才能获取。

## 可重入锁

可重入锁，也叫做递归锁，指的是在同一线程内，外层函数获得锁之后，内层递归函数仍然可以获取到该锁。 就是同一个线程再次进入同样代码时，可以再次拿到该锁。

### 可重入锁作用

防止在同一线程中多次获取锁而导致死锁发生

> 在 java 的编程中 synchronized 和 ReentrantLock 都是可重入锁

用一段 Java 代码解释可重入：

```java
public synchronized void lockA() {
    lockB();
}
public synchronized void lockB() {
    // pass
}
```

假设 X 线程在 lockA 方法获取锁之后，继续执行 lockB 方法，如果此时不可重入，线程就必须等待锁释放，再次争抢锁。

锁明明是被 X 线程拥有，却还需要等待自己释放锁，然后再去抢锁，这看起来就很奇怪，我释放我自己~

## ReentrantLock 可重入锁源码思路

### 加锁

```java
/**
 * ReentrantLock的加锁流程是：
 * 1，先判断是否有线程持有锁，没有加锁进行加锁
 * 2、如果加锁成功，则设置持有锁的线程是当前线程
 * 3、如果有线程持有了锁，则再去判断，是否是当前线程持有了锁
 * 4、如果是当前线程持有锁，则加锁数量（state）+1
 */
final boolean nonfairTryAcquire(int acquires) {
    final Thread current = Thread.currentThread();
    int c = getState();
    //先判断，c（state）是否等于0，如果等于0，说明没有线程持有锁
    if (c == 0) {
        //通过cas方法把state的值0替换成1，替换成功说明加锁成功
        if (compareAndSetState(0, acquires)) {
            //如果加锁成功，设置持有锁的线程是当前线程
            setExclusiveOwnerThread(current);
            return true;
        }
    } else if (current == getExclusiveOwnerThread()) {//判断当前持有锁的线程是否是当前线程
        //如果是当前线程，则state值加acquires，代表了当前线程加锁了多少次
        int nextc = c + acquires;
        if (nextc < 0) // overflow
            throw new Error("Maximum lock count exceeded");
        setState(nextc);
        return true;
    }
    return false;
}
```

### 解锁

```java
/**
 * 看ReentrantLock的解锁代码我们知道，每次释放锁的时候都对state减1，
 * 当c值等于0的时候，说明锁重入次数也为0了，
 * 最终设置当前持有锁的线程为null,state也设置为0，锁就释放了。
 */
protected final boolean tryRelease(int releases) {
    int c = getState() - releases;//state-1 减加锁次数
    //如果持有锁的线程，不是当前线程，抛出异常
    if (Thread.currentThread() != getExclusiveOwnerThread())
        throw new IllegalMonitorStateException();
    boolean free = false;
    if (c == 0) {//如果c==0了说明当前线程，已经要释放锁了
        free = true;
        setExclusiveOwnerThread(null);//设置当前持有锁的线程为null
    }
    setState(c);//设置c的值
    return free;
}
```

## 分布式重入锁（redisson 依然实现，但此处注重原理实现）

基于 ReentrantLock 的源码我们知道，它是加锁成功了，记录了当前持有锁的线程，并通过一个 int 类型的数字，来记录了加锁次数。我们知道 ReentrantLock 的实现原理了，那么 redis 只要下面两个问题解决，就能实现重入锁了：

### 1.如何保存现有的线程

ReentrantLock 使用的是当前线程内存地址进行对比，那么我们就可以使用线程的 ID 进行比较一样可以的。但是在分布式环境下，这个 ID 就可能会存在重复，此时，我们需要增加一个全局的唯一 ID + 线程 ID 来做一个分布式线程比较。

### 2.加锁次数（重入了多少次），怎么记录维护

他能记录下来加锁次数吗？如果 valus 值存的格式是：系进程 id+线程 id+加锁次数，那可以实现存没问题了，但是重入次数要怎么维护了， 它肯定要保证原子性的，能解决吗？好像用 java 代码或者 lua 脚本都没法解决，因为都是实现都需要两步来维护这个重入次数的

- 第一步：先获取到 valus 值，把取到加锁次数+1
- 第二步：把新的值再设置进去在执行第二步操作之前，如果这个 key 失效了（设置持有锁超时了），如果还能再设置进去，就会有并发问题了

## Redisson 是如何实现的

我们跟一下 lock.lock()的代码，发现它最终调用的是 org.redisson.RedissonLock#tryLockInnerAsync 的方法,具体如下：

```java
<T> RFuture<T> tryLockInnerAsync(long waitTime, long leaseTime, TimeUnit unit, long threadId, RedisStrictCommand<T> command) {
    return evalWriteAsync(getRawName(), LongCodec.INSTANCE, command,
            "if (redis.call('exists', KEYS[1]) == 0) then " +
                    "redis.call('hincrby', KEYS[1], ARGV[2], 1); " +
                    "redis.call('pexpire', KEYS[1], ARGV[1]); " +
                    "return nil; " +
                    "end; " +
                    "if (redis.call('hexists', KEYS[1], ARGV[2]) == 1) then " +
                    "redis.call('hincrby', KEYS[1], ARGV[2], 1); " +
                    "redis.call('pexpire', KEYS[1], ARGV[1]); " +
                    "return nil; " +
                    "end; " +
                    "return redis.call('pttl', KEYS[1]);",
            Collections.singletonList(getRawName()), unit.toMillis(leaseTime), getLockName(threadId));
}
```

### 分析一下 redis 命令

1. exists 查询一个 key 是否存在
2. hincrby ：将 hash 中指定域的值增加给定的数字
3. pexpire：设置 key 的有效时间以毫秒为单位
4. hexists：判断 field 是否存在于 hash 中
5. pttl：获取 key 的有效毫秒数
6. KEYS[1] = key 的值
7. ARGV[1]) = 持有锁的时间
8. ARGV[2] = getLockName(threadId) 下面 id 就算系统在启动的时候会全局生成的 uuid 来作为当前进程的 id，加上线程 id 就是 getLockName(threadId)了，可以理解为：进程 ID+系统 ID = ARGV[2] 主要也是使用了 lua 脚本来保证多个命令执行的原子性，使用了 hash 来实现了分布式锁

### lua 脚本的加锁流程

![redis-lua.png](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/redis-lua.png)

#### 1、第一个 if 判断

```
204行：它是先判断了当前key是否存在，从EXISTS命令我们知道返回值是0说明key不存在，说明没有加锁
205行：hincrby命令是对 ARGV[2] = 进程ID+系统ID 进行原子自增加1
206行：是对整个hash设置过期期间
```

#### 2、下面来看第二个 if 判断

```
209行：判断field是否存在于hash中，如果存在返回1，返回1说明是当前进程+当前线程ID 之前已经获得到锁了
210行：hincrby命令是对 ARGV[2] = 进程ID+系统ID 进行原子自增加1，说明重入次数加1了
211行：再对整个hash设置过期期间
```

注意：分布式锁有过期时间，默认-1 的时候是需要自动续期的（redisson 有看门狗自动续期），当服务 down 机后自然自动释放解锁过程和 Reentrantlock 的解锁逻辑也基本相同没啥好说的了
