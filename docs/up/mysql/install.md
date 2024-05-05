---
icon: mysql
order: 2
date: 2022-03-20
author: h7ml
category: mysql
tag: mysql
title: MySQL 安装
---

## MySQL 安装

## MySQL 安装

> **安装环境:Win10 64 位** > **软件版本:MySQL 5.7.24 解压版**

### 下载

<https://downloads.mysql.com/archives/community/>

点开上面的链接就能看到如下界面：

![image-20220910091031160](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910202.png)

选择选择和自己**系统位数**相对应的版本点击右边的`Download`，此时会进到另一个页面，同样在接近页面底部的地方找到如下图所示的位置：

![image-20220910091025377](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910424.png)

不用理会上面的登录和注册按钮，直接点击 `No thanks, just start my download.` 就可以下载。

![image-20201109134805641](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910106.png)

### 安装(解压)

下载完成后我们得到的是一个压缩包，将其解压，我们就可以得到 MySQL 5.7.24 的软件本体了(就是一个文件夹)，我们可以把它放在你想安装的位置。

---

![image-20220910091016740](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910785.png)

### MySQL 卸载

如果你想卸载 MySQL，也很简单。

右键开始菜单，选择`命令提示符(管理员)`，打开黑框。

1. 敲入`net stop mysql`，回车。

![image-20220910091013576](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910614.png)

2. 再敲入`mysqld -remove mysql`，回车。

![image-20220910091011772](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910808.png)

3. 最后删除 MySQL 目录及相关的环境变量。

**至此，MySQL 卸载完成！**

## MySQL 配置

### 添加环境变量

> 环境变量里面有很多选项，这里我们只用到`Path`这个参数。为什么在初始化的开始要添加环境变量呢？ 在黑框(即 CMD)中输入一个可执行程序的名字，Windows 会先在环境变量中的`Path`所指的路径中寻找一遍，如果找到了就直接执行，没找到就在当前工作目录找，如果还没找到，就报错。我们添加环境变量的目的就是能够在任意一个黑框直接调用 MySQL 中的相关程序而不用总是修改工作目录，大大简化了操作。

右键`此电脑`→`属性`，点击`高级系统设置`

![image-20220910091008123](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910164.png)

点击`环境变量`

![image-20220910091004470](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910546.png)

在`系统变量`中新建 MYSQL_HOME

![image-20220910091002806](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910851.png)

在`系统变量`中找到并**双击**`Path`

![image-20220910091000734](http://static.5ibug.net/vitepress/assets/images/mysql/202209100910782.png)

点击`新建`

![image-20220910100356330](http://static.5ibug.net/vitepress/assets/images/mysql/202209101003366.png)

最后点击确定。

**如何验证是否添加成功？**

右键开始菜单(就是屏幕左下角)，选择`命令提示符(管理员)`，打开黑框，敲入`mysql`，回车。 如果提示`Can't connect to MySQL server on 'localhost'`则证明添加成功； 如果提示`mysql不是内部或外部命令，也不是可运行的程序或批处理文件`则表示添加添加失败，请重新检查步骤并重试。

### 新建配置文件

新建一个文本文件，内容如下：

```properties
[mysql]
default-character-set=utf8

[mysqld]
character-set-server=utf8
default-storage-engine=INNODB
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

把上面的文本文件另存为，在保存类型里选`所有文件 (*.*)`，文件名叫`my.ini`，存放的路径为 MySQL 的`根目录`(例如我的是`D:\software\mysql-5.7.24-winx64`,根据自己的 MySQL 目录位置修改)。

![image-20201109142704951](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909134.png)

![image-20201109142737584](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909420.png)

上面代码意思就是配置数据库的默认编码集为 utf-8 和默认存储引擎为 INNODB。

### 初始化 MySQL

在刚才的黑框中敲入`mysqld --initialize-insecure`，回车，稍微等待一会，如果出现没有出现报错信息(如下图)则证明 data 目录初始化没有问题，此时再查看 MySQL 目录下已经有 data 目录生成。

```text
mysqld --initialize-insecure
```

![image-20201109140955772](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909484.png)

tips：如果出现如下错误

![image-20201109135848054](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909288.png)

是由于权限不足导致的，去`C:\Windows\System32` 下以管理员方式运行 cmd.exe

![image-20220910090916571](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909686.png)

![image-20220910090914682](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909802.png)

### 注册 MySQL 服务

在黑框里敲入`mysqld -install`，回车。

![image-20220910090912230](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909337.png)

现在你的计算机上已经安装好了 MySQL 服务了。

MySQL 服务器

### 启动 MySQL 服务

在黑框里敲入`net start mysql`，回车。

```java
net start mysql  // 启动mysql服务

net stop mysql  // 停止mysql服务
```

![image-20220910090906166](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909282.png)

### 修改默认账户密码

在黑框里敲入`mysqladmin -u root password 1234`，这里的`1234`就是指默认管理员(即 root 账户)的密码，可以自行修改成你喜欢的。

```text
mysqladmin -u root password 1234
```

![image-20220910090903002](http://static.5ibug.net/vitepress/assets/images/mysql/202209100909112.png)

**至此，MySQL 5.7 解压版安装完毕！**

### 退出

退出 mysql：

### MySQL 数据模型

**关系型数据库：**

> 关系型数据库是建立在关系模型基础上的数据库，简单说，关系型数据库是由多张能互相连接的 二维表 组成的数据库

如下图，`订单信息表` 和 `客户信息表` 都是有行有列二维表我们将这样的称为关系型数据库。

![image-20220910090859406](http://static.5ibug.net/vitepress/assets/images/mysql/202209100908517.png)

接下来看关系型数据库的优点：

- 都是使用表结构，格式一致，易于维护。
- 使用通用的 SQL 语言操作，使用方便，可用于复杂查询。
  - 关系型数据库都可以通过 SQL 进行操作，所以使用方便。
  - 复杂查询。现在需要查询 001 号订单数据，我们可以看到该订单是 1 号客户的订单，而 1 号订单是李聪这个客户。以后也可以在一张表中进行统计分析等操作。
- 数据存储在磁盘中，安全。

**数据模型：**

![image-20220910090846126](http://static.5ibug.net/vitepress/assets/images/mysql/202209100908236.png)

如上图，我们通过客户端可以通过数据库管理系统创建数据库，在数据库中创建表，在表中添加数据。创建的每一个数据库对应到磁盘上都是一个文件夹。比如可以通过 SQL 语句创建一个数据库（数据库名称为 db1），语句如下。该语句咱们后面会学习。

![image-20220910090843543](http://static.5ibug.net/vitepress/assets/images/mysql/202209100908656.png)

我们可以在数据库安装目录下的 data 目录下看到多了一个 `db1` 的文件夹。所以，**在 MySQL 中一个数据库对应到磁盘上的一个文件夹。**

而一个数据库下可以创建多张表，我们到 MySQL 中自带的 mysql 数据库的文件夹目录下：

![image-20220910090839791](http://static.5ibug.net/vitepress/assets/images/mysql/202209100908898.png)

而上图中右边的 `db.frm` 是表文件，`db.MYD` 是数据文件，通过这两个文件就可以查询到数据展示成二维表的效果。

**小结：**

- MySQL 中可以创建多个数据库，每个数据库对应到磁盘上的一个文件夹
- 在每个数据库中可以创建多个表，每张都对应到磁盘上一个 frm 文件
- 每张表可以存储多条数据，数据会被存储到磁盘中 MYD 文件中
