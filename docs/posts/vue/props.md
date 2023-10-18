---
icon: vue
order: 3
date: 2021-07-12
author: h7ml
title: props
category: vue
tag:
  - vue
  - props
star: true
lastUpdated: false
---

## props

这一次，通过源码阅读，主要探索的方面包括如何初始化 Props、以及如何进行更新。

### 初始化

```js
initState(vm);

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  // ...
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {}; // 获取Vue实例选项上的Props
  var props = (vm._props = {}); // 获取挂载Vue实例上的_props
  var keys = (vm.$options._propKeys = []); // Props的Key值组成的数组
  // ...
  for (var key in propsOptions) loop(key); // 循环遍历 vue 实例选项中Props，并且执行响应式处理以及挂载在对应实例上
  // ...
}
```

初始化 Props 的关键点就在于 loop 函数，让我们接着该函数做了什么事情。

```js
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop,
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

var loop = function (key) {
  keys.push(key); // 每遍历一次Props中的值，都会收集其Key
  // ...
  defineReactive$$1(props, key, value, function () {
    // 将Vue实例上对象的_props中每一项属性都设置响应式
    if (!isRoot && !isUpdatingChildComponent) {
      // 配置的Setter函数，避免子组件直接操作Props的警告
      warn(
        'Avoid mutating a prop directly since the value will be ' +
          'overwritten whenever the parent component re-renders. ' +
          "Instead, use a data or computed property based on the prop's " +
          'value. Prop being mutated: "' +
          key +
          '"',
        vm
      );
    }
  });
  // static props are already proxied on the component's prototype
  // during Vue.extend(). We only need to proxy props defined at
  // instantiation here.
  if (!(key in vm)) {
    // 遍历时若发现新属性时，就将新属性重新挂载到Vue实例的_props中
    proxy(vm, '_props', key);
  }
};
```

理解上应该不会有太大的问题，loop 函数中主要做了以下几件事：

- defineReactive

相信对这个函数应该都不会陌生，其实就是对 Vue 实例上的`_props`对象中每一个属性都配置成响应式的，这样一来，当父组件中传递进来的 `Props` 变化时，则会通知相应的子组件中更新函数进行更新；

- 对相应的子组件配置 Props 属性的 Setter 警告函数

用过 Vue 的童鞋们应该都会遇到直接更改一个 `Props` 中的属性时，会抛出一个警告。而这个警告就是在 Vue 遍历 `_props` 对象中的值时，都会默认配置一个警告 `Setter` 函数；

- proxy

在遍历的过程中，一旦发现有新的属性时，都会将新属性重新挂载到 Vue 实例的 `_props` 中。这里有一个很重要的知识点，**当我们直接访问一个 Props 中的属性时，即上面栗子中`this.name`，其实是直接访问了 Vue 实例的 `_props` 对象中值而已。**

至此，我们也知道 Vue 源码是如何实现初始化 Props 的了，那么，究竟是父组件是如何通知更新 Props 的呢？我们接着看下去。

### 更新

由于父组件在更新的过程中，会通知子组件也进行更新，这时候就会调取一个方法`updateChildComponent`，而这个方法里就会对 `Props` 进行更新。我们就来看看是如何处理的：

```js
updateChildComponent(
  child,
  options.propsData, // updated props
  options.listeners, // updated listeners
  vnode, // new parent vnode
  options.children // new children
);

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  // ...
  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false); // 关闭依赖监听
    var props = vm._props; // 获取Vue实例上_props对象
    var propKeys = vm.$options._propKeys || []; // 获取保留在Vue实例上的props key值
    for (var i = 0; i < propKeys.length; i++) {
      // 循环遍历props key
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm); // 先校验Props中定义的数据类型是否符合，符合的话就直接返回，并且直接赋值给Vue实例上_props对象中相应的属性中
    }
    toggleObserving(true); // 打开依赖监听
    // keep a copy of raw propsData
    vm.$options.propsData = propsData; // 新的PropsData直接取替掉选项中旧的PropsData
  }
  // ...
}
```

一开始看到这里代码时，我是懵逼状态的，因为很容易绕不出来 😂。。在这里面会有几个问题，分别是：

- validateProp 作用究竟是什么？

相信用过 Props 的同学都清楚，在传递给子组件时，子组件中是有权限决定传递的值类型的，大大提高传递的规范，举个例子：

```js
props: {
  name: {
    type: String,
    required: true
  }
}
```

代码很好理解，就是规定 `name` 属性的类型以及是否必传。而方法`validateProp`作用就是校验父组件传递给子组件的值是否按要求传递，若正确传递则直接赋值给 `_props` 对象上相应的属性。

- 校验通过后，直接赋值给 `_props` 对象上相应的属性的用意何在？

上面提到过，`_props` 对象上的每一个属性都会使用 `proxy` 方法进行响应式挂载。那么当我直接赋值到 `_props` 对象上相应的属性时，就会触发到其 `Setter` 函数进行相应的依赖更新。因此，当父组件更新一个传递到子组件的属性时，首先会触发其 `Setter` 函数通知父组件进行更新，然后通过渲染函数传递到子组件后，更新子组件中的 `Props`。这时候，由于此时的 `Props` 对象中的属性收集到了子组件的依赖，更改后会通知相应的依赖进行更新。

- toggleObserving 究竟是干嘛用的？

首先它是一个递归遍历方法，**`Props` 在通知子组件依赖更新时，必须搞清楚的一点，就是是整个值的变化来进行通知**。如何理解？

简单滴说，对于属性值为基本数据类型的，当值改变时，是可以直接通知子组件进行更新的，而对于复杂数据类型来说，在更新时，会递归遍历其对象内部的属性来通知相应的依赖进行更新。

那么当调用方法`toggleObserving`为 false 时，对于基础数据类型来说，当其值变化时则直接通知子组件更新，而对于其复杂数据类型来说，则不会递归下去，而只会监听整个复杂数据类型替换时，才会去通知子组件进行更新。因此在 `Props` 中所有属性通知完后，又会重新调用方法 toggleObserving 为 true 来打开递归开关。（真的不得不服尤大大啊，这么好的优化思路都能想出来，牛人 👍）

至此，你大概也知道整个更新流程了，但是我当时还是存在疑惑的，既然基础数据类型值更改或复杂数据类型整个值更改，可以直接通知到子组件进行更新，那么是否会有一种情况就是，复杂数据类型中属性更改时，又是如何通知子组件更新的呢？？🤔

首先，我们一开始已经忽略一个方法，那就是 defineReactive$$1，这个方法真的用的秒，可以看看上面的代码，在初始化 Props 时候，会对 Props 每一项的属性进行使用该方法进行响应式的处理，包括了复杂数据类型的中属性，此时该属性不但收集了父组件依赖，还收集了子组件的依赖，这样一来，当复杂数据类型中属性变化时，会先通知父组件更新，再通知子组件进行更新。（这时候我真的不得不服到五体投地。。。）

### 总结

- 当 Props 中属性为基础数据类型值更改或复杂数据类型替换时，会通过 Setter 函数通知父组件进行更新，然后通过渲染函数，传递到子组件中更新其 Props 中对象相应的值，这时候就会触发到相应值的 Setter 来通知子组件进行更新；
- 当 Props 中属性为复杂数据类型的属性更改时，由于使用 defineReactive$$1 方法收集到了父组件依赖以及子组件的依赖，这时候会先通知父组件进行更新，再通知子组件进行更新；

参考:

- [Vue.js 技术揭秘 props](https://ustbhuangyi.github.io/vue-analysis/v2/reactive/props.html)
- [【 Vue 源码分析 】运行机制之 Props](https://github.com/Andraw-lin/about-Vue/blob/master/docs/%E3%80%90%20Vue%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90%20%E3%80%91%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6%E4%B9%8B%20Props.md)
