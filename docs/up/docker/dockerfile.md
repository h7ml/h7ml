---
icon: community
order: 2
date: 2022-03-20
author: h7ml
category: docker
tag: docker
title: dockerFile
---

## DockerFile

[官网 open in new window](https://docs.docker.com/engine/reference/builder)，Dockerfile 是用来构建 Docker 镜像的文本文件，是由一条条构建镜像所需的指令和参数构成的脚本。

![image-20221025173147579](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221025173147579.png)

构建三步骤

- 编写 Dockerfile 文件
- docker build 命令构建镜像
- docker run 依镜像运行容器实例

## DockerFile 构建过程解析

### Dockerfile 内容基础知识

1. 每条保留字指令都**必须为大写字母**且后面要跟随至少一个参数
2. 指令按照从上到下，顺序执行
3. #表示注释
4. 每条指令都会创建一个新的镜像层并对镜像进行提交

### Docker 执行 Dockerfile 的大致流程

- （1）`docker`从基础镜像运行一个容器
- （2）执行一条指令并对容器作出修改
- （3）执行类似`docker commit`的操作提交一个新的镜像层
- （4）`docker`再基于刚提交的镜像运行一个新容器
- （5）执行`dockerfile`中的下一条指令直到所有指令都执行完成

### 小总结

从应用软件的角度来看，`Dockerfile`、`Docker`镜像与`Docker`容器分别代表软件的三个不同阶段，

- `Dockerfile`是软件的原材料
- `Docker`镜像是软件的交付品
- `Docker`容器则可以认为是软件镜像的运行态，也即依照镜像运行的容器实例

`Dockerfile`面向开发，`Docker`镜像成为交付标准，`Docker`容器则涉及部署与运维，三者缺一不可，合力充当 Docker 体系的基石。

![image-20221025174124972](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221025174124972.png)

1、`Dockerfile`，需要定义一个`Dockerfile`，`Dockerfile`定义了进程需要的一切东西。`Dockerfile`涉及的内容包括执行代码或者是文件、环境变量、依赖包、运行时环境、动态链接库、操作系统的发行版、服务进程和内核进程(当应用进程需要和系统服务和内核进程打交道，这时需要考虑如何设计`namespace`的权限控制)等等;

2、`Docker`镜像，在用`Dockerfile`定义一个文件之后，`docker build`时会产生一个 Docker 镜像，当运行 `Docker`镜像时会真正开始提供服务;

3、`Docker`容器，容器是直接提供服务的。

## DockerFile 常用保留字指令

### FROM

基础镜像，当前新镜像是基于哪个镜像的，指定一个已经存在的镜像作为模板，第一条必须是 from

### MAINTAINER

镜像维护者的姓名和邮箱地址

### RUM

容器构建时需要运行的命令

- shell 格式

![image-20221025175142566](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221025175142566.png)

- exec 格式

![image-20221025175157422](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221025175157422.png)

### EXPOSE

当前容器对外暴露出的端口

### WORKDIR

指定在创建容器后，终端默认登陆的进来工作目录，一个落脚点

### USER

指定该镜像以什么样的用户去执行，如果都不指定，默认是 root

### ENV

用来在构建镜像过程中设置环境变量

### ADD

将宿主机目录下的文件拷贝进镜像且会自动处理 URL 和解压 tar 压缩包

### COPY

类似 ADD，拷贝文件和目录到镜像中。 将从构建上下文目录中 **<源路径>** 的文件/目录复制到新的一层的镜像内的 **<目标路径>** 位置

```crystal
COPY src dest
COPY ["src", "dest"]
<src源路径>：源文件或者源目录
<dest目标路径>：容器内的指定路径，该路径不用事先建好，路径不存在的话，会自动创建。
```

### VOLUME

容器数据卷，用于数据保存和持久化工作

### CMD

指定容器启动后的要干的事情

`CMD`指令的格式和`RUN`相以，也是两种格式：

- shell 格式：`CND<命令>`
- exec 格式：`CND["可执行文件"，"参数1"，"参数2"..]`
- 参数列表格式：`CMD["参数1"，"参数2"..]`。在指定了`ENTRYPOINT`指令后，用 CND 指定具体的参数。

WARNING

`Dockerfile` 中可以有多个 `CMD` 指令，**但只有最后一个生效，`CMD` 会被 `docker run` 之后的参数替换**

参考官网`Tomcat`的`dockerfile`演示讲解

![image-20221026091950694](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026091950694.png)

**我们演示自己的覆盖操作**

![image-20221026092007321](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026092007321.png)

**它和前面 RUN 命令的区别**

- CMD 是在 `docker run` 时运行
- RUN 是在 `docker build` 时运行

### ENTRYPOINT

也是用来指定一个容器启动时要运行的命令

类似于 `CMD` 指令，**但是`ENTRYPOINT`不会被`docker run`后面的命令覆盖**， 而且这些命令行参数**会被当作参数送给 ENTRYPOINT 指令指定的程序**

**命令格式和案例说明：**

![image-20221026092602383](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026092602383.png)

`ENTRYPOINT`可以和 CMD 一起用，一般是变参才会使用 `CMD` ，这里的 `CMD` 等于是在给 `ENTRYPOINT` 传参。

当指定了`ENTRYPOINT`后，CMD 的含义就发生了变化，不再是直接运行其命令而是将 CMD 的内容作为参数传递给`ENTRYPOINT`指令，他两个组合会变成

![image-20221026092623867](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026092623867.png)

\*\*案例如下：\*\*假设已通过 `Dockerfile` 构建了 **`nginx:test`** 镜像：

![image-20221026092655607](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026092655607.png)

| 是否传参         | 按照 dockerfile 编写执行       | 传参运行                                     |
| ---------------- | ------------------------------ | -------------------------------------------- |
| Docker 命令      | docker run nginx:test          | docker run nginx:test -c /etc/nginx/new.conf |
| 衍生出的实际命令 | nginx -c /etc/nginx/nginx.conf | nginx -c /etc/nginx/new.conf                 |

TIP

优点：在执行`docker run`的时候可以指定 `ENTRYPOINT` 运行所需的参数。

注意：如果 `Dockerfile` 中如果存在多个 `ENTRYPOINT` 指令，仅最后一个生效。

### 小总结

![image-20221026093032611](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026093032611.png)

## 案例

自定义镜像 mycentosjava8

- Centos7 镜像具备 vim+ifconfig+jdk8

- JDK 的下载镜像地址

<https://www.oracle.com/java/technologies/downloads/#java8>

![image-20221026102031246](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026102031246.png)

<https://mirrors.yangxingzhen.com/jdk/>

准备编写 Dockerfile 文件

![image-20221026102052196](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026102052196.png)

```docker
FROM centos
MAINTAINER zzyy<zzyybs@126.com>

ENV MYPATH /usr/local
WORKDIR $MYPATH

#安装vim编辑器
RUN yum -y install vim
#安装ifconfig命令查看网络IP
RUN yum -y install net-tools
#安装java8及lib库
RUN yum -y install glibc.i686
RUN mkdir /usr/local/java
#ADD 是相对路径jar,把jdk-8u171-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置
ADD jdk-8u171-linux-x64.tar.gz /usr/local/java/
#配置java环境变量
ENV JAVA_HOME /usr/local/java/jdk1.8.0_171
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH
ENV PATH $JAVA_HOME/bin:$PATH

EXPOSE 80

CMD echo $MYPATH
CMD echo "success--------------ok"
CMD /bin/bash
```

大写字母 D、构建

```crystal
docker build -t 新镜像名字:TAG .
docker build -t centosjava8:1.5 .
```

> 注意，上面 TAG 后面有个空格，有个点，代表当前目录

运行

```crystal
docker run -it 新镜像名字:TAG
docker run -it centosjava8:1.5 /bin/bash
```

![image-20221026102424772](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026102424772.png)

## 虚悬镜像

是什么：仓库名、标签都是`<none>`的镜像，俗称 dangling image，Dockerfile 写一个。

```docker
from ubuntu
CMD echo 'action is success'
```

![image-20221026103459708](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026103459708.png)

查看

```crystal
docker image ls -f dangling=true
```

![image-20221026103518732](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026103518732.png)

删除

虚悬镜像已经失去存在价值，可以删除

![image-20221026103545644](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026103545644.png)

## 总结

![image-20221026103626226](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/docker/image-20221026103626226.png)
