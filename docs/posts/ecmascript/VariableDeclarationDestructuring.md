# JavaScript ES6 let、cont、解构

## let 和 const

1. 遇到 {} 就形成作用域
2. 同一作用域不能重复声明变量或函数 [如：let 声明过不能用 const 和 var 声明相同名字]
3. 没有变量提升
4. const 必须初始化赋值，不能被修改，而 let 声明的变量不用
5. const 定义的对象或者数组，其实是可变的。

- 可以修改添加属性

```js
const car = { color: 'white' }
car.color = 'red' // 修改属性:
car.owner = 'Johnson' // 添加属性
```

- 不能赋值

```js
const car = {}
car = {} // 错误
```

数组同理

6. 全局作用域 var 属于 window 对象。let 不属于 window 对象。
7. let 有暂时性死区、要先声明再使用。

## 解构

[模式] = [数组];

{模式} = {对象};

- 完全解构
- 不完全解构 [,可以被忽略 为赋值成功为 undefined ]
- 嵌套
- 默认值 , undefined 不会被赋值,null 可以被赋值

数组解构

```js
const [, [x, y], m = 88, ...z] = [2, [3, 4], undefined, 1, 2] // m 为 88
```

1. , 会忽略
2. [] 可以嵌套
3. undefined 不会赋值上去， m = 88 默认值，null 会被赋值
4. ...z 剩余运算符 收集对象/数组/值 或 展开数组/对象/值

```js
const [x, ...arr] = [1, 2, 3] // arr = [2,3]
const { a, ...obj } = { a: 'aa', b: 'bb', c: 'cc' } // obj = {b : "bb" , "c" : "cc"}
```

- 字符串

```js
const [a, b, c] = 'hel' // 'h' 'e' 'l'
```

- 对象

```js
// 剩余运算符
const { a, ...obj } = { a: 10, c: 30, d: 40 } // 10,{c: 30, d: 40}
```

- 解构默认值

```js
let { a = 10, b = 5 } = { a: 3 }; // a = 3; b = 5;

({ a } = { a: '1' }) // 变量已经被声明需要用括
```

- 对象 = 数组

```js
const { 0: first, [arr.length - 1]: last } = [1, 2, 3, 4, 5, 6, 7]

console.log(first) // 输出1
console.log(last) // 输出7
```

### 运用

```js
var [x, y] = [10, 20]; // 交换值
[x, y] = [y, x]

// 函数可以返回多个值
var [x, y, z] = show()
function show() {
  return ['结果1', '结果2', '结果3']
}
```

- 设置默认值，可以改变传入参数的顺序

```js
function showSelf({ name, age = 18 }) {
  // 可以
  console.log(`我叫${name}今年${age}`) // 我叫aa 今年18
}
showSelf({ name: 'aa' })

// 取出数组中的值
const { 0: first, 3: last } = [10, 20, 30] // first等于10 last是30
```
