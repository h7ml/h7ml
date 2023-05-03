---
icon: python
order: 3
date: 2022-05-20
author: h7ml
category: python
tag: python
title: selenium
---

## selenium

## scrapy + selenium 抓取动态页面

[腾讯云博客 open in new window](https://cloud.tencent.com/developer/article/2016732)

### 安装 selenium

### 下载 selenium 调试工具

Chrome[下载地址 open in new window](https://registry.npmmirror.com/binary.html?path=chromedriver/)，版本与 Chrome 最近即可

### 使用

1、在 `middlewares.py` 文件中修改返回的 `response` 对象

找到 `Scrapy[这里是你的项目名字]sDownloaderMiddleware` 类，修改`process_request`方法

```python
 def process_request(self, request, spider):

        # 在 DownloaderMiddleware 中更改 process_request 返回的 response 对象
        # 通过 webdriver 构建的 driver 对象去请求js渲染后的页面
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')  # 浏览器不提供可视化界面。Linux下如果系统不支持可视化不加这条会启动失败
        options.add_argument('blink-settings=imagesEnabled=false')  # 不加载图片，提升运行速度
        options.add_argument('--disable-gpu')  # 谷歌文档提到需要加上这个属性来规避bug
        options.add_argument("no-sandbox")  # 取消沙盒模式
        options.add_argument("disable-blink-features=AutomationControlled")  # 禁用启用Blink运行时的功能
        options.add_experimental_option('excludeSwitches', ['enable-automation'])    # 开发者模式

        # executable_path 是你的 selenium 调试工具的路径
        driver = webdriver.Chrome(executable_path='/Users/mulin/Chrome/chromedriver', options=options)
        # 移除 `window.navigator.webdriver`. scrapy 默认为True
        driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
            "source": """
                     Object.defineProperty(navigator, 'webdriver', {
                       get: () =&gt; undefined
                     })
                   """
        })

        driver.get(request.url)
        driver.implicitly_wait(5)
        content = driver.page_source
        # 关闭 webdriver
        driver.quit()

        # 引入 HtmlResponse 函数来重新返回 response 对象
        return HtmlResponse(url=request.url, body=content, request=request, encoding='utf-8')
```

3、在`settings.py`文件中打开`SPIDER_MIDDLEWARES` 、`DOWNLOADER_MIDDLEWARES` 和`DOWNLOAD_DELAY`配置

```python
# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
DOWNLOAD_DELAY = 2

......

# Enable or disable spider middlewares
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
SPIDER_MIDDLEWARES = {
   'scrapy_yys.middlewares.ScrapyYysSpiderMiddleware': 543,
}

# Enable or disable downloader middlewares
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
DOWNLOADER_MIDDLEWARES = {
   'scrapy_yys.middlewares.ScrapyYysDownloaderMiddleware': 543,
}
```
