---
title: 依赖
icon: java
order: 1
date: 2019-03-21
author: h7ml
category: android
tag: rxjava
---

## 添加依赖

```
compile 'io.reactivex.rxjava2:rxandroid:2.0.1'
compile 'io.reactivex.rxjava2:rxjava:2.0.1'
```

## 创建数据源（被观察者/可观察者）

返回一个可观察对象，该对象发出给定(常量引用)项的信号，然后完成

### just 方法

```
Observable.just(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
.subscribe(new Consumer<Integer>() {
    @Override
    public void accept(Integer integer) throws Exception {
        System.out.println("just：" + integer);
    }
});
```

```
just：1
just：2
just：4
just：5
just：6
just：7
just：8
just：9
just：10
```

### fromArray 方法

fromArray 和 Just 几乎是一样的效果，只不过 Just 限制 10 个以内，而 fromArray 并没有限制，查看得知 单个参数 Just 是自行创建 ObservableJust，而多个参数 Just 最终还是回调了 fromArray，这里不再过多演示

### create 方法

```
Observable.create(new ObservableOnSubscribe<Integer>() {

    @Override
    public void subscribe(ObservableEmitter<Integer> emitter) throws Exception {
        //执行多次
        emitter.onNext(1);
        emitter.onNext(2);
        emitter.onNext(3);
        //标记事件结束
        emitter.onComplete();
        //标记事件发送错误
        //emitter.onError(new NullPointerException("不能为空"));
    }
}).subscribe(new Consumer<Integer>() {

    @Override
    public void accept(Integer integer) throws Exception {
        System.out.println("create：" + integer);
    }
});
```

```
create：1
create：2
create：3
```

### range 方法

使用范围数据，指定输出数据的范围（1-40 的数值）

```
Observable.range(3, 5)
.subscribe(new Consumer<Integer>() {
    @Override
    public void accept(Integer integer) throws Exception {
        System.out.println("range：" + integer);
    }
});
```

```
range：3
range：4
range：5
range：6
range：7
```

### interval 方法

指定某一时刻进行数据发送

```
Observable.interval(10, 1, TimeUnit.SECONDS) // 先等待 10 秒，之后再每一秒发送一次，10 秒这个参数也可以不填，默认用间隔时间参数替代（这里示例 1 秒）
.subscribe(new Consumer<Long>() {
    @Override
    public void accept(Long l) throws Exception {
    System.out.println("interval：" + l);
    }
    });
```

```
2019-03-20 15:30:33.331 interval：0
2019-03-20 15:30:34.331 interval：1
2019-03-20 15:30:35.331 interval：2
2019-03-20 15:30:36.331 interval：3
2019-03-20 15:30:37.331 interval：4
2019-03-20 15:30:38.331 interval：5
..................................
```

## 创建事件的接收者（观察者|订阅者），onNext 方法中的数据类型必须被观察者指定的泛型

表示观察者不对被观察者发送的事件作出任何响应（但被观察者还是可以继续发送事件）

```
public final Disposable subscribe() {}
```

表示观察者只对被观察者发送的 Next 事件作出响应

```
public final Disposable subscribe(Consumer<? super T> onNext) {}
```

表示观察者只对被观察者发送的 Next 事件 & Error 事件作出响应

```
public final Disposable subscribe(Consumer<? super T> onNext, Consumer<? super Throwable> onError) {}
```

表示观察者只对被观察者发送的 Next 事件、Error 事件 & Complete 事件作出响应

```
public final Disposable subscribe(Consumer<? super T> onNext, Consumer<? super Throwable> onError, Action onComplete) {}
```

表示观察者只对被观察者发送的 Next 事件、Error 事件 、Complete 事件 & onSubscribe 事件作出响应

```
public final Disposable subscribe(Consumer<? super T> onNext, Consumer<? super Throwable> onError, Action onComplete, Consumer<? super Disposable> onSubscribe) {}
```

表示观察者对被观察者所有的事件做出响应

```
public final void subscribe(Observer<? super T> observer) {}
```

## Observer 类用法

```
onSubscribe：订阅的时候被调用，方法参数有 Disposable，可用于取消订阅
```

```
onNext(T item)：Observable调用这个方法发射数据，方法的参数就是Observable发射的数据，这个方法可能会被调用多次，取决于业务逻辑
```

```
onCompleted()：正常终止，在没有遇到错误的情况下，Observable在最后一次调用onNext之后调用此方法
```

```
onError(Throwable e)：当Observable遇到错误或者无法返回期望的数据时会调用这个方法，这个调用会终止Observable，后续不会再调用onNext和onCompleted，onError方法的参数是抛出异常
```

观察者

```
Observable.just(1, 2, 3)
.subscribe(new Observer<Integer>() {

    @Override
    public void onSubscribe(Disposable d) {
        System.out.println("onSubscribe");
    }

    @Override
    public void onNext(Integer integer) {
        System.out.println("onNext：" + integer);
    }

    @Override
    public void onError(Throwable e) {
        System.out.println("onError：" + e.toString());
    }

    @Override
    public void onComplete() {
        System.out.println("onComplete");
    }
});
```

```
onSubscribe
onNext：1
onNext：2
onNext：3
onComplete
```

## Consumer 类用法

```
Observable.just(1, 2, 3)
.subscribe(new Consumer<Integer>() {
    @Override
    public void accept(Integer integer) throws Exception {
        System.out.println("accept：" + integer);
    }
});
```

```
accept：1
accept：2
accept：3
```

## 订阅

订阅事件，被观察者必须指定了事件的接收者（观察者），整个事件流程才可以被启动

```
Disposable disposable = observable.subscribe(observer);
```

## 是否被订阅

```
disposable.isDisposed();
```

## 取消订阅

```
disposable.dispose();
```

## 使用步骤

```android
build.gradle引入依赖

compile 'io.reactivex:rxjava:1.0.14'
compile 'io.reactivex:rxandroid:1.0.1'
```

## 创建数据源（被观察者/可观察者），泛型必须是 Object 的子类

```android
Observable observable = Observable.create(new Observable.OnSubscribe<String>() {

 //事件源，可以指定
 @Override
 public void call(Subscriber<? super String> subscriber) {
  //执行多次
  subscriber.onNext("第一次执行");
  subscriber.onNext("第二次执行");
  //标记事件结束
  subscriber.onCompleted();
  //标记事件发送错误
  //subscriber.onError();
 }
});
```

```android
//from(T[])，返回的对象一般都是数值类型
Integer[] items = {1, 2, 3, 4, 5, 6, 7, 8, 9};
Observable observable = Observable.from(items);
```

```android
//指定某一时刻进行数据发送
Observable observable = Observable.interval(1, 1, TimeUnit.SECONDS);//每隔一秒发送数据
```

```android
//just(T...)，处理任意类型的数组集合或数值，参数上限10个，参数类型必须一致
Integer[] items1 = {1, 2, 3, 4, 5, 6};
Integer[] items2 = {3, 5, 6, 8, 3, 8};
Observable observable = Observable.just(items1, items2);
//使用范围数据，指定输出数据的范围（1-40的数值）
Observable observable = Observable.range(1, 40);
####创建事件的接收者（观察者|订阅者），onNext方法中的数据类型必须被观察者指定的泛型
```

```android
onNext(T item)：Observable调用这个方法发射数据，方法的参数就是Observable发射的数据，这个方法可能会被调用多次，取决于业务逻辑

onCompleted()：正常终止，在没有遇到错误的情况下，Observable在最后一次调用onNext之后调用此方法

onError(Throwable e)：当Observable遇到错误或者无法返回期望的数据时会调用这个方法，这个调用会终止Observable，后续不会再调用onNext和onCompleted，onError方法的参数是抛出异常

Observer<String> observer = new Observer<String>() {

 @Override
 public void onNext(String s) {
  System.out.println("onNext" + s);
 }

 @Override
 public void onCompleted() {
  System.out.println("onCompleted");
 }

 @Override
 public void onError(Throwable e) {
  System.out.println("onError" + e.getMessage());
 }
};
```

```android
//订阅者
Subscriber<String> subscriber = new Subscriber<String>() {

 @Override
 public void onStart(String s) {
  System.out.println("事件开始了");
 }

 @Override
 public void onNext(String s) {
  System.out.println("onNext" + s);
 }

 @Override
 public void onCompleted() {
  System.out.println("onCompleted");
 }

 @Override
 public void onError(Throwable e) {
  System.out.println("onError" + e.getMessage());
 }
};
```

```android
//对订阅者进行简化，更简单
Action1<String> action1 = new Action1<String>() {

 @Override
 public void call(String s) {
  System.out.println("call" + s);
 }
};
```

```android
# 订阅事件，被观察者必须指定了事件的接收者（观察者|订阅者），整个事件流程才可以被启动
```

```android
observable.subscribe(observer);
observable.subscribe(subscriber);
```

```android
//选择性参数方法，可对onNext，onCompleted，onError选择性使用，一般只需要onNext方法就足够
observable.subscribe(action1);

//自动创建 Subscriber ，并使用 onNextAction 来定义 onNext()
observable.subscribe(onNextAction);
//自动创建 Subscriber ，并使用 onNextAction 和 onErrorAction 来定义 onNext() 和 onError()
observable.subscribe(onNextAction, onErrorAction);
//自动创建 Subscriber ，并使用 onNextAction、 onErrorAction 和 onCompletedAction 来定义 onNext()、 onError() 和 onCompleted()
observable.subscribe(onNextAction, onErrorAction, onCompletedAction);

简单解释一下这段代码中出现的 Action1 和 Action0。
Action0 是 RxJava 的一个接口，它只有一个方法 call()，这个方法是无参无返回值的；
由于 onCompleted() 方法也是无参无返回值的，因此 Action0 可以被当成一个包装对象，将 onCompleted() 的内容打包起来将自己作为一个参数传入 subscribe() 以实现不完整定义的回调。
这样其实也可以看做将 onCompleted() 方法作为参数传进了 subscribe()，相当于其他某些语言中的『闭包』。
Action1 也是一个接口，它同样只有一个方法 call(T param)，这个方法也无返回值，但有一个参数；
与 Action0 同理，由于 onNext(T obj) 和 onError(Throwable error) 也是单参数无返回值的，因此 Action1 可以将 onNext(obj) 和 onError(error) 打包起来传入 subscribe() 以实现不完整定义的回调。
事实上，虽然 Action0 和 Action1 在 API 中使用最广泛，但 RxJava 是提供了多个 ActionX 形式的接口 (例如 Action2, Action3) 的，它们可以被用以包装不同的无返回值的方法
```

订阅者是观察者的子类，区别在于订阅者可以取消订阅（在程序销毁后）

```android
if(subscriber != null && !subscriber.isUnsubscribed()) {
subscriber.unsubscribe();
}
```

- [Rxjava 的线程调度](thread-scheduling.md)

- [RxJava 的优势](superiority.md)
