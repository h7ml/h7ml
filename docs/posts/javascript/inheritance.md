---
icon: javascript
order: 3
date: 2019-09-16
author: h7ml
title: JavaScript 原型与继承
category: javascript
tag: javascript
star: true
---

简单讲讲 js 的继承，也是 js 的原型链问题的实际应用。

## 原型

原型和原型链都是来源于对象而服务于对象的概念：

JavaScript 中一切引用类型都是对象，对象就是属性的集合。

Array 类型、Function 类型、Object 类型、Date 类型、RegExp 类型等都是引用类型。

## 原型与原型链

每一个对象从被创建开始就和另一个对象关联，从另一个对象上继承其属性，这个另一个对象就是原型。

当访问一个对象的属性时，先在对象的本身找，找不到就去对象的原型上找，如果还是找不到，就去对象的原型的原型上找，如此继续，直到找到为止。如果在最顶层的原型对象也没有找到，就返回`undefined`。这条由对象及其原型组成的链就叫做原型链。

### 原型的意义

- 原型链存在的意义就是继承：访问对象属性时，在对象本身找不到，就在原型链上一层一层找。就是一个对象可以访问其他对象的属性。
- 继承存在的意义就是属性共享：一是代码重用，字面意思；二是可扩展，不同对象可能继承相同的属性，也可以定义只属于自己的属性。

### 访问原型链

`__proto__`属性虽然在 ECMAScript 6 语言规范中标准化，但是不推荐被使用，现在更推荐使用 `Object.getPrototypeOf`，

```js
Object.getPrototypeOf(person) === person.__proto__
```

- 模拟原型链的查找

```js
function getProperty(obj, propName) {
  if (obj.hasOwnProperty(propName))
    return obj[propName]
  else if (obj.__proto__ !== null)
    return getProperty(obj.__proto__, propName)
  else
    return undefined
}
```

### 原型链示意图

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/GS5mqO.png)

从上图我们可以看出

- 引用类型都是对象，每个对象都有原型对象。
- 对象都是由构造函数创建，对象的`__proto__`属性指向其原型对象，构造函数的`prototype`属性指向其创建的对象实例的原型对象，所以对象的`__proto__`属性等于创建它的构造函数的`prototype`属性。
- 所有通过字面量表示法创建的普通对象的构造函数为 Object
- 所有原型对象都是普通对象，构造函数为 Object
- 所有函数的构造函数是 Function
- Object.prototype 没有原型对象

### 简单总结

原型链就是多个对象通过 `__proto__` 的方式连接了起来的一个链表结构。

- `Object` 是所有对象的父节点，所有对象都可以通过 `__proto__` 找到它
- `Function` 是所有函数的父节点，所有函数都可以通过 `__proto__` 找到它
- 函数的 prototype 是一个对象
- 对象的 `__proto__` 属性指向原型, `__proto__` 将对象和原型连接起来组成了原型链

## 创建对象

在理解对象继承之前得先弄明白创建对象这回事儿。

### 工厂模式

```js
function createCar(color, passengers, brand) {
  const car = new Object()
  car.color = color
  car.passengers = passengers
  car.brand = brand
  car.printBrand = function () {
    console.log(this.brand)
  }
  return car
}

const car = createCar('red', ['a', 'b'], 'benz')
```

工厂模式很好理解，实例化一个对象，在把传入的参数放入该对象，再返回。

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/BUOPMK.png)

缺点：无法进行对象识别。由于返回的对象都是由 Object 对象实例化出来的，但是开发过程中，需要创建很多种对象，肯定会有进行对象识别的需求，工厂模式显然无法完成我们这样的诉求。我们继续探索。

### 构造函数模式

```js
function Car(color, passengers, brand) {
  this.color = color
  this.passengers = passengers
  this.brand = brand
  this.printBrand = function () {
    console.log(this.brand)
  }
}
const car1 = new Car('red', ['a', 'b'], 'benz')
const car2 = new Car('black', ['c', 'd'], 'BMW')

console.log(car1 instanceof Object) // true
console.log(car1 instanceof Car) // true
console.log(car2 instanceof Object) // true
console.log(car2 instanceof Car) // true
```

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/9P66Ik.png)

从打印中可以看到 `car1` 与 `car` 的区别。

构造函数模式能够很好的使用 `instanceof` 进行对象的识别，`Object` 对象是所有对象的顶层对象类，所有的对象都会继承他。对对象进行操作的各类方法就存放在 Object 对象里面。`function`实际上也是一个对象，从`typeof` 方法中可以体现出来

缺点：但是无法解决引用类型的创建问题，我们每次对 Car 对象进行实例化的时候，都需要对 printBrand 方法进行创建，无法复用，浪费内存。要解决只能把他放到全局作用域。但是在全局作用域中定义的函数一般来说只能被某个对象调用，这会让全局作用域名不副实。并且也会失去封装性，我们来想象一下，如果该对象中有很多方法，那会让全局作用域充满了单独拎出来的方法，让代码可读性变差。

### instanceof 原理

instanceof 主要用来判断对象是否属于某构造函数

- 利用原型链，不停向上查找
- 利用 `__proto__` 访问实例原型

```js
function myInstanceOf(left, right) {
  const prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left == undefined || left == null)
      return false
    if (left == prototype)
      return true

    left = left.__proto__
  }
}
```

### 原型模式

```js
function Car() {}
car.prototype.color = 'red'
car.prototype.passengers = ['a', 'b', 'c']
car.prototype.brand = 'benz'
car.prototype.printBrand = function () {
  console.log(this.brand)
}

const car1 = new Car()
const car2 = new Car()
car1.color = 'blue'
car1.passengers.push('d')
console.log(car1.brand) // ["a","b","c","d"]
console.log(car2.brand) // ["a","b","c","d"]
console.log(car1.color) // "bule"
console.log(car2.color) // "red"
```

这个模式利用了对象的原型,将基本参数挂载在原型上面。

缺点：省去了初始化参数，这一点有好有坏。最大的问题是对引用类型值的共享，car1 和 car2 实例在实例化以后还会与 Car 类存在关系。如果对其赋值基本类型值的话，会在实例化的对象当中创建，并且调用时会首先在实例化对象中寻找。而对引用类型值进行操作的时候，会直接在原型对象的引用类型值上进行操作，所以会在所有实例中共享。

### 组合构造函数

```js
function Car(color, brand) {
  this.color = color
  this.brand = brand
  this.passengers = ['a', 'b', 'c']
}
Car.prototype = {
  constructor: Car,
  printBrand() {
    console.log(this.brand)
  },
}
const car1 = new Car('red', 'benz')
const car2 = new Car('blue', 'BMW')
car1.color = 'blue'
car1.passengers('d')
console.log(car1.brand) // ["a","b","c"]
console.log(car2.brand) // ["a","b","c","d"]
```

利用原型自定义构造函数，每个实例都会存在一份实例的副本，同时利用原型方法共享的特性，最大程度节省了内存，也提供了向构造函数中传递参数的功能。为最佳实践。

### 创建对象总结

- 我们在使用工厂模式的时候，发现了对象识别的问题，于是使用构造函数模式去解决这个问题。
- 在使用构造函数时，发现了引用类型值创建的问题，无法对其复用。于是使用了原型模式。
- 在原型模式中，引用类型值共享的问题又出现了。于是组合构造函数模式
- 组合构造函数模式中，结合构造函数模式和对引用类型操作的良好处理和原型模式对方法的共享，达到了最佳方案。

## 继承

### 原型链继承

```js
function OldCar() {
  this.color = 'red'
  this.passengers = ['a', 'b', 'c']
}
OldCar.prototype.getOldColor = function () {
  return this.color
}
function NewCar() {
  this.color = 'blue'
}
NewCar.prototype = new OldCar()

const car = new NewCar()
const car2 = new OldCar()
console.log(car.getOldColor()) // "blue"
console.log(car.passengers) // [ 'a', 'b', 'c' ]
console.log(car2.getOldColor()) // "red"
```

原型链继承通俗易懂，利用原型链将两个类串起来。

缺点

- 要新增原型中属性或方法，必须要先 new 一个实例, 函数无法复用，造成内存的浪费。
- 无法多继承
- 创建子类实例时，无法向父类构造函数传参

### 借用构造函数

```js
function OldCar(name = 'default name') {
  this.passengers = ['a', 'b', 'c']
  this.name = name
}
function NewCar(name) {
  OldCar.call(this, name)
}
```

基本思路就是在子类的构造函数的内部调用超类的构造函数。因为函数只是在特定的环境中执行代码的对象。借用构造函数的方式可以解决引用类型的问题。使用 call()和 apply()方法，在子类中调用超类。这样每个实例都会有自己的引用类型的副本了。

缺点：和构造函数创建对象一致的问题，方法都得在构造函数中定义，导致函数无法复用，造成内存的浪费。

### 组合继承

```js
function OldCar(brand) {
  this.brand = brand
  this.passengers = ['a', 'b', 'c']
}
OldCar.prototype.getBrand = function () {
  return this.brand
}
function NewCar(name, color) {
  OldCar.call(this, name) // 第一次调用
  this.color = color
}
NewCar.prototype = new OldCar() // 第二次调用
NewCar.prototype.constructor = NewCar // 增强
NewCar.prototype.getColor = function () {
  return this.color
}
```

组合继承集借用构造函数方法和原型链继承两者之长，复用了方法，也解决了引用类型的问题。

缺点：需要调用两次超类的构造函数，第一次是`OldCar.call(this,name)`,第二次是`new OldCar()`。下一步我们需要解决的是超类的两次调用问题。

```js
function A(){}

A.prototype.name = 'py';
A.prototype.age = 12;

<!--等价于-->
A.prototype = {
    name: 'py',
    age: 12
}
A.prototype.constructor = A

```

上面的例子中，上半部分是最基本的对原型的赋值，而下班部分的对原型的赋值 A 的原型的构造函数会变成 Object（先 new Object 然后再赋值参数），所以需要显式的去增强构造函数。

### 寄生组合继承

为了解决组合继承的痛点，出现了寄生组合继承。

```js
function OldCar(brand) {
  this.brand = brand
  this.passengers = ['a', 'b', 'c']
}
OldCar.prototype.getBrand = function () {
  return this.brand
}
function NewCar(name, color) {
  OldCar.call(this, name)
  this.color = color
}

// 继承开始
const middleObj = Object.create(OldCar.prototype)
middleObj.constructor = NewCar
NewCar.prototype = middleObj
// 继承结束

NewCar.prototype.getColor = function () {
  return this.color
}
```

```js
function createObj(obj){
    function Car();
    Car.prototype = obj;
    return new Car();
}
Object.create() 等价于 crateObj()，相当于对传入的对象进行了一次浅复制。
```

那么，我们来看看继承的过程中发生了什么。先对超类的原型进行一次浅复制。然后将中间对象的构造函数替换为普通类。为什么要进行这一步？因为对超类的原型进行浅复制以后，中间对象的构造函数变成了 Object，需要对该对象进行增强处理。最后将普通类的原型指向中间变量，这样就只需要调用一次超类就可以完成继承。

### 继承的总结

- 在原型链继承中，我们又遇到了老对手引用类型值的共享问题。
- 在借用构造函数进行继承中，方法共享问题，这个老对手又出现了。
- 按照创建对象的经验，组合两者优点的组合继承将成为最佳方式，但是我们却发现了超类会被调用两次的问题。
- 为了解决超类被调用两次的问题，寄生组合继承成为了最佳方案。
