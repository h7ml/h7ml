---
icon: python
order: 4
date: 2022-05-20
author: h7ml
category: python
tag: python
title: urllib
---

## Urllib

urllib 包 包含以下几个模块：

- **urllib.request** - 打开和读取 URL。
- **urllib.error** - 包含 urllib.request 抛出的异常。
- **urllib.parse** - 解析 URL。
- **urllib.robotparser** - 解析 robots.txt 文件。

![](https://picgo-any.oss-cn-shanghai.aliyuncs.com/img/202208142159875.svg)

## urllib.request

urllib.request 定义了一些打开 URL 的函数和类，包含授权验证、重定向、浏览器 cookies 等。

urllib.request 可以模拟浏览器的一个请求发起过程。

我们可以使用 urllib.request 的 urlopen 方法来打开一个 URL，语法格式如下：

```python
urllib.request.urlopen(url, data=None, [timeout, ]*, cafile=None, capath=None, cadefault=False, context=None)
```

- **url**：url 地址。
- **data**：发送到服务器的其他数据对象，默认为 None。
- **timeout**：设置访问超时时间。
- **cafile 和 capath**：cafile 为 CA 证书， capath 为 CA 证书的路径，使用 HTTPS 需要用到。
- **cadefault**：已经被弃用。
- **context**：ssl.SSLContext 类型，用来指定 SSL 设置。

```python
import urllib.request as req

url = 'https://ys.mihoyo.com/'
# 基本使用

# 类型和方法
# 模拟浏览器向服务器发送请求
res1 = req.urlopen(url)

# HTTPResponse 类型
print(type(res1))

# read 方法 返回的是字节形式的二进制数据
# 参数为空返回全部字节，传人数字就读取多个字节
# decode 为解码，把二进制的数据转换为某个编码类型的数据
context1 = res1.read().decode('utf8')
print(context1)

# 读取一行
context2 = res1.readline()
print(context2)

# 一行一行读取直到结束
context3 = res1.readlines()
print(context3)

# 返回请求状态吗
print(res1.getcode())
# 返回url
print(res1.geturl())
# 返回状态信息
print(res1.getheaders())

# 下载
# 参数1url是要下载的路径，第二个参数是文件的名称filename
urllib = req.urlretrieve()

```

### 模拟头部信息

我们抓取网页一般需要对 headers（网页头信息）进行模拟，这时候需要使用到 urllib.request.Request 类：

```python
class urllib.request.Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)
```

- **url**：url 地址。
- **data**：发送到服务器的其他数据对象，默认为 None。
- **headers**：HTTP 请求的头部信息，字典格式。
- **origin_req_host**：请求的主机地址，IP 或域名。
- **unverifiable**：很少用整个参数，用于设置网页是否需要验证，默认是 False。。
- **method**：请求方法， 如 GET、POST、DELETE、PUT 等。

```python
import urllib.request
import urllib.parse

url = 'https://www.runoob.com/?s='  # 菜鸟教程搜索页面
keyword = 'Python 教程'
key_code = urllib.parse.quote(keyword)  # 对请求进行编码
url_all = url+key_code
header = {
    'User-Agent':'Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}   #头部信息
request = urllib.request.Request(url_all,headers=header)
reponse = urllib.request.urlopen(request).read()

fh = open("./urllib_test_runoob_search.html","wb")    # 将文件写入到当前目录中
fh.write(reponse)
fh.close()
```

**请求对象的定制**

UA 介绍:User Agent 中文名为**用户代理**，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统

及版本、CPU 类型、浏览器及版本。浏览器内核、浏览器渲染引擎、浏览器语言、浏览器插件等

## urllib.parse

urllib.parse 用于解析 URL，格式如下：

```python
urllib.parse.urlparse(urlstring, scheme='', allow_fragments=True)
```

urlstring 为 字符串的 url 地址，scheme 为协议类型，

allow_fragments 参数为 false，则无法识别片段标识符。相反，它们被解析为路径，参数或查询组件的一部分，并 fragment 在返回值中设置为空字符串。

以上实例输出结果为：

完整内容如下：

| 属性       | 索引 | 值                       | 值（如果不存在） |
| ---------- | ---- | ------------------------ | ---------------- |
| `scheme`   | 0    | URL 协议                 | _scheme_ 参数    |
| `netloc`   | 1    | 网络位置部分             | 空字符串         |
| `path`     | 2    | 分层路径                 | 空字符串         |
| `params`   | 3    | 最后路径元素的参数       | 空字符串         |
| `query`    | 4    | 查询组件                 | 空字符串         |
| `fragment` | 5    | 片段识别                 | 空字符串         |
| `username` |      | 用户名                   | `None`           |
| `password` |      | 密码                     | `None`           |
| `hostname` |      | 主机名（小写）           | `None`           |
| `port`     |      | 端口号为整数（如果存在） | `None`           |

### .quote()方法

将中文字符转换成 Unicode 编码格式

```text
kwd = urllib.parse.quote('原神')
print(kwd) # %E5%8E%9F%E7%A5%9E
```

### .urlencode()方法

可以将字典转化成 query 穿惨格式

```python
data = {
    'wd':'原神'
}
data = urllib.parse.urlencode(data)
print(data) # wd=%E5%8E%9F%E7%A5%9E
```

## urllib.error

urllib.error 模块为 urllib.request 所引发的异常定义了异常类，基础异常类是 URLError。

urllib.error 包含了两个方法，URLError 和 HTTPError。

URLError 是 OSError 的一个子类，用于处理程序在遇到问题时会引发此异常（或其派生的异常），包含的属性 reason 为引发异常的原因。

HTTPError 是 URLError 的一个子类，用于处理特殊 HTTP 错误例如作为认证请求的时候，包含的属性 **code** 为 HTTP 的状态码， **reason** 为引发异常的原因，**headers** 为导致 HTTPError 的特定 HTTP 请求的 HTTP 响应头。

对不存在的网页抓取并处理异常:

```python
import urllib.request
import urllib.error

myURL1 = urllib.request.urlopen("https://www.runoob.com/")
print(myURL1.getcode())   # 200

try:
    myURL2 = urllib.request.urlopen("https://www.runoob.com/no.html")
except urllib.error.HTTPError as e:
    if e.code == 404:
        print(404)   # 404
```

## encode()方法

**描述**

encode() 方法以 _encoding_ **指定的编码格式编码字符串**。errors 参数可以指定不同的错误处理方案。

**语法**

encode()方法语法：

```python
str.encode(encoding='UTF-8',errors='strict')
```

**参数**

- encoding -- 要使用的编码，如"UTF-8"。
- errors -- 设置不同错误的处理方案。默认为 'strict',意为编码错误引起一个 UnicodeError。 其他可能得值有 'ignore', 'replace', 'xmlcharrefreplace', 'backslashreplace' 以及通过 codecs.register_error() 注册的任何值。

**返回值**

该方法返回编码后的字符串。

## decode()方法

**描述**

decode() 方法以 _encoding_ **指定的编码格式解码字符串**。默认编码为字符串编码。

**语法**

decode()方法语法：

```python
str.decode(encoding='UTF-8',errors='strict')
```

**参数**

- encoding -- 要使用的编码，如"UTF-8"。
- errors -- 设置不同错误的处理方案。默认为 'strict',意为编码错误引起一个 UnicodeError。 其他可能得值有 'ignore', 'replace', 'xmlcharrefreplace', 'backslashreplace' 以及通过 codecs.register_error() 注册的任何值。

**返回值**

该方法返回解码后的字符串。

## post 请求案例百度翻译

- Post 请求的参数必须编码，先通过`urlencode`转换为二进制形式，在通过`encode`转换为`utf-8`
- 响应回来的数据是 json 需要进行反序列（loads）

```python
import json
import urllib.request as request
import urllib.parse as parse

url = 'https://fanyi.baidu.com/sug'

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
}

data = {
    'kw': 'spider'
}

# post 请求参数必须进行编码
# urlencode 是讲对象转化为query路径参数的形式（kw=spider）,如果用post请则必须通过encode('utf-8')在将其转化为二进制形式
data = parse.urlencode(data).encode('utf-8')

# 请求对象定制
UrlALl = request.Request(url, data, headers=headers)

# 发送请求
response = request.urlopen(UrlALl)

# 请求响应数据
context = response.read().decode('utf8')

obj = json.loads(context)

print(obj)
```

## Cookie 反爬

有的加密接口会携带 cookie 或者其他令牌，这个不是固定的每个接口安全方式不一样，所有需要去分析，一般 cookie 是最常见的，在 headers 中添加

```json
headers = {
    'Cookie': 'BAIDUID=A78C83243EC370D64EB9127421CDCD80:FG=1; BAIDUID_BFESS=A78C83243EC370D64EB9127421CDCD80:FG=1; BDUSS=duU0hBbzJhflBMQVZRMzB1Q0xRcHVKendKdnhRVjhiZkN1RzRwd0duQmc1eHRqSVFBQUFBJCQAAAAAAAAAAAEAAACWCc5fZ3bXytS0aG91c2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBa9GJgWvRiNV; BDUSS_BFESS=duU0hBbzJhflBMQVZRMzB1Q0xRcHVKendKdnhRVjhiZkN1RzRwd0duQmc1eHRqSVFBQUFBJCQAAAAAAAAAAAEAAACWCc5fZ3bXytS0aG91c2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBa9GJgWvRiNV; BIDUPSID=A78C83243EC370D64EB9127421CDCD80; PSTM=1660276134; ZFY=lTybp1mqT34VXA1zk3GnQ7ZEuvOwOkTsrZ5peYD5HLk:C; APPGUIDE_10_0_2=1; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1660527759; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1660527759; ab_sr=1.0.1_Y2RiYmNlYzA0MTQ1ZjA4Y2UzYWVjMDRmZWQxZjIwOTAyMGY3MDdmOThhYjIyZDk3ZTg2ZWE0OGE2YmIxYTBkNjIxYWI2ZGY3NjMzYmZiMTUwYjZkYTVkMWFhMzgzZWNlZjk4ZjYzYjRlODI1OTE5NjNhNDk1YTNmYzA2YTZjZDc1OGM2M2ZiMDkyM2JhMWU2MDExNWQwMWNmZWMyNTA3ZWViNmQzZjlmNGFjZWUwOGNmYmFkZDhhNDQxYjFlNTZi'
}
```

## handler 代理

```python
xxxxx

request = request.Request(url, data, headers)

proxies = {
 'http':xxxxx
}

# hander build_opener open
handler = urllib.request.build_.ProxyHandler(proxies = proxies)

openr = urllib.request.build_opener(handler)

response = openr.open(request)

xxxxx
```
