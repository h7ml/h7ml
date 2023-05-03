---
icon: vue
date: 2021-06-27
author: h7ml
title: vue
category: vue
tag: vue
star: true
index: true
dir:
  order: 6
---

## vue 源码分析

### **核心**

Vue 响应式的核心是利用 Object.defineProperty()这个方法进行数据劫持和观察者模式进行数据响应式的。Object.defineProperty()这个方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。具体用法如下：

​ 它有三个参数，第一个是 object，它代表要定义属性的对象。；第二个是 prop，它代表目标对象的属性值；第三个参数是 descriptor，它代表要定义或修改的属性描述符。

​ 响应式用法：

```javascript
const person = {};
Object.defineProperty(person, 'name', {
  get: function () {
    console.log('获取到name了');
  },
  set: function (val) {
    console.log('设置了name为' + val);
  },
});
person.name; //获取到name了
person.name = 'h7ml'; //设置了name为h7ml
```

### **观察者模式**

什么是观察者模式？它分为**注册环节跟发布环节**。

比如我去买芝士蛋糕，但是店家还没有做出来。这时候我又不想在店外面傻傻等，我就需要隔一段时间来回来问问蛋糕做好没，对于我来说是很麻烦的事情，说不定我就懒得买了。

店家肯定想要做生意，不想流失我这个吃货客户。于是，在蛋糕没有做好的这段时间，有客户来，他们就让客户把自己的电话留下，这就是观察者模式中的**注册环节**。然后蛋糕做好之后，一次性通知所有记录了的客户，这就是观察者的**发布环节**。

一个简单的观察者模式类：

```javascript
function Observer() {
  this.dep = [];

  register(fn) {
    this.dep.push(fn)
  }

  notify() {
    this.dep.forEach(item => item())
  }
}

const wantCake = new Oberver();
// 每来一个顾客就注册一个想执行的函数
wantCake.register(() => {'console.log("call daisy")'})
wantCake.register(() => {'console.log("call anny")'})
wantCake.register(() => {'console.log("call sunny")'})

// 最后蛋糕做好之后，通知所有的客户
wantCake.notify()
```

### **初始化**

vue 在初始化执行 initState 的时候，会对`props`、`methods`、`data`、`computed` 和 `wathcer` 等属性做初始化操作。

```javascript
export function initState(vm: Component) {
  vm._watchers = [];
  const opts = vm.$options;
  if (opts.props) initProps(vm, opts.props);
  if (opts.methods) initMethods(vm, opts.methods);
  if (opts.data) {
    initData(vm);
  } else {
    observe((vm._data = {}), true /* asRootData */);
  }
  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}
```

在初始化 data 的时候，一共做了两件事，一件是利用 proxy 将数据代理到整个 vue 实例上，另一件就是将 data 中的所有对象属性 reactive 化，变成响应式对象，为对象添加 getter 和 setter。

```javascript
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
export class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that has this object as root $data

  constructor(value: any) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      const augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */

  walk(obj: Object) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }

  /**
   * Observe a list of Array items.
   */
  observeArray(items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
```

上面的这段代码，它将对象的所有属性进行遍历执行 defineReactive()方法进行响应式化

```javascript
  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
```

在执行这个方法的过程中，会 new 一个 dep 实例，记得注意，后面会用到

```javascript
function defineReactive(obj: Object, key: string, ...) {
    const dep = new Dep()

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        ....
        dep.depend()
        return value
        ....
      },
      set: function reactiveSetter (newVal) {
        ...
        val = newVal
        dep.notify()
        ...
      }
    })
  }

  class Dep {
      static target: ?Watcher;
      subs: Array<Watcher>;

      depend () {
        if (Dep.target) {
          Dep.target.addDep(this)
        }
      }

      notify () {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
          subs[i].update()
        }
      }
```

上述代码中的 Dep 类就是一个观察者类，每个对象属性都一个 dep 实例对象，在执行 get 的时候进行触发 depend 方法，触发 sit 的时候执行 notify 方法。

### **mount 阶段**

在 vue 实例挂载阶段，会创建一个 Watcher 类的实例对象，这个 Watcher 实际上是连接 Vue 组件与 Dep（也就是视图更新环节）的桥梁。

```javascript
mountComponent(vm: Component, el: ?Element, ...) {
    vm.$el = el

    ...

    updateComponent = () => {
      vm._update(vm._render(), ...)
    }

    new Watcher(vm, updateComponent, ...)
    ...
}

class Watcher {
  getter: Function;

  // 代码经过简化
  constructor(vm: Component, expOrFn: string | Function, ...) {
    ...
    this.getter = expOrFn
    Dep.target = this                      // 注意这里将当前的Watcher赋值给了Dep.target
    this.value = this.getter.call(vm, vm)  // 调用组件的更新函数
    ...
  }
}
```

在 rende()方法将模板渲染成虚拟 Vnode 的过程中会访问 data，从而触发属性的 getter，然后每个对象属性又有一个 dep 实例对象（上面提到的），然后再 getter 的逻辑中又会调用该 dep 的 depend 方法，将 watcher 实例 add 到 sub（存在 Dep 类中的存储 watcher 的数组）里面。在 depend 方法里面，Dep.target 就是 watcher 本身，在 Wacher 类中的构造函数会执行（上面代码有）。以上过程就叫**依赖收集**。

### **派发更新**

在对象属性的数据改变之后，会触发 sitter，从而执行 sitter 函数的逻辑，从而调用 dep 实例的 notify 方法，从而进行遍历调用 sub 中所有 watcher 的 upadte 方法进行视图更新。

![image-20210717221736565](data:image/png;base64,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)

### **总结**

**第一步：**组件初始化的时候，先给每一个 Data 属性都注册 getter，setter，也就是 reactive 化。然后再 new 一个自己的 Watcher 对象，此时 watcher 会立即调用组件的 render 函数去生成虚拟 DOM。在调用 render 的时候，就会需要用到 data 的属性值，此时会触发 getter 函数，将当前的 Watcher 函数注册进 sub 里。

![image-20210717225112267](https://xiezhenghua123.github.io/blobhttps://static.h7ml.cn/vitepress/assets/img/image-20210717225112267.b04dbc72.png)

**第二步：**当 data 属性发生改变之后，会触发 sitter，遍历 sub 里所有的 watcher 对象，通知它们去重新渲染组件。

![image-20210717225239671](https://xiezhenghua123.github.io/blobhttps://static.h7ml.cn/vitepress/assets/img/image-20210717225239671.3e417f2c.png)

注意：vue 对数组响应式是通过变异方法完成的，而且如果要对响应式对象添加新的属性，必须要用$set 方法才能完成

参考文章：

[vue 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/v2/reactive/)

[最简化 VUE 的响应式原理](https://zhuanlan.zhihu.com/p/88648401)
