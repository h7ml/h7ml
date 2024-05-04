---
icon: mysql
order: 7
date: 2022-03-20
author: h7ml
category: mysql
tag: mysql
title: 约束
---

## 约束

![image-20220910100133140](https://static.h7ml.cn/vitepress/assets/images/mysql/202209101001177.png)

上面表中可以看到表中数据存在一些问题：

- id 列一般是用标示数据的唯一性的，而上述表中的 id 为 1 的有三条数据，并且 `马花疼` 没有 id 进行标示

- `柳白` 这条数据的 age 列的数据是 3000，而人也不可能活到 3000 岁

- `马运` 这条数据的 math 数学成绩是-5，而数学学得再不好也不可能出现负分

- `柳青` 这条数据的 english 列（英文成绩）值为 null，而成绩即使没考也得是 0 分

针对上述数据问题，我们就可以从数据库层面在添加数据的时候进行限制，这个就是约束。

## 概念

- 约束是作用于表中列上的规则，用于限制加入表的数据

  例如：我们可以给 id 列加约束，让其值不能重复，不能为 null 值。

- 约束的存在保证了数据库中数据的正确性、有效性和完整性

  添加约束可以在添加数据的时候就限制不正确的数据，年龄是 3000，数学成绩是-5 分这样无效的数据，继而保障数据的完整性。

## 分类

- **非空约束： 关键字是 NOT NULL**

  保证列中所有的数据不能有 null 值。

  例如：id 列在添加 `马花疼` 这条数据时就不能添加成功。

- **唯一约束：关键字是 UNIQUE**

  保证列中所有数据各不相同。

  例如：id 列中三条数据的值都是 1，这样的数据在添加时是绝对不允许的。

- **主键约束： 关键字是 PRIMARY KEY**

  主键是一行数据的唯一标识，要求非空且唯一。一般我们都会给没张表添加一个主键列用来唯一标识数据。

  例如：上图表中 id 就可以作为主键，来标识每条数据。那么这样就要求数据中 id 的值不能重复，不能为 null 值。

- **检查约束： 关键字是 CHECK**

  保证列中的值满足某一条件。

  例如：我们可以给 age 列添加一个范围，最低年龄可以设置为 1，最大年龄就可以设置为 300，这样的数据才更合理些。

  > 注意：MySQL 不支持检查约束。
  >
  > 这样是不是就没办法保证年龄在指定的范围内了？从数据库层面不能保证，以后可以在 java 代码中进行限制，一样也可以实现要求。

- **默认约束： 关键字是 DEFAULT**

  保存数据时，未指定值则采用默认值。

  例如：我们在给 english 列添加该约束，指定默认值是 0，这样在添加数据时没有指定具体值时就会采用默认给定的 0。

- **外键约束： 关键字是 FOREIGN KEY**

  外键用来让两个表的数据之间建立链接，保证数据的一致性和完整性。

  外键约束现在可能还不太好理解，后面我们会重点进行讲解。

## 非空约束

- 概念

  非空约束用于保证列中所有数据不能有 NULL 值

- 语法

  - 添加约束

    ```sql
    -- 创建表时添加非空约束
    CREATE TABLE 表名(
       列名 数据类型 NOT NULL,
       …
    );

    ```

    ```sql
    -- 建完表后添加非空约束
    ALTER TABLE 表名 MODIFY 字段名 数据类型 NOT NULL;
    ```

  - 删除约束

    ```sql
    ALTER TABLE 表名 MODIFY 字段名 数据类型;
    ```

## 唯一约束

- 概念

  唯一约束用于保证列中所有数据各不相同

- 语法

  - 添加约束

    ```sql
    -- 创建表时添加唯一约束
    CREATE TABLE 表名(
       列名 数据类型 UNIQUE [AUTO_INCREMENT],
       -- AUTO_INCREMENT: 当不指定值时自动增长
       …
    );
    CREATE TABLE 表名(
       列名 数据类型,
       …
       [CONSTRAINT] [约束名称] UNIQUE(列名)
    );
    ```

    ```sql
    -- 建完表后添加唯一约束
    ALTER TABLE 表名 MODIFY 字段名 数据类型 UNIQUE;
    ```

  - 删除约束

    ```sql
    ALTER TABLE 表名 DROP INDEX 字段名;
    ```

## 主键约束

- 概念

  主键是一行数据的唯一标识，要求非空且唯一

  一张表只能有一个主键

- 语法

  - 添加约束

    ```sql
    -- 创建表时添加主键约束
    CREATE TABLE 表名(
       列名 数据类型 PRIMARY KEY [AUTO_INCREMENT],
       …
    );
    CREATE TABLE 表名(
       列名 数据类型,
       [CONSTRAINT] [约束名称] PRIMARY KEY(列名)
    );

    ```

    ```sql
    -- 建完表后添加主键约束
    ALTER TABLE 表名 ADD PRIMARY KEY(字段名);
    ```

  - 删除约束

    ```sql
    ALTER TABLE 表名 DROP PRIMARY KEY;
    ```

## 默认约束

- 概念

  保存数据时，未指定值则采用默认值

- 语法

  - 添加约束

    ```sql
    -- 创建表时添加默认约束
    CREATE TABLE 表名(
       列名 数据类型 DEFAULT 默认值,
       …
    );
    ```

    ```sql
    -- 建完表后添加默认约束
    ALTER TABLE 表名 ALTER 列名 SET DEFAULT 默认值;
    ```

  - 删除约束

    ```sql
    ALTER TABLE 表名 ALTER 列名 DROP DEFAULT;
    ```

## 约束练习

**根据需求，为表添加合适的约束**

```sql
DROP TABLE IF EXISTS emp;
-- 员工表
CREATE TABLE emp (
 id INT,  -- 员工id，主键且自增长
    ename VARCHAR(50), -- 员工姓名，非空且唯一
    joindate DATE,  -- 入职日期，非空
    salary DOUBLE(7,2),  -- 工资，非空
    bonus DOUBLE(7,2)  -- 奖金，如果没有将近默认为0
);
```

上面一定给出了具体的要求，我们可以根据要求创建这张表，并为每一列添加对应的约束。建表语句如下：

```sql
DROP TABLE IF EXISTS emp;

-- 员工表
CREATE TABLE emp (
  id INT PRIMARY KEY, -- 员工id，主键且自增长
  ename VARCHAR(50) NOT NULL UNIQUE, -- 员工姓名，非空并且唯一
  joindate DATE NOT NULL , -- 入职日期，非空
  salary DOUBLE(7,2) NOT NULL , -- 工资，非空
  bonus DOUBLE(7,2) DEFAULT 0 -- 奖金，如果没有奖金默认为0
);
```

通过上面语句可以创建带有约束的 `emp` 表，约束能不能发挥作用呢。接下来我们一一进行验证，先添加一条没有问题的数据

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(1,'张三','1999-11-11',8800,5000);
```

- **验证主键约束，非空且唯一**

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,'张三','1999-11-11',8800,5000);
```

执行结果如下：

![image-20220910095026441](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100950468.png)

从上面的结果可以看到，字段 `id` 不能为 null。那我们重新添加一条数据，如下：

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(1,'张三','1999-11-11',8800,5000);
```

执行结果如下：

![image-20220910095023930](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100950957.png)

从上面结果可以看到，1 这个值重复了。所以主键约束是用来限制数据非空且唯一的。那我们再添加一条符合要求的数据

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(2,'李四','1999-11-11',8800,5000);
```

执行结果如下：

![image-20220910095021461](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100950499.png)

- **验证非空约束**

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(3,null,'1999-11-11',8800,5000);
```

执行结果如下：

![image-20220910095019017](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100950046.png)

从上面结果可以看到，`ename` 字段的非空约束生效了。

- **验证唯一约束**

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(3,'李四','1999-11-11',8800,5000);
```

执行结果如下：

![image-20220910095016451](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100950481.png)

从上面结果可以看到，`ename` 字段的唯一约束生效了。

- **验证默认约束**

```sql
INSERT INTO emp(id,ename,joindate,salary) values(3,'王五','1999-11-11',8800);
```

执行完上面语句后查询表中数据，如下图可以看到王五这条数据的 bonus 列就有了默认值 0。

![image-20220910095013431](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100950457.png)

\==注意：默认约束只有在不给值时才会采用默认值。如果给了 null，那值就是 null 值。==

如下：

```sql
INSERT INTO emp(id,ename,joindate,salary,bonus) values(4,'赵六','1999-11-11',8800,null);
```

执行完上面语句后查询表中数据，如下图可以看到赵六这条数据的 bonus 列的值是 null。

![image-20220910095009756](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100950789.png)

- **验证自动增长： auto_increment 当列是数字类型 并且唯一约束**

重新创建 `emp` 表，并给 id 列添加自动增长

```sql
-- 员工表
CREATE TABLE emp (
  id INT PRIMARY KEY auto_increment, -- 员工id，主键且自增长
  ename VARCHAR(50) NOT NULL UNIQUE, -- 员工姓名，非空并且唯一
  joindate DATE NOT NULL , -- 入职日期，非空
  salary DOUBLE(7,2) NOT NULL , -- 工资，非空
  bonus DOUBLE(7,2) DEFAULT 0 -- 奖金，如果没有奖金默认为0
);
```

接下来给 emp 添加数据，分别验证不给 id 列添加值以及给 id 列添加 null 值，id 列的值会不会自动增长：

```sql
INSERT INTO emp(ename,joindate,salary,bonus) values('赵六','1999-11-11',8800,null);
INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,'赵六2','1999-11-11',8800,null);
INSERT INTO emp(id,ename,joindate,salary,bonus) values(null,'赵六3','1999-11-11',8800,null);
```

## 外键约束

### 概述

外键用来让两个表的数据之间建立链接，保证数据的一致性和完整性。

如何理解上面的概念呢？如下图有两张表，员工表和部门表：

![image-20220910095002366](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100950395.png)

员工表中的 dep_id 字段是部门表的 id 字段关联，也就是说 1 号学生张三属于 1 号部门研发部的员工。现在我要删除 1 号部门，就会出现错误的数据（员工表中属于 1 号部门的数据）。而我们上面说的两张表的关系只是我们认为它们有关系，此时需要通过外键让这两张表产生数据库层面的关系，这样你要删除部门表中的 1 号部门的数据将无法删除。

### 语法

- 添加外键约束

```sql
-- 创建表时添加外键约束
CREATE TABLE 表名(
   列名 数据类型,
   …
   [CONSTRAINT] [外键名称] FOREIGN KEY(外键列名) REFERENCES 主表(主表列名)
);
```

```sql
-- 建完表后添加外键约束
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);
```

- 删除外键约束

```sql
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;
```

### 练习

根据上述语法创建员工表和部门表，并添加上外键约束：

```sql
-- 删除表
DROP TABLE IF EXISTS emp;
DROP TABLE IF EXISTS dept;

-- 部门表
CREATE TABLE dept(
 id int primary key auto_increment,
 dep_name varchar(20),
 addr varchar(20)
);
-- 员工表
CREATE TABLE emp(
 id int primary key auto_increment,
 name varchar(20),
 age int,
 dep_id int,

 -- 添加外键 dep_id,关联 dept 表的id主键
 CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES dept(id)
);
```

添加数据

```sql
-- 添加 2 个部门
insert into dept(dep_name,addr) values
('研发部','广州'),('销售部', '深圳');

-- 添加员工,dep_id 表示员工所在的部门
INSERT INTO emp (NAME, age, dep_id) VALUES
('张三', 20, 1),
('李四', 20, 1),
('王五', 20, 1),
('赵六', 20, 2),
('孙七', 22, 2),
('周八', 18, 2);
```

此时删除 `研发部` 这条数据，会发现无法删除。

删除外键

```sql
alter table emp drop FOREIGN key fk_emp_dept;
```

重新添加外键

```sql
alter table emp add CONSTRAINT fk_emp_dept FOREIGN key(dep_id) REFERENCES dept(id);
```
