---
title: 适配器模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-02-13 09:15:00
---

# 场景

当我们使用第三方库的时候，常常会遇到当前接口和第三方接口不匹配的情况，比如使用一个 `Table` 的组件，它要求我们返回的表格数据格式如下：

```js
{
  code: 0, // 业务 code
  msg: '', // 出错时候的提示
  data: {
     total: , // 总数量
     list: [], // 表格列表
  }
};
```

但后端返回的数据可能是这样的：

```js
{
  code: 0, // 业务 code
  message: '', // 出错时候的提示
  data: {
     total: , // 总数量
     records: [], // 表格列表
  }
};
```

此时就可以通过适配器模式进行转换。

# 适配器模式

看一下 [维基百科]() 给的定义：

> In [software engineering](https://en.wikipedia.org/wiki/Software_engineering), the **adapter pattern** is a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) that allows the [interface](<https://en.wikipedia.org/wiki/Interface_(computer_science)>) of an existing [class](<https://en.wikipedia.org/wiki/Class_(computer_science)>) to be used as another interface.[[1\]](https://en.wikipedia.org/wiki/Adapter_pattern#cite_note-HeadFirst-1) It is often used to make existing classes work with others without modifying their [source code](https://en.wikipedia.org/wiki/Source_code).

通过适配器模式可以让当前 `class` 不改变的情况下正常使用另一个 `class`。

在以 `class` 为基础的语言中有两种实现方式，一种是通过组合的方式，适配器类内部包含原对象的实例。一种是通过类继承，适配器类继承原 `class` 。可以看下 `UML` 类图：

![image-20220213124112500](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220213124112500.png)

左边的 `Adapter` 内部拥有 `Adaptee` 的实例，右边的 `Adapter` 类直接继承 `Adaptee` 类。

适配器会将 `Adaptee` 的 `specificOperation` 方法进行相应的处理包装为 `operation` 方法供 `client` 使用。

看一个简单的例子，现实生活中 `iPhone` 有两种耳机插口，一种是 `Lightning`，一种是传统的 `3.5` 毫米接口。如果是 `lightning` 插口的耳机想要插到传统的 `3.5` 毫米接口的电脑上就需要适配器了。

```js
class Lightning耳机 {
 public void 插入Lighting接口(){
  System.out.println("插入到Lighting耳机接口成功");
 }
}
class 传统耳机 {
 public void 插入到传统耳机孔(){
  System.out.println("插入到传统耳机孔成功");
 }
}
class Lightning耳机到传统耳机适配器 extends 传统耳机 {
 public Lightning耳机 Lightning耳机;
 public Lightning耳机到传统耳机适配器(Lightning耳机 耳机) {
  Lightning耳机 = 耳机;
 }
 public void 插入到传统耳机孔(){
  Lightning耳机.插入Lighting接口();
 }
}
class 电脑传统耳机孔 {
 public 传统耳机 耳机;
 public 电脑传统耳机孔(传统耳机 传统耳机) {
  耳机 = 传统耳机;
 }
 public void 插入耳机() {
  耳机.插入到传统耳机孔();
 }
}
public class Main {
 public static void main(String[] args) {
  传统耳机 传统耳机 = new 传统耳机();
  电脑传统耳机孔  电脑传统耳机孔 = new 电脑传统耳机孔(传统耳机);
  电脑传统耳机孔.插入耳机(); // 插入到传统耳机孔成功


  Lightning耳机 Lightning耳机 = new Lightning耳机();
  电脑传统耳机孔  电脑传统耳机孔2 = new 电脑传统耳机孔(new Lightning耳机到传统耳机适配器(Lightning耳机));
  电脑传统耳机孔2.插入耳机(); // 插入到Lighting耳机接口成功
 }
}
```

通过适配器我们成功将 `Lightning` 耳机插入到了电脑传统耳机孔，让我们再用 `js` 改写一下。

```js
const Lightning耳机 = {
  插入Lighting接口() {
    console.log('插入到Lighting耳机接口成功');
  },
};

const 传统耳机 = {
  插入到传统耳机孔() {
    console.log('插入到传统耳机孔成功');
  },
};

const 电脑传统耳机孔 = {
  插入耳机(耳机) {
    耳机.插入到传统耳机孔();
  },
};

const Lightning耳机到传统耳机适配器 = function (Lightning耳机) {
  return {
    插入到传统耳机孔() {
      Lightning耳机.插入Lighting接口();
    },
  };
};

电脑传统耳机孔.插入耳机(传统耳机); // 插入到传统耳机孔成功
电脑传统耳机孔.插入耳机(Lightning耳机到传统耳机适配器(Lightning耳机)); // 插入到Lighting耳机接口成功
```

# 代码实现

回到开头接口不匹配的问题上，`Table` 组件提供了一个 `responseProcessor` 的钩子，我们只需要通过这个钩子将接口返回的数据进行包装即可。

```js
{
  ...
  responseProcessor(res) {
    return {
      ...res,
      msg: res.message, // 出错时候的提示
      data: {
         ...res.data
         list: res?.data?.records || [], // 表格列表
      }
    };
  },
  ...

}
```

# 更多场景

除了应对数据格式不一致的问题，通过适配器模式我们还可以为上层提供统一接口，来解决兼容性问题。最典型的例子就是 `jQuery` ，可以看一下其中一段代码:

```js
// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr =
  window.ActiveXObject !== undefined
    ? // Support: IE6-IE8
      function () {
        // XHR cannot access local files, always use ActiveX for that case
        if (this.isLocal) {
          return createActiveXHR();
        }

        // Support: IE 9-11
        // IE seems to error on cross-domain PATCH requests when ActiveX XHR
        // is used. In IE 9+ always use the native XHR.
        // Note: this condition won't catch Edge as it doesn't define
        // document.documentMode but it also doesn't support ActiveX so it won't
        // reach this code.
        if (document.documentMode > 8) {
          return createStandardXHR();
        }

        // Support: IE<9
        // oldIE XHR does not support non-RFC2616 methods (#13240)
        // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
        // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
        // Although this check for six methods instead of eight
        // since IE also does not support "trace" and "connect"
        return (/^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR()) || createActiveXHR();
      }
    : // For all other browsers, use the standard XMLHttpRequest object
      createStandardXHR;
```

# 易混设计模式

适配器模式和[代理模式](https://www.h7ml.cn/designPattern/proxy.html)在代码结构上很像，代理模式也是对原对象进行包装处理。区别在于它们的意图不同：

- 适配器模式是为了解决两个对象之间不匹配的问题，而原对象又不适合直接修改，此时可以使用适配器模式进行一层转换。

- 代理模式是为了增强原对象的功能，提供的接口不会改变。

# 总

适配器模式是一种比较简单的设计模式，在 `js` 中也会很自然的应用，一般通过一个函数进行转换即可。
