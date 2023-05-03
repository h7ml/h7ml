---
icon: vue
order: 3
date: 2021-05-27
author: h7ml
title: vue2与vue3全局组件注册
category: vite
tag: vite
star: true
---

[dgiot-dashboard 最佳实践](https://gitee.com/dgiiot/dgiot-dashboard/blob/a5d46efd3787f5be3e3e68774f00e1b1850faee5/src/dgiot/index.js#L38)

## vue2

```javascript
import Vue from 'vue';
const requireComponent = require.context('./components', true, /[A-Z]\w+\.(vue|js)$/);
```

### 获取组件配置

```javascript
import _ from 'lodash';
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = _.upperFirst(
    _.camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
});
```

### 全局注册组件

```javascript
Vue.component(componentName, componentConfig.default || componentConfig);
```

## Vite 注册全局组件的方式

### import.meta.glob()

### import.meta.globEager()

```javascript
const components = import.meta.glob('./components/*/*.vue');
export default function install(app) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.split('/')[1];
    app.component(name, defineAsyncComponent(value));
  }
}
```

### 在 main.js 文件中 import 并 use

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import components from './components/index.js';
createApp(App).use(components).mount('#app');
```

因为在 Vite 中不能使用 webpack 的 require.context()方式来读取文,所以之前使用 webpack 注册全局组件的方式就不能使用了。
