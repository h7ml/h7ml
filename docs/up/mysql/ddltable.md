---
icon: mysql
order: 5
date: 2022-03-20
author: h7ml
category: mysql
tag: mysql
title: DDL:操作表
---

## DDL:操作表

操作表也就是对表进行增（Create）删（Retrieve）改（Update）查（Delete）。

## 查询表

- **查询当前数据库下所有表名称**

我们创建的数据库中没有任何表，因此我们进入 mysql 自带的 mysql 数据库，执行上述语句查看

![image-20220910090749302](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/mysql/202209100907344.png)

- **查询表结构**

查看 mysql 数据库中 func 表的结构，运行语句如下：

![image-20220910090745367](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/mysql/202209100907412.png)

## 创建表

- **创建表**

```sql
CREATE TABLE 表名 (
 字段名1  数据类型1,
 字段名2  数据类型2,
 …
 字段名n  数据类型n
);

```

> 注意：最后一行末尾，不能加逗号

知道了创建表的语句，那么我们创建创建如下结构的表

![image-20220910090741389](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/mysql/202209100907433.png)

```sql
create table tb_user (
 id int,
    username varchar(20),
    password varchar(32)
);
```

运行语句如下：

![image-20220910090737679](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/mysql/202209100907724.png)

## 数据类型

MySQL 支持多种类型，可以分为三类：

- 数值

  ```sql
  tinyint : 小整数型，占一个字节
  int ： 大整数类型，占四个字节
   eg ： age int
  double ： 浮点类型
   使用格式： 字段名 double(总长度,小数点后保留的位数)
   eg ： score double(5,2)
  ```

- 日期

  ```sql
  date ： 日期值。只包含年月日
   eg ：birthday date ：
  datetime ： 混合日期和时间值。包含年月日时分秒
  ```

- 字符串

  ```sql
  char ： 定长字符串。
   优点：存储性能高
   缺点：浪费空间
   eg ： name char(10)  如果存储的数据字符个数不足10个，也会占10个的空间
  varchar ： 变长字符串。
   优点：节约空间
   缺点：存储性能底
   eg ： name varchar(10) 如果存储的数据字符个数不足10个，那就数据字符个数是几就占几个的空间
  ```

> 注意：其他类型参考资料中的《MySQL 数据类型\].xlsx》

**案例：**

```text
需求：设计一张学生表，请注重数据类型、长度的合理性
 1. 编号
 2. 姓名，姓名最长不超过10个汉字
 3. 性别，因为取值只有两种可能，因此最多一个汉字
 4. 生日，取值为年月日
 5. 入学成绩，小数点后保留两位
 6. 邮件地址，最大长度不超过 64
 7. 家庭联系电话，不一定是手机号码，可能会出现 - 等字符
 8. 学生状态（用数字表示，正常、休学、毕业...）
```

语句设计如下：

```sql
create table student (
 id int,
    name varchar(10),
    gender char(1),
    birthday date,
    score double(5,2),
    email varchar(15),
    tel varchar(15),
    status tinyint
);
```

## 删除表

- **删除表**

- **删除表时判断表是否存在**

运行语句效果如下：

![image-20220910090731175](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/mysql/202209100907228.png)

## 修改表

- **修改表名**

```sql
ALTER TABLE 表名 RENAME TO 新的表名;

-- 将表名student修改为stu
alter table student rename to stu;
```

- **添加一列**

```sql
ALTER TABLE 表名 ADD 列名 数据类型;

-- 给stu表添加一列address，该字段类型是varchar(50)
alter table stu add address varchar(50);
```

- **修改数据类型**

```sql
ALTER TABLE 表名 MODIFY 列名 新数据类型;

-- 将stu表中的address字段的类型改为 char(50)
alter table stu modify address char(50);
```

- **修改列名和数据类型**

```sql
ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;

-- 将stu表中的address字段名改为 addr，类型改为varchar(50)
alter table stu change address addr varchar(50);
```

- **删除列**

```sql
ALTER TABLE 表名 DROP 列名;

-- 将stu表中的addr字段 删除
alter table stu drop addr;
```
