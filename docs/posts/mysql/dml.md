---
icon: mysql
order: 6
date: 2022-03-20
author: h7ml
category: mysql
tag: mysql
title: DML
---

DML 主要是对数据进行增（insert）删（delete）改（update）操作。

## 添加数据

### 给指定列添加数据

```sql
INSERT INTO 表名(列名1,列名2,…) VALUES(值1,值2,…);
```

### 给全部列添加数据

```sql
INSERT INTO 表名 VALUES(值1,值2,…);
```

### 批量添加数据

```sql
INSERT INTO 表名(列名1,列名2,…) VALUES(值1,值2,…),(值1,值2,…),(值1,值2,…)…;
INSERT INTO 表名 VALUES(值1,值2,…),(值1,值2,…),(值1,值2,…)…;
```

### 练习

为了演示以下的增删改操作是否操作成功，故先将查询所有数据的语句介绍给大家：

```sql
select * from stu;
```

-- 给指定列添加数据

```sql
INSERT INTO stu (id, NAME) VALUES (1, '张三');
```

-- 给所有列添加数据，列名的列表可以省略的

```sql
INSERT INTO stu (id,NAME,sex,birthday,score,email,tel,STATUS) VALUES (2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1);

INSERT INTO stu VALUES (2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1);
```

-- 批量添加数据

```sql
INSERT INTO stu VALUES
(2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1),
(2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1),
(2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1);
```

## 修改数据

### 修改表数据

```sql
UPDATE 表名 SET 列名1=值1,列名2=值2,… [WHERE 条件] ;
```

注意：

修改语句中如果不加条件，则将所有数据都修改！像上面的语句中的中括号，表示在写 sql 语句中可以省略这部分练习

将张三的性别改为女

```sql
update stu set sex = '女' where name = '张三';
```

将张三的生日改为 1999-12-12 分数改为 99.99

```sql
update stu set birthday = '1999-12-12', score = 99.99 where name = '张三';
注意：如果update语句没有加where条件，则会将表中所有数据全部修改！
```

```sql
update stu set sex = '女';
```

上面语句的执行完后查询到的结果是：

![image-20220910090812642](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907602.png)

## 删除数据

```sql
DELETE FROM 表名 [WHERE 条件] ;
```

练习

-- 删除张三记录

```sql
delete from stu where name = '张三';
```

-- 删除 stu 表中所有的数据

```sql
delete from stu;
```
