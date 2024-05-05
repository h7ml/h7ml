---
icon: nginx
order: 2
date: 2022-03-20
author: h7ml
category: nginx
tag: nginx
title: 目录
---

## 目录

## 目录结构

进入 Nginx 的主目录我们可以看到这些文件夹

```crystal
├── client_body_temp
├── conf
│   ├── fastcgi.conf
│   ├── fastcgi.conf.default
│   ├── fastcgi_params
│   ├── fastcgi_params.default
│   ├── koi-utf
│   ├── koi-win
│   ├── mime.types
│   ├── mime.types.default
│   ├── nginx.conf
│   ├── nginx.conf.default
│   ├── scgi_params
│   ├── scgi_params.default
│   ├── uwsgi_params
│   ├── uwsgi_params.default
│   └── win-utf
├── fastcgi_temp
├── html
│   ├── 50x.html
│   └── index.html
├── logs
│   ├── access.log
│   ├── error.log
│   └── nginx.pid
├── proxy_temp
├── sbin
│   └── nginx
├── scgi_temp
└── uwsgi_temp
```

其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件

- client_body_temp
- fastcgi_temp
- proxy_temp
- scgi_temp

**conf**

- 用来存放配置文件相关

**html**

- 用来存放静态文件的默认目录 html、css 等

**sbin**

- nginx 的主程序

## 基本运行原理

![image-20220907111607186](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220907111607186.png)
