---
icon: javascript
order: 1
date: 2023-01-11
author: h7ml
category: javascript
tag: javascript
star: true
---

# JavaScript 判断、循环语句

## if

```js
if (i > 1)
  alert('yes')
else
  alert('no')
```

如果只有一条可以省略 {}，但容易导致错误，应该避免

```js
if (i > 1)
  alert('yes')
```

## do-while

- 语句最少执行一次

```js
let i = 0
do
  i += 2
while (i < 10)
```

## while

```js
let i = 0
while (i < 10)
  i += 2
```

## for

```js
let a = 0
for (let i = 0; a < 10; i++)
  a += 1
```

## for in

- 遍历数组/对象

```js
const arr = ['Saab', 'Volvo', 'BMW']

for (const x in arr)
  document.write(`${arr[x]}<br />`)
```

## for of

```js
const arr = [
  [1, 2],
  ['a', 'b'],
]
for (const [key, value] of arr)
  console.log(`${key},${value}`)

// 1,2
// a,b
```

- break;停止循环
- continue;停止这次循环

## with

- 改变代码块的作用域，查找变量会先找 obj 里面的
- 大量使用 with 会导致性能下降，不建议使用（因为修改了作用域链）

```js
with (obj) {
  // 代码块
}
```

## switch

```js
switch (i) {
  case '0':
    alert('1') // i为0时
    break // 退出

  default: // 默认执行
    alert('default')
}
```

## 关键字与保留字

ECMA-262 第 6 版规定的所有关键字如下：

`break` `do` `in` `typeof` `case` `else` `instanceof` `var` `catch` `export` `new` `void` `class` `extends` `return` `while` `const` `finally` `super` `with` `continue` `for` `switch` `yield` `debugger` `function` `this` `default` `if` `throw` `delete` `import` `try`

始终保留：`enum`

严格模式下保留：

`implements` `package` `public` `interface` `protected` `static` `let` `private`

模块代码中保留：`await`

这些词汇不能用作标识符，但现在还可以用作对象的属性名。一般来说最好不要用
