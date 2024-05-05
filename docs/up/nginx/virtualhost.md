---
icon: nginx
order: 3
date: 2022-03-20
author: h7ml
category: nginx
tag: nginx
title: 配置与应用场景
---

## 配置与应用场景

## 域名解析

![image-20220909095951565](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909095951565.png)

### 浏览器、Nginx 与 HTTP 协议

- 电脑拿到 IP 地址、首先会先发送 TCP/IP 协议（HTTP 或 HTTPS 协议在 TCP/IP 协议之上，TCP/IP 协议只能传输二进制数据）。
- 在宽带（电信、联通、移动）的主干网上会进过很多个网关（也可以理解为路由器）。
- 从家里的网关=>>小区的网关=>>服务商的网关=>>（电信、联通、移动）的网关=>>区域的网关=>>市里的网关=>>全国的总网关=>>最后才到主干网上。
- HTTPS 就是在这个过程中给你是数据进行了加密。

## 虚拟主机的原理

```text
域名/IP ==> Nginx，访问服务器获取资源

域名/IP <== Nginx, 服务器返回资源
```

这样的话一台主机就可以给外界公布一个公网 IP，如果公网 IP 只绑定了一个 IP 地址上，这样就有可能会造成**性能过剩**，因为这一台主机不会时时的高访问。

如果将多个域名绑定到一台主机上，在**通过 Nginx 服务器来判断你访问的是哪一个域名**，之后在返回给你对应的资源

![image-20220909111838691](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909111838691.png)

### 本地域名解析

找到本地主机的 hosts 文件 `C:\Windows\System32\drivers\etc`

在最后加上：

IP 地址 域名

```text
192.168.88.100 hadoop100.com
```

### 公网域名配置与泛域名解析

首先需要一个域名，购买渠道阿里云、腾讯云，这里已阿里云

![image-20220909131341414](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909131341414.png)

**主机记录**

- 第一种：指定前缀的，例如 www 之类的。
- 第二种：不填，例如我现在的域名是 gopeak.cn ,也会匹配到 `www.gopeak.cn`。
- 第三种：填 `*`（通配符），这样所有的二级，三级等域名**都会匹配到当前主机上**

**记录值**：也就是主机名

### 配置多个虚拟主机

**域名设置**

![image-20220909144630354](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220909144630354.png)

**Nginx 设置**

```nginx
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    # 虚拟主机 vhost
    server {
        listen       80;
        # 域名 主机名
        server_name  www.gopeak.cn;

        location / {
            root   /www/www;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    # 虚拟主机 vhost
    server {
        listen       80;
        # 域名 主机名
        server_name  vod.gopeak.cn;

        location / {
            root   /www/vodi;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

### 最小配置

#### worker_processes

- `worker_processes 1`; 默认为 1，表示**开启一个业务进程**

#### worker_connections

- `worker_connections 1024`; **单个业务**进程可接受连接数

#### include mime.types

- `include mime.types`; 引入`http mime`类型，**在请求头中标明服务端给客户端返回的文件是什么类型的文件**。

#### default_type application/octet-stream

- `default_type application/octet-stream`; **如果`mime`类型没匹配上**，默认使用二进制流的方式传输。

#### sendfile on

- `sendfile on`; 使用`linux`的 `sendfile(socket, file, len)` 高效网络传输，也就是数据 0 拷贝。

**未开启`sendfile`**

![image-20220907111843362](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220907111843362.png)

**开启`sendfile`后**

![image-20220907111937461](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220907111937461.png)

#### keepalive_timeout 65

- keepalive_timeout 65;

#### server

![image-20220907112032197](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220907112032197.png)

### 虚拟主机配置

```nginx
server {
    listen   80; 监听端口号
    server_name localhost; 主机名、域名

    location / { 匹配路径
        root html; 文件根目录
        index index.html index.htm; 默认页名称
    }

    error_page 500 502 503 504 /50x.html; 报错编码对应页面
    location = /50x.html {
     root html;
    }
}
```

#### 虚拟主机

原本一台服务器只能对应一个站点，通过虚拟主机技术可以虚拟化成多个站点同时对外提供服务

#### servername 匹配规则

我们需要注意的是`servername`匹配分先后顺序，写在前面的匹配上就不会继续往下匹配了。

#### 完整匹配

我们可以在同一`servername`中匹配多个域名

```nginx
server_name vod.mmban.com www1.mmban.com;
```

#### 通配符匹配

#### 通配符结束匹配

#### 正则匹配

```nginx
server_name ~^[0-9]+\.mmban\.com$;
```
