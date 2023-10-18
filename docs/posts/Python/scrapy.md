---
icon: python
order: 2
date: 2022-05-20
author: h7ml
category: python
tag: python
title: Scrapy
---

## Scrapy

## 安装

### Windows 安装方式

升级 pip 版本：

```bash
pip install --upgrade pip
```

通过 pip 安装 Scrapy 框架:

### Ubuntu 安装方式

安装非 Python 的依赖:

```bash
sudo apt-get install python-dev python-pip libxml2-dev libxslt1-dev zlib1g-dev libffi-dev libssl-dev
```

通过 pip 安装 Scrapy 框架：

### Mac OS 安装方式

pip 版本必须转 22+，升级 pip 版本

```text
 pip3 install --upgrade pip
```

使用清华源下载

```bash
 pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple scrapy
```

> 注意：在 mac 中使用 scrapy 指令必须在前面加上 python3 -m

## 新建项目

在开始爬取之前，必须创建一个新的 Scrapy 项目。进入自定义的项目目录中，运行下列命令：

```bash
scrapy startproject mySpider
```

其中， mySpider 为项目名称，可以看到将会创建一个 mySpider 文件夹，目录结构大致如下：

下面来简单介绍一下各个主要文件的作用：

```python
mySpider/
    scrapy.cfg
    mySpider/
        __init__.py
        items.py
        pipelines.py
        settings.py
        spiders/
            __init__.py
            ...
```

这些文件分别是:

- scrapy.cfg: 项目的配置文件。
- mySpider/: 项目的 Python 模块，将会从这里引用代码。
- mySpider/items.py: 项目的目标文件。
- mySpider/pipelines.py: 项目的管道文件。
- mySpider/settings.py: 项目的设置文件。
- mySpider/spiders/: 存储爬虫代码目录。

### 创建爬虫文件

1、cd 进入 `spiders` 文件夹中

```bash
cd mySpider\spiders\spiders
```

2、创建爬虫文件

```bash
# scrapy genspider 文件名  网页地址
scrapy genspider test www.baidu.com
```

3、`test.py`

```python
import scrapy


class TestSpider(scrapy.Spider):
    name = 'test'
    allowed_domains = ['www.baidu.com']
    start_urls = ['https://www.baidu.com/']

    def parse(self, response):
        pass
```

### 运行爬虫代码

> 注意：有的网站会有 robots 协议，这是一个君子协议，scrapy 默认是启动遵守的，如果想要爬取需要关闭

在`settings.py`文件中

```text
# Obey robots.txt rules
ROBOTSTXT_OBEY = True 注释该行
```

## 语法

### response 对象

**解析数据返回的对象**

- `response.body` ：响应返回页面已二进制格式的内容

- `response.text` ：响应返回页面已字符串格式的内容

- `response.url` ：响应返回页面 url

- `response.status` ：响应返回 ajax 请求状态码

- `response.xpath()`：（常用） 使用 xpath 路径查询特定元素，返回一个`selector`列表对象

- `response.css()`：使用`css_selector`查询元素，返回一个`selector`列表对象

  - 获取内容 ：`response.css('#su::text').extract_first()`
  - 获取属性 ：`response.css('#su::attr(“value”)').extract_first()`

### selector 对象

> 通过`xpath`方法调用返回的是`seletor`列表

#### extract()

- 提取`selector`对象的值
- 如果提取不到值，那么会报错
- 使用 xpath 请求到的对象是一个`selector`对象，需要进一步使用`extract()`方法拆 包，转换为`unicode`字符串

#### extract_first()

- 提取`seletor`列表中的第一个值
- 如果提取不到值，会返回一个空值
- 返回第一个解析到的值，如果列表为空，此种方法也不会报错，会返回一个空值 `xpath() css()`

> 注意：每一个`selector`对象可以再次的去使用`xpath`或者`css`方法

## 使用管道封装

1、items.py 在项目目标文件中定义

```python
class Scrapy01TestItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # src = scrapy.Field()
    name = scrapy.Field()
    href = scrapy.Field()
```

2、爬虫住文件

```python
import scrapy
from scrapy_01_test.items import Scrapy01TestItem


class TestSpider(scrapy.Spider):
    name = 'test'
    allowed_domains = ['bbs.mihoyo.com']
    start_urls = ['https://bbs.mihoyo.com/ys/obc/channel/map/189/25?bbs_presentation_style=no_header']

    def parse(self, response):
        ul = response.xpath('//*[@id="__layout"]/div/div[2]/div[2]/div/div[1]/div[2]/ul/li/div/ul/li[1]/div/div/a')
        for li in ul:
            href = li.xpath('@href').extract_first()
            name = li.xpath('.//div[2]/text()').extract_first()

            # 调用Scrapy01TestItem将数据存储中目标文件中
            # data = Scrapy01TestItem(href=href, name=name)

            # 第二页的地址
            url = 'https://bbs.mihoyo.com' + href

            yield scrapy.Request(url, callback=self.parse_second, meta={
                'href': href,
                'name': name
            })

            # 每次循环得到的结果交给管道，如果是多个管道链接调用泽在最后一个执行的管道中 yield 最终的数据
            # yield data

    def parse_second(self, response):
        src = response.xpath(
            '//*[@id="__layout"]/div/div[2]/div[2]/div/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div/ul[2]/li/img/@src').extract_first()
        name = response.meta['name']
        href = response.meta['href']

        # 调用Scrapy01TestItem将数据存储中目标文件中
        data = Scrapy01TestItem(src=src, href=href, name=name)
        # 每次循环得到的结果交给管道，如果是多个管道链接调用泽在最后一个执行的管道中 yield 最终的数据
        yield data
```

3、在`settings.py`中开启管道

```python
# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
   # 管道可以有多个
   # scrapy_01_test.pipelines.Scrapy01TestPipeline 管道的类名路径
   # 300 是管道的优先级，范围1-1000，值越小优先级越高
   'scrapy_01_test.pipelines.Scrapy01TestPipeline': 300,
}
```

4、pipelines.py 管道文件

```python
# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import urllib.request

from itemadapter import ItemAdapter


# 必须在setings中开启管道才能使用
class Scrapy01TestPipeline:
    # 在爬虫文件执行之前调用一次
    def __init__(self):
        self.fb = None
        self.initdata = []

    def open_spider(self, spider):
        pass

    # itme 就是在yield后面的对象
    def process_item(self, item, spider):
        self.initdata.append(item)
        return item

    # 在爬虫文件执行之后调用一次
    def close_spider(self, spider):
        # w 模式每次执行都会打开文件覆盖之前的内容
        self.fb = open('data.json', 'a', encoding='utf-8')
        # write 方法必须写一个字符串
        self.fb.write(str(self.initdata))
        # 关闭
        self.fb.close()


# 多管道开始
#    在 settings 中开启管道
#    'scrapy_01_test.pipelines.DownLoadYS': 301,
class DownLoadYS:
    # itme 就是在yield后面的对象
    def process_item(self, item, spider):
        url = item.get('src')
        filename = f'./img/{item.get("name")}.jpg'

        urllib.request.urlretrieve(url=url, filename=filename)

        return item
```

5、items 目标文件

```python
# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class Scrapy01TestItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    src = scrapy.Field()
    name = scrapy.Field()
    href = scrapy.Field()
```

## [Scrapy CrawlSpideropen in new window](https://geek-docs.com/scrapy/scrapy-tutorials/scrapy-crawlspider.html)

### 创建爬虫文件

```text
# scrapy genspider 文件名  网页地址
scrapy genspider -t crawl test www.baidu.com
```

**Scrapy CrawlSpider**，继承自`Spider`, 爬取网站常用的爬虫，其定义了一些规则(rule)方便追踪或者是过滤`link`。 也许该 spider 并不完全适合您的特定网站或项目，但其对很多情况都是适用的。 因此您可以以此为基础，修改其中的方法，当然您也可以实现自己的`spider`。

### class scrapy.contrib.spiders.CrawlSpider

`CrawlSpider`继承自`Spider`, 爬取网站常用的爬虫，其定义了一些规则(`rule`)方便追踪或者是过滤 link。 也许该 spider 并不完全适合您的特定网站或项目，但其对很多情况都是适用的。 因此您可以以此为基础，修改其中的方法，当然您也可以实现自己的`spider`。

除了从`Spider`继承过来的(您必须提供的)属性外，其提供了一个新的属性:

- **rules**

一个包含一个(或多个) `Rule` 对象的集合(list)。 每个 `Rule` 对爬取网站的动作定义了特定表现。 `Rule`对象在下边会介绍。 如果多个 rule 匹配了相同的链接，则根据他们在本属性中被定义的顺序，第一个会被使用。

该 spider 也提供了一个可复写(`overrideable`)的方法:

- **parse_start_url(response)**

当`start_url`的请求返回时，该方法被调用。 该方法分析最初的返回值并必须返回一个 `Item` 对象或者 一个 `Request` 对象或者 一个可迭代的包含二者对象。

### 爬取规则

```python
class scrapy.contrib.spiders.Rule(link_extractor, callback=None, cb_kwargs=None, follow=None, process_links=None, process_request=None)
```

`link_extractor` 是一个 `Link Extractor` 对象。 其定义了如何从爬取到的页面提取链接。

`callback` 是一个 callable 或 string(该 spider 中同名的函数将会被调用)。 从`link_extractor`中每获取到链接时将会调用该函数。该回调函数接受一个 response 作为其第一个参数， 并返回一个包含 Item 以及(或) Request 对象(或者这两者的子类)的列表(list)。

> 当编写爬虫规则时，请避免使用 `parse` 作为回调函数。 由于 `CrawlSpider` 使用 parse 方法来实现其逻辑，如果 您覆盖了 parse 方法，crawl spider 将会运行失败。

- `cb_kwargs`: 包含传递给回调函数的参数(keyword argument)的字典。
- `follow`: 是一个布尔(boolean)值，指定了根据该规则从 response 提取的链接是否需要跟进。 如果 callback 为 None， follow 默认设置为 True ，否则默认为 False 。
- `process_links`: 是一个 callable 或 string(该 spider 中同名的函数将会被调用)。 从 link_extractor 中获取到链接列表时将会调用该函数。该方法主要用来过滤。
- `process_request`: 是一个 callable 或 string(该 spider 中同名的函数将会被调用)。 该规则提取到每个 request 时都会调用该函数。该函数必须返回一个 request 或者 None。 (用来过滤 request)

### CrawlSpider 示例

```python
import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class MySpider(CrawlSpider):
    name = 'geek-docs'
    allowed_domains = ['yiibai.com']
    start_urls = ['https://www.yiibai.com/cplusplus/what-is-cpp.html']

    rules = (
        # 提取匹配 'yiibai.com/cplusplus' (但不匹配 'subsection.php') 的链接并跟进链接(没有callback意味着follow默认为True)
        Rule(LinkExtractor(allow=('yiibai.com/cplusplus', ), deny=('subsection\.php', ))),

        # 提取匹配 'item.php' 的链接并使用spider的parse_item方法进行分析
        Rule(LinkExtractor(allow=('item\.php', )), callback='parse_item'),
    )

    def parse_item(self, response):
        self.log('Hi, this is an item page! %s' % response.url)

        item = scrapy.Item()
        item['id'] = response.xpath('//td[@id="item_id"]/text()').re(r'ID: (\d+)')
        item['name'] = response.xpath('//td[@id="item_name"]/text()').extract()
        item['description'] = response.xpath('//td[@id="item_description"]/text()').extract()
        return item
```

`CrawlSpider`将从`yiibai.com`的首页开始爬取，获取`yiibai.com/cplusplus`以及`item`的链接并，对后者调用 **parse_item** 方法。 当 item 获得返回`response`时，将使用`XPath`处理 HTML 并生成一些数据填入 Item 中。

## 日志信息和日志等级

**日志级别：**

1. CRIRICAL：严重错误
2. ERROR：一般错误
3. WARNING：警告
4. INFO：一级信息
5. DEBUG：调试信息

默认日志等级是 DEBUG，只有出现 DEBUG 才会出现。

**settings.py 文件设置**：

- LOG_FILE：将屏幕显示的信息全部记录到文件中，屏幕不在显示，注意文件名一定是.log
- LOG_LEVEL: 设置日志的等级，就显示哪些，不显示哪些

## POST 请求

```python
import scrapy

class FySpider(scrapy.Spider):
    name = 'fy'
    # allowed_domains = ['www.baidu.com']
    start_urls = ['https://fanyi.baidu.com/sug']

    def start_requests(self):
        data={
            'kw':"beautiful"
        }
        for url in self.start_urls:
            yield  scrapy.FormRequest(url=url,formdata=data,callback=self.parse)

    def parse(self, response):
        print(response.text)
```
