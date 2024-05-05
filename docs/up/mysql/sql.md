---
icon: mysql
order: 3
date: 2022-03-20
author: h7ml
category: mysql
tag: mysql
title: SQL概述
---

## SQL 概述

了解了数据模型后，接下来我们就学习 SQL 语句，通过 SQL 语句对数据库、表、数据进行增删改查操作。

## SQL 简介

- 英文：Structured Query Language，简称 SQL
- 结构化查询语言，一门操作关系型数据库的编程语言
- 定义操作所有关系型数据库的统一标准
- 对于同一个需求，每一种数据库操作的方式可能会存在一些不一样的地方，我们称为“方言”

## 通用语法

- SQL 语句可以单行或多行书写，以分号结尾。

  ![image-20220910090836346](http://static.5ibug.net/vitepress/assets/images/mysql/202209100916954.png)

  如上，以分号结尾才是一个完整的 sql 语句。

- MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。

  同样的一条 sql 语句写成下图的样子，一样可以运行处结果。

  ![image-20220910090831935](http://static.5ibug.net/vitepress/assets/images/mysql/202209100916982.png)

- 注释

  - 单行注释: -- 注释内容 或 #注释内容(MySQL 特有)

    ![image-20220910090829243](http://static.5ibug.net/vitepress/assets/images/mysql/202209100916099.png)

    ![image-20220910090824707](http://static.5ibug.net/vitepress/assets/images/mysql/202209100916488.png) GFDWQ 111111111111111111111

    > 注意：使用-- 添加单行注释时，--后面一定要加空格，而#没有要求。

  - 多行注释: /\* 注释 \*/

## SQL 分类

- DDL(Data Definition Language) ： 数据定义语言，用来定义数据库对象：数据库，表，列等

  DDL 简单理解就是用来操作数据库，表等

  ![image-20220910090818084](http://static.5ibug.net/vitepress/assets/images/mysql/202209100916598.png)

- DML(Data Manipulation Language) 数据操作语言，用来对数据库中表的数据进行增删改

  DML 简单理解就对表中数据进行增删改

  ![image-20220910090815829](http://static.5ibug.net/vitepress/assets/images/mysql/202209100916681.png)

- DQL(Data Query Language) 数据查询语言，用来查询数据库中表的记录(数据)

  DQL 简单理解就是对数据进行查询操作。从数据库表中查询到我们想要的数据。

- DCL(Data Control Language) 数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户

  DML 简单理解就是对数据库进行权限控制。比如我让某一个数据库表只能让某一个用户进行操作等。

> 注意： 以后我们最常操作的是 `DML` 和 `DQL` ，因为我们开发中最常操作的就是数据。
