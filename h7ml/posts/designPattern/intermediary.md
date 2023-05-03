---
title: 中介者模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-03-03 08:12:19
---

中介者模式用于解决多个对象之间交互过于复杂的问题，从多对多的关系转为一对多的关系。

![img](https://static001.geekbang.org/resource/image/43/9f/4376d541bf17a029f37aa76009ef3a9f.jpg)

和 [观察者](https://www.h7ml.cn/designPattern/observer.html) 模式有些像，区别在于观察模式中的 `EventBus` 不处理业务逻辑，只是单纯的转发消息。

但中介者对象需要知道各个对象的功能，处理相关逻辑。

目前开发中还没有遇到过，此处留坑。
