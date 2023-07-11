---
icon: PostgreSQL
order: 2
date: 2023-7-11
author: h7ml
category: PostgreSQL
tag: PostgreSQL
title:  PostgreSQL的语法知识和常见查询操作
---

## 1. 数据定义语句（DDL）

### 1.1. 登录数据库

```sql
psql -U username -d database_name
```

### 1.2. 创建数据库

```sql
CREATE DATABASE database_name;
```

### 1.3. 查看所有数据库

```sql
\l
```

### 1.4. 连接数据库

```sql
\c database_name
```

### 1.5. 查看所有数据表

```sql
\dt
```

### 1.6. 删除数据库

```sql
DROP DATABASE database_name;
```

## 2. 表操作

### 2.1. 创建表

```sql
CREATE TABLE table_name (
    column1 data_type,
    column2 data_type,
    ...
);
```

### 2.2. 查看表结构

```sql
\d table_name
```

### 2.3. 删除表

```sql
DROP TABLE table_name;
```

### 2.4. 修改表名

```sql
ALTER TABLE table_name RENAME TO new_table_name;
```

#### 2.5. 修改表的所有者

```sql
ALTER TABLE table_name OWNER TO new_owner;
```

#### 2.6. 修改表的注释

```sql
COMMENT ON TABLE table_name IS 'new_comment';
```

### 2.7. 修改列名

```sql
ALTER TABLE table_name RENAME COLUMN column_name TO new_column_name;
```

#### 2.8. 修改列的数据类型

```sql
ALTER TABLE table_name ALTER COLUMN column_name TYPE new_data_type;
```

#### 2.9. 修改列的默认值

```sql
ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT new_default;
```

#### 2.10. 修改列的注释

```sql
COMMENT ON COLUMN table_name.column_name IS 'new_comment';
```

### 2.11. 删除列

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

### 2.12. 添加列

```sql
ALTER TABLE table_name ADD COLUMN column_name data_type;
```

#### 2.13. 添加主键

```sql
ALTER TABLE table_name ADD PRIMARY KEY (column_name);
```

#### 2.14. 添加外键

```sql
ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES table_name (column_name);
```

#### 2.15. 添加唯一约束

```sql
ALTER TABLE table_name ADD UNIQUE (column_name);
```

### 2.16. 添加检查约束

```sql
ALTER TABLE table_name ADD CHECK (column_name > 0);
```

### 2.17. 删除主键

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

### 2.18. 删除外键

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

### 2.19. 删除唯一约束

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

### 2.20. 删除检查约束

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

### 2.21 查询列
    
```sql
SELECT column_name FROM table_name;
```

## 3. 查询操作

### 3.1. 查询所有数据

```sql
SELECT * FROM table_name;
```

### 3.2. 查询指定列

```sql
SELECT column1, column2 FROM table_name;
```

#### 3.3. 查询指定列并去重

```sql
SELECT DISTINCT column1, column2 FROM table_name;
```

#### 3.4. 查询指定列并排序

```sql
SELECT column1, column2 FROM table_name ORDER BY column1 ASC, column2 DESC;
```

#### 3.5. 查询指定列并限制返回行数

```sql
SELECT column1, column2 FROM table_name LIMIT 10;
```

#### 3.6. 查询指定列并限制返回行数并跳过指定行数

```sql
SELECT column1, column2 FROM table_name LIMIT 10 OFFSET 10;
```

#### 3.7. 查询指定列并限制返回行数并跳过指定行数并排序

```sql
SELECT column1, column2 FROM table_name ORDER BY column1 ASC, column2 DESC LIMIT 10 OFFSET 10;
```

#### 3.8. 查询指定列并限制返回行数并跳过指定行数并排序并去重

```sql
SELECT DISTINCT column1, column2 FROM table_name ORDER BY column1 ASC, column2 DESC LIMIT 10 OFFSET 10;
```

### 3.9.  聚合函数
    
```sql
SELECT function(column) AS alias
FROM table_name;
```

> 常见的聚合函数有：AVG、COUNT、SUM、MIN、MAX。

#### 3.10.  聚合函数并分组
    
```sql
SELECT function(column) AS alias
FROM table_name
GROUP BY column;
```

#### 3.11.  聚合函数并分组并排序
    
```sql
SELECT function(column) AS alias
FROM table_name
GROUP BY column
ORDER BY alias ASC;
```

#### 3.12.  聚合函数并分组并排序并限制返回行数并跳过指定行数
    
```sql
SELECT function(column) AS alias
FROM table_name
GROUP BY column
ORDER BY alias ASC
LIMIT 10 OFFSET 10;
```

#### 3.13.  聚合函数并分组并排序并限制返回行数并跳过指定行数并去重
    
```sql
SELECT DISTINCT function(column) AS alias
FROM table_name
GROUP BY column
ORDER BY alias ASC
LIMIT 10 OFFSET 10;
```

#### 3.14.  聚合函数并分组并排序并限制返回行数并跳过指定行数并去重并过滤
    
```sql
SELECT DISTINCT function(column) AS alias
FROM table_name
WHERE column > 0
GROUP BY column
ORDER BY alias ASC
LIMIT 10 OFFSET 10;
```

### 3.13 条件查询

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...;
```

> 常见的条件操作符有：=、<、>、<=、>=、<>等。

#### 3.14.  条件查询并分组
    
```sql
SELECT column1, column2, ...
FROM table_name
WHERE column1 = value1
GROUP BY column2;
```

#### 3.15.  条件查询并分组并排序
    
```sql
SELECT column1, column2, ...
FROM table_name
WHERE column1 = value1
GROUP BY column2
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...;
```

#### 3.16.  条件查询并分组并排序并限制返回行数并跳过指定行数
    
```sql
SELECT column1, column2, ...
FROM table_name
WHERE column1 = value1
GROUP BY column2
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...
LIMIT 10 OFFSET 10;
```

> ASC表示升序，DESC表示降序。


#### 3.17.  条件查询并分组并排序并限制返回行数并跳过指定行数并去重
    
```sql
SELECT DISTINCT column1, column2, ...
FROM table_name
WHERE column1 = value1
GROUP BY column2
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...
LIMIT 10 OFFSET 10;
```

### 3.18.  连接查询
    
```sql
SELECT column1, column2, ...
FROM table1
JOIN table2 ON condition;
```

> 常见的连接类型有：INNER JOIN、LEFT JOIN、RIGHT JOIN、FULL JOIN。

### 3.19.  连接查询并分组
    
```sql
SELECT column1, column2, ...
FROM table1
JOIN table2 ON condition
GROUP BY column1;
```

#### 3.20.  连接查询并分组并排序
    
```sql
SELECT column1, column2, ...
FROM table1
JOIN table2 ON condition
GROUP BY column1
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...;
```

#### 3.21.  连接查询并分组并排序并限制返回行数并跳过指定行数
    
```sql
SELECT column1, column2, ...
FROM table1
JOIN table2 ON condition
GROUP BY column1
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...
LIMIT 10 OFFSET 10;
```


### 3.22.  子查询
    
```sql
SELECT column1, column2, ...
FROM table1
WHERE column1 IN (SELECT column1 FROM table2);
```

### 3.23.  分组查询
    
```sql
SELECT column1, column2, ...
FROM table1
GROUP BY column1;
```
> 常见的聚合函数有：AVG、COUNT、SUM、MIN、MAX。

#### 3.24.  分组查询并排序
    
```sql
SELECT column1, column2, ...
FROM table1
GROUP BY column1
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...;
```

#### 3.25.  分组查询并排序并限制返回行数并跳过指定行数
    
```sql
SELECT column1, column2, ...
FROM table1
GROUP BY column1
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...
LIMIT 10 OFFSET 10;
```

#### 3.26.  分组查询并排序并限制返回行数并跳过指定行数并去重
    
```sql
SELECT DISTINCT column1, column2, ...
FROM table1
GROUP BY column1
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...
LIMIT 10 OFFSET 10;
```

### 3.27 嵌套查询
    
```sql
SELECT column1, column2, ...
FROM table1
WHERE column1 IN (SELECT column1 FROM table2);
```

### 3.28 更新操作
    
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### 3.29 删除操作
    
```sql
DELETE FROM table_name
WHERE condition;
``` 

## PostgreSQL特有功能

### 4.1. JSON数据类型

PostgreSQL支持存储和查询JSON数据类型。


```sql
CREATE TABLE table_name (
    json_column JSON
);

INSERT INTO table_name (json_column)
    VALUES ('{"key": "value"}');

SELECT json_column->>'key'
FROM table_name;
```

### 4.2 全文搜索

PostgreSQL提供全文搜索功能，可以在文本数据中进行高效的关键词搜索。

```sql
CREATE INDEX idx_text_search ON table_name USING gin(to_tsvector('english', column));

SELECT *
FROM table_name
WHERE to_tsvector('english', column) @@ to_tsquery('english', 'keyword');
```

### 4.3. 空间数据类型

PostgreSQL支持空间数据类型和空间索引，用于存储和查询地理位置信息。

```sql
CREATE TABLE table_name (
    id SERIAL PRIMARY KEY,
    location GEOMETRY(Point, 4326)
);

INSERT INTO table_name (location)
    VALUES (ST_SetSRID(ST_MakePoint(0, 0), 4326));

SELECT *
FROM table_name
WHERE ST_DWithin(location, ST_MakePoint(1, 1)::geography, 1000);
```

## 参考文档

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [PostgreSQL Exercises](https://pgexercises.com/)
- [菜鸟教程](https://www.runoob.com//postgresql-tutorial.html)
