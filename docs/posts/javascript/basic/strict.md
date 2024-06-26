---
icon: javascript
order: 1
date: 2023-01-11
author: h7ml
category: javascript
tag: javascript
star: true
---

# JavaScript 严格模式及运算问题

## 严格模式

```js
'use strict'
// 函数体 告诉支持 JavaScript 引擎切换到严格模式
// 这样写即使低版本的浏览器不支持严格模式也不会报错，他只是个字符串
```

1. 全局变量声明必须加 var。 必须先声明再使用。
2. 函数内重名属性
3. arguments 对象不被允许修改，只会是传进来的数值
4. fn.caller，arguments.callee 不可用
5. 函数本身不能使用 this 关键字
6. eval() 里存在作用域
7. 新增保留字：implements，interface，let，package，private，protected，public，static，yield。

## 运算的问题

```js
// 8 进制  以 0 开头 代表 8 机制
var n4 = 070; // 56
// 16 进制  以 0x 开头  代表 16 进制
var n5 = 0x1f; // 31

// NaN Not a Number 不是一个数字
console.log(typeof NaN); // number
console.log('我' + 10); // '我 10'
console.log('wo' - 20); // NaN
console.log(0 / 20); // 0
console.log(20 / 0); // infinity 无限

// 浮点运算的问题
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.07 * 100); // 7.00000000001
```

## JavaScript 在 HTML 中的引入

script 这个元素是由网景公司创造出来，最早在 Netscape Navigator 2 中实现。

- charset：src 属性指定的代码字符集。大多数浏览器无视它的值。
- crossorigin：配置 CORS（跨域）设置，"anonymous"请求不设置凭据标志，"use-credentials"设置凭据标志，跨域请求会包含凭据。
- defer：脚本延迟到文档被解析和显示之后再执行! defer 属性只适用于外部脚本文件
- async：表示立即下载脚本，页面其他操作不影响! async 属性只适用于外部脚本文件
- integrity：验证子资源完整性。
- language：废弃。表示代码块中的脚本语言
- src：要执行的代码的外部文件
- type：代替 language，表示代码块中的 MIME 类型。默认"text/javascript"，实际上"text/javascript"和"text/ecmascript"已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给 type 属性这个值有可能导致脚本被忽略。**如果这个值是 module，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。**

- 不能再任何地方出现`</script>`，浏览器遇到`</script>`时会认为这是结束的标签
- 解决方法 通过转义字符 \ 解决这个问题

```js
alert('</script>')
```

### 异步脚本

```html
<!-- 标记 async 的脚本不保证加载的先后顺序，第二个脚本可能会在第一个先执行  -->
<script src="js1.js" async></script>
<script src="js2.js" async></script>
```

### 推迟脚本

```html
<!-- 两个js标签会在浏览器解析到结束的</html>标签后才会执行 -->
<script defer src="example1.js"></script>
<script defer src="example2.js"></script>
```

## 动态脚本

```js
const script = document.createElement('script')
script.src = 'gibberish.js'
document.head.appendChild(script)
// 元素添加到DOM之前不会发送请求，默认异步加载（相当于添加了async属性）
```

统一动态脚本加载行为（不一定都支持 async 属性）：

```js{3}
let script = document.createElement('script');
script.src = 'gibberish.js';
script.async = false;
document.head.appendChild(script);
```

- 让浏览器预先加载 js 文件，js 动态加载 js 脚本浏览器并不知道，想要浏览器知道这个文件的存在可以在文档头部添加：

```html
<link rel="preload" href="gibberish.js" />
<!-- 这会提高浏览器获取资源队列的优先级 -->
```
