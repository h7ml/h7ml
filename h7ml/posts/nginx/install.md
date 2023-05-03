---
icon: nginx
order: 1
date: 2022-03-20
author: h7ml
category: nginx
tag: nginx
title: 安装
---

## 安装

## 版本区别

常用版本分为四大阵营

- [Nginx 开源版 open in new window](http://nginx.org/)

- [Nginx plus 商业版 open in new window](https://www.nginx.com/)

- [openrestyopen in new window](http://openresty.org/cn/)

- [Tengineopen in new window](http://tengine.taobao.org/)

Nginx 的安装可以选择源码编译的方式也可以使用宝塔面板安装，本文采用的是源码编译安装。

## 下载 Nginx

![image-20220906163814476](https://static.h7ml.cn/vitepress/assets/images/nginx/image-20220906163814476.png)

## 使用源码编译安装

```crystal
[root@hadoop100 ~] tar zxvf nginx-1.22.0.tar.gz
```

```crystal
[root@hadoop100 ~] cd nginx-1.21.6
[root@hadoop100 ~] ./configure --prefix=/usr/local/nginx
# --prefix=/usr/local/nginx 指安装路径是/usr/local/nginx，如果前面安装了宝塔Linux面板，这一步应该不会出现环境问题。
```

### 如果出现警告或报错

**提示：**

```crystal
checking for OS
+ Linux 3.10.0-693.el7.x86_64 x86_64
checking for C compiler ... not found
./configure: error: C compiler cc is not found
```

**安装 gcc**

```crystal
[root@hadoop100 ~] yum install -y gcc
```

**提示：**

```crystal
/configure: error: the HTTP rewrite module requires the PCRE library.
You can either disable the module by using --without-http_rewrite_module
option, or install the PCRE library into the system, or build the PCRE library
statically from the source with nginx by using --with-pcre=<path> option.
```

**安装 perl 库**

```crystal
[root@hadoop100 ~] yum install -y pcre pcre-devel
```

**提示：**

```crystal
./configure: error: the HTTP gzip module requires the zlib library.
You can either disable the module by using --without-http_gzip_module
option, or install the zlib library into the system, or build the zlib library
statically from the source with nginx by using --with-zlib=<path> option.
```

**安装 zlib 库:**

```crystal
[root@hadoop100 ~] yum install -y zlib zlib-devel
```

**出现这个代表安装成功**

```crystal
Configuration summary
  + using system PCRE library
  + OpenSSL library is not used
  + using system zlib library

  nginx path prefix: "/usr/local/nginx"
  nginx binary file: "/usr/local/nginx/sbin/nginx"
  nginx modules path: "/usr/local/nginx/modules"
  nginx configuration prefix: "/usr/local/nginx/conf"
  nginx configuration file: "/usr/local/nginx/conf/nginx.conf"
  nginx pid file: "/usr/local/nginx/logs/nginx.pid"
  nginx error log file: "/usr/local/nginx/logs/error.log"
  nginx http access log file: "/usr/local/nginx/logs/access.log"
  nginx http client request body temporary files: "client_body_temp"
  nginx http proxy temporary files: "proxy_temp"
  nginx http fastcgi temporary files: "fastcgi_temp"
  nginx http uwsgi temporary files: "uwsgi_temp"
  nginx http scgi temporary files: "scgi_temp"
```

### **接下来执行**

```crystal
[root@centos-linux nginx-1.22.0]# make
[root@centos-linux nginx-1.22.0]# make install
```

### **启动 nginx**

**进入安装好的目录 `/usr/local/nginx/sbin`**

```crystal
[root@centos-linux sbin]# ./nginx         # 启动
[root@centos-linux sbin]# ./nginx -s stop     #快速停止
[root@centos-linux sbin]# ./nginx -s quit    #优雅关闭，在退出前完成已经接受的连接请求
[root@centos-linux sbin]# ./nginx -s reload    #重新加载配置
```

### 关于防火墙

**关闭防火墙**

```crystal
[root@hadoop100 ~] systemctl stop firewalld.service
```

**禁止防火墙开机启动**

```crystal
[root@hadoop100 ~] systemctl disable firewalld.service
```

**放行端口**

```crystal
[root@hadoop100 ~] firewall-cmd --zone=public --add-port=80/tcp --permanent
```

**重启防火墙**

```crystal
[root@hadoop100 ~] firewall-cmd --reload
```

### 安装成系统服务

**创建服务脚本**

```crystal
[root@hadoop100 ~] vi /usr/lib/systemd/system/nginx.service
```

**服务脚本内容**

```crystal
[Unit]
Description=nginx - web server
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

**重新加载系统服务**

```crystal
[root@hadoop100 ~] systemctl daemon-reloactdad
```

**启动服务**

```crystal
[root@hadoop100 ~] systemctl start nginx.service
```

**查看服务是否启动成功**

```crystal
[root@hadoop100 sbin] systemctl status nginx.service
```

![image-20220906171209767](https://static.h7ml.cn/vitepress/assets/images/nginx/image-20220906171209767.png)

**开机启动**

```crystal
[root@hadoop100 ~] systemctl enable nginx.service
```
