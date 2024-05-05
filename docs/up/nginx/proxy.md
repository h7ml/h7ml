---
icon: nginx
order: 4
date: 2022-03-20
author: h7ml
category: nginx
tag: nginx
title: 反向代理与负载均衡
---

## 反向代理与负载均衡

## 反向代理

当用户不能直接访问应用服务器时候，这时候就通过`Nginx`去带着你的参数去访问应用服务器，之后在把数据返回给网关（路由器），在由网关把数据传输到用户。

![image-20220909155253447](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909155253447.png)

## 正向代理

如果把外网的`Internet`想象成一个巨大的资源库，则内网中的客户端要访问`Internet`，则需要通过代理服务器来访问，这种代理服务就称为正向代理，下面是正向代理的原理图。

由于工作环境原因，日常工作只能局限于单位的局域网，如果想要访问互联网，怎么办呢？这就需要用到正向代理，本人经常用正向代理来进行上网。

![image-20220909155954732](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909155954732.png)

## 传统公司系统架构

![image-20220909162133603](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909162133603.png)

![image-20220909162405739](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909162405739.png)

![image-20220909162157266](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909162157266.png)

![image-20220909162405739](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909162405739.png)

![image-20220909162246272](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909162246272.png)

## 反向代理设置

修改`nginx.conf` 配置。

> 注意每个`{}`里面每一行结束都需写`;`。（坑）

```nginx
location / {
      proxy_pass http://www.atguigu.com/;
}
```

- proxy_pass: 可以设置具体的主机 ip，也可以设置完整的域名。

- 设置域名时，一定要带上域名前缀

例如`www.atguigu.com`和`atguigu.com`,意义就不一样了。

`proxy_pass http://www.atguigu.com/`

![image-20220911151833258](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/202209111518300.png)

`proxy_pass http://atguigu.com/`

![image-20220911151541839](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/202209111515886.png)

可以发现设置`proxy_pass http://atguigu.com/`后浏览器的地址拦就变了，不在是我们的 IP 站点而变成了代理的地址。

- Status Code: 302 Moved Temporarily（临时重定向）
- Location: `http://www.atguigu.com/`

302 也就是临时重定向到另一个站点，这个站点就是 Location 的值。

还有一点就是在代理 https 的域名如果也这么设置也会重定向，例如`www.baidu.com`，就是 https 协议的域名。

```nginx
proxy_pass http://www.baidu.com/
```

这样设置也会重定向，后面会讲到 https 协议代理。

## 负载均衡

### 什么是负载均衡

所谓负载均衡，就是 Nginx 把请求均匀的分摊给上游的应用服务器，这样即使某一个服务器宕机也不会影响请求的处理，或者当应用服务器扛不住了，可以随时进行扩容

![image-20220911160604530](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/202209111606565.png)

### 基于反向代理的负载均衡

```nginx
upstream httpds {
  server 10.211.55.11:80;
  server 10.211.55.12:80;
}

# 虚拟主机 vhost
server {
  listen       80;
  # 域名 主机名
  server_name  www.gopeak.cn;

  location / {
    proxy_pass http://httpds;
    # root   /www/www;
    # index  index.html index.htm;
  }

  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   html;
  }
}
```

## 负载均衡策略

### 轮询

默认情况下使用轮询方式，逐一转发，这种方式适用于无状态请求。

### weight(权重)

指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况。

```nginx
upstream httpds {
  server 10.211.55.11:80 weight=8 down;
  server 10.211.55.12:80 weight=2;
  server 10.211.55.13:80 weight=1 backup;
}
```

- down：表示当前的 server 暂时不参与负载
- weight：默认为 1.weight 越大，负载的权重就越大。
- backup： 其它所有的非 backup 机器 down 或者忙的时候，请求 backup 机器。

**轮询的弊端**：无法保持会话

### ip_hash

根据客户端的 ip 地址转发同一台服务器，可以保持回话。

### least_conn

最少连接访问

### url_hash

根据用户访问的 url 定向转发请求

### fair

根据后端服务器响应时间转发请求

### 动静分离

#### 配置反向代理

```nginx
ocation / {
    proxy_pass http://127.0.0.1:8080;
    root html;
    index index.html index.htm;
}
```

#### 增加每一个 location

```nginx
location /css {
    root /usr/local/nginx/static;
    index index.html index.htm;
}
location /images {
    root /usr/local/nginx/static;
    index index.html index.htm;
}
location /js {
    root /usr/local/nginx/static;
    index index.html index.htm;
}
```

#### 使用一个 location

使用正则

##### **location 前缀**

| 选项 | 说明                                      |
| ---- | ----------------------------------------- |
| `/`  | 通用匹配，任何请求都会匹配到              |
| `=`  | 精准匹配，不是以指定模式开头              |
| `~`  | 正则匹配，区分大小写                      |
| `~*` | 正则匹配，不区分大小写                    |
| `^~` | 非正则匹配，匹配以指定模式开头的 location |

##### **location 匹配顺序**

- 多个正则 location 直接按书写顺序匹配，成功后就不会继续往后面匹配
- 普通（非正则）location 会一直往下，直到找到匹配度最高的（最大前缀匹配）
- 当普通 location 与正则 location 同时存在，如果正则匹配成功,则不会再执行普通匹配
- 所有类型 location 存在时，“=”匹配 > “^~”匹配 > 正则匹配 > 普通（最大前缀匹配）

```nginx
location ~*/(css|img|js) {
    root /usr/local/nginx/static;
    index index.html index.htm;
}
```

##### **alias 与 root**

```nginx
location /css {
    alias /usr/local/nginx/static/css;
    index index.html index.htm;
}
```

root 用来设置根目录，而 alias 在接受请求的时候在路径上不会加上 location。

- 1）alias 指定的目录是准确的，即 location 匹配访问的 path 目录下的文件直接是在 alias 目录下查找的；
- 2）root 指定 的目录是 location 匹配访问的 path 目录的上一级目录,这个 path 目录一定要是真实存在 root 指定目录下的；
- 3）使用 alias 标签的目录块中不能使用 rewrite 的 break（具体原因不明）；另外，alias 指定的目录后面必须要加上"/"符 号！！
- 4）alias 虚拟目录配置中，location 匹配的 path 目录如果后面不带"/"，那么访问的 url 地址中这个 path 目录后 面加不加"/"不影响访问，访问时它会自动加上"/"； 但是如果 location 匹配的 path 目录后面加上"/"，那么访问的 url 地 址中这个 path 目录必须要加上"/"，访问时它不会自动加上"/"。如果不加上"/"，访问就会失败！
- 5）root 目录配置 中，location 匹配的 path 目录后面带不带"/"，都不会影响访问。
