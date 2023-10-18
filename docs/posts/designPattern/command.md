---
title: 命令模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-03-03 09:27:19
---

命令模式主要应用在需要延迟执行请求、支持撤回的场景中，可能在文本编辑器中有应用，我目前没有使用过，这里就留坑了。

命令模式本质上就是将数据和操作封装为一个对象，实现操作的撤回、延迟等。

这里贴一下 `Youtube` 一个博主举的 [计算器例子](https://www.youtube.com/watch?v=GQzfF5EMD7o&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=6)。

首先是一个支持加减乘除的计算器：

```js
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(valueToAdd) {
    this.value = this.value + valueToAdd;
  }

  subtract(valueToSubtract) {
    this.value = this.value - valueToSubtract;
  }

  multiply(valueToMultiply) {
    this.value = this.value * valueToMultiply;
  }

  divide(valueToDivide) {
    this.value = this.value / valueToDivide;
  }
}

const calculator = new Calculator();
calculator.add(10);
console.log(calculator.value); // 10
calculator.divide(2);
console.log(calculator.value); // 5
```

如果需要给计算器增加撤回的功能，就可以使用命令模式了。

我们把每一步操作都封装为一个类作为命令对象，类中包含了操作数和操作方法，然后用一个数组记录所有的命令对象。

```js
class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }

  add(valueToAdd) {
    this.value = this.value + valueToAdd;
  }

  subtract(valueToSubtract) {
    this.value = this.value - valueToSubtract;
  }

  multiply(valueToMultiply) {
    this.value = this.value * valueToMultiply;
  }

  divide(valueToDivide) {
    this.value = this.value / valueToDivide;
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}

const calculator = new Calculator();

calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new MultiplyCommand(2));
console.log(calculator.value); // 20
calculator.undo();
console.log(calculator.value); // 10
```

# 总

命令模式的思想比较有意思，将数据和操作封装，实现上在 `js` 中很简单，我们甚至也不需要 `class` ，直接通过字面量对象传递也可以。

但实际开发中目前还没用到过，此处留坑。
