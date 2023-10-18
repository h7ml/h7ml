---
icon: vue
order: 1
date: 2021-06-27
author: h7ml
title: vue核心概念
category: vue
tag: vue
star: true
---

## 在父组件中监听子组件的生命周期钩子

```vue
<template>
  <child @hook:mounted="onChildMounted"></child>
</template>
<script>
  export default {
    methods: {
      onChildMounted() {},
    },
  };
</script>
```

[相关源码](https://github.com/vuejs/vue/blob/dev/src/core/instance/lifecycle.js#L347)

## 在 methods 中使用 debounce / throttle

```vue
<template>
  <div class="container" @click="handleClick"></div>
</template>
<script>
  import { debounce } from 'lodash-es';
  export default {
    methods: {
      handleClick: debounce(function () {}, 500),
    },
  };
</script>
```

[官网例子](https://cn.vuejs.org/v2/guide/migration.html#%E5%B8%A6%E6%9C%89-debounce-%E7%9A%84-v-model%E7%A7%BB%E9%99%A4)

## 1、组件化

### 组件化基础

- MVVM 模型

  - 模型-视图-视图模型。
  - 模型（Model）指的是后端传递的数据。视图(View)指的是所看到的页面。视图模型(ViewModel)是 mvvm 模式的核心，它是连接 view 和 model 的桥梁。它有两个方向：一是将模型（Model）转化成视图(View)，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将视图(View)转化成模型(Model)，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。

- MVC

  - 模型-视图-控制器。
  - M 和 V 指的意思和 MVVM 中的 M 和 V 意思一样。 C 即 Controller 指的是页面业务逻辑。使用 MVC 的目的就是将 M 和 V 的代码分离。 MVC 是单向通信。也就是 View 跟 Model，必须通过 Controller 来承上启下。 MVC 和 MVVM 的区别并不是 VM 完全取代了 C，只是在 MVC 的基础上增加了一层 VM，只不过是弱化了 C 的概念，ViewModel 存在目的在于抽离 Controller 中展示的业务逻辑，而不是替代 Controller，其它视图操作业务等还是应该放在 Controller 中实现。也就是说 MVVM 实现的是业务逻辑组件的重用，使开发更高效，结构更清晰，增加代码的复用性。

### 数据驱动视图

- 传统组件，只是静态渲染，更新还要依赖操作 DOM
- 数据驱动视图 - Vue MVVM
- 数据驱动视图 - React setState

## 2、响应式

- 核心 api Object.defineproperty
  - vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；
  - [Object.defineproperty 核心代码 自定义实现](./Object.defineproperty.md)
- 监听对象（深度），监听数组
- Object.defineproperty 的缺点（vue3 用 Proxy）
  - 深度监听，需要递归到底，一次性计算量大
  - 无法监听新增属性/删除属性（Vue.set Vue.delete）
  - [Proxy 核心代码 自定义实现](./Proxy.md)
  - [proxy-observe 核心代码 自定义实现](./proxy-observe.md)

Object.defineproperty.html

## 3、vdom 和 diff

- 应用背景
  - vdom 是实现 vue 和 react 的重要基石
  - diff 算法是 vdom 中最核心、最关键的部分
  - vdom 是一个热门话题，也是面试中的热门问题
  - DOM 操作非常耗费性能
  - 以前用 jQuery，可以自行控制 DOM 操作的时机，手动调整
  - Vue 和 React 是数据驱动视图，如何有效控制 DOM 操作
- 解决方案 - vdom
  - 有了一定复杂度，想减少计算次数比较难
  - 能不能吧计算，更多的转移为 JS 计算？因为 JS 执行速度很快
  - vdom - 用 JS 模拟 DOM 结构，计算出最小的变更，操作 DOM
- vnode 结构
- snabbdom 使用：vnode h patch

### diff 算法

- diff 算法是 vdom 中最核心、最关键的部分
- diff 算法能在日常使用 vue React 中体现出来（如 key）
- diff 算法是前端热门话题

#### diff 算法概述

- diff 即对比，是一个广泛的概念，如 linux diff 命令、git diff 等
- 两个 js 对象也可以做 diff，如[https://gethub.com/cujojs/jiff](https://gethub.com/cujojs/jiff)

## 4、模版编译

- with 语法
- 模版编译为 render 函数
- 执行 render 函数生成 vdom

## 5、渲染过程

- 初次渲染过程
- 更新过程
- 异步渲染

## 6、前端路由

- hash
- h5 history
- 两者对比

## 7、vue 面试真题演练

### 1、v-show 和 v-if 的区别

- v-show 通过 css display 控制显示和隐藏
- v-if 组件真正的渲染和销毁， 而不是显示和隐藏
- 频繁切换显示状态用 v-show， 否则用 v-if

### 为何在 v-for 中使用 key

- 必须用 key， 且不能是 index 和 random
- diff 算法中通过 tag 和 key 来判断， 是否是 sameNode
- 减少渲染次数，提升渲染性能

### 描述 Vue 组件生命周期（父子组件）

- 单组件生命周期
- 父子组件生命周期关系

### Vue 组件如何通讯（常见）

- 父子组件 props 和 this.$emit
- 自定义事件 event.$no event.$off event.emit
- vuex

### 描述组件渲染和更新的过程

- 响应式（监听属性变化）
- 模版渲染
- vdom

### 双向数据绑定 v-model 的实现原理

- input 元素的 value = this.name
- 绑定 input 事件 this.name = $event.target.value
- data 更新触发 re-render

### 对于 MVVM 的理解

- Model、viewModel、view

### computed 有何特点

- 缓存，不变不会重新计算
- 提高性能

### 为何组件 data 必须是一个函数？

- data 必须是一个函数（为了不同的实例不冲突）
- vue 是一个 class

### ajax 请求应该放在哪个生命周期

- mounted
- js 是单线程的， ajax 异步获取数据
- 放在 mounted 之前没有什么用，只会让逻辑变得更混乱

### 如何将组件所有 props 传递给子组件？

- $props
- `<User v-bind="$props">`
- 细节知识点，优先级不高

### 如何自己实现 v-model

```html
<input text="text" v-bind:value="text" v-on:input="$emit('change', $event.target.value)" />
```

### 多个组件有相同的逻辑，如何抽离？

- mixin
- 以及 mixin 的一些缺点

### 为何要使用异步组件？

- 加载大组件
- 路由异步加载

### 何时使用 keep-alive？

- 缓存组件，不需要重复渲染
- 如多个静态 tab 页的切换
- 优化性能

### 何时需要使用 beforeDestory

- 解绑自定义事件 event.$off
- 清除定时器
- 解绑自定义的 DOM 事件，如 window scroll 等

### 什么是作用域插槽

```html
<slot :website="website"></slot>
```

### vuex 中 action 和 mutation 有何区别

- action 中处理异步，mutation 不可以
- mutaion 做原子操作
- action 可以整合多个 mutation

### vue-router 常用的路由模式

- hash 默认
- H5 history（需要服务支持）
- 两者比较

### 如何配置 vue-router 异步加载

- path 和 component
- component: ()=> import('..///')

### 请用 vnode 描述一个 DOM 结构

```html
<div id="div1" class="container">
  <p>vdom</p>
  <ul style="font-size: 20px">
    <li>a</li>
  </ul>
</div>
```

```json
{
  "tag": "ul",
  "props": {
    "style": "font-size: 20px"
  },
  "children": {
    "tag": "li",
    "children": "a"
  }
}
```

### 监听 data 变化的核心 API 是什么

- Object.defineProperty
- 以及深度监听、监听数组
- 有何缺点

### Vue 如何监听数组变化

- Object.defineProperty 不能监听数组变化
- 重新定义原型，重写 push pop 等方法，实现监听
- proxy 可以原生支持监听数组变化

### 请描述响应式原理

- 监听 data 变化
- 组件渲染和更新的流程

### diff 算法的时间复杂度

- O(n)
- 在 O(n^3)基础上做了一些调整

### 简述 diff 算法过程

- patch(elem, vnode)和 path(vnode, newVode)
- pathVnode 和 addVnodes 和 removeVnodes
- updataChildren（key 的重要性）

### vue 为何是异步渲染， $nextTick 何用

- 异步渲染（以合并 data 修改），以提高渲染性能
- $nextTick 在 DOM 更新完后，触发回调

### Vue 常见性能优化方式

- 合理使用 v-show 和 v-if
- 合理使用 computed
- v-for 时加 key， 以及避免和 v-if 同时使用
- （v-for 优先级高， 每次 v-for 会重新计算一遍 v-if）
- 自定义事件、DOM 事件及时销毁
- 合理使用异步组件
- 合理使用 keep-alive
- data 层级不要太深
- 使用 vue-loader 在开发环境做模版编译（预编译）
- webpack 层面的优化
- 前端通用的性能优化，如图片懒加载
- 使用 SSR

## hash 和 history 路由实现原理

location.hash 的值实际就是 URL 中#后面的东西。

history 实际采用了 HTML5 中提供的 API 来实现，主要有 history.pushState()和 history.replaceState()。
