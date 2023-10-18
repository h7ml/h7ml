---
title: 访问者模式
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

# 访问者模式visitor

访问者模式主要作用是实现数据和操作的分离，可以在不改变数据类的同时，增加新的操作类型。

其主要通过「双分派」的思想实现。给原数据类传入一个 `Visitor` 方法，原数据类调用 `Visitor` 提供的方法，并将自己通过 `this` 传给 `Visitor` ，`Vistior` 实现相关操作。

目前开发中还没有遇到过，此处留坑。
