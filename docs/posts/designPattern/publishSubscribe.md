---
title: 发布订阅模式
category:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
tag:
  - 设计模式
  - frontend
date: 2022-01-30 11:04:52
---

**建议先看一下上篇** [观察者模式](https://www.h7ml.cn/designPattern/observer.html) ，发布订阅模式和观察者模式本质上还是一样的，并且发布订阅模式也没有在经典的设计模式书 `GoF` 中出现，很多地方也直接把两者看成一种设计模式了。

`GoF` 的名字也有个有趣的故事，[这里](http://wiki.c2.com/?GangOfFour) 贴过来：

> The authors of the [DesignPatternsBook](http://wiki.c2.com/?DesignPatternsBook) came to be known as the "Gang of Four." The name of the book ("Design Patterns: Elements of Reusable Object-Oriented Software") is too long for e-mail, so "book by the gang of four" became a shorthand name for it. After all, it isn't the ONLY book on patterns. That got shortened to "GOF book", which is pretty cryptic the first time you hear it.

# 场景

假设我们在开发一款外卖网站，进入网站的时候，第一步需要去请求后端接口得到用户的常用外卖地址。然后再去请求其他接口、渲染页面。如果使用了观察者模式可能会这样写：

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

`getAddress` 模块和其他 `A` 、`B`、`C` 三个模块已经实现了解耦，但仍需要维护 `observers` 这个数组来注册观察者，同时还需要知道各个模块提供了什么方法用于回调。

我们可以使用发布订阅模式，让 `getAddress` 模块和其他 `A` 、`B`、`C` 三个模块解耦的更加彻底。

# 发布订阅模式

回忆一下观察者模式：

> The **observer pattern** is a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) in which an [object](<https://en.wikipedia.org/wiki/Object_(computer_science)#Objects_in_object-oriented_programming>), named the **subject**, maintains a list of its dependents, called **observers**, and notifies them automatically of any state changes, usually by calling one of their [methods](<https://en.wikipedia.org/wiki/Method_(computer_science)>).

观察者模式中，`Subject` 自己维护观察者列表进行注册和通知。

![image-20220130170413954](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220130170413954.png)

发布订阅模式的话，引入一个中间平台进行注册和通知，相当于从 `Subject` 中解耦出来。

![image-20220130171806687](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220130171806687.png)

观察者通过 `on` 向 `EventBus` 注册事件，然后 `Subject` 通过 `emit` 向 `EventBus` 发射事件，由 `EventBus` 来向观察者更新。

接下来实现一个简单的 `EventBus` 。

```js
// event.js
const observersMap = {};
const listen = function (key, fn) {
  if (!observersMap[key]) {
    observersMap[key] = [];
  }
  observersMap[key].push(fn);
};
const trigger = function () {
  const key = Array.prototype.shift.call(arguments),
    fns = observersMap[key];
  if (!fns || fns.length === 0) {
    return false;
  }
  for (let i = 0, fn; (fn = fns[i]); i++) {
    fn.apply(this, arguments);
  }
};
const remove = function (key, fn) {
  const fns = observersMap[key];
  if (!fns) {
    return false;
  }
  if (!fn) {
    fns && (fns.length = 0); // 全部清空
  } else {
    let findIndex = -1;
    for (let i = 0; i < fns.length; i++) {
      if (fns[i] === fn) {
        findIndex = i;
        break;
      }
    }
    if (findIndex !== -1) {
      fns.splice(findIndex, 1);
    }
  }
};

// 同一种功能可能会见到不同名字，这里都导出去
export const EventBus = {
  listen,
  attach: listen,
  on: listen,

  remove,
  detach: remove,

  trigger,
  emit: trigger,
};
```

我们通过 `observersMap` 将不同的事件保存为不同的数组，`emit` 的时候得到对应的数组去调用即可。看下例子：

```js
import { EventBus } from './event.js';

const WindLiang = {
  writePost(p) {
    EventBus.emit('windliang', p);
  },
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

EventBus.on('windliang', XiaoMing.update);
EventBus.on('windliang', XiaoYang.update);
EventBus.on('windliang', XiaoGang.update);

WindLiang.writePost('新文章-观察者模式，balabala');
```

# 代码实现

让我们改造下开头写的观察者模式的代码：

地址模块：

```js
import { EventBus } from './event.js';

// getAddress 异步请求
getAddress().then((res) => {
  const address = res.address;
  EventBus.emit('ADDRESS', address);
});
```

`A` 模块

```js
import { EventBus } from './event.js';

const update = (address) => {
  // 自己的逻辑
};

EventBus.on('ADDRESS', (address) => update(address));
```

`B` 模块

```js
import { EventBus } from './event.js';

const next = (address) => {
  // 自己的逻辑
};

EventBus.on('ADDRESS', (address) => next(address));
```

`C` 模块

```js
import { EventBus } from './event.js';

const change = (address) => {
  // 自己的逻辑
};

EventBus.on('ADDRESS', (address) => change(address));
```

可以看到 `getAddress` 模块不再需要关心观察者有谁，它只需要向 `EventBus` 发射更新事件即可。

每个模块内部自己如果需要地址信息，只需要订阅相关事件，然后传入回调函数即可。

# 特殊情况

实际工程中可能遇到一些特殊场景，由于 `emit` 一般在一个异步事件中执行，如果这个异步事件突然执行的变快了，就可能造成某个事件先 `emit` 了，然后某个模块才进行了 `on` 。

此时我们可以对 `EventBus` 进行一定的改写，使得先订阅事件，后触发事件成为可能。

为了不改动原有逻辑，我们可以通过 [代理模式](https://www.h7ml.cn/designPattern/proxy.html) 进行改写。

```js
// eventProxy.js

import { EventBus as EventBusOriginal } from './event.js';

let offlineStack = []; // listen 之前的 emit 事件进行缓存

const triggerProxy = function () {
  const _self = this;
  const args = arguments;
  const fn = function () {
    return EventBusOriginal.trigger.apply(_self, args);
  };
  if (offlineStack) {
    return offlineStack.push(fn);
  }
  return fn();
};
const listenProxy = function (key, fn) {
  EventBusOriginal.listen(key, fn);
  if (!offlineStack) {
    return;
  }
  for (let i = 0, fn; (fn = offlineStack[i]); i++) {
    fn();
  }
  offlineStack = null;
};

const listen = listenProxy || EventBus.listen;
const trigger = triggerProxy || EventBus.trigger;

export const EventBus = {
  ...EventBusOriginal,
  listen,
  attach: listen,
  on: listen,

  trigger,
  emit: trigger,
};
```

在 `trigger` 的时候，如果 `offlineStack` 不为 `null`，说明还没有调用过 `listen`，此时将当前事件保存起来。

`listen` 的时候遍历之前保存的事件，并且将 `offlineStack` 置为 `null`，表示已经调用过 `listen` 了。

看一下效果：

```js
import { EventBus } from './eventProxy.mjs';

const WindLiang = {
  writePost(p) {
    EventBus.emit('windliang', p);
  },
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

WindLiang.writePost('新文章-观察者模式，balabala');

EventBus.on('windliang', XiaoYang.update); // 我收到了新文章-观察者模式，balabala 并且转发了
```

虽然是先进行的 `emit` 后进行的 `on` 的，但依旧会正常执行。

上边的解决方案很粗略，只适用于有一个事件并且只有一个 `on` 的场景，不然的话比如下边的情况：

```js
WindLiang.writePost('新文章-观察者模式，balabala');

EventBus.on('windliang', XiaoMing.update);
EventBus.on('windliang', XiaoYang.update);
EventBus.on('windliang', XiaoGang.update);
```

只有 `XiaoMing.update` 会执行，后边两句就会错过第一次的 `emit` ，因为执行一次 `listen` 就把缓存清空了。

或者在 `writePost` 之前有了一次 `on` 了：

```js
EventBus.on('windliang', XiaoMing.update);
WindLiang.writePost('新文章-观察者模式，balabala');

EventBus.on('windliang', XiaoYang.update);
EventBus.on('windliang', XiaoGang.update);
```

同样只有 `XiaoMing.update` 会执行，后边两句就会错过第一次的 `emit` 了，因为执行一次 `listen` 就把缓存清空了。

对于实际场景，我们还需要根据情况继续进行调整。

# 总

发布订阅模式相对于最原始的观察者模式将 `Subject` 和 `Observers` 进行了彻底解耦，`Subject` 不再需要关心谁订阅了它，`Observer` 只需要在自己内部订阅它所关心的事件即可。

通过封装好的 `EventBus` 也实现了更好的复用，不需要每个模块都去维护自己的观察者列表。

但同时也带来了坏处，所有的事件订阅分散在各个模块，没有一个全局视角知道某个事件被哪些模块订阅了，可能会导致程序难以理解和调试。
