---
icon: question
description: 前端物语|如何编写JavaScript引擎？
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>前端物语|如何编写JavaScript引擎？
order: 3
star: 3
date: 2022-10-07
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
category:
  - engine
  - javascript
tag:
  - engine
  - javascript
shortTitle: 前端物语|如何编写JavaScript引擎？
isOriginal: false
head:
  - - meta
    - name: keywords
      content: 前端物语|如何编写JavaScript引擎？
---

# 如何编写 JavaScript 引擎？

JavaScript 引擎是解释和执行 JavaScript 代码的核心组件。

## 词法分析器

词法分析器是编译器中的一个重要组成部分，其作用是将源程序中的字符流转换为词法单元流，以便后续的语法分析。设计词法分析器的基本步骤如下：

1. 确定词法单元的类型和模式词法单元是源程序中的最小语法单位，例如标识符、关键字、常量、运算符等。在设计词法分析器时，需要确定每种词法单元的类型和对应的正则表达式模式，以便识别源程序中的词法单元。

例如，对于一个简单的算术表达式语言，可以定义如下的词法单元类型和模式：

- 标识符：以字母或下划线开头，后跟任意个字母、数字或下划线。
- 数字常量：一个或多个数字组成的字符串。
- 运算符：加号、减号、乘号、除号等。
- 左右括号：左括号、右括号。

2. 编写正则表达式模式确定词法单元类型和模式后，需要编写对应的正则表达式模式，以便识别源程序中的词法单元。正则表达式是一种描述字符串模式的语言，可以用来匹配符合某种模式的字符串。

例如，对于标识符，可以使用正则表达式[a-zA-Z\_][a-zA-Z0-9_]\*来匹配以字母或下划线开头、后跟任意个字母、数字或下划线的字符串。

3. 实现词法分析器在实现词法分析器时，可以使用自动机或递归下降分析等算法，对源程序进行扫描和识别。具体实现方式可以参考以下步骤：

- 读入源程序字符流，逐个字符进行扫描。
- 对每个字符进行分类，判断其属于哪种词法单元。
- 根据词法单元类型和模式，使用正则表达式进行匹配。
- 如果匹配成功，则生成对应的词法单元，并将其加入词法单元流中；否则，报告词法错误。

4. 输出词法单元流在词法分析器完成扫描和识别后，需要将生成的词法单元流输出给后续的语法分析器。词法单元流可以使用链表、数组等数据结构来表示。

例如，对于一个简单的算术表达式语言，源程序"1+2\*(3-4)"的词法单元流可以表示为：

| 类型     | 值  |
| -------- | --- |
| 数字常量 | 1   |
| 运算符   | +   |
| 数字常量 | 2   |
| 运算符   | \*  |
| 左括号   | (   |
| 数字常量 | 3   |
| 运算符   | -   |
| 数字常量 | 4   |
| 右括号   | )   |

## 设计词法分析器

词法分析器是编译器的一个重要组成部分，用于将源代码转换成标记流（Token Stream）。下面是一个简单的词法分析器的设计：

1. 定义 Token 类，用于表示标记。Token 类应该包含以下属性：

- type：标记类型，例如关键字、标识符、运算符等。
- value：标记的值，例如标识符的名称、数字的值等。
- line：标记所在的行号。

2. 定义词法分析器类，用于将源代码转换成标记流。词法分析器类应该包含以下方法：

- getNextToken()：从源代码中读取下一个标记，并返回一个 Token 对象。
- tokenize()：将整个源代码转换成标记流。

3. 在 getNextToken()方法中，可以按照以下步骤进行：

- 跳过空格、制表符、换行符等空白字符。
- 判断当前字符是否为数字，如果是数字则读取整个数字，并返回一个数字类型的 Token 对象。
- 判断当前字符是否为字母，如果是字母则读取整个标识符，并判断是否为关键字，如果是则返回一个关键字类型的 Token 对象，否则返回一个标识符类型的 Token 对象。
- 判断当前字符是否为运算符，如果是则返回一个运算符类型的 Token 对象。
- 如果当前字符不是数字、字母或运算符，则返回一个未知类型的 Token 对象。

4. 在 tokenize()方法中，可以按照以下步骤进行：

- 读取整个源代码。
- 循环调用 getNextToken()方法，直到读取完所有的标记。
- 返回一个包含所有 Token 对象的数组。

## 设计语法分析器

语法分析器是编译器的另一个重要组成部分，用于将标记流转换成抽象语法树（Abstract Syntax Tree，AST）。下面是一个简单的语法分析器的设计：

1. 定义 AST 节点类，用于表示抽象语法树的节点。AST 节点类应该包含以下属性：

- type：节点类型，例如表达式、语句、变量声明等。
- value：节点的值，例如变量名、常量值等。
- children：子节点列表，用于表示节点的子节点。

2. 定义语法分析器类，用于将标记流转换成抽象语法树。语法分析器类应该包含以下方法：

- parse()：解析标记流，并返回一个 AST 根节点。
- 在 parse()方法中，可以按照以下步骤进行：

3. 读取标记流中的第一个标记，并根据标记的类型创建一个根节点。

- 根据语法规则，递归调用子节点的解析方法，创建子节点，并将子节点添加到根节点的子节点列表中。
- 如果当前标记不符合语法规则，则抛出语法错误异常。
- 重复步骤 2 和 3，直到解析完整个标记流。

4. 在 AST 节点类中，可以定义一些辅助方法，例如：

- isLeaf()：判断当前节点是否为叶子节点。
- getChildren()：返回当前节点的子节点列表。
- getType()：返回当前节点的类型。
- getValue()：返回当前节点的值。以上是一个简单的语法分析器的设计，实际上还需要考虑很多细节，例如处理优先级、左结合性、右结合性等特殊情况。

## 实现 JavaScript 运行时

实现 JavaScript 运行时需要实现以下几个部分：

1. 词法分析器：读取 JavaScript 代码并将其转换成标记流（Token Stream）。
2. 语法分析器：将标记流转换成抽象语法树（Abstract Syntax Tree，AST）。
3. 执行引擎：遍历抽象语法树，并执行其中的代码。
4. 内置对象和函数：实现 JavaScript 的内置对象和函数，例如 Object、Array、Function 等。

   下面是一个简单的 JavaScript 运行时的实现：

   1. 词法分析器：使用正则表达式匹配 JavaScript 代码中的标记，并返回一个标记流（Token Stream）。

   2. 语法分析器：使用递归下降算法（Recursive Descent Parsing）将标记流转换成抽象语法树（Abstract Syntax Tree，AST）。

   3. 执行引擎：遍历抽象语法树，并执行其中的代码。

   - 对于变量声明语句，创建一个变量并赋初值，将变量存入当前作用域中。
   - 对于赋值语句，找到变量，并将其值赋为表达式的值。
   - 对于表达式语句，计算表达式的值并忽略结果。
   - 对于条件语句（if 语句），根据条件表达式的值判断执行哪个分支。
   - 对于循环语句（for、while 语句），根据条件表达式的值判断是否执行循环体。
   - 对于函数声明语句，创建一个函数对象并将其存入当前作用域中。
   - 对于函数调用表达式，找到函数，并执行函数体。
   - 对于对象属性访问表达式，找到对象并获取属性值。
   - 对于数组元素访问表达式，找到数组并获取元素值。

   4. 内置对象和函数：实现 JavaScript 的内置对象和函数，例如 Object、Array、Function 等。可以使用 JavaScript 语言本身来实现这些内置对象和函数。

以上是一个简单的 JavaScript 运行时的实现，实际上还需要考虑很多细节，例如作用域、闭包、类型转换等特殊情况。

## 实现 JavaScript 解释器

JavaScript 解释器的设计应该包括以下几个部分：

### 词法分析器：将 JavaScript 代码转换为标记流

词法分析（Lexical Analysis）：将代码分解成单个的词法单元（tokens），例如关键字、标识符、运算符等。这可以通过正则表达式或手写解析器实现

### 语法分析器：将标记流转换为语法树

语法分析（Parsing）：将词法单元转换成语法树（Abstract Syntax Tree，AST），并检查语法错误。这可以通过手写递归下降解析器、LL 或 LR 分析器等实现。

### 语义分析器：对语法树进行语义分析

语义分析（Semantic Analysis）：对 AST 进行语义分析，检查类型、作用域、函数调用等。这可以通过遍历 AST 并应用静态或动态分析算法实现。

### 执行器：执行语法树并输出结果

将 AST 转换成可执行的机器代码或字节码。这可以通过直接解释、编译成本地代码或编译成中间代码并交给虚拟机执行等方式实现。

:::details 点击查看 JavaScript 解释器的实现

```js
// 词法分析器
function tokenize(code) {
  const tokens = [];
  let pos = 0;

  while (pos < code.length) {
    let match = null;

    // 匹配关键字和标识符
    match = code.slice(pos).match(/^(\s+|let|if|else|while|for|[a-zA-Z]\w*)/);
    if (match) {
      tokens.push({ type: match[1].trim() });
      pos += match[0].length;
      continue;
    }

    // 匹配数字
    match = code.slice(pos).match(/^(\d+)/);
    if (match) {
      tokens.push({ type: 'number', value: Number(match[1]) });
      pos += match[0].length;
      continue;
    }

    // 匹配运算符
    match = code.slice(pos).match(/^(\+|\-|\*|\/|\=|\>|\<|\!|\&|\|)/);
    if (match) {
      tokens.push({ type: 'operator', value: match[1] });
      pos += match[0].length;
      continue;
    }

    // 匹配括号和分号
    match = code.slice(pos).match(/^(\(|\)|\{|\}|\;)/);
    if (match) {
      tokens.push({ type: match[1] });
      pos += match[0].length;
      continue;
    }

    // 无法匹配的字符
    throw new Error(`Unexpected character at position ${pos}`);
  }

  return tokens;
}

// 语法分析器
function parse(tokens) {
  let pos = 0;

  function parseExpression() {
    // 匹配数字
    if (tokens[pos].type === 'number') {
      const node = { type: 'NumberLiteral', value: tokens[pos].value };
      pos++;
      return node;
    }

    // 匹配标识符
    if (tokens[pos].type === 'let') {
      const node = { type: 'VariableDeclaration', name: tokens[pos + 1].type };
      pos += 2;
      return node;
    }

    // 匹配括号
    if (tokens[pos].type === '(') {
      pos++;
      const node = parseExpression();
      if (tokens[pos].type !== ')') {
        throw new Error(`Expected ')' at position ${pos}`);
      }
      pos++;
      return node;
    }

    // 无法匹配的表达式
    throw new Error(`Unexpected token at position ${pos}`);
  }

  function parseStatement() {
    // 匹配变量声明语句
    if (tokens[pos].type === 'let') {
      const node = { type: 'VariableDeclaration', name: tokens[pos + 1].type };
      pos += 2;
      if (tokens[pos].type !== '=') {
        throw new Error(`Expected '=' at position ${pos}`);
      }
      pos++;
      node.value = parseExpression();
      if (tokens[pos].type !== ';') {
        throw new Error(`Expected ';' at position ${pos}`);
      }
      pos++;
      return node;
    }

    // 匹配条件语句
    if (tokens[pos].type === 'if') {
      const node = { type: 'IfStatement' };
      pos++;
      if (tokens[pos].type !== '(') {
        throw new Error(`Expected '(' at position ${pos}`);
      }
      pos++;
      node.test = parseExpression();
      if (tokens[pos].type !== ')') {
        throw new Error(`Expected ')' at position ${pos}`);
      }
      pos++;
      node.consequent = parseStatement();
      if (tokens[pos].type === 'else') {
        pos++;
        node.alternate = parseStatement();
      }
      return node;
    }

    // 无法匹配的语句
    throw new Error(`Unexpected token at position ${pos}`);
  }

  const ast = { type: 'Program', body: [] };

  while (pos < tokens.length) {
    ast.body.push(parseStatement());
  }

  return ast;
}

const code = `
  let x = 1;
  if (x > 0) {
    console.log('Positive');
  } else {
    console.log('Non-positive');
  }
`;

const tokens = tokenize(code);
const ast = parse(tokens);

console.log(ast);
```

:::

## 实现 JavaScript 编译器

### 词法编译器（Lexical Analyzer）

词法编译器（Lexical Analyzer）也被称为词法分析器（Lexer），是编译器中的一个组件，用于将源代码转换为令牌（Token）序列。令牌是编程语言中的基本单元，它们由词素（Lexeme）和令牌类型（Token Type）组成。

词法编译器通常由两个主要部分组成：令牌定义和扫描器。令牌定义是一组正则表达式，用于描述编程语言中的各种令牌类型。扫描器则根据这些正则表达式，对源代码进行扫描，并将其转换为令牌序列。

:::details 点击查看词法编译器的实现

```javascript
const TOKEN_TYPES = {
  IDENTIFIER: 'IDENTIFIER',
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
  PUNCTUATION: 'PUNCTUATION',
  KEYWORD: 'KEYWORD',
};

const KEYWORDS = ['if', 'else', 'while', 'for', 'function', 'var', 'let', 'const', 'return'];

const OPERATORS = ['+', '-', '*', '/', '=', '==', '!=', '<', '>', '<=', '>=', '&&', '||'];

const PUNCTUATIONS = ['(', ')', '{', '}', ',', ';'];

function tokenize(code) {
  const tokens = [];
  let current = 0;

  while (current < code.length) {
    let char = code[current];

    // 处理数字
    if (/\d/.test(char)) {
      let value = '';

      while (/\d/.test(char)) {
        value += char;
        char = code[++current];
      }

      tokens.push({ type: TOKEN_TYPES.NUMBER, value });
      continue;
    }

    // 处理标识符和关键字
    if (/[a-zA-Z]/.test(char)) {
      let value = '';

      while (/[a-zA-Z]/.test(char)) {
        value += char;
        char = code[++current];
      }

      if (KEYWORDS.includes(value)) {
        tokens.push({ type: TOKEN_TYPES.KEYWORD, value });
      } else {
        tokens.push({ type: TOKEN_TYPES.IDENTIFIER, value });
      }

      continue;
    }

    // 处理运算符
    if (OPERATORS.includes(char)) {
      let value = '';

      while (OPERATORS.includes(char)) {
        value += char;
        char = code[++current];
      }

      tokens.push({ type: TOKEN_TYPES.OPERATOR, value });
      continue;
    }

    // 处理标点符号
    if (PUNCTUATIONS.includes(char)) {
      tokens.push({ type: TOKEN_TYPES.PUNCTUATION, value: char });
      current++;
      continue;
    }

    current++;
  }

  return tokens;
}
```

:::

定义了一组令牌类型，包括标识符、数字、运算符、标点符号和关键字。然后，我们使用正则表达式和数组常量来定义这些令牌类型的规则。

tokenize 函数中，遍历源代码中的每个字符，并根据其类型生成相应的令牌。例如，如果字符是数字，则我们将其解析为数字令牌，并将其添加到令牌序列中。

### 代码生成器：将语法树转换为可执行的机器代码

代码生成器（Code Generator）是编译器中的一个组件，用于将抽象语法树（AST）转换为目标代码，例如机器代码、字节码或其他编程语言的代码。

代码生成器通常由两个主要部分组成：代码生成规则和代码生成器。代码生成规则是一组规则，用于描述如何将 AST 节点转换为目标代码。代码生成器则根据这些规则，对 AST 节点进行遍历，并将其转换为目标代码。

:::details 点击查看代码生成器的实现

```js
function generate(node) {
  if (node.type === 'Program') {
    return node.body.map(generate).join('\n');
  }

  if (node.type === 'NumberLiteral') {
    return node.value;
  }

  if (node.type === 'Identifier') {
    return node.name;
  }

  if (node.type === 'CallExpression') {
    return `${node.name}(${node.params.map(generate).join(', ')})`;
  }

  throw new Error(`Invalid AST node: ${node.type}`);
}
```

:::

### 执行器：执行机器代码并输出结果

执行器（Executor）是编译器中的一个组件，用于执行目标代码，例如机器代码或字节码，并输出结果。执行器通常由两个主要部分组成：解释器和虚拟机。

解释器是一种直接执行目标代码的方法，它将目标代码逐条解释并执行。虚拟机是一种模拟计算机硬件的方法，它将目标代码转换为一组指令，并在虚拟计算机上执行这些指令。

:::details 点击查看 JavaScript 编译器的实现

```js
function execute(code) {
  const program = compile(code);
  const bytecode = generate(program);
  const instructions = parse(bytecode);
  const vm = createVM(instructions);
  const result = vm.run();
  return result;
}

function createVM(instructions) {
  let ip = 0;
  let sp = -1;
  const stack = new Array(256).fill(0);

  function push(value) {
    stack[++sp] = value;
  }

  function pop() {
    return stack[sp--];
  }

  function run() {
    while (ip < instructions.length) {
      const instruction = instructions[ip++];

      switch (instruction.opcode) {
        case 'LOAD': {
          push(instruction.value);
          break;
        }
        case 'ADD': {
          const b = pop();
          const a = pop();
          push(a + b);
          break;
        }
        case 'SUB': {
          const b = pop();
          const a = pop();
          push(a - b);
          break;
        }
        case 'MUL': {
          const b = pop();
          const a = pop();
          push(a * b);
          break;
        }
        case 'DIV': {
          const b = pop();
          const a = pop();
          push(a / b);
          break;
        }
        case 'PRINT': {
          const value = pop();
          console.log(value);
          break;
        }
        default: {
          throw new Error(`Invalid opcode: ${instruction.opcode}`);
        }
      }
    }

    return pop();
  }

  return { run };
}
```

:::

在这个例子中，我们定义了一个 execute 函数，它接受一个 JavaScript 源代码字符串作为输入，并将其编译为目标代码，然后使用虚拟机执行目标代码，并输出结果。

在 createVM 函数中，我们定义了一组虚拟机指令，包括 LOAD（将常量加载到栈中）、ADD（将栈顶两个值相加）、SUB（将栈顶两个值相减）、MUL（将栈顶两个值相乘）、DIV（将栈顶两个值相除）和 PRINT（打印栈顶的值）。然后，我们使用一个简单的栈来模拟虚拟机的堆栈，并在 run 函数中执行指令序列。

在 execute 函数中，我们首先将源代码编译为目标代码，然后将其解析为指令序列，并使用 createVM 函数创建一个虚拟机。最后，我们调用虚拟机的 run 函数，执行指令序列，并输出结果。
