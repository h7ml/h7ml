---
icon: javascript
order: 1
date: 2023-01-11
author: h7ml
category: javascript
tag: javascript
star: true
---

# JavaScript 数值转换

| 数据类型  | 转换为 true 的值 | 转换为 false 的值 |
| :-------: | :--------------: | :---------------: |
|  Boolean  |       True       |       False       |
|  String   |    非空字符串    |        ''         |
|  Number   |    非 0 数字     |     0 和 NaN      |
|  Object   |     任何对象     |       null        |
| Undefined |  n/a（不适用）   |     Undefined     |

## isNaN

- 不能被 number 转换为数字 ----> true
- 能被 number 转换为数字 ----> false

```js
isNaN(Number.NaN) // true
isNaN('blue') // true (不能被转换为数字)
isNaN(10) // false
isNaN('10') // false (10可以被转换成数值10)
isNaN(true) // false(可以被转换成1)
```

isNaN 首先会调用对象的 valueOf() 方法，然后再确定返回的值是否可以转换为数值。如果不能，再调用 toString() 方法，并测试其返回值

## isFinite

- 除 NaN 与 Infinity 都返回 true

```js
isFinite(Number.NaN) // false
isFinite(Number.POSITIVE_INFINITY) // false
```

## Number

- 转换为为数值 无法转换 ---> NaN（不是一个数字）

```js
Number('hello'); // NaN
Number('0011'); // 11
Number(''); // 0
Number(true); // 1

let intNum = 55; // 整数

// 八进制第一个数字必须是零（0），然后是相应的八进制数字（数值0~7）
let octalNum1 = 070; // 八进制的56
let octalNum2 = 079; // 无效的八进制值，当成79 处理
let octalNum3 = 08; // 无效的八进制值，当成8 处理

// 十六进制字面量，必须让真正的数值前缀0x（区分大小写），然后是十六进制数字（0~9 以及A~F）
let hexNum1 = 0xa; // 十六进制10
let hexNum2 = 0x1f; // 十六进制31
```

## parseInt

- 转换为整数
  - 参数 1：要转换的变量
  - 参数 2：以什么进制来转换这个数值，默认 10 进制，0 也是 10 进制

```js
Number.parseInt('234blue') // 234
Number.parseInt('blue234') // NaN
Number.parseInt('') // NaN
Number.parseInt('44.5') // 44
Number.parseInt('070') // 56（8进制）
Number.parseInt('0xf') // 15（16进制）
Number.parseInt('070', 10) // 后面告诉浏览器这是10进制
```

## parseFloat

- 转换为小数，只解析 10 进制，没有小数点或小数点后面都是 0 会返回整数

```js
Number.parseFloat('1234blue') // 1234 整数
Number.parseFloat('0xA') // 0
Number.parseFloat('22.54.5') // 22.54
```

## toString

- 转换为字符串 不能转换 null 和 undefined

```js
11.toString() // '11' 字符串
true.toString() // 'true' 字符串
toString() // 是对象下的方法，所以不能使用
```

## String

- 转型函数 能转换 null 和 undefined

```js
String(null) // "null
String(undefined) // "undefined"
11 += ""; // "11" 字符串
```

- +'' 拼接也可以转换为 string
