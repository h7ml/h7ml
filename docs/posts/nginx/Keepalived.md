---
icon: nginx
order: 5
date: 2022-03-20
author: h7ml
category: nginx
tag: nginx
title: 高可用配置
---

## 高可用配置

## 安装 Keepalived

### 编译安装

[下载地址 open in new window](https://www.keepalived.org/download.html#)

使用 `./configure` 编译安装

如遇报错提示

```nginx
configure: error:
!!! OpenSSL is not properly installed on your system. !!!
!!! Can not include OpenSSL headers files. !!!
```

安装依赖

```crystal
yum install openssl-devel
```

### yum 安装

## 配置

使用 yum 安装后配置文件在:`/etc/keepalived/keepalived.conf`

### 最小配置

- 第一台机器

```nginx
! Configuration File for keepalived
global_defs {
 router_id lb111
}
vrrp_instance atguigu {
    state MASTER
    interface ens33
    virtual_router_id 51
    priority 100
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.44.200
    }
}
```

- 第二台机器

```nginx
! Configuration File for keepalived
global_defs {
    router_id lb110
}
vrrp_instance atguigu {
    state BACKUP
    interface ens33
    virtual_router_id 51
    priority 50
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.44.200
    }
}
```

- 启动服务

```crystal
systemctl start keepalived
```
