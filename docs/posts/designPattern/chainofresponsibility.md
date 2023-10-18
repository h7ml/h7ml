---
title: 责任链模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-02-04 10:10:46
---

# 场景

[leetcode 65 题](https://leetcode.wang/leetCode-65-Valid-Number.html) 判断是否是合法的数字：

![image-20220204102426236](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220204102426236.png)

部分有效数字列举如下：`["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]` 部分无效数字列举如下：`["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]`

我们可以依次遍历给定的字符串，然后各种 `if` 、`else` 来解决这个问题：

```js
/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  const e = ['e', 'E'];
  s = s.trim();

  let pointSeen = false;
  let eSeen = false;
  let numberSeen = false;
  let numberAfterE = true;
  for (let i = 0; i < s.length; i++) {
    if ('0' <= s.charAt(i) && s.charAt(i) <= '9') {
      numberSeen = true;
      numberAfterE = true;
    } else if (s.charAt(i) === '.') {
      if (eSeen || pointSeen) {
        return false;
      }
      pointSeen = true;
    } else if (e.includes(s.charAt(i))) {
      if (eSeen || !numberSeen) {
        return false;
      }
      numberAfterE = false;
      eSeen = true;
    } else if (s.charAt(i) === '-' || s.charAt(i) === '+') {
      if (i != 0 && !e.includes(s.charAt(i - 1))) {
        return false;
      }
    } else {
      return false;
    }
  }

  return numberSeen && numberAfterE;
};
```

如果只是为了刷题 `AC` 也没啥毛病，但如果在业务中写出这么多 `if`、`else` 大概就要被打了。

为了让代码扩展性和可读性更高，我们可以通过责任链模式进行改写。

# 责任链模式

`GoF` 介绍的责任链模式定义：

> Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

避免请求者和接收者之间的耦合，让多个接收者都有机会去处理请求。将接收者组成链条，在链条中传递请求直到有接收者可以处理它。

原始的定义中，当请求被处理后链条就终止了，但很多地方也会将请求一直传递下去，可以看作是责任链模式的变体。

看一下 `UML` 类图和时序图：

![image-20220204151213707](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220204151213707.png)

`Sender` 无需关心哪一个 `Receiver` 去处理它，只需要通过 `Handler` 接口在 `Receiver` 链条中进行处理，每一个 `Receiver` 处理结束后继续传给下一个 `Receiver` 。

看起来比较抽象，看一个具体的例子，不同等级的日志进行不同的处理：

```java
import java.util.*;

abstract class Logger
{
    public static int ERR = 3;
    public static int NOTICE = 5;
    public static int DEBUG = 7;
    protected int mask;

    // The next element in the chain of responsibility
    protected Logger next;
    public Logger setNext( Logger l)
    {
        next = l;
        return this;
    }

    public final void message( String msg, int priority )
    {
        if ( priority <= mask )
        {
            writeMessage( msg );
            if ( next != null )
            {
                next.message( msg, priority );
            }
        }
    }

    protected abstract void writeMessage( String msg );

}

class StdoutLogger extends Logger
{

    public StdoutLogger( int mask ) { this.mask = mask; }

    protected void writeMessage( String msg )
    {
        System.out.println( "Writting to stdout: " + msg );
    }
}


class EmailLogger extends Logger
{

    public EmailLogger( int mask ) { this.mask = mask; }

    protected void writeMessage( String msg )
    {
        System.out.println( "Sending via email: " + msg );
    }
}

class StderrLogger extends Logger
{

    public StderrLogger( int mask ) { this.mask = mask; }

    protected void writeMessage( String msg )
    {
        System.out.println( "Sending to stderr: " + msg );
    }
}

public class ChainOfResponsibilityExample
{
    public static void main( String[] args )
    {
        // Build the chain of responsibility
        Logger l = new StdoutLogger( Logger.DEBUG).setNext(
                            new EmailLogger( Logger.NOTICE ).setNext(
                            new StderrLogger( Logger.ERR ) ) );

        // Handled by StdoutLogger
        l.message( "Entering function y.", Logger.DEBUG );

        // Handled by StdoutLogger and EmailLogger
        l.message( "Step1 completed.", Logger.NOTICE );

        // Handled by all three loggers
        l.message( "An error has occurred.", Logger.ERR );
    }
}
```

输出：

```c
Writting to stdout: Entering function y.
Writting to stdout: Step1 completed.
Sending via email: Step1 completed.
Writting to stdout: An error has occurred.
Sending via email: An error has occurred.
Sending to stderr: An error has occurred.
```

每个 `logger` 都继承了 `message` 方法，并且拥有的 `next` 也指向一个 `logger` 对象，通过 `next` 去调用下一个的 `message` 方法。

![image-20220204152750255](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220204152750255.png)

让我们用 `js` 再来改写一下：

我们先实现一个 `Handler` 对象，构建链条。

```js
const Handler = function (fn) {
  this.handler = fn;
  this.next = null;
};

Handler.prototype.setNext = function setNext(h) {
  this.next = h;
  return h;
};

Handler.prototype.passRequest = function () {
  const ret = this.handler.apply(this, arguments);
  this.next && this.next.passRequest.apply(this.next, arguments);
};
```

接下来实现不同的 `Logger` 。

```js
const ERR = 3;
const NOTICE = 5;
const DEBUG = 7;

const StdoutLogger = function (msg, level) {
  // 根据等级判断自己是否处理
  if (level <= DEBUG) {
    console.log('Writting to stdout: ' + msg);
  }
};

const EmailLogger = function (msg, level) {
  // 根据等级判断自己是否处理
  if (level <= NOTICE) {
    console.log('Sending via email: ' + msg);
  }
};

const StderrLogger = function (msg, level) {
  // 根据等级判断自己是否处理
  if (level <= ERR) {
    console.log('Sending to stderr: ' + msg);
  }
};
```

然后进行测试：

```js
const StdoutHandler = new Handler(StdoutLogger);
const EmailHandler = new Handler(EmailLogger);
const StderrHandler = new Handler(StderrLogger);
StdoutHandler.setNext(EmailHandler).setNext(StderrHandler);

StdoutHandler.passRequest('Entering function y.', DEBUG);
StdoutHandler.passRequest('Step1 completed.', NOTICE);
StdoutHandler.passRequest('An error has occurred.', ERR);
```

输出内容和 `java` 代码是一致的。

# 代码实现

回到开头的场景中，判断是否是有效数字。

我们可以抽离出不同功能，判断是否是整数、是否是科学记数法、是否是浮点数等等，然后通过职责链模式把它们链接起来，如果某一环节返回了 `true` 就不再判断，直接返回最终结果。

可以利用上边写的 `Handler` 对象，构建链条，此外可以通过返回值提前结束传递。

```js
function Handler(fn) {
  this.handler = fn;
  this.next = null;
}

Handler.prototype.setNext = function setNext(h) {
  this.next = h;
  return h;
};

Handler.prototype.passRequest = function () {
  const ret = this.handler.apply(this, arguments);
  // 提前结束
  if (ret) {
    return ret;
  }

  // 向后传递
  if (this.next) {
    return this.next.passRequest.apply(this.next, arguments);
  }
  return ret;
};
```

数字预处理一下，去掉前后空白和 `+`、`-` 便于后续的判断。

```js
function preProcessing(v) {
  let value = v.trim();
  if (value.startsWith('+') || value.startsWith('-')) {
    value = value.substring(1);
  }
  return value;
}
```

判断是否是整数：

```js
// 判断是否是整数
function isInteger(integer) {
  integer = preProcessing(integer);
  if (!integer) {
    return false;
  }
  for (let i = 0; i < integer.length; i++) {
    if (!/[0-9]/.test(integer.charAt(i))) {
      return false;
    }
  }

  return true;
}
```

判断是否是小数：

```js
// 判断是否是小数
function isFloat(floatVal) {
  floatVal = preProcessing(floatVal);
  if (!floatVal) {
    return false;
  }
  function checkPart(part) {
    if (part === '') {
      return true;
    }
    if (!/[0-9]/.test(part.charAt(0)) || !/[0-9]/.test(part.charAt(part.length - 1))) {
      return false;
    }

    if (!isInteger(part)) {
      return false;
    }

    return true;
  }
  const pos = floatVal.indexOf('.');
  if (pos === -1) {
    return false;
  }

  if (floatVal.length === 1) {
    return false;
  }

  const first = floatVal.substring(0, pos);
  const second = floatVal.substring(pos + 1, floatVal.length);

  if (checkPart(first) && checkPart(second)) {
    return true;
  }

  return false;
}
```

判断是否是科学计数法：

```js
// 判断是否是科学计数法
function isScienceFormat(s) {
  s = preProcessing(s);
  if (!s) {
    return false;
  }
  function checkHeadAndEndForSpace(part) {
    if (part.startsWith(' ') || part.endsWith(' ')) {
      return false;
    }

    return true;
  }
  function validatePartBeforeE(first) {
    if (!first) {
      return false;
    }

    if (!checkHeadAndEndForSpace(first)) {
      return false;
    }

    if (!isInteger(first) && !isFloat(first)) {
      return false;
    }

    return true;
  }

  function validatePartAfterE(second) {
    if (!second) {
      return false;
    }

    if (!checkHeadAndEndForSpace(second)) {
      return false;
    }

    if (!isInteger(second)) {
      return false;
    }

    return true;
  }
  s = s.toLowerCase();
  let pos = s.indexOf('e');
  if (pos === -1) {
    return false;
  }

  if (s.length === 1) {
    return false;
  }

  const first = s.substring(0, pos);
  const second = s.substring(pos + 1, s.length);

  if (!validatePartBeforeE(first) || !validatePartAfterE(second)) {
    return false;
  }

  return true;
}
```

判断是否是十六进制：

```js
function isHex(hex) {
  function isValidChar(c) {
    const validChar = ['a', 'b', 'c', 'd', 'e', 'f'];
    for (let i = 0; i < validChar.length; i++) {
      if (c === validChar[i]) {
        return true;
      }
    }

    return false;
  }
  hex = preProcessing(hex);
  if (!hex) {
    return false;
  }
  hex = hex.toLowerCase();
  if (hex.startsWith('0x')) {
    hex = hex.substring(2);
  } else {
    return false;
  }

  for (let i = 0; i < hex.length; i++) {
    if (!/[0-9]/.test(hex.charAt(0)) && !isValidChar(hex.charAt(i))) {
      return false;
    }
  }

  return true;
}
```

然后通过 `Handler` 将上边的功能串联起来即可：

```js
/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  const isIntegerHandler = new Handler(isInteger);
  const isFloatHandler = new Handler(isFloat);
  const isScienceFormatHandler = new Handler(isScienceFormat);
  const isHexHandler = new Handler(isHex);

  isIntegerHandler.setNext(isFloatHandler).setNext(isScienceFormatHandler).setNext(isHexHandler);

  return isIntegerHandler.passRequest(s);
};
```

通过责任链的设计模式，每一个函数都可以很好的进行复用，并且未来如果要新增一种类型判断，只需要加到责任链中即可，和之前的判断也完全独立。

# 易混设计模式

说到沿着「链」执行，应该会想到 [装饰器模式](https://www.h7ml.cn/designPattern/decorator.html) 。

![image-20220204202859919](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220204202859919.png)

它和责任链模式看起来结构上是一致的，我的理解上主要有两点不同：

1. 装饰器模式是对已有功能的增强，依次包装起来形成链式调用。而责任链模式从一开始就抽象出了很多功能，然后形成责任链。
2. 装饰器模式会依次调用新增的功能直到最初的功能，责任链模式提供了一种中断的能力，调用到某个操作的时候可以直接终止掉，不是所有的功能都会调用。

# 总

当处理一件事情的时候发现会分很多种情况去讨论，此时可以考虑使用责任链模式进行功能的拆分，提高代码的复用性、扩展性以及可读性。

像 `js` 中底层的原型链、作用域链、`Dom` 元素的冒泡机制都可以看作是责任链模式的应用。
