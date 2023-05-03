---
icon: javascript
description: javascript EventSource实时服务器端推送
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>EventSource实时服务器端推送
order: 3
star: 3
date: 2023-03-03
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
category:
  - javascript
  - eventsource
tag:
  - javascript
  - eventsource
shortTitle: javascript EventSource实时服务器端推送
head:
  - - meta
    - name: keywords
      content: javascript EventSource实时服务器端推送
---

# javascript EventSource：实时服务器端推送

当涉及到向前端应用程序提供实时数据时，Web 开发人员需要一种可以无缝工作的解决方案。一般情况下，前端应用程序会定期向服务器发送请求以获取更新，但是这会浪费宝贵的带宽资源和服务器资源。在这种情况下，javascript EventSource 就成为了一种更为高效的解决方案。

## 背景

在使用 chatgpt 时。实时的获取到 chatgpt 的回复。但是我发现在输入 prompt 后,只有一个请求。但是他的消息是实时动态显示的，起初以为使用了 WebSocket，但经过查看源码发现并没有使用 WebSocket。而是使用了 EventSource。

## 什么是 EventSource？

javascript EventSource 是一个内置在现代浏览器中的 API，它允许服务器向客户端发送实时事件。该 API 建立一个持久化的连接，通过该连接，服务器可以随时向客户端推送数据。该 API 建立的连接基于 HTTP 协议，而不是 WebSocket，因此不需要使用其他库或框架，即可在应用程序中使用它。

## EventSource 的工作原理

EventSource 基于 HTTP 协议实现，通过与服务器建立一个持续连接，实现了服务器向客户端推送事件数据的功能。在客户端，EventSource 对象通过一个 URL 发起与服务器的连接。连接成功后，服务器可以向客户端发送事件数据。在客户端，通过 EventSource 对象注册事件处理函数，以接收来自服务器的事件数据。

以下是 EventSource 的工作原理：

1. 客户端向服务器发起 HTTP GET 请求，请求一个特定的 URL。
2. 服务器接收请求，并在 HTTP 头中添加 "Content-Type: text/event-stream"。
3. 服务器建立一个持续的 HTTP 连接，向客户端发送数据，直到连接被关闭。
4. 当服务器有新的事件数据要发送时，它将这些数据以特定的格式发送给客户端。事件数据格式如下：

   ```
   event: eventName;
   data: eventData;
   ```

其中，event 字段表示事件名，data 字段表示事件数据。

5. 客户端通过 EventSource 对象注册事件处理函数，以接收来自服务器的事件数据。当客户端接收到来自服务器的事件数据时，它将创建一个 Event 对象，并触发相应的事件处理函数，传递 Event 对象作为参数。Event 对象包含以下属性：

   ```
   type：事件类型，通常为 "message"。
   data：事件数据。
   lastEventId：上一个事件的 ID。
   origin：事件源的 URL。
   ```

6. 当连接出现错误或被关闭时，客户端将触发 "error" 事件或 "close" 事件，以便进行错误处理或重新连接。总的来说，EventSource 建立了一种持久化的 HTTP 连接，实现了服务器向客户端实时推送事件数据的功能。它非常适合于需要实时更新的应用程序，例如聊天室、股票市场等等。

## 如何使用 javascript EventSource？

使用 EventSource 非常简单。在前端，我们只需要使用它提供的构造函数，指定从服务器接收事件的 URL 即可：

```javascript
const eventSource = new EventSource('/my-endpoint');
```

在这个例子中，我们将通过一个名为"my-endpoint”的 URL 从服务器获取事件。服务器应该根据需要设置此 URL 并在客户端上公开它。

一旦建立连接，服务器就可以使用以下语法向客户端发送事件：

```javascript
eventSource.sendEvent('eventName', { data: 'eventData' });
```

这将向所有当前连接到 EventSource 实例的客户端发送一个名为"eventName”的事件，并附带一个包含"eventData”的数据对象。

客户端可以使用以下语法来监听事件：

```javascript
eventSource.addEventListener('eventName', (event) => {
  console.log('Received event:', event.data);
});
```

这将为名为"eventName”的事件注册一个侦听器。每当服务器发送此事件时，客户端都会接收到一个带有事件数据的 Event 对象。在此例中，我们将其打印到控制台中。

此外，EventSource 还提供了其他一些有用的功能，例如错误处理和自定义事件重试。例如，我们可以使用以下语法来处理与 EventSource 相关的错误：

```javascript
eventSource.onerror = (error) => {
  console.log('EventSource failed:', error);
};
```

这将为所有 EventSource 错误注册一个处理程序。每当出现错误时，客户端都会接收到一个带有错误信息的 Event 对象。在这个例子中，我们将其打印到控制台中。

## 总结

总体来说，javascript EventSource 是一种非常有用的技术，可以使前端应用程序获得实时数据而无需频繁地从服务器获取更新。由于其内置于现代浏览器中，因此使用 EventSource 非常容易，而且不需要使用额外的库或框架。

### EventSource 与 WebSocket Http 的对比

EventSource 和 WebSocket 都是用于实现客户端与服务器之间实时双向通信的技术，但它们在很多方面有着不同的特点和适用场景。

1. 协议 EventSource 基于 HTTP 协议，使用的是 HTTP 的长连接机制，而 WebSocket 则是一种独立的协议，与 HTTP 没有关系。

2. 双向通信 WebSocket 支持双向通信，客户端和服务器都可以主动发送数据。而 EventSource 只支持服务器向客户端的单向通信，客户端只能接收数据，不能主动发送数据。

3. 数据格式 WebSocket 可以发送任意格式的数据，包括文本、二进制等。而 EventSource 仅支持纯文本格式，采用了一种特殊的格式来传输事件数据。

4. 浏览器兼容性 WebSocket 是 HTML5 新增的标准，兼容性相对较差，在一些旧版本的浏览器中不支持。而 EventSource 的兼容性相对较好，在大多数现代浏览器中都能够正常工作。

5. 实时性 WebSocket 的实时性更高，它的通信速度和性能都比 EventSource 更优秀。因为 WebSocket 是双向通信，数据传输的效率更高，而 EventSource 由于是单向通信，数据传输的速度会稍慢一些。

6. 跨域 WebSocket 和 EventSource 都可以跨域使用，但跨域的设置方式有所不同。

   - WebSocket 需要在服务器端进行配置，允许客户端连接。服务器需要在 HTTP 头中添加 "Access-Control-Allow-Origin" 字段，允许来自指定域名的客户端连接。

   - EventSource 跨域时默认使用 CORS 机制。服务器只需在 HTTP 头中添加 "Access-Control-Allow-Origin" 字段，允许来自指定域名的客户端连接即可。

7. 浏览器兼容性

   WebSocket 和 EventSource 在浏览器兼容性方面有所不同。

   - WebSocket 在一些较老版本的浏览器中不被支持，例如 IE9 及以下版本。但在现代浏览器中，WebSocket 已经得到了广泛的支持。

   - EventSource 则在较早的浏览器版本中也能够正常工作，包括 IE10 及以上版本、Firefox 6.0 及以上版本、Chrome 13.0 及以上版本等等。但在一些较老的浏览器中，如 Safari 5.1.7 及以下版本，EventSource 可能会遇到一些问题。

总的来说，WebSocket 和 EventSource 在跨域和浏览器兼容性方面都有一些不同。在选择使用哪种技术时，需要根据具体的需求和目标浏览器版本来进行选择

总的来说，WebSocket 和 EventSource 都有着自己的优点和适用场景。WebSocket 更适合需要双向通信的应用场景，例如实时游戏、在线协作等等。而 EventSource 则更适合需要单向数据推送的应用场景，例如实时监控、股票行情等等。因此，在选择使用哪种技术时，需要根据具体的需求进行选择。

## 实例

```javascript
function queryChat(query) {
  const { host } = window.location;
  if (!query) {
    document.body.innerHTML = 'Please enter a message' + '<br>';
  } else if (host !== 'api.gpt87.com') {
    document.body.innerHTML = 'Please use the api.gpt87.com domain' + '<br>';
  }
  const data = new EventSource(`https://api.gpt87.com/api/send?message=${query}`);
  data.onmessage = function (event) {
    document.body.innerHTML += JSON.parse(event.data).data + '<br>';
  };
}

queryChat('Hello');
```
