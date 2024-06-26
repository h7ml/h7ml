# JavaScript Number 数字对象-数据类型

```js
let intNum = 55; // 整数

// 八进制字面量，第一个数字必须是零（0），然后是相应的八进制数字（数值0~7）
let octalNum1 = 070; // 八进制的56
let octalNum2 = 079; // 无效的八进制值，当成79 处理
let octalNum3 = 08; // 无效的八进制值，当成8 处理

// 十六进制字面量，必须让真正的数值前缀0x（区分大小写），然后是十六进制数字（0~9 以及A~F）
let hexNum1 = 0xa; // 十六进制10
let hexNum2 = 0x1f; // 十六进制31
```

- 浮点值

科学记数法的格式跟一个大写或小写的字母 e，再加上一个要乘的 10 的多少次幂，浮点值的精确度最高可达 17 位小数

```js
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = 0.1; // 有效，但不推荐
let floatNum1 = 1; // 小数点后面没有数字，当成整数1 处理
let floatNum2 = 10.0; // 小数点后面是零，当成整数10 处理
let floatNum = 3.125e7; // 等于31250000
```

- 方法

```js
const num = 10
num.toString() // '10'
num.toString(2) // 2 进制转换

num.toFixed(2) // 保留几位小数，最大 20 位小数
num.toExponential(1) // 1.0e+1 科学计数法
const num1 = 99
num1.toPrecision(1) // 1e+2 向上舍入为 100
num1.toPrecision(2) // 99
num1.toPrecision(3) // 99.0
```

- NaN

分子是非 0 值，分母是有符号 0 或无符号 0，则会返回 Infinity 或-Infinity

```js
console.log(0 / 0) // NaN
console.log(-0 / +0) // NaN
console.log(5 / 0) // Infinity
console.log(5 / -0) // -Infinity
```

isNaN 首先会调用对象的 valueOf() 方法，然后再确定返回的值是否可以转换为数值。如果不能，再调用 toString() 方法，并测试其返回值

## Number.isFinite()

- 没有隐式的 Number() 类型转换，所有非数值都返回 false
- 检查一个数值是否为有限的（ finite ），即不是 Infinity

```js
Number.isFinite(1) // true
Number.isFinite(0.1) // true
Number.isFinite(Number.NaN) // false 不是有限的
```

## Number.isInteger()

- 判断一个数是不是整数

```js
Number.isInteger(0) // true
// JavaScript 内部，整数和浮点数采用的是同样的储存方法,因此 1 与 1.0 被视为相同的值
Number.isInteger(1) // true
Number.isInteger(1.0) // true
```

## 数值转换

- null，返回 0。
- undefined，返回 NaN。
- 字符串：
  - Number("1")返回 1，Number("123")返回 123，Number("011")返回 11
  - 浮点数同样忽略前面的 0
  - 16 进制转换为对应的 10 进制整数值
- 对象，调用 valueOf()方法，再执行上面的规则。如果是 NaN，则调用 toString()方法，再按照字符串的规则转换。

```js
const num1 = Number('Hello world!') // NaN
const num2 = Number('') // 0
const num3 = Number('000011') // 11
const num4 = Number(true) // 1
```

- parseInt()
  - 字符串最前面的空格会被忽略
  - 第一个字符不是数值、加号或减号，立即返回 NaN

```js
const num1 = Number.parseInt('1234blue') // 1234
const num2 = Number.parseInt('') // NaN
const num3 = Number.parseInt('0xA') // 10，解释为十六进制整数
const num4 = Number.parseInt(22.5) // 22
const num5 = Number.parseInt('70') // 70，解释为十进制值
const num6 = Number.parseInt('0xf') // 15，解释为十六进制整数
```

- parseInt()也接收第二个参数，指定进制数

```js
let num = parseInt('0xAF', 16); // 175
// 提供了十六进制参数，那么字符串前面的"0x"可以省掉：
let num1 = parseInt('AF', 16); // 175
let num1 = parseInt('10', 2); // 2，按二进制解析
let num2 = parseInt('10', 8); // 8，按八进制解析
let num3 = parseInt('10', 10); // 10，按十进制解析
```

- parseFloat 解析到一个无效的浮点数值字符为止
  - 始终忽略字符串开头的零
  - 十六进制数值始终会返回 0，因为 parseFloat() 只解析十进制值

```js
const num1 = Number.parseFloat('1234blue') // 1234，按整数解析
const num2 = Number.parseFloat('0xA') // 0
const num3 = Number.parseFloat('22.5') // 22.5
const num4 = Number.parseFloat('22.34.5') // 22.34
const num5 = Number.parseFloat('0908.5') // 908.5
const num6 = Number.parseFloat('3.125e7') // 31250000
```
