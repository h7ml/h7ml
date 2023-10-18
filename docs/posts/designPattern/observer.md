---
title: 观察者模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-01-27 09:22:44
---

# 场景

假设我们在开发一款外卖网站，进入网站的时候，第一步需要去请求后端接口得到用户的常用外卖地址。然后再去请求其他接口、渲染页面。如果什么都不考虑可能会直接这样写：

```javascript
// getAddress 异步请求
// 页面里有三个模块 A，B，C 需要拿到地址后再进行下一步
// A、B、C 三个模块都是不同人写的，提供了不同的方法供我们调用

getAddress().then((res) => {
  const address = res.address;
  A.update(address);
  B.next(address);
  C.change(address);
});
```

此时页面里多了一个模块 `D` ，同样需要拿到地址后进行下一步操作，我们只好去翻请求地址的代码把 `D` 模块的调用补上。

```js
// getAddress 异步请求
// 页面里有三个模块 A，B，C 需要拿到地址后再进行下一步
// A、B、C 三个模块都是不同人写的，提供了不同的方法供我们调用

getAddress().then((res) => {
  const address = res.address;
  A.update(address);
  B.next(address);
  C.change(address);
  D.init(address);
});
```

可以看到各个模块和获取地址模块耦合严重，`A`、`B`、`C` 模块有变化或者有新增模块，都需要深入到获取地址的代码去修改，一不小心可能就改出问题了。

此时就需要观察者模式了。

# 观察者模式

可以看下 [维基百科](https://en.wikipedia.org/wiki/Observer_pattern#cite_note-5)的介绍：

> The **observer pattern** is a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) in which an [object](<https://en.wikipedia.org/wiki/Object_(computer_science)#Objects_in_object-oriented_programming>), named the **subject**, maintains a list of its dependents, called **observers**, and notifies them automatically of any state changes, usually by calling one of their [methods](<https://en.wikipedia.org/wiki/Method_(computer_science)>).

很好理解的一个设计模式，有一个 `subject` 对象，然后有很多 `observers` 观察者对象，当 `subject` 对象有变化的时候去通知 `observer` 对象即可。

再看一下 `UML` 图和时序图：

![image-20220127110751274](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220127110751274.png)

每一个观察者都实现了 `update` 方法，并且调用 `Subject` 对象的 `attach` 方法订阅变化。当 `Subject` 变化时，调用 `Observer` 的 `update` 方法去通知观察者。

先用 `java` 写一个简单的例子：

公众号文章可以看作是 `Subject` ，会不定期更新。然后每一个用户都是一个 `Observer` ，订阅公众号，当更新的时候就可以第一时间收到消息。

```java
import java.util.ArrayList;

interface Observer {
    public void update();
}
// 提取 Subject 的公共部分
abstract class Subject {
    private ArrayList<Observer> list = new ArrayList<Observer>();
    public void attach(Observer observer){
        list.add(observer);
    }
    public void detach(Observer observer){
        list.remove(observer);
    }
    public void notifyObserver(){
        for(Observer observer : list){
            observer.update();
        }
    }
}
// 具体的公众号，提供写文章和得到文章
class WindLiang extends Subject {
    private String post;

    public void writePost(String p) {
        post = p;
    }

    public String getPost() {
        return post;
    }
}

// 小明
class XiaoMing implements Observer {
    private WindLiang subject;

    XiaoMing(WindLiang sub) {
        subject = sub;
    }
    @Override
    public void update(){
        String post = subject.getPost();
        System.out.println("我收到了" + post + " 并且点了个赞");
    }
}

// 小杨
class XiaoYang implements Observer {
    private WindLiang subject;

    XiaoYang(WindLiang sub) {
        subject = sub;
    }
    @Override
    public void update(){
        String post = subject.getPost();
        System.out.println("我收到了" + post + " 并且转发了");
    }
}

// 小刚
class XiaoGang implements Observer {
    private WindLiang subject;

    XiaoGang(WindLiang sub) {
        subject = sub;
    }
    @Override
    public void update(){
        String post = subject.getPost();
        System.out.println("我收到了" + post + " 并且收藏");
    }
}


public class Main {
    public static void main(String[] args) {
        WindLiang windliang = new WindLiang(); // Subject
        XiaoMing xiaoMing = new XiaoMing(windliang);
        XiaoYang xiaoYang = new XiaoYang(windliang);
        XiaoGang xiaoGang = new XiaoGang(windliang);

        // 添加观察者
        windliang.attach(xiaoMing);
        windliang.attach(xiaoYang);
        windliang.attach(xiaoGang);

        windliang.writePost("新文章-观察者模式，balabala"); // 更新文章
        windliang.notifyObserver(); // 通知观察者
    }
}
```

输出结果如下：

![](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220129125814418.png)

上边的实现主要是为了符合最原始的定义，调用 `update` 的时候没有传参。如果观察者需要的参数是一致的，其实这里也可以直接把更新后的数据传过去，这样观察者就不需要向上边一样再去调用 `subject.getPost()` 手动拿更新后的数据了。

这两种不同的方式前者叫做拉 `(pull)` 模式，就是收到 `Subject` 的通知后，通过内部的 `Subject` 对象调用相应的方法去拿到需要的数据。

后者叫做推 `(push)` 模式，`Subject` 更新的时候就将数据推给观察者，观察者直接使用即可。

下边用 `js` 改写为推模式：

```js
const WindLiang = () => {
  const list = [];
  let post = '还没更新';
  return {
    attach(update) {
      list.push(update);
    },
    detach(update) {
      let findIndex = -1;
      for (let i = 0; i < list.length; i++) {
        if (list[i] === update) {
          findIndex = i;
          break;
        }
      }
      if (findIndex !== -1) {
        list.splice(findIndex, 1);
      }
    },
    notifyObserver() {
      for (let i = 0; i < list.length; i++) {
        list[i](post);
      }
    },
    writePost(p) {
      post = p;
    },
  };
};

const XiaoMing = {
  update(post) {
    console.log('我收到了' + post + ' 并且点了个赞');
  },
};

const XiaoYang = {
  update(post) {
    console.log('我收到了' + post + ' 并且转发了');
  },
};

const XiaoGang = {
  update(post) {
    console.log('我收到了' + post + ' 并且收藏');
  },
};

windliang = WindLiang();

windliang.attach(XiaoMing.update);
windliang.attach(XiaoYang.update);
windliang.attach(XiaoGang.update);

windliang.writePost('新文章-观察者模式，balabala');
windliang.notifyObserver();
```

在 `js` 中，我们可以直接将 `update` 方法传给 `Subject` ，同时采取推模式，调用 `update` 的时候直接将数据传给观察者，看起来会简洁很多。

# 代码实现

回到开头的场景，我们可以利用观察者模式将获取地址后的一系列后续操作解耦出来。

```js
// 页面里有三个模块 A，B，C 需要拿到地址后再进行下一步
// A、B、C 三个模块都是不同人写的，提供了不同的方法供我们调用
const observers = [];
// 注册观察者
observers.push(A.update);
observers.push(B.next);
obervers.push(C.change);

// getAddress 异步请求
getAddress().then((res) => {
  const address = res.address;
  observers.forEach((update) => update(address));
});
```

通过观察者模式我们将获取地址后的操作解耦了出来，未来有新增模块只需要注册观察者即可。

当 `getAddress` 很复杂的时候，通过观察者模式会使得未来的改动变得清晰，不会影响到 `getAddress` 的逻辑。

必要的话也可以把 `observers` 抽离到一个新的文件作为一个新模块，防止让一个文件变得过于臃肿。

# 总

观察者模式比较好理解，通过抽象出一个 `Subject` 和多个观察者，减轻了它们之间的过度耦合。再说简单点就是利用回调函数，异步完成后调用传入的回调即可。但上边写的观察者模式还是有一些缺点：

- `Subject` 仍需要自己维护一个观察者列表，进行 `push` 和 `update`。
- 如果有其他的模块也需要使用观察者模式，还需要模块本身再维护一个新的观察者列表，而不能复用之前的代码。
- `Subject` 需要知道观察者提供了什么方法以便未来的时候进行回调。

下一篇文章会继续改进上边的写法，观察者模式的本质思想不变（某个对象变化，然后通知其他观察者对象进行更新）。

但写法上会引入一个中间平台，便于代码更好的复用，使得 `Subject` 和观察者进行更加彻底的解耦，同时给了它一个新的名字「发布订阅模式」。
