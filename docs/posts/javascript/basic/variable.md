---
icon: javascript
order: 1
date: 2023-01-11
author: h7ml
category: javascript
tag: javascript
star: true
---

# JavaScript 变量、作用域、内存

## 原始值与引用值

ECMAScript 分为两种数据类型： 1、原始值：最简单的数据（`undefined` `null` `boolean` `number` `string` `symbol`）。 2、引用值：由多个值构成的对象，保存在内存中的对象（js 不能直接访问内存地址，也就不能操作对象所在内存空间，所以实际操作只是对该对象的**引用**操作）。

### 原始值不能有属性

```js
const person = 'Tomiaa'
person.age = 17 // 添加并不会报错
console.log(person.age) // undefind

const person1 = new String('Tomiaa')
person1.age = 17
console.log(person1.age) // 17

console.log(typeof person) // string
console.log(typeof person1) // object
```

### 复制值

```js
const num = 6
const num2 = num // num2 得到 6，num2 与 num 是完全独立的，互不影响。创建了该值的副本

const obj = {} // 引用值储存在堆内存上
const obj1 = obj // 只会复制指针
obj1.name = 'tom'
console.log(obj.name) // 'tom';
// 引用值赋值是储存的是该值的内存地址，obj1 = obj时只是把地址赋值，指向的是同一个内存地址。访问的都是指向同一个对象。
```

### 函数传参

- 原始值传递

```js
function add(num) {
  // 函数内部相当于 let num = undefind;
  num += 10
  return num
}
const count = 20

const result = add(count)
console.log(count) // 20，没有变化
console.log(result) // 30
```

- 引用值传递

```js
function setName(obj) {
  // 同样是赋值了，但赋值的是引用地址，操作的是同一个内存地址
  obj.name = 'tomiaa'
}
const person = {}
setName(person)
console.log(person.name) // "tomiaa"
```

例 2：

```js
function setName(obj) {
  obj.name = 'greg' // 对传入的地址赋值
  obj = {} // obj 被赋值了新的内存地址
  obj.name = 'tom'
}
const person = {}
setName(person)
console.log(person.name) // "greg"
```

## 上下文

“上下文”在 js 中非常重要。它决定了变量和函数访问的数据以及行为，上下文储存在`variable object`对象上，但无法通过代码访问，后台处理时会用到它。

全局上下文：在 ECMA 所述的宿主环境，全局上下文对象可能不一样，浏览器中为`window`对象，`node.js`环境下则是`global`对象。通过`var`声明的全局变量都会成为`window`对象的属性或方法。let、const 则不会，但是在作用域链效果是一样的。

eval()调用内部存在第三种上下文。

```js
const color = 'blue'
function changeColor() {
  const redColor = 'red'
  function swapColors() {
    const tempColor = redColor
    // 这里可以访问color、redColor 和tempColor
  }
  // 这里可以访问color 和redColor，但访问不到tempColor
}
// 这里只能访问color
```

### 改变作用域

```js
with (Promise) {
  console.log(all === Promise.all); // true
}
```

`with`语句将`Promise`作为当前作用域的上下文。这里的`all`访问的就是`Promise`中的实例对象（不能是原型对象上的属性或方法）。

### 变量声明

```js
(function temp() {
  const str = 'str1'
})()
console.log(str); // 错误。无法访问函数作用域中的变量

(function temp1() {
  name = 'tom' // 省略了 var 会被添加到全局上下文，函数执行结束后变量依然存在
})()
console.log(name) // 'tom'
```

### 标识符查找

```js
const color = 'blue'
function getColor() {
  return color // 当前函数作用域不存在 color，就会往上一级作用域查找，直到全局上下文。
}

function getColor1() {
  const color1 = 'red'
  {
    const color1 = 'green'
    return color1 // green 这里查找 color1 标识符要比上一个函数快，因为不要切换作用域，js 引擎在查找标识符做了很多工作，未来可能微不足道了
  }
}
```

## 垃圾回收

JavaScript 通过自动内存管理内存的分配和闲置资源的回收：确定哪个变量不会再使用，释放它的内存。这个过程每隔一段时间或预定时间就会自动运行。但这个过程是不完美的方案，在一个代码块内哪些变量是否还有用是一个“无法判定”的问题。

以一个函数作用域周期为例，执行函数时，会分配该函数到栈或堆内存中保存对应的值，函数内部使用了变量，退出。此时就可以释放局部的变量了。但并不会这么明显，垃圾回收需要跟踪哪些变量还会继续使用：在浏览器的发展史上，用到过标记清理和引用计数。

### 标记清理

当变量在进入上下文时，从逻辑上讲只要在上下文中就不应该释放它们的内存，只要上下文在运行就可能用到它。当离开上下文时就会被加上离开上下文的标记。如“在上下文中”和“不在上下文中”两个列表。

在垃圾回收程序运行时，它会将所有在当前上下文中变量及被上下文中引用的变量标记去掉，之后再被加上标记的变量就是待删除了，原因是在任何上下文中的变量都访问不到它们了。之后垃圾回收程序会做一次清理，清除带有标记的值并回收它们的内存。

### 引用计数

引用计数没有标记清理那么常用。在声明一个变量时，这个值引用次数为 1。如果这个值被赋值到另一个值，引用数就会加 1。相反，这个值被新的值覆盖，引用数就会减 1。但引用数为 0 时就没办法访问这个值了。等待垃圾回收程序运行时就会释放引用数为 0 的值。

但引用计数有一个严重的问题：循环引用

```js
function fn() {
  const obj1 = {}
  const obj2 = {}
  obj1.data = obj2
  obj2.list = obj1
}
```

上面的两个变量互相引用，引用数都是 2。在标记清理策略下会被回收，但在引用计数下，这两个值还会存在。他们的引用数永远不会变成 0。这个函数被调用多次就会造成很多内存不会释放。因此，早期的网景浏览器就放弃了引用计数。

但引用计数的问题在 IE8 之前也有许多问题，BOM 和 DOM 对象是 C++实现的，并非 js 引擎的标记清理，只要设计了 DOM 和 BOM 对象就无法避开引用的问题。

```js
const dom = document.getElementById('app')
const obj = {}
obj.element = dom
dom.data = obj

// 需要手动切断循环引用
obj.element = null
dom.data = null
```

在 IE9 中把 BOM 和 DOM 对象都改成了 js 对象，从而避免了两套垃圾回收算法与内存泄露的问题。

:::tip 警告在 IE 中`window.CollectGarbage()`方法会立即触发垃圾回收。在 Opera 7 及更高版本中，调用`window.opera.collect()`也会启动垃圾回收程序。这些方法有可能触发垃圾回收（不推荐）。 :::

## 内存管理

在系统中，分配给浏览器的内存一般比桌面软件要少很多。

如果数据不再需要，那么把它赋值为`null`。

```js
function fn() {
  const obj = { name: 'tom' }
  return obj // 返回了 obj 的引用
  // 在函数执行完毕后，超出上下文后 obj 就会被自动解除引用，无需手动解除
}

let globalObj = fn() // 全局变量

// 解除引用
globalObj = null
```

使用`const`与`let`可以更早的让垃圾回收程序处理。

### 隐藏类

在`chrome`的 V8 JavaScript 引擎解释 js 时会利用隐藏类。

```js
function fn() {
  this.name = 'tom'
}
const o1 = new fn()
const o2 = new fn()
```

`o1`和`o2`共享相同的隐藏类、构造函数以及原型。

如果后续代码做了添加操作：

```js
o1.age = 12
```

此时两个类的实例就会对应不同的隐藏类。

解决方案（避免先创建再新增）：

```js
function fn(age) {
  this.name = 'tom'
  this.age = age
}
const o1 = new fn()
const o2 = new fn(12)
```

如果后续代码做了删除操作：

```js
delete o2.age
```

此时两个类的实例就会对应不同的隐藏类（与动态添加的后果是一样的）。

解决方案（把不想要的属性设置为`null`）：

```js
function fn(age) {
  this.name = 'tom'
  this.age = age
}
const o1 = new fn()
const o2 = new fn(12)

o2.age = null
// 这样可以保持隐藏类不变，并且继续共享
```

### 内存泄露

- 没有加声明关键字会导致属性被添加到`window`上，只要`window`没有被清除属性就不会消失。

```js
function fn() {
  name = 'tom' // 相当于 window.name = 'tom'
}
```

- 定时器也会导致内存泄漏

```js
const name = 'tom'
setInterval(() => {
  console.log(name)
}, 1000)
```

定时器一直执行就会导致`name`一直被引用。

- 闭包也会造成内存泄漏

```js
function globalFun() {
  const obj = { name: 'tom' }
  return () => obj
}
```

调用`globalFun`方法返回的函数只要一直引用它，内部的`obj`也不会被清理掉。
