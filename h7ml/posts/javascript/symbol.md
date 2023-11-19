---
icon: javascript
order: 1
date: 2024-09-11
author: h7ml
title: JavaScript 中的 Symbol 类型与其特性详解
description: JavaScript 中的 Symbol 类型是 ECMAScript 2015 引入的一种新的基本数据类型，它具有唯一性和隐藏性等特性。本文将深入介绍 Symbol 类型及其在 JavaScript 中的应用，同时通过代码示例进行详细说明。
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a> 结论：Symbol 类型的引入使得 JavaScript 变得更加灵活和强大。了解并合理使用 Symbol 类型，将有助于提高代码的可维护性和健壮性。
star: 1
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
shortTitle: 微前端架构:拆分前端应用
category:
  - javascript
  - 前端开发
  - Symbol
tag:
  - javascript
  - Symbol
head:
  - - meta
    - name: keywords
      content: Symbol 类型，唯一性，隐藏性，全局 Symbol 注册表，属性检索，应用场景，私有属性，方法，避免属性冲突，常量。
---

# JavaScript 中的 Symbol 类型与其特性详解

ES6（ECMAScript 2015）引入了一种新的基本数据类型——Symbol。Symbol 类型的引入使得开发者能够创建一种独一无二的值，这在某些场景下非常有用。


## 1. Symbol 的基本概念

Symbol 是一种原始数据类型，它的值是唯一且不可变的。通过 Symbol() 函数创建一个新的 Symbol，每次调用都会返回一个不同的值。

```javascript
const mySymbol = Symbol();
const anotherSymbol = Symbol();

console.log(mySymbol === anotherSymbol); // false
```

上面的例子中，mySymbol 和 anotherSymbol 的值是不同的，即使两个 Symbol 使用相同的描述（description），它们也是不相等的。

```javascript
const symbolWithDescription = Symbol('mySymbol');

console.log(symbolWithDescription.toString()); // Symbol(mySymbol)
```

## 2. Symbol 的主要特性

### 2.1  唯一性

Symbol 类型的值是唯一的，即使两个 Symbol 使用相同的描述（description），它们也是不相等的。

```javascript
const mySymbol = Symbol('mySymbol');
const anotherSymbol = Symbol('mySymbol');

console.log(mySymbol === anotherSymbol); // false
```

### 2.2 隐藏性

由于 Symbol 的唯一性，它可以用于创建对象的私有属性或方法。这有助于防止命名冲突和意外的属性覆盖。

```javascript
const mySymbol = Symbol();
const person = {
  name: 'h7ml',
  age: 18,
  [mySymbol]: 'mySymbol',
};

console.log(person[mySymbol]); // mySymbol
```

### 2.3 全局 Symbol 注册表

为了确保 Symbol 的唯一性，ES6 引入了一个全局 Symbol 注册表。通过 Symbol.for(key) 方法，可以在全局范围内共享同一个 Symbol。

```javascript
const globalSymbol = Symbol.for('globalSymbol');

// 在其他地方通过相同的键检索该 Symbol
const retrievedSymbol = Symbol.for('globalSymbol');

console.log(globalSymbol === retrievedSymbol); // true
```

### 2.4 属性检索

Symbol 类型的值不能通过 Object.keys()、Object.getOwnPropertyNames() 检索，但是可以通过 Object.getOwnPropertySymbols() 方法检索。
如果需要检索对象的所有属性，可以使用 Reflect.ownKeys() 方法。

```javascript
const myObject = {
  [Symbol('property1')]: 'value1',
  [Symbol('property2')]: 'value2',
  regularProperty: 'regularValue'
};

const symbolProperties = Object.getOwnPropertySymbols(myObject);
console.log(symbolProperties); // [Symbol(property1), Symbol(property2)]
```

### 2.5 内置 Symbol 值

ES6 提供了如下内置的 Symbol 值，表示特定的意义。

- Symbol.hasInstance：当使用构造函数的 new 命令创建实例时，在构造函数中调用 Symbol.hasInstance 方法。
- Symbol.isConcatSpreadable：表示一个对象是否可以展开。
- Symbol.iterator：指向对象的默认遍历器方法。
- Symbol.match：当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。
- Symbol.replace：当执行 str.replace(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。
- Symbol.search：当执行 str.search(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。
- Symbol.species：创建派生对象时，会调用该属性。
- Symbol.split：当执行 str.split(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。
- Symbol.toPrimitive：当对象被转为原始类型的值时，会调用该属性，返回该方法的返回值。
- Symbol.toStringTag：对象的默认 toString 方法，会返回该对象的 Symbol.toStringTag 属性的值。
- Symbol.unscopables：当使用 with 语句时，该对象指明哪些属性会被 with 语句绑定。
- Symbol.asyncIterator：指向对象的默认异步遍历器方法。

## 3. Symbol 的应用场景

### 3.1 创建独一无二的常量

使用 Symbol 可以创建全局唯一的常量，避免命名冲突。

```javascript
const RED = Symbol('RED');
const BLUE = Symbol('BLUE');
const GREEN = Symbol('GREEN');
```

### 3.2 定义类的私有属性

在对象中使用 Symbol 作为属性键，可以模拟私有属性和方法的概念。

```javascript
const obj = {
  [Symbol('privateProperty')]: 'This is private',
  publicProperty: 'This is public',
  [Symbol('privateMethod')]() {
    console.log('Private method');
  },
  publicMethod() {
    console.log('Public method');
  }
};
```

### 3.3 防止属性被重写

当多个库或模块共同工作时，使用 Symbol 可以防止属性冲突。

```javascript
const myLibrary = {
  [Symbol('privateProperty')]: 'This is private',
  publicProperty: 'This is public',
  [Symbol('privateMethod')]() {
    console.log('Private method');
  },
  publicMethod() {
    console.log('Public method');
  }
};

const myModule = {
  [Symbol('privateProperty')]: 'This is private',
  publicProperty: 'This is public',
  [Symbol('privateMethod')]() {
    console.log('Private method');
  },
  publicMethod() {
    console.log('Public method');
  }
};
```

Symbol 类型的引入使得 JavaScript 变得更加灵活和强大。它为开发者提供了一种创建唯一值的方式，可以用于实现私有属性、常量和防止属性冲突等场景。了解并合理使用 Symbol 类型，将有助于提高代码的可维护性和健壮性。
