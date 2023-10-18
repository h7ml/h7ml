---
icon: mysql
description: 本文介绍了如何使用 Node.js 连接多种不同类型的数据库，包括 MySQL、MongoDB、PostgreSQL、Oracle、Microsoft SQL Server、Redis、SQLite、Couchbase、Cassandra、Neo4j、ArangoDB、RethinkDB、CouchDB、Firebase 和 MariaDB，并提供了相应的示例代码和依赖包安装步骤。
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>在 Node.js 中连接 MySQL、MongoDB 和 PostgreSQL
order: 3
star: 3
date: 2024-04-10
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
category:
  - Node.js
  - MySQL
  - MongoDB
  - PostgreSQL
tag:
  - 数据库连接
  - Node.js
shortTitle: 使用 Node.js 连接多种类型数据库
head:
  - - meta
    - name: keywords
      content: 数据库, Node.js, MySQL, MongoDB, PostgreSQL, Oracle, Microsoft SQL Server, Redis, SQLite, Couchbase, Cassandra, Neo4j, ArangoDB, RethinkDB, CouchDB, Firebase, 示例代码, 依赖包, 配置文件, 环境变量
---

# 使用 Node.js 连接多种类型数据库

## 关系对比

| 数据库 | 驱动/模块 | 连接方式 | 优缺点 |
| --- | --- | --- | --- |
| MariaDB | mariadb | 使用 `mariadb.createConnection()` 创建连接，或者使用 `mariadb.createPool()` 创建连接池 | MariaDB 是 MySQL 的一个分支，与 MySQL 兼容。驱动程序相对较新，但已受到广泛认可和广泛使用。 |
| MongoDB | mongodb | 使用 `mongodb.MongoClient.connect()` 创建连接 | MongoDB 是一个面向文档的 NoSQL 数据库，具有可伸缩性、灵活性和高速读写等特点。MongoDB Node.js 驱动程序是官方支持的，并且易于使用。 |
| PostgreSQL | pg | 使用 `new pg.Client()` 创建连接 | PostgreSQL 是一个功能强大的关系型数据库，具有高度的稳定性和可靠性。pg 驱动程序是 Node.js 中最流行的 PostgreSQL 驱动程序之一。 |
| Oracle | oracledb | 使用 `oracledb.getConnection()` 创建连接 | Oracle 是一个功能强大的关系型数据库，主要用于企业级应用程序。oracledb 驱动程序是官方支持的，并且具有很好的性能和可靠性。 |
| Microsoft SQL Server | mssql | 使用 `new mssql.ConnectionPool()` 创建连接池 | Microsoft SQL Server 是一个功能强大的关系型数据库，主要用于企业级应用程序。mssql 驱动程序是 Node.js 中最流行的 Microsoft SQL Server 驱动程序之一。 |
| Redis | ioredis | 使用 `new Redis()` 创建连接 | Redis 是一个内存数据结构存储系统，适用于需要快速读写和高并发的应用程序。ioredis 是一个支持 Redis 集群和复制功能的 Redis 驱动程序。 |
| SQLite | better-sqlite3 | 使用 `better-sqlite3()` 创建连接 | SQLite 是一个非常轻量级的嵌入式数据库，适用于小型项目。better-sqlite3 是官方 SQLite3 驱动程序的代替品，速度更快且易于使用。 |
| Couchbase | couchbase | 使用 `new couchbase.Cluster()` 创建连接 | Couchbase 是一个面向文档的 NoSQL 数据库，适用于需要快速读写和高并发的应用程序。couchbase 驱动程序是官方支持的，并且具有很好的性能和可靠性。 |
| Cassandra | cassandra-driver | 使用 `new cassandra.Client()` 创建连接 | Cassandra 是一个分布式的 NoSQL 数据库，适用于大规模数据存储和处理。cassandra-driver 是官方支持的驱动程序，并具有很好的性能和可靠性。 |
| Neo4j | neo4j-driver | 使用 `neo4j.driver()` 创建连接 | Neo4j 是一个图形数据库，适用于需要处理高度连接数据的应用程序。neo4j-driver 是官方支持的 Node.js 驱动程序，并且易于使用。 |
| ArangoDB | arangojs | 使用 `new arangojs.Database()` 创建连接 | ArangoDB 是一个多模型数据库（支持文档、图形和键值数据），适用于需要存储多种类型数据的应用程序。ArangoJS 是一个用于 Node.js 的 ArangoDB 驱动程序。 |
| RethinkDB | rethinkdbdash | 使用 `rethinkdbdash()` 创建连接 | RethinkDB 是一个面向文档的 NoSQL 数据库，具有实时更新和可伸缩性等功能。它可以使用 RethinkDB 驱动程序或 rethinkdbdash。 |

## typeorm

TypeORM 是一个基于 TypeScript 的 ORM（对象关系映射）框架，它支持多种不同类型的数据库，包括 MySQL、PostgreSQL、SQLite、Microsoft SQL Server、Oracle 和 MongoDB 等。TypeORM 提供了一套简单易用的 API，让开发者可以使用面向对象的方式来管理数据库表格和数据。

### TypeORM 具有以下特点：

- 支持 TypeScript：TypeORM 是使用 TypeScript 编写的，因此可以充分利用 TypeScript 的强类型特性来避免很多潜在的错误。
- 支持多种数据库：除了传统的 SQL 数据库外，TypeORM 还支持 NoSQL 数据库 MongoDB。
- 易于使用：TypeORM 提供了一套简洁而易于理解的 API，使得开发者可以自然而然地使用面向对象的方式来操作数据库。
- 丰富的功能：TypeORM 不仅支持常见的 CRUD 操作，还提供了事务处理、迁移、查询构建器等丰富的功能。
- 可扩展性：TypeORM 支持插件机制，开发者可以编写自己的插件来扩展 TypeORM 的功能。

在使用 TypeORM 时，开发者需要定义实体类来映射数据库表格。实体类需要继承 `BaseEntity` 类，并使用装饰器来标记属性与表格字段的映射关系。例如：

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
```

以上代码定义了一个名为 `User` 的实体类，用于映射数据库中的 `user` 表格。`@Entity()` 装饰器表示该类是一个实体类，`@PrimaryGeneratedColumn()` 装饰器表示 `id` 属性是主键，并使用自动增长方式生成值。`@Column()` 装饰器则表示该属性对应表格的一个字段。

在定义完实体类后，就可以使用 TypeORM 提供的 API 来进行数据库操作了。例如，要查询所有用户的信息，可以使用以下代码：

```typescript
const users = await User.find();
```

TypeORM 还提供了很多其他的 API，包括添加、更新和删除数据等操作。总之，TypeORM 是一个功能强大、易于使用的 ORM 框架，适合用来开发各种类型的应用程序。

除了基本的 CRUD 操作外，TypeORM 还提供了一些高级功能，例如事务处理、查询构建器、关系映射等。

#### 事务处理

在数据库操作中，有时需要执行多个操作，而这些操作必须要么全部成功，要么全部失败。这时就需要使用事务处理机制来实现。TypeORM 提供了 `EntityManager` 类来支持事务处理。

```typescript
import { getManager } from 'typeorm';

// 创建 transaction
const result = await getManager().transaction(async (manager) => {
  // 在事务中执行多个操作
  const user = new User();
  user.name = 'Alice';
  user.email = 'alice@example.com';
  user.password = 'password';

  await manager.save(user);

  const post = new Post();
  post.title = 'My new post';
  post.content = 'This is my first post';
  post.author = user;

  await manager.save(post);
});
```

以上代码演示了一个简单的事务处理例子。在一个事务中，我们创建了一个新用户和一篇新文章，并将作者与文章关联起来。如果任何一个操作失败，整个事务都会被回滚。可以注意到，在 `transaction` 方法中传入的是一个回调函数，这个函数接收一个 `EntityManager` 对象，可以使用这个对象来执行数据库操作。

#### 查询构建器

TypeORM 的查询构建器提供了一种更加灵活的方式来构建查询语句，以便满足特定的查询需求。使用查询构建器，开发者可以将查询条件动态地构建成链式调用的方式。

```typescript
const users = await getRepository(User)
  .createQueryBuilder('user')
  .where('user.name = :name', { name: 'Alice' })
  .leftJoinAndSelect('user.posts', 'post')
  .orderBy('post.createdAt', 'DESC')
  .getMany();
```

以上代码演示了一个使用查询构建器来查询用户信息的例子。该例子中，我们首先创建了一个基于 `User` 实体的查询构建器，并使用 `where` 方法指定了查询条件，然后使用 `leftJoinAndSelect` 方法关联了用户和文章实体，并使用 `orderBy` 方法按照文章发布时间排序。最后，我们调用 `getMany()` 方法执行查询操作。

#### 关系映射

在数据库中，有时需要处理多个实体之间的关系。比如，在上面的例子中，一个用户可以拥有多篇文章。TypeORM 提供了多种不同的关系映射方式来满足这种需求，包括一对一、一对多、多对一和多对多关系。

以下是一个简单的例子，演示了如何使用 TypeORM 来定义一对多关系：

```typescript
@Entity()
export class User extends BaseEntity {
  // ...

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
}

@Entity()
export class Post extends BaseEntity {
  // ...

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;
}
```

以上代码中，我们使用 `@OneToMany` 和 `@ManyToOne` 装饰器来定义用户和文章之间的一对多关系。`@OneToMany` 装饰器表示一个用户可以拥有多篇文章，而 `@ManyToOne` 装饰器则表示每篇文章都有一个作者。

总之，TypeORM 是一个强大而灵活的 ORM 框架，支持多种不同类型的数据库，并提供了丰富的功能和易于使用的 API。无论是开发小型应用还是大型企业级应用，TypeORM 都是一个值得考虑的选择。

## 安装 TypeORM

```bash
npm install typeorm --save
```

以上命令会在当前项目中安装 TypeORM 依赖包，并将其添加到 `package.json` 文件的 `dependencies` 列表中。

另外，TypeORM 还需要相应数据库的驱动程序。例如，如果要使用 MySQL 数据库，需要安装 `mysql2` 包；如果要使用 PostgreSQL 数据库，需要安装 `pg` 包。以下是一些常用数据库的驱动程序依赖包：

- MySQL: `npm install mysql2 --save`
- PostgreSQL: `npm install pg --save`
- SQLite: `npm install sqlite3 --save`
- Microsoft SQL Server: `npm install mssql --save`
- Oracle: `npm install oracledb --save`
- MongoDB: `npm install mongodb --save`

安装完成后，就可以在代码中使用 TypeORM 了。为了方便配置 TypeORM，建议在项目根目录下创建一个 `ormconfig.json` 文件，用于存放数据库连接信息和其他相关配置。例如，以下是一个连接 MySQL 数据库的示例：

```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "password",
  "database": "test",
  "synchronize": true,
  "logging": false,
  "entities": ["src/entities/**/*.ts"],
  "migrations": ["src/migrations/**/*.ts"],
  "subscribers": ["src/subscribers/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/migrations",
    "subscribersDir": "src/subscribers"
  }
}
```

以上配置文件中，我们指定了连接的数据库类型、主机地址、端口号、用户名、密码和数据库名称等信息。`synchronize` 属性表示 TypeORM 是否自动创建数据库表格以及更新表格结构，`logging` 属性表示是否输出日志信息，`entities`、`migrations` 和 `subscribers` 分别指定实体类、迁移文件和订阅者文件存放的位置。最后，`cli` 属性用于在命令行中使用 TypeORM CLI 工具时指定相关选项。

总之，安装 TypeORM 很简单，只需要执行一条命令即可。不过，要使用 TypeORM 还需要根据具体情况安装相应数据库的驱动程序，并在项目根目录下创建一个 `ormconfig.json` 文件来配置数据库连接信息和其他相关设置。

## 使用 typeorm 封装通用连接方法

以下是通用的 TypeScript 连接方法：

```typescript
import { createConnection, ConnectionOptions } from 'typeorm';

// 导入实体类
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';

// 从环境变量中获取数据库连接参数
const connectionOptions: ConnectionOptions = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Post], // 数据库实体数组
  synchronize: true, // 是否自动同步数据库结构
};

// 创建连接
const connection = await createConnection(connectionOptions);

// 连接成功后可以进行操作
const userRepository = connection.getRepository(User);
const user = new User();
user.name = 'John Doe';
await userRepository.save(user);
```

这是一个通用的 TypeORM 连接方法，适用于大多数关系型数据库。你只需要在环境变量中设置一些必要的连接参数，即可使用此方法连接到不同的数据库。

## 对应不同数据库的连接方法

以下是连接不同类型数据库的示例代码方法和对应的依赖包安装步骤，使用 TypeScript 的格式返回，配置文件从 `.env` 文件读取。

### MySQL

**依赖包：**

```bash
npm install --save mysql2 dotenv
```

**示例代码：**

```typescript
import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function connectToMySQL() {
  const connection = await mysql.createConnection(connectionConfig);
  console.log('Connected to MySQL database');
  return connection;
}

export default connectToMySQL;
```

### MongoDB

**依赖包：**

```bash
npm install --save mongoose dotenv
```

**示例代码：**

```typescript
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

async function connectToMongoDB() {
  await mongoose.connect(process.env.MONGODB_URI, connectionConfig);
  console.log('Connected to MongoDB database');
}

export default connectToMongoDB;
```

### PostgreSQL

**依赖包：**

```bash
npm install --save pg dotenv
```

**示例代码：**

```typescript
import * as pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig: pg.ConnectionConfig = {
  host: process.env.POSTGRESQL_HOST,
  port: parseInt(process.env.POSTGRESQL_PORT),
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE,
};

async function connectToPostgreSQL() {
  const client = new pg.Client(connectionConfig);
  await client.connect();
  console.log('Connected to PostgreSQL database');
  return client;
}

export default connectToPostgreSQL;
```

### Oracle

**依赖包：**

```bash
npm install --save oracledb dotenv
```

**示例代码：**

```typescript
import * as oracledb from 'oracledb';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig: oracledb.ConnectionAttributes = {
  user: process.env.ORACLE_USER,
  password: process.env.ORACLE_PASSWORD,
  connectString: process.env.ORACLE_CONNECTION_STRING,
};

async function connectToOracle() {
  const connection = await oracledb.getConnection(connectionConfig);
  console.log('Connected to Oracle database');
  return connection;
}

export default connectToOracle;
```

### Microsoft SQL Server

**依赖包：**

```bash
npm install --save mssql dotenv
```

**示例代码：**

```typescript
import * as mssql from 'mssql';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig: mssql.config = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  server: process.env.MSSQL_SERVER,
  database: process.env.MSSQL_DATABASE,
};

async function connectToMSSQL() {
  await mssql.connect(connectionConfig);
  console.log('Connected to Microsoft SQL Server database');
}

export default connectToMSSQL;
```

### Redis

**依赖包：**

```bash
npm install --save redis dotenv
```

**示例代码：**

```typescript
import * as redis from 'redis';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig: redis.ClientOpts = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
};

function connectToRedis() {
  const client = redis.createClient(connectionConfig);
  client.on('connect', () => {
    console.log('Connected to Redis database');
  });
  return client;
}

export default connectToRedis;
```

### SQLite

**依赖包：**

```bash
npm install --save sqlite3 dotenv
```

**示例代码：**

```typescript
import * as sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import * as dotenv from 'dotenv';

dotenv.config();

async function connectToSQLite() {
  const db = await open({
    filename: process.env.SQLITE_FILENAME,
    driver: sqlite3.Database,
  });
  console.log('Connected to SQLite database');
  return db;
}

export default connectToSQLite;
```

### Couchbase

**依赖包：**

```bash
npm install --save couchbase dotenv
```

**示例代码：**

```typescript
import * as couchbase from 'couchbase';
import * as dotenv from 'dotenv';

dotenv.config();

const cluster = new couchbase.Cluster(process.env.COUCHBASE_HOST);
cluster.authenticate(process.env.COUCHBASE_USER, process.env.COUCHBASE_PASSWORD);

function connectToCouchbase() {
  const bucket = cluster.openBucket(process.env.COUCHBASE_BUCKET);
  bucket.on('connect', () => {
    console.log('Connected to Couchbase database');
  });
  return bucket;
}

export default connectToCouchbase;
```

### Cassandra

**依赖包：**

```bash
npm install --save cassandra-driver dotenv
```

**示例代码：**

```typescript
import { Client } from 'cassandra-driver';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig: ClientOptions = {
  contactPoints: [process.env.CASSANDRA_HOST],
  localDataCenter: process.env.CASSANDRA_DATACENTER,
  authProvider: new PlainTextAuthProvider(process.env.CASSANDRA_USERNAME, process.env.CASSANDRA_PASSWORD),
};

function connectToCassandra() {
  const client = new Client(connectionConfig);
  client.connect().then(() => {
    console.log('Connected to Cassandra database');
  });
  return client;
}

export default connectToCassandra;
```

### Neo4j

**依赖包：**

```bash
npm install --save neo4j-driver dotenv
```

**示例代码：**

```typescript
import neo4j, { Driver } from 'neo4j-driver';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig: neo4j.Config = {
  uri: process.env.NEO4J_URI,
  database: process.env.NEO4J_DATABASE,
  auth: {
    username: process.env.NEO4J_USERNAME,
    password: process.env.NEO4J_PASSWORD,
  },
};

function connectToNeo4j(): Driver {
  const driver = neo4j.driver(
    connectionConfig.uri,
    neo4j.auth.basic(connectionConfig.auth.username, connectionConfig.auth.password)
  );
  console.log('Connected to Neo4j database');
  return driver;
}

export default connectToNeo4j;
```

### ArangoDB

**依赖包：**

```bash
npm install --save @arangodb/arangojs dotenv
```

**示例代码：**

```typescript
import { Database, aql } from '@arangodb/arangojs';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig: any = {
  url: `http://${process.env.ARANGODB_HOST}:${process.env.ARANGODB_PORT}`,
  databaseName: process.env.ARANGODB_DATABASE,
  auth: {
    username: process.env.ARANGODB_USER,
    password: process.env.ARANGODB_PASSWORD,
  },
};

async function connectToArangoDB() {
  const db = new Database(connectionConfig);
  await db.login(connectionConfig.auth.username, connectionConfig.auth.password);
  console.log('Connected to ArangoDB database');
  return db;
}

export default connectToArangoDB;
```

### RethinkDB

**依赖包：**

```bash
npm install --save rethinkdb dotenv
```

**示例代码：**

```typescript
import * as rethinkdb from 'rethinkdb';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig = {
  host: process.env.RETHINKDB_HOST,
  port: parseInt(process.env.RETHINKDB_PORT),
  db: process.env.RETHINKDB_DATABASE,
};

function connectToRethinkDB() {
  return rethinkdb.connect(connectionConfig).then((connection) => {
    console.log('Connected to RethinkDB database');
    return connection;
  });
}

export default connectToRethinkDB;
```

### CouchDB

**依赖包：**

```bash
npm install --save nano dotenv
```

**示例代码：**

```typescript
import * as nano from 'nano';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig = {
  url: `http://${process.env.COUCHDB_HOST}:${process.env.COUCHDB_PORT}`,
  auth: {
    username: process.env.COUCHDB_USER,
    password: process.env.COUCHDB_PASSWORD,
  },
};

function connectToCouchDB() {
  const db = nano(connectionConfig).use(process.env.COUCHDB_DATABASE);
  console.log('Connected to CouchDB database');
  return db;
}

export default connectToCouchDB;
```

### Firebase

**依赖包：**

```bash
npm install --save firebase-admin dotenv
```

**示例代码：**

```typescript
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

function connectToFirebase() {
  console.log('Connected to Firebase database');
  return admin.database();
}

export default connectToFirebase;
```

### MariaDB

**依赖包：**

```bash
npm install --save mariadb dotenv
```

**示例代码：**

```typescript
import * as mariadb from 'mariadb';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionConfig: mariadb.PoolConfig = {
  host: process.env.MARIADB_HOST,
  port: parseInt(process.env.MARIADB_PORT),
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
};

async function connectToMariaDB() {
  const pool = mariadb.createPool(connectionConfig);
  const connection = await pool.getConnection();
  console.log('Connected to MariaDB database');
  return connection;
}

export default connectToMariaDB;
```

注意，在使用以上代码前，需要先在 `.env` 文件中设置对应的环境变量。例如：

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=testdb
```

这个示例中连接 MySQL 数据库时，使用的是 `mysql2` 包，因此需要安装该包。`.env` 文件中设置的参数包括主机地址、用户名、密码和数据库名称。在连接数据库时，这些参数将从 `.env` 文件中读取。

以上提供了连接不同类型数据库的示例代码方法和对应的依赖包安装步骤，都使用 TypeScript 的格式返回，并从 `.env` 文件读取配置文件。
