---
icon: javascript
order: 1
date: 2019-08-16
author: h7ml
title: JavaScript 高级程序设计读书笔记
category: javascript
tag: javascript
star: true
---

## 2. HTML 中的 JavaScript

### 2.1 元素

基本参数：

- async
- charset
- crossorigin
- defer
- integrity
- language
- type

```html
<script src="example.js" />
```

这种方式在 HTML 中不合法，应该采用

```html
<script src="http://www.somewhere.com/afile.js"></script>
```

#### 2.1.1 标签的放置

引用 js 时，应该将\<script>放置在最后，如下

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example HTML Page</title>
  </head>
  <body>
    <!-- content here -->
    <script src="example1.js"></script>
    <script src="example2.js"></script>
  </body>
</html>
```

#### 2.1.2 推迟的脚本

使用 defer 参数保证脚步在 DOMContentLoaded 事件之后进行加载。

```html
<script defer src="example1.js"></script>
```

但是并非所有浏览器支持 defer，所以最好还是将\<script>标签放在最后

#### 2.1.3 异步脚本

脚本加载顺序改变，但是都是在 DOMContentLoaded 事件之后进行加载。

```html
<script async src="example1.js"></script>
```

#### 2.1.4 动态脚本加载

为了统一动态脚本加载行为，需要设置 async 参数

```javascript
let script = document.createElement('script');
script.src = 'gibberish.js';
script.async = false;
document.head.appendChild(script);
```

但是这种设置会损害资源获取队列的优先级。解决方法

```html
<link rel="subresource" href="gibberish.js" />
```

#### 2.1.5XHTML 中的改变

在 XHTML 中(<)会被识别为标签的开始

- 一种方法是用(\&lt;)代替(<)；
- 另一种方法是使用 CDATA

```html
<script type="text/javascript">
  <![CDATA[
  function compare(a, b) { if (a < b) {
  console.log("A is less than B");
  }
    ]]>
</script>
```

但是并非所有 XHTML 解释器能够支持 CDATA，使用 js 注释解决

```javascript
<script type="text/javascript">
//<![CDATA[
function compare(a, b) { if (a < b) {
console.log("A is less than B");
} else if (a > b) { console.log("A is greater than B");
} else { console.log("A is equal yo B");
} }
//]]>
</script>
```

### 2.2 内联代码与外部文件

虽然可以将内联代码嵌入 HTML，但是最好还是使用外部文件的方式。需要注意三点

- 可维护性——js 代码与 HTML 分离，更好修理 BUG
- 缓存——如果两个页面加载同一个 js，仅需加载一次，意味着更快的页面加载速度
- 面向未来——XHTML 和 HTML 都可以使用

基于 SPDY/HTTP2 使用外部文件时，能够减少相同 js 的下载

### 2.3 文档模式

IE5.5 通过文档类型切换的使用，介绍了文档模式

- quirks mode：IE 变得像 IE5，通过省略文档开头的 doctype（使用所有）
- standard mode：更加标准

以下几种 doctype 使用时，使用 standard mode

```html
<!-- HTML 4.01 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!-- XHTML 1.0 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- HTML5 -->
<!DOCTYPE html>
```

- almost standard mode：这种模式具有许多标准特性，但不是严格。不同之处在于图片的放置

以下几种 doctype 使用时，使用 almost standard mode

```html
<!-- HTML 4.01 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- HTML 4.01 Frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!-- XHTML 1.0 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- XHTML 1.0 Frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

### 2.4THE \<NOSCRIPT> ELEMENT

\<noscript>用于显示两种情况

- 浏览区不支持脚本
- 浏览器脚本关闭了

例子如下

```html
<!DOCTYPE html>
<html>
  <head>
  <title>Example HTML Page</title>
  <script ""defer="defer" src="example1.js"></script> <script ""defer="defer" src="example2.js"></script> </head>
  <body>
  <noscript>
   <p>This page requires a JavaScript-enabled browser.</p> </noscript>
  </body>
</html>
```

## 3.语言基础

### 3.1 语法

#### 3.1.1 大小写敏感(Case-Sensitivity)

#### 3.1.2 Identifiers

- 第一个字符必须是字母，下划线或者$

**ECMAScript identifiers use camel case**，举例如下

firstSecond

myCar

doSomethingImportant

#### 3.1.3 注释

两种注释方式

// single line comment

/_This is a multi-line comment_/

#### 3.1.4 严格模式(Strict Mode)

- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;

- 消除代码运行的一些不安全之处，保证代码运行的安全；

- 提高编译器效率，增加运行速度；

- 为未来新版本的 Javascript 做好铺垫。

```javascript
'use strict'; //进入严格模式
```

#### 3.1.5 陈述(Statements)

- 使用分号

- 使用括号

```javascript
// preferred
if (test) {
  console.log(test);
}
```

### 3.2 关键字与保留字(Keywords and Reserved Words)

- Always reserved:
  - enum
- Reserved in strict mode:
  - implements interface let
  - package public protected static private
- Reserved in module code:
  - await

### 3.3 变量

#### 3.3.1 var 关键词

```javascript
var message = 'hi';
message = 100; // legal, but not recommended
```

##### 3.3.1.1 var 的声明域(Declaration Scope

###### )

移除 var 后变成全局变量

```javascript
function test() {
  var message = 'hi'; // local variable
}
test();
console.log(message); // error!

function test() {
  message = 'hi'; // global variable
}
test();
console.log(message); // "hi"
```

严格模式时无法定义名为*evel*或*arguments*

##### 3.3.1.2 var 声明提升(Declaration Hoisting)

运行以下代码

```javascript
function foo() {
  console.log(age);
  var age = 26;
}
foo(); // undefined
```

实际的运行顺序

```javascript
function foo() {
  var age;
  console.log(age);
  age = 26;
}
foo(); // undefined
```

#### 3.3.2 let 定义

- let 与 var 的区别在于，let 是 block scoped，而 var 是 function scoped

```javascript
if (true) {
  var name = 'Matt';
  console.log(name); // Matt
}
console.log(name); // Matt

if (true) {
  let age = 26;
  console.log(age); //26
}
console.log(age); // ReferenceError: age is not defined
```

- let 不允许多次定义

```javascript
var name;
var name;
let age;
let age; // SyntaxError; identifier 'age' has already been declared
```

##### 3.3.2.1 暂时死区（Temporal Dead Zone）

```javascript
// name is hoisted
console.log(name); // undefined
var name = 'Matt';

// age is not hoisted
console.log(age); //ReferenceError: age is not defined
let age = 26;
```

##### 3.3.2.2 全局声明

```javascript
var name = 'Matt';
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined
```

##### 3.3.2.3 条件声明

对于条件声明不使用 let

```javascript
if (typeof name !== 'undefined') {
  let name;
}
name = 'Matt';
// 'name' is restricted to the if {} block scope,
// so this assignment will act as a global assignment name = 'Matt';
```

#### 3.3.2 const 定义

声明后无法重定义

```javascript
const age = 26;
age = 36; // TypeError: assignment to a constant
```

#### 3.3.3 声明风格

- 不使用 var

使用 let 与 const 能够满足大部分使用场景

- 使用 const 胜于 let

在浏览器运行的过程中，保证某些变量不变

### 3.4 数据类型

- "**undefined**" if the value is undefined
- "**boolean**" if the value is a Boolean
- "**string**" if the value is a string
- "**number**" if the value is a number
- "**object**" if the value is an **object** (other than a function) or **null**
- "**function**" if the value is a function
- "**symbol**" if the value is a Symbol

#### 3.4.1 Undefined 类型

- 声明变量后未初始化
- 未声明的变量

```javascript
let message;
console.log(message == undefined); // true
console.log(typeof age); // "undefined"

if (message) {
  //undefined is falsy
  // This block will not execute
}
```

#### 3.4.2 Null 类型

null 值是一个空对象指针

```javascript
let car = null;
console.log(typeof car); // "object"
```

undefined 是 null 的一种派生

```javascript
console.log(null == undefined); // true
```

#### 3.4.3 Boolean 类型

| DATA TYPE | VALUES CONVERTED TO TRUE                | VALUES CONVERTED TO FALSE                             |
| :-------- | :-------------------------------------- | :---------------------------------------------------- |
| Boolean   | true                                    | false                                                 |
| String    | Any nonempty string                     | "" (empty string)                                     |
| Number    | Any nonzero number (including infinity) | 0, NaN (See the “NaN” section later in this chapter.) |
| Object    | Any object                              | null                                                  |
| Undefined | n/a                                     | undefined                                             |

#### 3.4.4 Number 类型

```javascript
let intNum = 55; // integer

let octalNum1 = 070; // octal for 56

let hexNum1 = 0xa; // hexadecimal for 10
```

不要测试某个特定的浮点值

```javascript
var a = 0.1,
  b = 0.2;
if (a + b == 0.3) {
  // avoid! console.log("You got 0.3.");
} // 0.1+0.2 = 0.30000000000000004
```

##### 3.4.4.1 值域

```javascript
var minNumber = Number.MIN_VALUE;
var maxNumber = Number.MAX_VALUE;

console.log(isFinite(minNumber + maxNumber)); // false
```

##### 3.4.4.2 NaN (_Not a Number_)

- NaN 与任何值都不相等,因此使用 isNaN()进行判断

```javascript
console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
```

##### 3.4.4.3 Number 转换

- Number()——所有数据类型
- parseInt()——string=》number

```javascript
let num1 = parseInt('1234blue'); // 1234

let num = parseInt('0xAF', 16);
let num1 = parseInt('AF', 16); // 175 十六进制转为十进制
let num2 = parseInt('AF'); // NaN
```

- parseFloat()——string=》number

#### 3.4.5 String 类型

三种表示方式(")(')(`)

```javascript
let firstName = 'John';
let lastName = 'Jacob';
let lastName = `Jingleheimerschmidt`;
```

##### 3.4.5.1 字符原意

- \xnn——十六进制表示
- \unnnn——unicode 字符

##### 3.4.5.2 自然字符

```javascript
let lang = 'Java';
lang = lang + 'Script'; //没效率，需要将原字符删除
```

##### 3.4.5.3 转换为字符串

```javascript
let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
```

##### 3.4.5.4 字面模版(Template Literals)

```javascript
let myMultiLineString = 'first line\nsecond line';
let myMultiLineTemplateLiteral = `first line second line`;
console.log(myMultiLineString === myMultiLinetemplateLiteral); // true
```

##### 3.4.5.5 修改(Interpolation)

```javascript
let value = 5;
let exponent = 'second'; // Formerly, interpolation was accomplished as follows:
let interpolatedString = value + ' to the ' + exponent + ' power is ' + value * value;

// The same thing accomplished with template literals:
let interpolatedTemplateLiteral = `${value} to the ${exponent} power is ${value * value}`;
```

##### 3.4.5.6 Template Literal Tag Functions

```javascript
let a = 6;
let b = 9;
function simpleTag(strings, ...expressions) {
  console.log(strings);
  for (const expression of expressions) {
    console.log(expression);
  }
  return 'foobar';
}
let taggedResult = simpleTag`${a} + ${b} = ${a + b}; `;
//[""," + "," = ",""]
// 6
// 9
// 15
```

#### 3.4.6 Symbol 类型

Symbol 类型创建一个独一无二的值。目的是为了保护独特的描述符，防止 propperty 冲突

- 无法与 new 联用

```javascript
let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor
```

##### 3.4.6.1 使用全局 Symbol 注册处(Using the Global Symbol Registry)

Symbol.for()检查是否存在相同 Symbol

```javascript
let fooGlobalSymbol = Symbol.for('foo');
console.log(typeof fooGlobalSymbol); // "object"

let globalSymbol = Symbol.for('foo');
console.log(localSymbol === globalSymbol); // false
```

##### 3.4.6.2Well-Known Symbols（先跳过）

#### 3.4.7 Object 类型

```javascript
let o = new Object();
```

后续章节细讲

### 3.5 操作符

#### 3.5.1 一元操作符（跳过）

#### 3.5.2 位操作符

- ~ NOT
- & AND
- | OR
- ^ XOR
- << Left Shift
- \>> Signed Right Shift
- \>>>Unsigned Right Shift

```javascript
let oldValue = 64; // equal to binary 1000000
let newValue = oldValue >>> 5; // equal to binary 10 which is decimal 2

let oldValue = -64; // equal to binary 11111111111111111111111111000000
let newValue = oldValue >>> 5; // equal to decimal 134217726
```

#### 3.5.3 布尔操作符

- ！逻辑非
- && 逻辑与
- || 逻辑或

#### 3.5.6 Multiolicative Operators

```
- *
- /
- %
```

#### 3.5.7 指数操作符

```javascript
console.log(Math.pow(3, 2); // 9
console.log(3 ** 2); // 9
```

#### 3.5.8 加法类运算符

```
- +
- -
```

#### 3.5.9 关系操作符(Relational Operators)

```javascript
let result = 'Brick' < 'alphabet'; // true

let result = '23' < 3; // false

let result1 = NaN < 3; // false
let result2 = NaN >= 3; // false
```

#### 3.5.10 相等操作符

| EXPRESSION        | VALUE |
| ----------------- | :---- |
| null == undefined | true  |
| "NaN" == NaN      | false |
| 5 == NaN          | false |
| NaN == NaN        | false |
| NaN != NaN        | true  |
| false == 0        | true  |
| true == 1         | true  |
| true == 2         | false |
| undefined == 0    | false |
| null == 0         | false |
| "5" == 5          | true  |

#### 3.5.11 条件操作符

```javascript
variable = boolean_expression ? true_value : false_value;
```

#### 3.5.12 赋值操作符(Assignment Operators)

- **Multiply/assign** (\*=)
- **Divide/assign** (/=)
- **Modulus/assign** (%=)
- **Add/assign** (+=)
- **Subtract/assign** (-=)
- **Left shift/assign** (<<=)
- **Signed right shift/assign** (>>=)
- **Unsigned right shift/assign** (>>>=)

#### 3.5.13 注释(Comma Operator)

```javascript
let num = (5, 1, 4, 8, 0); // num becomes 0
```

### 3.6 陈述(Statement)

- if-else
- do-while
- while
- for
- for-in

```javascript
var obj = { a: 1, b: 2, c: 3 };

for (var prop in obj) {
  console.log('obj.' + prop + ' = ' + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

- for-of

```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

- Labeled Statements

  ```javascript
  let num = 0;
  outermost: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i == 5 && j == 5) {
        continue outermost;
      }
      num++;
    }
  }
  console.log(num); // 95
  ```

  - with statement

  ```javascript
  let qs = location.search.substring(1);
  let hostName = location.hostname;
  let url = location.href;
  //rewritten using the with
  with (location) {
    let qs = search.substring(1);
    let hostName = hostname;
    let url = href;
  }
  ```

### 3.7 函数

## 4. 变量、域与内存

### 4.1 原始值与引用值(PRIMITIVE AND REFERENCE VALUES)

- 原始值——simple atomic pieces of data,
- 引用值——made up of multiple values.

#### 4.1.1 动态属性(Dynamic Properties)

```javascript
let person = new Object();
person.name = 'Nicholas';
console.log(person.name); // "Nicholas"

let name = 'Nicholas';
name.age = 27;
console.log(name.age); // undefined
```

#### 4.1.2 拷贝值(Copying Values)

- primitive value——深拷贝
- reference value——浅拷贝

#### 4.1.5 参数传递(Argument Passing)

参数传递的是拷贝值，基本类型传递拷贝的值，引用类型传递地址值

```javascript
function addTen(num) {
  num += 10;
  return num;
}
let count = 20;
let result = addTen(count);
console.log(count); // 20 - no change
console.log(result); // 30

function setName(obj) {
  obj.name = 'Nicholas';
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"
```

#### 4.1.6 确定类型

- typeof——基本类型

- instanceof——引用类型

### 4.2 执行上下文与值域(跳过)

### 4.3 垃圾回收(GARBAGE COLLECTION)

#### 4.3.1 标记-清除算法 Mark-and-Sweep 机制

这个算法把"对象是否不再需要"简化定义为"对象是否可以获得"。这个算法假定设置一个叫做根 **root** 的对象（在 Javascript 里，根是全局对象）. 定期的, 垃圾回收器将从根开始, 找所有从根开始引用的对象, 然后找这些对象引用的对象, 从根开始,垃圾回收器将找到所有可以获得的对象和所有不能获得的对象.

从 2012 年起, 所有现代浏览器都使用了标记-清除内存回收算法. 所有对 JavaScript 垃圾回收算法的改进都是基于标记-清除算法的改进.

#### 4.3.2 引用计数算法 (Reference Counting)

此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”. 如果没有引用指向该对象, 对象将被垃圾回收机制回收.

```javascript
let arr = [1, 2, 3, 4];
arr = null; // [1,2,3,4]这时没有被引用, 会被自动回收
```

## 5 基本引用类型(Basic Reference Types)(快速过)

> Reference types are also sometimes called _object definitions_ because they describe the properties and methods that objects should have.

### 5.1 Date 类型

Date 类型记录的是 1970 年一月一号为分界线的时间

- 时间格式的转换 Date.parse()
- 协调时间时

```javascript
// May 5, 2005 at 5:55:55 PM GMT
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
```

#### 5.1.1 继承工具

- toLocaleString() 有 AM/PM
- toString() 带有时区，24 小时制

#### 5.1.2 时间格式工具

- toDateString() 时分秒
- toTimeString() 时期
- toLocaleDateString()
- toLocaleTimeString()
- toUTCString()

### 5.2 Regexp 类型

- g: global mode
- i: case-insensitive
- m: multiline mode
- u: Unicode mode
- y: sticky mode

## 6 引用类型 (Collection Reference Types)

### 6.1 Object 类型

- 两种创建方式

```javascript
let person = new Object(); //use new()
person.name = 'Nicholas';
person.age = 29;

let person = {
  //use object literal notation
  name: 'Nicholas', //"name":"Nicholas" is the same
  age: 29,
};

let person = {}; // same as new Object()
person.name = 'Nicholas';
person.age = 29;
```

### 6.2 Array 类型

#### 6.2.1 创建 Array

- 两种最基本的方式

```javascript
/*the first way*/
let colors = new Array();
let colors = new Array(20); // creates an array with an initial length value of 20
let colors = new Array('red', 'blue', 'green'); // creates an array with three string values

/*the second way []*/
let colors = ['red', 'blue', 'green']; // Creates an array with three strings
let names = []; // Creates an empty array
```

- 两种附加形式（Array.from）

```javascript
alert(Array.from('Matt')); // ["M", "a", "t", "t"]

alert(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4] convert the list of arguments into an array.
```

#### 6.2.2 Array Holes

逗号省略

```javascript
const options = [, , , , ,]; // Creates an array with 5 items alert(options.length); // 5
alert(options); // [,,,,,]
```

#### 6.2.3 Indexing into Arrays

index 从 0 开始

```javascript
let colors = ['red', 'blue', 'green']; // creates an array with three strings
colors.length = 2;
alert(colors[2]); // undefined
```

#### 6.2.4 Detecting Arrays

在大多数情况下，instanceof Array 就足够了。然而，由于 instanceof Array 在 iframes 和 window 之间不能正常工作，Array.isArray()将是更为可靠的解决方案。

不过，一定要检查浏览器的兼容性。如果您需要支持 IE8 或更低版本，Array.isArray()将无法工作(请参阅 Mozilla 的文档)。

```javascript
if (Array.isArray(value)) {
  // do something on the array
}
```

#### 6.2.5 迭代工具(Iterator Methods)

```javascript
const a = ['foo', 'bar', 'baz', 'qux'];
// Because these methods return iterators, you can funnel their contents // into array instances using Array.from()
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());
alert(aKeys); // [0, 1, 2, 3]
alert(aValues); // ["foo", "bar", "baz", "qux"]
alert(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]
```

#### 6.2.6 复制与填充(Copy and Fill Method)

- fill()

```javascript
const zeroes = [0, 0, 0, 0, 0];

// Fill the entire array with 5
zeroes.fill(5);
alert(zeroes); // [5, 5, 5, 5, 5]
zeroes.fill(0); // reset

// Fill all indices >=3 with 6 zeroes.fill(6, 3);
alert(zeroes); // [0, 0, 0, 6, 6]
zeroes.fill(0); // reset

// Fill all indices >= 1 and < 3 with 7
zeroes.fill(7, 1, 3);
alert(zeroes); // [0, 7, 7, 0, 0];
zeroes.fill(0); // reset

// Fill all indices >=1 and < 4 with 8 // (-4 + zeroes.length = 1)
// (-1 + zeroes.length = 4)
zeroes.fill(8, -4, -1);
alert(zeroes); // [0, 8, 8, 8, 0];
```

- copyWithin()

```javascript
let ints,
  reset = () => (ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
reset();
// Copy the contents of ints beginning at index 0 and ending at index 3 to values // beginning at index 4.
ints.copyWithin(4, 0, 3);
alert(ints); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
reset();
```

#### 6.2.7 转换工具

```javascript
let colors = ['red', 'blue', 'green']; // creates an array with three strings
alert(colors.toString()); // red,blue,green alert(colors.valueOf()); // red,blue,green alert(colors); // red,blue,green
```

其中 toLocaleString()会根据你机器的本地环境来返回字符串，它和 toString()返回的值在不同的本地环境下使用的符号可能变化；

#### 6.2.8 栈工具

- pop()
- push()

#### 6.2.9 队列工具

- shift()——获取头部

- unshift()——加入尾部

#### 6.2.10 Recordering Methods

- reverse()
- sort()

```javascript
let values = [0, 1, 5, 10, 15];
values.sort((a, b) => a < b ? a > b ? -1 : 0);
alert(values); // 15,10,5,1,0
```

#### 6.2.11 操作工具(Manipulation Methods)

- concat()

```javascript
let colors = ['red', 'green', 'blue'];
let colors2 = colors.concat('yellow', ['black', 'brown']);
alert(colors); // ["red", "green","blue"]
alert(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]

let colors = ['red', 'green', 'blue'];
colors[Symbol.isConcatSpreadable] = false;
let colors2 = colors.concat('yellow', ['black', 'brown']);
alert(colors2); // ["red", "green", "blue", "yellow", ["black", "brown"],]
```

- slice()

```javascript
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
alert(colors2); // green,blue,yellow,purple
alert(colors3); // green,blue,yellow
```

- splice()

```javascript
let colors = ['red', 'green', 'blue'];
let removed = colors.splice(0, 1); // remove the first item
alert(colors); // green,blue
alert(removed); // red - one item array

removed = colors.splice(1, 0, 'yellow', 'orange'); // insert two items at position 1
alert(colors); // green,yellow,orange,blue
alert(removed); // empty array
```

#### 6.2.12 查找定位工具(Search and Location Methods)

- 严格相等(Strict Equivalence)

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
alert(numbers.indexOf(4)); // 3
alert(numbers.indexOf(4, 4)); // 5 从位置4查找4
alert(numbers.lastIndexOf(4)); // 5
alert(numbers.includes(4)); // true
```

- Predicate Search

```javascript
const people = [
  {
    name: 'Matt',
    age: 27,
  },
  {
    name: 'Nicholas',
    age: 29,
  },
];
alert(people.find((element, index, array) => element.age < 28)); // {name: "Matt", age: 27}
alert(people.findIndex((element, index, array) => element.age < 28)); // 0
```

#### 6.2.13 Iterative Methods

- every()
- filter()
- forEach()
- map()
- some()

### 6.3 类型化数组(TYPED ARRAYS)

JavaScript 类型化数组是一种类似数组的对象，并提供了一种用于访问原始二进制数据的机制。

Web 应用程序变得越来越强大，尤其一些新增加的功能例如：音频视频编辑，访问 WebSockets 的原始数据等，很明显有些时候如果使用 JavaScript 代码可以快速方便地通过类型化数组来操作原始的二进制数据将会非常有帮助。

#### 6.3.1 使用 ArrayBuffers

```javascript
const buf1 = new ArrayBuffer(16);
const buf2 = buf1.slice(4, 12);
alert(buf2.byteLength); // 8
```

#### 6.3.2 数据视图(DataViews)

- DataView 是为了文件 IO 与网络 IO 设计
- DataView 必须必须由已经存在的 ArrayBuffer 创建

```javascript
const buf = new ArrayBuffer(16);
// DataView default to use the entire ArrayBuffer
const fullDataView = new DataView(buf);
alert(fullDataView.byteOffset); // 0
alert(fullDataView.byteLength); // 16
alert(fullDataView.buffer === buf); // true

// Constructor takes an optional byte offset and byte length
// byteOffset=0 begins the view at the start of the buffer
// byteLength=8 restricts the view to the first 8 bytes
const firstHalfDataView = new DataView(buf, 0, 8);
alert(firstHalfDataView.byteOffset); // 0
alert(firstHalfDataView.byteLength); // 8
alert(firstHalfDataView.buffer === buf); // true

// DataView will use the remainder of the buffer unless specified
// byteOffset=8 begins the view at the 9th byte of the buffer
// byteLength default is the remainder of the buffer
const secondHalfDataView = new DataView(buf, 8);
alert(secondHalfDataView.byteOffset); // 8
alert(secondHalfDataView.byteLength); // 8
alert(secondHalfDataView.buffer === buf); // true
```

##### 6.3.2.1ElementTyp

| ELEMENTTYPE | BYTES | DESCRIPTION                    | C EQUIVALENT   | RANGE OF VALUES                 |
| ----------- | ----- | ------------------------------ | -------------- | ------------------------------- |
| Int8        | 1     | 8-bit signed integer           | signed char    | –128 to 127                     |
| Uint8       | 1     | 8-bit unsigned integer         | unsigned char  | 0 to 255                        |
| Int16       | 2     | 16-bit signed integer          | short          | –32768 to 32767                 |
| Uint16      | 2     | 16-bit unsigned integer        | unsigned short | 0 to 65535                      |
| Int32       | 4     | 32-bit signed integer          | int            | –2,147,483,648 to 2,147,483,647 |
| Uint32      | 4     | 32-bit unsigned integer        | unsigned int   | 0 to 4,294,967,295              |
| Float32     | 4     | 32-bit IEEE-754 floating point | float          | –3.4E+38 to +3.4E+38            |
| Float64     | 8     | 64-bit IEEE-754 floating point | double         | –1.7E+308 to +1.7E+308          |

- 初始化为 0

```javascript
// Allocate two bytes of memory and declare a DataView
const buf = new ArrayBuffer(2);
const view = new DataView(buf);
// Demonstrate that the entire buffer is indeed all zeroes
// Check the first and second byte
alert(view.getInt8(0)); // 0
alert(view.getInt8(1)); // 0
// Check the entire buffer
alert(view.getInt16(0)); // 0

// Set the entire buffer to ones
// 255 in binary is 11111111 (2^8 – 1)
view.setUint8(0, 255);
```

##### 6.3.2.2 大端与小端

```javascript
// Allocate two bytes of memory and declare a DataView
const buf = new ArrayBuffer(2);
const view = new DataView(buf);

// Fill the buffer so that the first bit and last bit are 1
view.setUint8(0, 0x80); // Sets leftmost bit to 1
view.setUint8(1, 0x01); // Sets rightmost bit to 1

// Buffer contents (spaced for readability):
// 0x8 0x0 0x0 0x1
// 1000 0000 0000 0001

// Read a big-endian Uint16
// 0x80 is the high byte, 0x01 is the low byte
// 0x8001 = 2^15 + 2^0 = 32768 + 1 = 32769
alert(view.getUint16(0)); // 32769

// Read a little-endian Uint16
// 0x01 is the high byte, 0x80 is the low byte
// 0x0180 = 2^8 + 2^7 = 256 + 128 = 384
alert(view.getUint16(0, true)); // 384
```

##### 6.3.2.3 Corner Cases

只有在拥有足够缓存空间时，DataView 完成读或写，否则提示 RangeError

```javascript
const buf = new ArrayBuffer(6);
const view = new DataView(buf);

// Attempt to get a value past the end of the buffer
view.getInt32(8); // RangeError
```

#### 6.3.3 类型化数组(Typed Arrays)

Typed array 是另一种*ArrayBuffer*的形式

以下函数不再支持

- concat()
- pop()
- push()
- shif()
- unshift()
- splice()

新添两个函数

- set()
- subarray()

### 6.4 Map 类型

#### 6.4.1 基本借口

- 创建 Map

```javascript
const m = new Map();

// Initialize map with nested arrays
const m1 = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3'],
]);
alert(m1.size); // 3
```

- 删除、添加与查询

```javascript
const m = new Map();
alert(m.has('firstName')); // false
alert(m.get('firstName ')); // undefined
alert(m.size); // 0

m.delete('firstName'); // deletes only this key/value pair
```

- Map 可是使用 javasctipt 的数据结构作为键值

```javascript
const m = new Map();
const functionKey = function () {};
const symbolKey = Symbol();
const objectKey = new Object();
m.set(functionKey, 'functionValue');
m.set(symbolKey, 'symbolValue');
m.set(objectKey, 'objectValue');
```

#### 6.4.2 顺序与迭代

- 迭代

```javascript
const m = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3'],
]);
alert(m.entries === m[Symbol.iterator]); // true

for (let pair of m.entries()) {
  alert(pair);
}
// [key1,val1]
// [key2,val2]
// [key3,val3]

for (let pair of m[Symbol.iterator]()) {
  alert(pair);
}
// [key1,val1]
// [key2,val2]
// [key3,val3]
```

#### 6.4.3 Obiects 与 Maps 之间选择

- 内存

  Map 大约会比 Object 多占用 50%

- 插入效率

  Map 比 Object 快一些

- 查找效率

  大型项目 Object 快

- 删除效率

  Map 删除相比于 Object 非常快

### 6.5 WeakMap 类型

#### 6.5.1 基本接口

基本和 map 一致

#### 6.5.2 Weak 键值

> The “**weak**” designation stems from the fact that keys in a WeakMap are “weakly held,” meaning they are not counted as formal references that would otherwise prevent garbage collection.

原生的 WeakMap 持有的是每个键对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行。原生 WeakMap 的结构是特殊且有效的，其用于映射的 key 只有在其没有被回收时才是有效的。

基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。

#### 6.5.3 不可迭代键值

WeakMap 的 key 是不可枚举的 (没有方法能给出所有的 key)。如果 key 是可枚举的话，其列表将会受垃圾回收机制的影响，从而得到不确定的结果。因此，如果你想要这种类型对象的 key 值的列表，你应该使用 Map

### 6.6 Set 类型

#### 6.6.1 基本接口

```javascript
const s = new Set();
alert(s.has('Matt')); // false
alert(s.size); // 0

s.add('Matt').add('Frisbie');

s.delete('Matt');
```

- 使用 SameValueZero 比较

### 6.7 WeakSet 类型

## 8 Objects, Classes, and Object-Oriented Programming

### 8.1 理解 Objects

- 两种创建模式

```javascript
let person = new Object();
person.name = 'Nicholas';
person.age = 29;
person.job = 'Software Engineer';
person.sayName = function () {
  console.log(this.name);
};

let person = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName() {
    console.log(this.name);
  },
};
```

#### 8.1.1 属性的类型(Types of Properties)

##### 8.1.1.1 数据属性(Data Properties)

数据属性包含一个单独的数据地址，由这个地址进行读写操作

数据属性拥有四个特性(attribute)

- [[Configurable]]——描述符是否可以改变
- [[Enumerable]]——是否可以迭代
- [[Writable]]——是否可以修改
- [[Value]]——默认为 undefined

```javascript
let person = {};
Object.defineProperty(person, 'name', {
  writable: false,
  value: 'Nicholas',
});
console.log(person.name); // "Nicholas"
person.name = 'Greg';
console.log(person.name); // "Nicholas"
```

##### 8.1.1.2 访问器属性

- [[Configurable]]
- [[Enumerable]]
- [[Get]]——属性读取时的返回值
- [[Set]]

```javascript
// Define object with pseudo-private member 'year_'
// and public member 'edition'
let book = {
  year_: 2017,
  edition: 1,
};
Object.defineProperty(book, 'year', {
  get() {
    return this.year_;
  },
  set(newValue) {
    if (newValue > 2017) {
      this.year_ = newValue;
      this.edition += newValue - 2017;
    }
  },
});
book.year = 2018;
console.log(book.edition); // 2
```

#### 8.1.2 定义多个属性

```javascript
let book = {};
Object.defineProperties(book, {
  year_: {
    value: 2017,
  },
  edition: {
    value: 1,
  },
  year: {
    get() {
      return this.year_;
    },
    set(newValue) {
      if (newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017;
      }
    },
  },
});
```

#### 8.1.3 阅读属性值(Reading Property Attributes)

- Object. getOwnPropertyDescriptor()查看属性描述符

#### 8.1.4 合并 Objects

- Object.assign()

```javascript
let dest, src, result;
/**
 * Simple copy */
dest = {};
src = { id: 'src' };
result = Object.assign(dest, src);
// Object.assign mutates the destination object
// and also returns that object after exiting.
console.log(dest === result); // true
console.log(dest !== src); // true
console.log(result); // { id: src}
console.log(dest); // { id: src}
```

#### 8.1.5 Object Identity and Equality

- Object.is()

```javascript
console.log(Object.is(true, 1)); // false
console.log(Object.is({}, {})); // false
console.log(Object.is('2', 2)); // false

// Correct 0, -0, +0 equivalence/nonequivalence:
console.log(Object.is(+0, -0)); // false
console.log(Object.is(+0, 0)); // true
console.log(Object.is(-0, 0)); // false

// Correct NaN equivalence:
console.log(Object.is(NaN, NaN)); // true
```

#### 8.1.6 Enhanced Object Syntax

##### 8.1.6.1 属性值简写(Property Value Shorthand)

ES6 中的新特性，键值与属性值相同时，可以简写

```javascript
let name = 'Matt';
let person = { name };
console.log(person); // { name: 'Matt' }
```

##### 8.1.6.2 计算型属性值

```javascript
const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';
let uniqueToken = 0;
function getUniqueKey(key) {
  return '${key}_${uniqueToken++}';
}
let person = {
  [getUniqueKey(nameKey)]: 'Matt',
  [getUniqueKey(ageKey)]: 27,
  [getUniqueKey(jobKey)]: 'Software engineer',
};
console.log(person); // { name_0: 'Matt', age_1: 27, job_2: 'Software engineer' }
```

##### 8.1.6.3 简洁工具语法

```javascript
let person = {
  sayName: function (name) {
    console.log(`My name is ${name}`);
  },
};

let person = {
  sayName(name) {
    console.log(`My name is ${name}`);
  },
};
```

与以上两种特性结合

```javascript
const methodKey = 'sayName';
let person = {
  [methodKey](name) {
    console.log('My name is ${name}');
  },
};
person.sayName('Matt'); // My name is Matt
```

#### 8.1.7 Object 结构

```javascript
// Without object destructuring
let person = {
  name: 'Matt',
  age: 27,
};
let personName = person.name,
  personAge = person.age;
console.log(personName); // Matt
console.log(personAge); // 27

// With object destructuring
let person = {
  name: 'Matt',
  age: 27,
};
let { name: personName, age: personAge } = person;
console.log(personName); // Matt
console.log(personAge); // 27
```

##### 8.1.7.1 嵌套解构

```javascript
let person = {
  name: 'Matt',
  age: 27,
  job: {
    title: 'Software engineer',
  },
};
let personCopy = {};
({ name: personCopy.name, age: personCopy.age, job: personCopy.job } = person);

// Because an object reference was assigned into personCopy, changing a property
// inside the person.job object will be propagated to personCopy:
person.job.title = 'Hacker';

console.log(person);
// { name: 'Matt', age: 27, job: { title: 'Hacker' } }
```

- 不完全解构

```javascript
let person = {
  name: 'Matt',
  age: 27,
};
let personName, personBar, personAge;
try {
  // person.foo is undefined, so this will throw an error
  ({
    name: personName,
    foo: { bar: personBar },
    age: personAge,
  } = person);
} catch (e) {}

console.log(personName, personBar, personAge);
// Matt, undefined, undefined
```

- 参数上下文匹配

```javascript
let person = { name: 'Matt', age: 27 };

function printPerson(foo, { name, age }, bar) {
  console.log(arguments);
  console.log(name, age);
}
function printPerson2(foo, { name: personName, age: personAge }, bar) {
  console.log(arguments);
  console.log(personName, personAge);
}

printPerson('1st', person, '2nd');
// ['1st', { name: 'Matt', age: 27 }, '2nd'] // 'Matt', 27

printPerson2('1st', person, '2nd');
// ['1st', { name: 'Matt', age: 27 }, '2nd'] // 'Matt', 27
```

### 8.2 Object 创建

#### 8.2.1 工厂方法(The Factory Pattern)

工厂方式以用于软件工程抽象特定 object 的设计模式而闻名

```javascript
function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

let person1 = createPerson('Nicholas', 29, 'Software Engineer');
let person2 = createPerson('Greg', 27, 'Doctor');
```

#### 8.2.2 函数构建模式(The Function Constructor Pattern)

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}
let person1 = new Person('Nicholas', 29, 'Software Engineer');
let person2 = new Person('Greg', 27, 'Doctor');
person1.sayName(); // Nicholas
person2.sayName(); // Greg
```

##### 8.2.2.1 构造函数(Constructors as Functions)

```javascript
// use as a constructor
let person = new Person('Nicholas', 29, 'Software Engineer');
person.sayName(); // "Nicholas"

// call as a function
Person('Greg', 27, 'Doctor'); // adds to window
window.sayName(); // "Greg"

// call in the scope of another object let o = new Object();
Person.call(o, 'Kristen', 25, 'Nurse');
o.sayName(); // "Kristen"
```

##### 8.2.2.2 构造函数的问题

构造函数在 ECMASScript 中同样是 Object

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}
function sayName() {
  console.log(this.name);
}
let person1 = new Person('Nicholas', 29, 'Software Engineer');
let person2 = new Person('Greg', 27, 'Doctor');
person1.sayName(); // Nicholas
person2.sayName(); // Greg
```

#### 8.2.3 原型模式

```javascript
let Person = function () {};
Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
  console.log(this.name);
};
let person1 = new Person();
person1.sayName(); // "Nicholas"

let person2 = new Person();
person2.sayName(); // "Nicholas"

console.log(person1.sayName == person2.sayName); // true
```

##### 8.2.3.1 原型工作原理

对象具有属性\_\_proto\_\_，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型。不像每个对象都有\_\_proto\_\_属性来标识自己所继承的原型，只有函数才有 prototype 属性。

- `hasOwnProperty()` ignores inherited properties

```javascript
'constructor' in obj; // true
'__proto__' in obj; // true
'hasOwnProperty' in obj; // true

obj.hasOwnProperty('constructor'); // false
obj.hasOwnProperty('__proto__'); // false
obj.hasOwnProperty('hasOwnProperty'); // false
```

### 8.3 继承

js 中只有 Implementation inheritance ，因为 Interface inheritance is not possible in ECMAScript because functions do not have signatures.

#### 8.3.1 原型链

```javascript
function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
};
function SubType() {
  this.subproperty = false;
}
// inherit from SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
let instance = new SubType();
console.log(instance.getSuperValue()); // true
```

##### 8.3.1.1 默认原型

所有引用类型默认由 Object 继承，因此拥有 Object.prototype 的函数

##### 8.3.1.2 原型与实例的关系

```javascript
console.log(instance instanceof Object); // true
console.log(instance instanceof SuperType); // true
console.log(instance instanceof SubType); // true

console.log(Object.prototype.isPrototypeOf(instance)); // true
console.log(SuperType.prototype.isPrototypeOf(instance)); // true
console.log(SubType.prototype.isPrototypeOf(instance)); // true
```

##### 8.3.1.2 Working with Methods

函数重载

```javascript
function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
};
function SubType() {
  this.subproperty = false;
}

// inherit from SuperType
SubType.prototype = new SuperType();

// new method
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

// override existing method
SubType.prototype.getSuperValue = function () {
  return false;
};

let instance = new SubType();
console.log(instance.getSuperValue()); // false
```

#### 8.3.2 借用构造函数(Constructor Stealing)

- 避免了引用类型的属性被所有实例共享

```javascript
function SuperType() {
  this.colors = ['red', 'blue', 'green'];
}
function SubType() {
  // inherit from SuperType
  SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); // "red,blue,green,black"

let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green"
```

- 可以在 Child 中向 Parent 传参

```javascript
function SuperType(name) {
  this.name = name;
}
function SubType() {
  // inherit from SuperType passing in an argument
  SuperType.call(this, 'Nicholas');

  // instance property
  this.age = 29;
}

let instance = new SubType();
console.log(instance.name); // "Nicholas";
console.log(instance.age); // 29
```

缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法。

#### 8.3.3 组合继承

原型链继承和经典继承双剑合璧。

```javascript
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);

  this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```

#### 8.3.4 原型继承

```javascript
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van'],
};
let anotherPerson = object(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Rob');

let yetAnotherPerson = object(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');

console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"
```

就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。

缺点：

包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

#### 8.3.5 寄生继承

创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。

```javascript
function createObj(o) {
  var clone = Object.create(o);
  clone.sayName = function () {
    console.log('hi');
  };
  return clone;
}
```

缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

#### 8.3.6 寄生组合继承

为了方便大家阅读，在这里重复一下组合继承的代码：

```javascript
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

console.log(child1);
```

组合继承最大的缺点是会调用两次父构造函数。

一次是设置子类型实例的原型的时候：

```javascript
Child.prototype = new Parent();
```

一次在创建子类型实例的时候：

```javascript
var child1 = new Child('kevin', '18');
```

回想下 new 的模拟实现，其实在这句中，我们会执行：

```javascript
Parent.call(this, name);
```

在这里，我们又会调用了一次 Parent 构造函数。

所以，在这个例子中，如果我们打印 child1 对象，我们会发现 Child.prototype 和 child1 都有一个属性为`colors`，属性值为`['red', 'blue', 'green']`。

那么我们该如何精益求精，避免这一次重复调用呢？

如果我们不使用 Child.prototype = new Parent() ，而是间接的让 Child.prototype 访问到 Parent.prototype 呢？

看看如何实现：

```javascript
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();

var child1 = new Child('kevin', '18');

console.log(child1);
```

最后我们封装一下这个继承方法：

```javascript
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```

引用《JavaScript 高级程序设计》中对寄生组合式继承的夸赞就是：

这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。

### 8.4 Class

#### 8.4.1 class 定义基础

```javascript
// class declaration
class Person {}
// class expression
const Animal = class {};
```

- function 声明挂起，class 声明不会

```javascript
console.log(FunctionExpression); // undefined
var FunctionExpression = function () {};
console.log(FunctionExpression); // function() {}

console.log(FunctionDeclaration); // FunctionDeclaration() {}
function FunctionDeclaration() {}
console.log(FunctionDeclaration); // FunctionDeclaration() {}

console.log(ClassExpression); // undefined
var ClassExpression = class {};
console.log(ClassExpression); // class {}

console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined
class ClassDeclaration {}
console.log(ClassDeclaration); // class ClassDeclaration {}
```

##### 8.4.1.1 class 构成

```javascript
// Valid empty class definition
class Foo {}

// Valid class definition with constructor
class Bar {
  constructor() {}
}

// Valid class definition with getter
class Baz {
  get myBaz() {}
}

// Valid class definition with static method
class Qux {
  static myQux() {}
}
```

#### 8.4.2 class 构造函数

##### 8.4.2.1 Instantiation

1. a new object 创建在内存
2. [[Prototype]]指针被分配到构造函数原型
3. 构造函数的 this 被分配到 new object
4. 构造函数执行
5. 如果构造函数返回 object，就返回 object；否则被生成的 new object 返回

```javascript
class Animal {}
class Person {
  constructor() {
    console.log('person ctor');
  }
}
class Vegetable {
  constructor() {
    this.color = 'orange';
  }
}

let a = new Animal();
let p = new Person(); // person ctor

let v = new Vegetable();
console.log(v.color); // orange
```

##### 8.4.2.2 将 class 看作特殊函数

```javascript
class Person {}
console.log(Person); // class Person {}
console.log(typeof Person); // function
```

- class 标识符拥有 prototype 属性，属性拥有 constructor 属性又引用 class 本身

```javascript
class Person {}
console.log(Person.prototype); // { constructor: f() }
console.log(Person === Person.prototype.constructor); // true
```

- 构造函数与 class 的关系

```javascript
class Person {}
let p1 = new Person();
console.log(p1.constructor === Person); // true
console.log(p1 instanceof Person); // true
console.log(p1 instanceof Person.constructor); // false

let p2 = new Person.constructor();
console.log(p2.constructor === Person); // false
console.log(p2 instanceof Person); // false
console.log(p2 instanceof Person.constructor); // true
```

#### 8.4.3 实例，原型与 class 成员

##### 8.4.3.1 示例成员(Instance Members)

```javascript
class Person {
  constructor() {
    // For this example, define a string with object wrapper // as to check object equality between instances below
    this.name = new String('Jack');
    this.sayName = () => console.log(this.name);
    this.nicknames = ['Jake', 'J-Dog'];
  }
}
let p1 = new Person(),
  p2 = new Person();

p1.sayName(); // Jack
p2.sayName(); // Jack

console.log(p1.name === p2.name);
console.log(p1.sayName === p2.sayName);
console.log(p1.nicknames === p2.nicknames); // false

p1.name = p1.nicknames[0];
p2.name = p2.nicknames[1];

p1.sayName(); // Jake
p2.sayName(); // J-Dog
```

##### 8.4.3.2 原型与访问器

- primitives and objects 不可以直接加入到 class 内的原型

```javascript
class Person {
  name: 'Jake';
}
// Uncaught SyntaxError: Unexpected token :
```

- get set

```javascript
class Person {
  set name(newName) {
    this.name_ = newName;
  }
  get name() {
    return this.name_;
  }
}
let p = new Person();
p.name = 'Jake';
console.log(p.name); // Jake
```

##### 8.4.3.3 静态 class 方法与访问器

```javascript
class Person {
  constructor() {
// Everything added to 'this' will exist on each individual instance
    this.locate = () => console.log('instance', this); }
// Defined on the class prototype object locate() {
  console.log('prototype', this); }
// Defined on the class
  static locate() {
    console.log('class', this);
  }
}

let p = new Person();

p.locate(); // instance, Person {}
Person.prototype.locate(); // prototype, {constructor: ... }
Person.locate(); // class, class Person {}

```

##### 8.4.3.4 无函数原型与 class 成员

```javascript
class Person {
  sayName() {
    console.log('${Person.greeting} ${this.name}');
  }
}
// Define data member on class
Person.greeting = 'My name is';

// Define data member on prototype
Person.prototype.name = 'Jake';

let p = new Person();
p.sayName(); // My name is Jake
```

##### 8.4.3.5 迭代与生成

```javascript
class Person {
  constructor() {
    this.nicknames = ['Jack', 'Jake', 'J-Dog'];
  }
  *[Symbol.iterator]() {
    yield* this.nicknames.entries();
  }
}
let p = new Person();
for (let [idx, nickname] of p) {
  console.log(nickname);
}
// Jack // Jake // J-Dog
```

#### 8.4.4 继承

##### 8.4.4.1 继承基础

```javascript
class Vehicle {}

// Inherit from class
class Bus extends Vehicle {}

let b = new Bus();
console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true

function Person() {}

// Inherit from function constructor
class Engineer extends Person {}

let e = new Engineer();
console.log(e instanceof Engineer); // true
console.log(e instanceof Person); // true
```

##### 8.4.4.2 构造函数、Homeobjects 与 super()

- super()用于子类的构造函数中或者静态方法中

```javascript
class Vehicle {
  constructor() {
    this.hasEngine = true;
  }
}

class Bus extends Vehicle {
  constructor() {
    // Cannot reference 'this' before super(), will throw ReferenceError
    super(); // same as super.constructor()
    console.log(this instanceof Vehicle); // true
    console.log(this); // Bus { hasEngine: true }
  }
}

new Bus();
```

##### 8.4.4.3 抽象基类(Abstract Base Classes)

```javascript
// Abstract base class
class Vehicle {
  constructor() {
    console.log(new.target);
    if (new.target === Vehicle) {
      throw new Error('Vehicle cannot be directly instantiated');
    }
  }
}

// Derived class
class Bus extends Vehicle {}

new Bus(); // class Bus {}
new Vehicle(); // class Vehicle {}
// Error: Vehicle cannot be directly instantiated
```

##### 8.4.4.4 由已经建类型继承(Inheriting from Built-in Types)

```javascript
class SuperArray extends Array {
  shuffle() {
    // Fisher-Yates shuffle
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
  }
}

let a = new SuperArray(1, 2, 3, 4, 5);

console.log(a instanceof Array); // true
console.log(a instanceof SuperArray); // true

console.log(a); // [1, 2, 3, 4, 5]
a.shuffle();
console.log(a); // [3, 1, 4, 5, 2]
```

##### 8.4.4.5 类掺合(Class Mixins)

## 10 函数

function 是 Object 类型，属于 Function 的实例。因此函数名仅仅是指向 function objects 的指针，对于函数本身不是必要的。

```javascript
function sum(num1, num2) {
  return num1 + num2;
}

let sum = function (num1, num2) {
  return num1 + num2;
};

//arrow function
let sum = (num1, num2) => {
  return num1 + num2;
};

//use the Function consrtuctor
let sum = new Function('num1', 'num2', 'return num1 + num2'); // not recommended
```

### 10.1 箭头函数(Arrow Function)

- 当一个参数时箭头函数不需要括号

```javascript
// Both are valid
let double = (x) => {
  return 2 * x;
};
let triple = (x) => {
  return 3 * x;
};

// Zero parameters require an empty pair of parentheses
let getRandom = () => {
  return Math.random();
};
```

- 只有一行代码，可省略花括号

```javascript
// Both are valid and will return the value
let double = (x) => {
  return 2 * x;
};
let triple = (x) => 3 * x;
```

### 10.2 函数名

- 函数名只是指向函数的指针，可以有很多指向该函数的指针

### 10.3 理解 Argument

- argument 内在表示为 array，因此函数不关心传入参数的数量

```javascript
function sayHi(name, message) {
  console.log('Hello ' + name + ', ' + message);
}

//rewritten version
function sayHi() {
  console.log('Hello ' + arguments[0] + ', ' + arguments[1]);
}
```

- argument 可与 named argument 结合使用

```javascript
function doAdd(num1, num2) {
  if (arguments.length === 1) {
    console.log(num1 + 10);
  } else if (arguments.length === 2) {
    console.log(arguments[0] + num2);
  }
}
```

#### 10.3.1 箭头函数中的 arguments

- arguments 只可通过 name token 使用

```javascript
let bar = () => {
  console.log(arguments[0]);
};
bar(5); // ReferenceError: arguments is not defined

//correct version
function foo() {
  let bar = () => {
    console.log(arguments[0]); // 5
  };
  bar();
}
foo(5);
```

### 10.4 不重载(No Overloading)

```javascript
let addSomeNumber = function (num) {
  return num + 100;
};
addSomeNumber = function (num) {
  return num + 200;
};
let result = addSomeNumber(100); // 300
```

### 10.5 初始参数值

```javascript
function makeKing(name = 'Henry') {
  return `King ${name} VIII`;
}
console.log(makeKing('Louis')); // 'King Louis VIII'
console.log(makeKing()); // 'King Henry VIII'
```

- 使用初始化参数时，argument 不可以反应初始化参数

```javascript
function makeKing(name = 'Henry') {
  name = 'Louis';
  return `King ${arguments[0]}`;
}
console.log(makeKing()); // 'King undefined'
console.log(makeKing('Louis')); //  'King Louis'
```

#### 10.5.1 参数初始化范围与暂时死区(Default Parameter Scope and Temporal Dead Zone)

- 暂时性死区

```javascript
// Error
function makeKing(name = numerals, numerals = 'VIII') {
  return `King ${name} ${numerals}`;
}

// Error
function makeKing(name = 'Henry', numerals = defaultNumeral) {
  let defaultNumeral = 'VIII';
  return `King ${name} ${numerals}`;
}
```

### 10.6 参数传递与剩余参数(SPREAD ARGUMENTS AND REST PARAMETERS)

#### 10.6.1 参数传递

- 分离出 array 中的变量

```javascript
let values = [1, 2, 3, 4];
function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }
  return sum;
}
console.log(getSum.apply(null, values)); // 10
console.log(getSum(...values)); // 10
```

#### 10.6.2 剩余参数

- rest parameter 只能使用在在最后

```javascript
// Error
function getProduct(...values, lastValue) {}
// OK
function ignoreFirst(firstValue, ...values) {
console.log(values); }
```

### 10.7 函数声明与函数表达

```javascript
// Error
console.log(sum(10, 10));
let sum = function (num1, num2) {
  return num1 + num2;
};

// OK
console.log(sum(10, 10));
var sum = function (num1, num2) {
  return num1 + num2;
};
```

### 10.8 函数与值

- 从函数返回函数

```javascript
function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

let data = [
  { name: 'Zachary', age: 28 },
  { name: 'Nicholas', age: 29 },
];

data.sort(createComparisonFunction('name'));
console.log(data[0].name); // Nicholas

data.sort(createComparisonFunction('age'));
console.log(data[0].name); // Zachary
```

### 10.9 函数内部

#### 10.9.1 this

- function 的上下文是动态的
- 箭头函数的上下文在定义是确定

```javascript
function King() {
  this.royaltyName = 'Henry';
  // 'this' will be the King instance
  setTimeout(() => console.log(this.royaltyName), 1000);
}

function Queen() {
  this.royaltyName = 'Elizabeth';

  // 'this' will be the window object
  setTimeout(function () {
    console.log(this.royaltyName);
  }, 1000);
}

new King(); // Henry
new Queen(); // undefined
```

#### 10.9.2 caller

该特性是非标准的，请尽量不要在生产环境中使用它！

#### 10.9.3 new.target

new.target 属性允许你检测函数或构造方法是否是通过*new*运算符被调用的。在通过 new 运算符被初始化的函数或构造方法中，new.target 返回一个指向构造方法或函数的引用。在普通的函数调用中，new.target 的值是 undefined。

### 10.10 函数属性与工具(FUNCTION PROPERTIES AND METHODS)

- apply()

apply 方法传入两个参数：一个是作为函数上下文的对象，另外一个是作为函数参数所组成的数组。

- call()

call 方法第一个参数也是作为函数上下文的对象，但是后面传入的是一个参数列表，而不是单个数组。

### 10.11 函数表达

- function 声明

```javascript
function functionName(arg0, arg1, arg2) {
  // function body
}
```

这种方式有一个关键特性 ——_function declaration hoisting_

```javascript
sayHi();
function sayHi() {
  console.log('Hi!');
}
//This example doesn’t throw an error because the function declaration is read first before the code begins to execute.
```

- function expression

```javascript
let functionName = function(arg0, arg1, arg2) {
  // function body
};

sayHi(); // Error! function doesn't exist yet let sayHi =
function() {
  console.log("Hi!");
};
```

对于*function declaration hoisting*这个特性

```javascript
// Never do this!
if (condition) {
  function sayHi() {
    console.log('Hi!');
  }
} else {
  function sayHi() {
    console.log('Yo!');
  }
}
//大多数浏览器忽视condition的值，只承认第二次定义。但是firefox会依照condition的值

// OK
let sayHi;
if (condition) {
  sayHi = function () {
    console.log('Hi!');
  };
} else {
  sayHi = function () {
    console.log('Yo!');
  };
}
```

### 10.12 递归

```javascript
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1); // strct mode 下无法使用
  }
}
```

### 10.13 尾调用优化

**尾调用**是指一个函数里的最后一个动作是返回一个函数的调用结果的情形，即最后一步新调用的返回值直接被当前函数的返回结果。

"**尾调用优化**"（Tail call optimization），即只保留内层函数的调用记录。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用记录只有一项，这将大大节省内存。

举个例子

```javascript
function outerFunction() {
  return innerFunction(); // tail call
}
```

- 在 ES6 优化之前
  1. 到达 outerFunction 函数主体，第一栈帧压入中
  2. 执行 outerFunction 主体，到达 return
  3. 到达 innerFunction 函数主体，第二栈帧压入中
  4. 执行 innerFunction 主体，返回值被估计
  5. 返回值传递给 outerFunction
  6. 栈压出
- 在 ES6 优化后
  1. 到达 outerFunction 函数主体，第一栈帧压入中
  2. 执行 outerFunction 主体，到达 return
  3. 由于 innnerFunction 的返回值也是 outerFunction 的返回值，引擎识别出 first stack frame 可以被安全压出
  4. outerFunction 栈帧压出
  5. 执行到 innerFunction，栈帧压入
  6. 执行 innerFunction 主体，返回值被估计
  7. innerFunction 栈帧压出

两者明显的差别在于第一个执行会引起一个多余的栈帧

ES6 尾调用优化的核心在于调用记录只有一项

#### 10.13.1 尾调用优化的条件

- 代码在 strct mode 下执行
- 返回值是调用函数
- 尾调用之后没有其他执行
- 尾函数不是闭包

```javascript
"use strict";
// No optimization: tail call is not returned function
outerFunction() {
  innerFunction();
}

// No optimization: tail call is not directly returned function
outerFunction() {
  let innerFunctionResult = innerFunction();
  return innerFunctionResult;
}
// No optimization: tail call must be cast as a string after return function
outerFunction() {
  return innerFunction().toString();
}
// No optimization: tail call is a closure function
outerFunction() {
  let foo = 'bar';
  function innerFunction() { return foo; }
  return innerFunction();
}
```

#### 10.13.2 尾调用优化代码

```javascript
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n – 1) + fib(n – 2);
}

// use tail call
"use strict";
// base case
function fib(n) {
  return fibImpl(0, 1, n);
}
// recursive case
function fibImpl(a, b, n) {
  if (n === 0) { return a;
}
  return fibImpl(b, a + b, n - 1);
}
```

### 10.14 闭包(CLOSURES)

匿名函数与闭包两者经常被混淆

闭包就是能够读取其他函数内部变量的函数。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

#### 10.14.1 The this object

在这个上下文（执行环境）中匿名函数并没有绑定到任何一个对象中，意味着 this 指向 window（除非这个上下文（执行环境）是在严格模式下执行的，而严格模式下该 this 指向 undefined）

```javascript
window.identity = 'The Window';
let object = {
  identity: 'My Object',
  getIdentityFunc() {
    return function () {
      return this.identity;
    };
  },
};
console.log(object.getIdentityFunc()()); // 'The Window'
```

```javascript
window.identity = 'The Window';
let object = {
  identity: 'My Object',
  getIdentityFunc() {
    let that = this;
    return function () {
      return that.identity;
    };
  },
};
console.log(object.getIdentityFunc()()); // 'My Object'
```

#### 10.14.2 内存泄漏

```javascript
function assignHandler() {
  let element = document.getElementById('someElement');
  element.onclick = () => console.log(element.id);
}
```

只要匿名函数存在，element 至少为 1

```javascript
function assignHandler() {
  let element = document.getElementById('someElement');
  let id = element.id;
  element.onclick = () => console.log(id);
  element = null;
}
```

### 10.15 立刻调用函数表达(IMMEDIATELY INVOKED FUNCTION EXPRESSIONS)

### 10.16 模块模式

模块模式是为单例模式添加私有变量和私有方法，并减少全局变量的使用
