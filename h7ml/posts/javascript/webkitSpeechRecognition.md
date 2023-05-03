---
icon: javascript
description: JavaScript WebkitSpeechRecognition：使用语音识别技术增强Web应用程序
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>JavaScript WebkitSpeechRecognition：使用语音识别技术增强Web应用程序
order: 3
star: 3
date: 2023-03-04
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
category:
  - javascript
  - webkitSpeechRecognition
tag:
  - javascript
  - webkitSpeechRecognition
shortTitle: JavaScript WebkitSpeechRecognition：使用语音识别技术增强Web应用程序
head:
  - - meta
    - name: keywords
      content: JavaScript WebkitSpeechRecognition：使用语音识别技术增强Web应用程序
---

# JavaScript WebkitSpeechRecognition：使用语音识别技术增强 Web 应用程序

WebkitSpeechRecognition 是一种 JavaScript API，它可以让您的 Web 应用程序使用语音识别技术。使用 WebkitSpeechRecognition，您可以让用户通过说话来与您的 Web 应用程序进行交互，这可以使您的应用程序更加易于使用，也可以为用户提供更加人性化的体验。

## WebkitSpeechRecognition 的基本概念

WebkitSpeechRecognition 是 Webkit 浏览器中的一个 API，它提供了一种将用户的语音转换为文本的方法。该 API 允许您使用 JavaScript 控制语音识别过程，并获取识别结果。

### WebkitSpeechRecognition API 的基本概念如下

#### SpeechRecognition 对象：SpeechRecognition 对象是 WebkitSpeechRecognition API 的核心对象，它表示语音识别过程。您可以使用 SpeechRecognition 对象来控制语音识别过程，例如开始识别、停止识别等

#### 语音识别事件：SpeechRecognition 对象会触发多个事件，以便您在语音识别过程中获取信息。例如，onresult 事件会在识别成功后触发，onerror 事件会在识别失败时触发

#### 识别结果：语音识别过程的主要输出是识别结果。识别结果是一个包含一个或多个识别的文本字符串的数组。您可以使用识别结果来理解用户说了什么，并相应地更新您的应用程序

## 如何使用 WebkitSpeechRecognition

要使用 WebkitSpeechRecognition API，您需要遵循以下步骤：

1. 创建 SpeechRecognition 对象：使用以下代码创建 SpeechRecognition 对象：

```javascript
const recognition = new webkitSpeechRecognition();
```

2. 设置语言：使用以下代码设置语音识别的语言：

```javascript
recognition.lang = window.navigator.language || 'en-US'; // 设置为语言
```

如果未指定语言，则 WebkitSpeechRecognition 默认使用浏览器的语言。

3. 监听事件：使用以下代码监听语音识别事件：

```javascript
recognition.onresult = (event) => {
  const result = event.results[event.results.length - 1];
  console.log(result[0].transcript);
};
```

在上面的代码中，我们使用 onresult 事件来监听语音识别结果。当识别成功时，该事件会触发，并将识别结果作为参数传递给事件处理程序。

4. 开始和停止识别：使用以下代码开始和停止语音识别：

```javascript
recognition.start(); // 开始语音识别
recognition.stop(); // 停止语音识别
```

在上面的代码中，我们使用 start 方法开始语音识别，使用 stop 方法停止语音识别。

## 使用 WebkitSpeechRecognition 的示例

### 使用语音输入来搜索 Baidu

:::normal-demo 使用语音输入来搜索 Baidu

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Speech Recognition Example</title>
  </head>
  <body>
    <input type="text" id="search-box" placeholder="Search Baidu" />
    <button id="search-button">Search</button>
    <script>
      const recognition = window.webkitSpeechRecognition ? new webkitSpeechRecognition() : null; // 判断是否支持 webkitSpeechRecognition
      if (recognition) {
          recognition.lang = window.navigator.language || 'en-US'; // 设置为语言
          const searchBox = document.getElementById('search-box');
          const searchButton = document.getElementById('search-button');
          recognition.onresult = (event) => {
              const result = event.results[event.results.length - 1];
              searchBox.value = result[0].transcript;
          };
          searchButton.addEventListener('click', () => {
              const query = searchBox.value;
              window.location.href = ` https://www.baidu.com/s?ie=utf-8&wd=${query}`;
              // });
              document.addEventListener('keydown', (event) => {
                  if (event.keyCode === 13) {
                      event.preventDefault();
                      searchButton.click();
                  }
              });
              document.addEventListener('keydown', (event) => {
                  if (event.keyCode === 32 && !event.repeat) {
                      recognition.start();
                  }
              });
              document.addEventListener('keyup', (event) => {
                  if (event.keyCode === 32 && !event.repeat) {
                      recognition.stop();
                  }
              });
          }
      else
          {
              console.log('浏览器不支持语音识别');
          } // 加上容错处理
    </script>
  </body>
</html>
```

:::

### Vue 3 代码实现

::: playground#vue Vue 3 代码实现 @file App.vue

```vue
<template>
  <div>
    <button @click="startRecognition">Start Recognition</button>
    <button @click="stopRecognition">Stop Recognition</button>
    <p>{{ recognitionStatus }}</p>
    <p>{{ recognizedText }}</p>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'SpeechRecognition',
    setup() {
      const recognition = webkitSpeechRecognition ? new webkitSpeechRecognition() : null;
      const recognitionStatus = ref('Recognition not started');
      const recognizedText = ref('');

      if (recognition) {
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
          recognitionStatus.value = 'Recognition started';
        };

        recognition.onend = () => {
          recognitionStatus.value = 'Recognition ended';
        };

        recognition.onresult = (event) => {
          const recognized = event.results[event.results.length - 1][0].transcript;
          recognizedText.value = recognized;
        };
      } else {
        recognitionStatus.value = 'Recognition not supported';
      }

      const startRecognition = () => {
        if (recognition) {
          recognition.start();
        }
      };

      const stopRecognition = () => {
        if (recognition) {
          recognition.stop();
        }
      };

      return {
        startRecognition,
        stopRecognition,
        recognitionStatus,
        recognizedText,
      };
    },
  };
</script>
```

:::

### React 代码实现

:::react-demo React 代码实现

```jsx
import React, { useState, useEffect } from 'react';

function WebkitSpeechRecognition() {
  const [recognition, setRecognition] = useState(null);
  const [recognitionStatus, setRecognitionStatus] = useState('Recognition not started');
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    if (window.webkitSpeechRecognition) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setRecognitionStatus('Recognition started');
      };

      recognition.onend = () => {
        setRecognitionStatus('Recognition ended');
      };

      recognition.onresult = (event) => {
        const recognized = event.results[event.results.length - 1][0].transcript;
        setRecognizedText(recognized);
      };

      setRecognition(recognition);
    } else {
      setRecognitionStatus('Recognition not supported');
    }
  }, []);

  const startRecognition = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div>
      <button onClick={startRecognition}>Start Recognition</button>
      <button onClick={stopRecognition}>Stop Recognition</button>
      <p>{recognitionStatus}</p>
      <p>{recognizedText}</p>
    </div>
  );
}

export default WebkitSpeechRecognition;
```

:::

在上面的示例中，我们创建了一个 SpeechRecognition 对象，并将其设置为英语语言。我们还创建了一个搜索框和一个搜索按钮，用户可以在搜索框中输入搜索词并点击搜索按钮来进行搜索。

我们使用 onresult 事件来监听语音识别结果，并将其设置为搜索框的值。我们还使用 addEventListener 方法来监听搜索按钮的点击事件和键盘事件，以便在用户按下回车键或空格键时触发搜索。

最后，我们在按下空格键时使用 start 方法开始语音识别，在松开空格键时使用 stop 方法停止语音识别。

## WebkitSpeechRecognition 的局限性

尽管 WebkitSpeechRecognition 可以让 Web 应用程序使用语音识别技术，但它仍然存在一些局限性。以下是一些常见的局限性：

1. 浏览器支持：WebkitSpeechRecognition API 只能在 Webkit 浏览器中使用，因此无法在其他浏览器中使用。
2. 语音识别质量：语音识别技术的质量取决于多个因素，例如用户的发音、语音识别引擎的质量等。因此，WebkitSpeechRecognition 可能无法准确地识别所有用户的语音。
3. 隐私问题：由于 WebkitSpeechRecognition 需要访问用户的麦克风，因此可能会引起隐私问题。如果您的应用程序需要使用 WebkitSpeechRecognition，请确保遵循适当的隐私保护措施。

## WebkitSpeechRecognition 兼容性

- Chrome 25+
- Edge 79+
- Firefox 44+
- Opera 27+
- Safari 6+ 需要注意的是，不同浏览器可能有不同的语音识别引擎，因此识别结果可能会有所不同。此外，由于 WebkitSpeechRecognition API 是实验性的，因此其行为和特性可能会在未来版本中发生变化。

如果你要使用 WebkitSpeechRecognition API，请务必进行充分的测试和容错处理，以确保你的应用在不同浏览器和设备上都能正常运行。

## 结论

WebkitSpeechRecognition 是一种有用的 JavaScript API，它可以使您的 Web 应用程序更加易于使用，并为用户提供更加人性化的体验。虽然 WebkitSpeechRecognition 有一些局限性，但它仍然是一种有用的技术，可以让您的应用程序更加智能化。
