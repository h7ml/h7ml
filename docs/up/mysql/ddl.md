---
icon: mysql
order: 4
date: 2022-03-20
author: h7ml
category: mysql
tag: mysql
title: DDL:操作数据库
---

## DDL:操作数据库

我们先来学习 DDL 来操作数据库。而操作数据库主要就是对数据库的增删查操作。

## 查询

查询所有的数据库

```sql
SHOW DATABASES;
```

运行上面语句效果如下：

![image-20220910090812642](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908686.png)

上述查询到的是的这些数据库是 mysql 安装好自带的数据库，我们以后不要操作这些数据库。

## 创建数据库

- **创建数据库**：

```sql
CREATE DATABASE 数据库名称;
```

运行语句效果如下：

![image-20220910090808988](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908036.png)

而在创建数据库的时候，我并不知道 db1 数据库有没有创建，直接再次创建名为 db1 的数据库就会出现错误。

![image-20220910090806785](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908835.png)

为了避免上面的错误，在创建数据库的时候先做判断，如果不存在再创建。

- **创建数据库(判断，如果不存在则创建)**

```sql
CREATE DATABASE IF NOT EXISTS 数据库名称;
```

运行语句效果如下：

![image-20220910090801352](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908394.png)

从上面的效果可以看到虽然 db1 数据库已经存在，再创建 db1 也没有报错，而创建 db2 数据库则创建成功。

## 删除数据库

- **删除数据库**

```sql
DROP DATABASE 数据库名称;
```

- **删除数据库(判断，如果存在则删除)**

```sql
DROP DATABASE IF EXISTS 数据库名称;
```

运行语句效果如下：

![image-20220910090758815](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907863.png)

## 使用数据库

数据库创建好了，要在数据库中创建表，得先明确在哪儿个数据库中操作，此时就需要使用数据库。

- **使用数据库**

```sql
USE 数据库名称;
```

- **查看当前使用的数据库**

```sql
SELECT DATABASE();
```

运行语句效果如下：

![image-20220910090753385](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907430.png)
