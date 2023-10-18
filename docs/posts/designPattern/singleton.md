---
title: 单例模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-02-06 17:31:00
---

# 场景

如果需要实现一个全局的 `loading` 遮罩层，正常展示是这样的：

![image-20220206173318902](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220206173318902.png)

但如果用户连续调用 `loaing` 两次，第二个遮罩层就会覆盖掉第一个：

![image-20220206173534676](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220206173534676.png)

看起来就像出了 `bug` 一样，因此我们需要采用单例模式，限制用户同一时刻只能调用一个全局 `loading` 。

# 单例模式

看下 [维基百科](https://en.wikipedia.org/wiki/Singleton_pattern) 给的定义：

> In [software engineering](https://en.wikipedia.org/wiki/Software_engineering), the **singleton pattern** is a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) that restricts the [instantiation](<https://en.wikipedia.org/wiki/Instantiation_(computer_science)>) of a [class](<https://en.wikipedia.org/wiki/Class_(computer_programming)>) to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.

可以说是最简单的设计模式了，就是保证类的实例只有一个即可。

![image-20220206181649135](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220206181649135.png)

看一下 `java` 的示例：

```java
public class Singleton {

    private static final Singleton INSTANCE = new Singleton();

    private Singleton() {}

    public static Singleton getInstance() {
        return INSTANCE;
    }
}
```

上边在初始化类的时候就进行了创建对象，并且将构造函数设置为 `private` 不允许外界调用，提供 `getInstance` 方法获取对象。

还有一种 `Lazy initialization` 的模式，也就是延迟到调用 `getInstance` 的时候才去创建对象。但如果多个线程中同时调用 `getInstance` 可能会导致创建多个对象，所以还需要进行加锁。

```java
public class Singleton {
    private static volatile Singleton instance = null;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized(Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

但单例模式存在很多争议，比如可测试性不强、对抽象、继承、多态都支持得不友好等等，但我感觉主要是基于 `class` 这类语言引起的问题，这里就不讨论了。

回到 `js` ，模拟上边实现一下：

```js
const Singleton = function () {
  this.instance = null;
};
Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton();
  }
  return this.instance;
};
const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a === b); // true
```

但上边就真的是邯郸学步一样的模仿了 `java` 的实现，事实上，`js` 创建对象并不一定需要通过 `new` 的方式，下边我们详细讨论下。

# js 的单例模式

首先单例模式产生的对象一般都是工具对象等，比如 `jQuery` 。它不需要我们通过构造函数去传参数，所以就不需要去 `new` 一个构造函数去生成对象。

我们只需要通过字面量对象， `var a = {}` ，`a` 就可以看成一个单例对象了。

通常的单例对象可能会是下边的样子，暴露几个方法供外界使用。

```js
var Singleton = {
  method1: function () {
    // ...
  },
  method2: function () {
    // ...
  },
};
```

但如果`Singleton` 有私有属性，可以写成下边的样子：

```js
var Singleton = {
  privateVar: '我是私有属性',
  method1: function () {
    // ...
  },
  method2: function () {
    // ...
  },
};
```

但此时外界就可以通过 `Singleton` 随意修改 `privateVar` 的值。

为了解决这个问题，我们可以借助闭包，通过 `IIFE (Immediately Invoked Function Expression)` 将一些属性和方法私有化。

```js
var myInstance = (function () {
  var privateVar = '';

  function privateMethod() {
    // ...
  }

  return {
    method1: function () {},
    method2: function () {},
  };
})();
```

但随着 `ES6` 、`Webpack` 的出现，我们很少像上边那样去定义一个模块了，而是通过单文件，一个文件就是一个模块，同时也可以看成一个**单例对象**。

```js
// singleton.js
const somePrivateState = [];

function privateMethod() {
  // ...
}

export default {
  method1() {
    // ...
  },
  method2() {
    // ...
  },
};
```

然后使用的时候 `import` 即可。

```js
// main.js
import Singleton from './singleton.js';
// ...
```

即使有另一个文件也 `import` 了同一个文件。

```js
// main2.js
import Singleton from './singleton.js';
```

但这两个不同文件的 `Singleton` 仍旧是同一个对象，这是 `ES Moudule` 的特性。

那如果通过 `Webpack` 将 `ES6` 转成 `ES5` 以后呢，这种方式还会是单例对象吗？

答案当然是肯定的，可以看一下 `Webpack` 打包的产物，其实就是使用了 `IIFE` ，同时将第一次 `import` 的模块进行了缓存，第二次 `import` 的时候会使用之前的缓存。可以看下 `__webpack_require__` 的实现，和单例模式的逻辑是一样的。

```js
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];

  // 单例模式的应用
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }

  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}
```

# 代码实现

回头开头我们说的全局 `loading` 的问题，解决起来也很简单，同样的，如果已经有了 `loading` 的实例，我们只需要直接返回即可。

这里直接看一下 `ElementUI` 对于全局 `loading` 的处理。

```js
// ~/packages/loading/src/index.js

let fullscreenLoading;

const Loading = (options = {}) => {
  ...
  // options 不传的话默认是 fullscreen
  options = merge({}, defaults, options);
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading; // 存在直接 return
  }

  let parent = options.body ? document.body : options.target;
  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  });

  ...
  if (options.fullscreen) {
    fullscreenLoading = instance;
  }
  return instance;
};
```

这样在使用 `Element` 的 `loading` 的时候，如果同时调用两次，其实只会有一个 `loading` 的遮罩层，第二个并不会显示。

```js
mounted() {
  const first = this.$loading({
    text: '我是第一个全屏loading',
  })

  const second = this.$loading({
    text: '我是第二个'
  })

  console.log(first === second); // true
}
```

# 更多场景

如果使用了 `ES6` 的模块，其实就不用考虑单不单例的问题了，但如果我们使用的第三方库，它没有 `export` 一个实例对象，而是 `export` 一个 `function/class` 呢？

比如之前介绍的 [发布-订阅模式](https://www.h7ml.cn/designPattern/publishSubscribe.html) 的 `Event` 对象，这个肯定需要是全局单例的，如果我们使用 `eventemitter3` 这个 `node` 包，看一下它的导出：

```js
'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

...

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

...

...
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}

```

可以看到它直接将 `EventEmitter` 这个函数导出了，如果每个页面都各自 `import` 它，然后通过 `new EventEmitter()` 来生成对象，那发布订阅就乱套了，因为它们不是同一个对象了。

此时，我们可以新建一个模块，然后 `export` 一个实例化对象，其他页面去使用这个对象就实现单例模式了。

```js
import EventEmitter from 'eventemitter3';
// 全局唯一的事件总线
const event = new EventEmitter();
export default event;
```

# 总

单例模式比较简单，主要是保证全局对象唯一，但相对于通过 `class` 生成对象的单例模式，`js` 就很特殊了。

因为在 `js` 中我们可以直接生成对象，并且这个对象就是全局唯一，所以在 `js` 中，单例模式是浑然天成的，我们平常并不会感知到。

尤其是现在开发使用 `ES6` 模块，每个模块也同样是一个单例对象，平常业务开发中也很少去应用单例模式，为了举出上边的例子真的是脑细胞耗尽了，哈哈。
