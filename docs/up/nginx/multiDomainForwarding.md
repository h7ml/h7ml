---
icon: nginx
order: 7
date: 2023-03-04
author: h7ml
category: nginx
tag: nginx
title: nginx多域名转发配置
---

Nginx 是一个高性能的 Web 服务器和反向代理服务器。它可以用来配置多个域名和路由规则，将请求转发到不同的后端服务器或者处理请求本身。在这篇文章中，我们将讨论如何使用 Nginx 配置多域名转发。

假设我们有两个域名，分别是 example.com 和 example.net。我们希望将这两个域名分别转发到不同的后端服务器上。我们需要进行以下步骤：

### 1. 安装 Nginx

首先，我们需要在服务器上安装 Nginx。在 Linux 系统中，可以使用 apt-get 或 yum 等包管理器进行安装。安装完成后，我们可以使用以下命令来检查 Nginx 是否已经启动：

```bash
sudo systemctl status nginx
```

### 2. 配置 Nginx

接下来，我们需要配置 Nginx，让它能够转发请求。打开 Nginx 的配置文件，一般在/etc/nginx/nginx.conf 中。在 http 块中添加以下代码：

```nginx.conf
    http {
        # 配置example.com转发规则
        server {
            listen 80;
            server_name example.com;
            location / {
            proxy_pass http://backend1;
        }
    }

    # 配置example.net转发规则
    server {
        listen 80;
        server_name example.net;
        location / {
            proxy_pass http://backend2;
        }
    }

    # 配置后端服务器
    upstream backend1 {
        server 192.168.0.1;
    }

    upstream backend2 {
        server 192.168.0.2;
    }
}
```

接下来，我们需要配置 Nginx，让它能够转发请求。打开 Nginx 的配置文件，一般在/etc/nginx/nginx.conf 中。在 http 块中添加以下代码：

```nginx.conf
    http {
        # 配置example.com转发规则
        server {
            listen 80;
            server_name example.com;
            location / {
            proxy_pass http://backend1;
        }
    }

    # 配置example.net转发规则
    server {
        listen 80;
        server_name example.net;
        location / {
            proxy_pass http://backend2;
        }
    }

    # 配置后端服务器
    upstream backend1 {
        server 192.168.0.1;
    }

    upstream backend2 {
        server 192.168.0.2;
    }
}
```

在上面的代码中，我们定义了两个 server 块，分别对应 example.com 和 example.net 的请求。其中 listen 80 表示监听 80 端口，server_name 表示该 server 块所对应的域名，location /表示处理根路径下的请求。在 location 块中，我们使用了 proxy_pass 指令将请求转发到对应的后端服务器。

在最后的 upstream 块中，我们定义了两个后端服务器的地址。这些地址可以是 IP 地址或者域名。

### 3. 重启 Nginx

修改完成配置文件后，我们需要重启 Nginx，使配置生效。使用以下命令重启 Nginx：

```bash
sudo systemctl restart nginx
```

### 4. 测试转发

现在，我们可以使用浏览器访问 example.com 和 example.net 来测试转发是否生效。如果一切顺利，请求应该会被转发到对应的后端服务器上。

### 总结

在本文中，我们介绍了如何使用 Nginx 配置多域名转发。通过配置 Nginx 的 server 块和 upstream 块，我们可以将请求转发到不同的后端服务器上。如果您需要更复杂的路由规则，可以参考 Nginx 官方文档和在线社区的资源。
