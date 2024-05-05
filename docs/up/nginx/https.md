---
icon: nginx
order: 6
date: 2022-03-20
author: h7ml
category: nginx
tag: nginx
title: Https 证书配置
---

## Https 证书配置

## 不安全的 http 协议

http 在传输的过程中都是**明文**，这导致在客户端到服务器请求的**过程中会被拦截数据导致数据泄露**。

### 对称加密

![image-20220907133558872](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220907133558872.png)

**对称加密**可以通过加密算法给数据进行安全一点的加密，但是这样也很容易破解。

- 客户端使用**加密算法**对数据进行加密
- 服务端通过**相同加密算法**对数据进行解密

这样一来就完成了一次加密请求。

但是如果加密算法泄露了，这样一来拦截者就可以对数据进行篡改了，因为客户端的代码都是开源的，他通过去解读加密算法的代码就可以获取到。

### 非对称加密

![image-20220915153358600](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20220915153358600.png)

非对称加密就是在客户端中有一把**公钥**（理解成一窜字符），在服务端有一把**私钥**。

- 在客户端**第一次请求**服务器时，**服务器会返回一把公钥**。
- **客户端通过公钥给数据加密**进行请求数据，服务器通过私钥对数据进行解密**（公钥是公开大家都能看到的）**。
- 服务端通过私钥解密后在**用私钥加密要返回的数据**，在返回给客户端，客户端在通过公钥进行解密**（私钥只有服务端知道）**。

> 这种加密一定要满足一个条件，**公钥加密公钥解不开，且私钥不能泄露**。

但即使是这样也有是有漏洞的：

- 例如我**在你客户端请求的过程中让你请求我的服务器**（反向代理），然后我带着你请求的参数去请求你的后端服务器。
- 之后我**将服务器返回的公钥存储起来**，然后我伪造一个公钥给你。
- **当你在请求的时候就是用的我给你的公钥加密的**，这样一来我就可以**通过我的私钥进行解密拿到明文数据**。
- 然后我**将拿到的数据在通过存储的服务器返回的公钥进行加密，返回给服务器。**
- 这样一来就完成了数据的拦截。

所有不管是对称加密还是非对称加密都是不安全的。

## CA 证书

![image-20221014144324807](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20221014144324807.png)

通过上述的**对称加密**和**非对称加密**，我们知道不管是哪种在网络传输过程中都会被人给拦截篡改，所以都不安全，为了解决这一问题就有了**CA 证书**这么一个认证机构。

首先他是怎么工作的：

- 在服务器下发公钥时，服务器会提交一些**资料（这个资料是在服务器的某个目录下的文件）**给 CA 机构来**验证身份**。
- 身份验证成功后会**CA 机构会将服务器提交的公钥进行加密**，通过**CA.私钥加算法**来生成一个**证书**。
- 之后服务器就不会将公钥下发给客户端了，而是**把证书给客户端**。
  - 这里在服务器下发证书的过程中，也是可以被拦截者给篡改的，也是可以解开的。
  - 但如果拦截者解开了证书拿到了公钥，在对公钥进行加密返回给客户端，但这样是无法认证成功的，因为**CA 的私钥是一种特殊的私钥，他是操作系统内置的私钥，CA 认证机构是不在网络中传输的**，所以只要你篡改了，客户端和 CA 机构都是不认的。
- 客户端拿到证书后通过**CA 的公钥进行解密得到服务器的公钥**。

操作系统内置的证书：

Windows：cmd 输入 certmgr.msc

![image-20221014144636291](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20221014144636291.png)

这里有你所有的证书包括第三方下载的证书都在这。

## 证书安装

[腾讯云 open in new window](https://cloud.tencent.com/document/product/400/35244)

## 已安装的 Nginx 上开启 SSL 模块并配置 https

安装目录是 **/usr/local/nginx**，

源码解压目录是 **/usr/local/src/nginx-1.22.0**

1、切换到 Nginx 安装目录下的 sbin 目录

```crystal
cd /usr/local/nginx/sbin/
```

2、将 Nginx 停止运行

3、切换到源码解压目录

```crystal
cd /usr/local/resource/nginx-1.18.0
```

4、查看 Nginx 原有的模块配置

```crystal
/usr/local/nginx/sbin/nginx -V
```

5、在\*\*configure arguments:\*\*后面显示的原有的 configure 参数如下：

```crystal
--prefix=/usr/local/nginx
```

![image-20221014162914185](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20221014162914185.png)

6、在已有的配置基础上新增 \*\*--with-http_ssl_module，\*\*形成新的配置命令，并在源码目录运行下面的命令

```crystal
./configure --prefix=/usr/local/nginx --with-http_ssl_module
```

7、配置完成后，继续运行命令 **make**

**切记：这里不要进行 make install，否则就是覆盖安装**

8、备份原有已安装好的 nginx 文件

```crystal
cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak
```

9、将刚刚编译好的 nginx 文件覆盖掉原有的 nginx

```crystal
cp ./objs/nginx /usr/local/nginx/sbin/
```

10、查看是否已经加入成功

```crystal
/usr/local/nginx/sbin/nginx -V
```

此时看到 ssl 模块已经被加载

```crystal
configure arguments: --prefix=/usr/local/nginx --with-http_ssl_module
```

![image-20221014163203113](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/nginx/image-20221014163203113.png)

11、配置 https Server

```nginx
server {
     #SSL 默认访问端口号为 443
     listen 443 ssl;
     #请填写绑定证书的域名
     server_name cloud.tencent.com;
     #请填写证书文件的相对路径或绝对路径
     ssl_certificate cloud.tencent.com_bundle.crt;
     #请填写私钥文件的相对路径或绝对路径
     ssl_certificate_key cloud.tencent.com.key;
     ssl_session_timeout 5m;
     #请按照以下协议配置
     ssl_protocols TLSv1.2 TLSv1.3;
     #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
     ssl_prefer_server_ciphers on;
     location / {
         #网站主页路径。此路径仅供参考，具体请您按照实际目录操作。
         #例如，您的网站主页在 Nginx 服务器的 /etc/www 目录下，则请修改 root 后面的 html 为 /etc/www。
         root html;
         index  index.html index.htm;
     }
 }
```

12、启动 Nginx，访问 https 域名，即可访问成功。

```crystal
systemctl restart nginx.service
```
