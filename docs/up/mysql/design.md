---
icon: mysql
order: 8
date: 2022-03-20
author: h7ml
category: mysql
tag: mysql
title: 数据库设计
---

## 数据库设计

## 数据库设计简介

- 软件的研发步骤

  ![image-20220910095431929](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954963.png)

- 数据库设计概念

  - 数据库设计就是根据业务系统的具体需求，结合我们所选用的 DBMS，为这个业务系统构造出最优的数据存储模型。
  - 建立数据库中的==表结构==以及==表与表之间的关联关系==的过程。
  - 有哪些表？表里有哪些字段？表和表之间有什么关系？

- 数据库设计的步骤

  - 需求分析（数据是什么? 数据具有哪些属性? 数据与属性的特点是什么）

  - 逻辑分析（通过 ER 图对数据库进行逻辑建模，不需要考虑我们所选用的数据库管理系统）

    如下图就是 ER(Entity/Relation)图：

    ![image-20220910095440504](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954530.png)

  - 物理设计（根据数据库自身的特点把逻辑设计转换为物理设计）

  - 维护设计（1.对新的需求进行建表；2.表优化）

- 表关系

  - 一对一

    - 如：用户 和 用户详情
    - 一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能

    ![image-20220910095444549](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954571.png)

    上图左边是用户的详细信息，而我们真正在展示用户信息时最长用的则是上图右边红框所示，所以我们会将详细信息查分成两周那个表。

  - 一对多

    - 如：部门 和 员工

    - 一个部门对应多个员工，一个员工对应一个部门。如下图：

      ![image-20220910095448786](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954816.png)

  - 多对多

    - 如：商品 和 订单

    - 一个商品对应多个订单，一个订单包含多个商品。如下图：

      ![image-20220910095451925](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954953.png)

## 表关系(一对多)

- 一对多

  - 如：部门 和 员工
  - 一个部门对应多个员工，一个员工对应一个部门。

- 实现方式

  \==在多的一方建立外键，指向一的一方的主键==

- 案例

  我们还是以 `员工表` 和 `部门表` 举例:

  ![image-20220910095455573](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954593.png)

  经过分析发现，员工表属于多的一方，而部门表属于一的一方，此时我们会在员工表中添加一列（dep_id），指向于部门表的主键（id）：

  ![image-20220910095458797](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100954824.png)

  建表语句如下：

  ```sql
  -- 删除表
  DROP TABLE IF EXISTS tb_emp;
  DROP TABLE IF EXISTS tb_dept;

  -- 部门表
  CREATE TABLE tb_dept(
   id int primary key auto_increment,
   dep_name varchar(20),
   addr varchar(20)
  );
  -- 员工表
  CREATE TABLE tb_emp(
   id int primary key auto_increment,
   name varchar(20),
   age int,
   dep_id int,

   -- 添加外键 dep_id,关联 dept 表的id主键
   CONSTRAINT fk_tb_emp_dept FOREIGN KEY(dep_id) REFERENCES tb_dept(id)
  );
  ```

  查看表结构模型图：

  ![image-20220910095502423](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955443.png)

## 表关系(多对多)

- 多对多

  - 如：商品 和 订单
  - 一个商品对应多个订单，一个订单包含多个商品

- 实现方式

  \==建立第三张中间表，中间表至少包含两个外键，分别关联两方主键==

- 案例

  我们以 `订单表` 和 `商品表` 举例：

  ![image-20220910095505739](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955775.png)

  经过分析发现，订单表和商品表都属于多的一方，此时需要创建一个中间表，在中间表中添加订单表的外键和商品表的外键指向两张表的主键：

  ![image-20220910095509140](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955162.png)

  建表语句如下：

  ```sql
  -- 删除表
  DROP TABLE IF EXISTS tb_order_goods;
  DROP TABLE IF EXISTS tb_order;
  DROP TABLE IF EXISTS tb_goods;

  -- 订单表
  CREATE TABLE tb_order(
   id int primary key auto_increment,
   payment double(10,2),
   payment_type TINYINT,
   status TINYINT
  );

  -- 商品表
  CREATE TABLE tb_goods(
   id int primary key auto_increment,
   title varchar(100),
   price double(10,2)
  );

  -- 订单商品中间表
  CREATE TABLE tb_order_goods(
   id int primary key auto_increment,
   order_id int,
   goods_id int,
   count int
  );

  -- 建完表后，添加外键
  alter table tb_order_goods add CONSTRAINT fk_order_id FOREIGN key(order_id) REFERENCES tb_order(id);
  alter table tb_order_goods add CONSTRAINT fk_goods_id FOREIGN key(goods_id) REFERENCES tb_goods(id);
  在中间表中添加订单表的外键和商品表的外键指向两张表的主键：
  ```

````text

查看表结构模型图：

  <img src="assets/image-20210724140307910.png" alt="image-20210724140307910" style="zoom:80%;" />

### 2.4  表关系(一对一)

* 一对一
  * 如：用户 和 用户详情
  * 一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能

* 实现方式

  ==在任意一方加入外键，关联另一方主键，并且设置外键为唯一(UNIQUE)==

* 案例

  我们以 `用户表` 举例：

  <img src="assets/image-20210724135346913.png" alt="image-20210724135346913" style="zoom:70%;" />

  而在真正使用过程中发现 id、photo、nickname、age、gender 字段比较常用，此时就可以将这张表查分成两张表。

   <img src="assets/image-20210724135649341.png" alt="image-20210724135649341" style="zoom:70%;" />

   建表语句如下：

```sql

````

```auto
查看表结构模型图：
```

![image-20220910095514389](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955410.png)

## 数据库设计案例

根据下图设计表及表和表之间的关系：

![image-20220910095518049](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955077.png)

经过分析，我们分为 `专辑表` `曲目表` `短评表` `用户表` 4 张表。

![image-20220910095522282](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955318.png)

一个专辑可以有多个曲目，一个曲目只能属于某一张专辑，所以专辑表和曲目表的关系是==一对多==。

一个专辑可以被多个用户进行评论，一个用户可以对多个专辑进行评论，所以专辑表和用户表的关系是 ==多对多==。

一个用户可以发多个短评，一个短评只能是某一个人发的，所以用户表和短评表的关系是 ==一对多==。

![image-20220910095531461](https://static.h7ml.cn/vitepress/assets/images/mysql/202209100955488.png)
