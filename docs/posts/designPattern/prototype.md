---
title: 原型模式
category:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
tag:
  - 设计模式
  - frontend
date: 2022-02-27 11:53:19
---

# 原型模式prototype

原型模式在基于类的语言中作用大一些，当构造函数比较复杂，有一些耗时操作，此时通过 `new` 去创建对象不划算，可以通过 `clone` 的方法，直接基于已有对象 `copy` 一个。

`js` 属于基于原型的面向对象的编程语言，本身就是基于一个对象来生成另一个对象，并没有真正的类。

我们可以直接通过 `Object.create` 或者 `json` 序列化反序列化 `copy` 一个对象。
