---
title: 工厂模式
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

# 工厂模式factory

工厂模式是如果业务场景中需要创建多个类似的对象，然后充斥了大量的 `if...else...` ，此时可以将创建对象的部分抽离出来。

简单工厂模式就是直接抽离，什么都不改，只是将 `if..else...` 进行了转移。

工厂模式是每一个对象都创建一个工厂类，业务中先得到一个工厂，然后通过工厂得到对象。

抽象工厂模式是每一个工厂类可以生成多种对象。

`GoF` 中只有工厂模式和抽象工厂模式。

目前开发中还没有遇到过，此处留坑。
