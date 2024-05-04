---
icon: react
order: 1
date: 2024-08-05
author: h7ml
title: Redux初体验及高级使用
description: Redux初体验及高级使用
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>nestjs  控制反转（IOC）与依赖注入（DI）
star: 1
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
shortTitle: Redux初体验及高级使用
category:
  - Redux
  - react
tag:
  - Redux
  - react
head:
  - - meta
    - name: keywords
      content: Redux初体验及高级使用
---

## 什么是 Redux

Redux 是一个用于 JavaScript 应用程序的状态管理库，它帮助我们有效地管理应用程序的状态，并使组件之间的数据传递更加简单和可控。Redux 使用单一的数据存储（store）来保存整个应用程序的状态，并通过 Reducers 和 Actions 来处理状态的变化。

## Redux 的核心概念

Redux 的单一数据流是指整个应用程序中的数据状态（state）存储在一个单一的 JavaScript 对象中，通常称为"Store"。这个 Store 是唯一的，并且整个应用程序共享它。所有的数据改变都通过派发（dispatch）"Action"来完成，Action 是一个包含描述改变的信息的简单对象。然后，这些 Action 会被传递给 Reducer 函数，Reducer 会根据 Action 的类型来更新 Store 中的数据状态。组件可以订阅（subscribe）Store 的状态变化，以便在状态改变时重新渲染自己。

### Store：

整个应用程序只有一个 Store，它是一个包含应用程序状态的 JavaScript 对象。在 Redux 中，我们使用 createStore 函数来创建这个 Store，并将一个根 Reducer 传递给它。

### Action：

Action 是一个普通的 JavaScript 对象，它描述了发生的事件和带有的数据。Action 必须包含一个 type 字段，用于标识它的类型。其他字段可以用来传递任意数据。

### Dispatch：

当应用程序中的某个组件需要改变状态时，它会调用 store.dispatch(action)方法来派发一个 Action。

### Reducer：

Reducer 是一个纯函数，它接收当前的状态和一个 Action 作为参数，并根据 Action 的类型来返回一个新的状态。Reducer 不会直接修改原始状态，而是返回一个全新的状态对象。Redux 应用中可以有多个 Reducer，但最终它们会被合并成一个根 Reducer，并传递给 createStore 函数。

### State 更新：

当 Action 被派发时，Redux 会调用根 Reducer 函数，并将当前的状态和 Action 传递给它。Reducer 函数根据 Action 的类型来更新状态，并返回一个新的状态对象。Redux 会用新的状态对象替换原始状态，从而更新整个应用程序的状态。

### 订阅：

组件可以通过 store.subscribe(listener)方法来订阅 Store 的状态变化。一旦状态发生改变，订阅的监听器（listener）就会被调用，组件可以在这里进行重新渲染，从而反映最新的状态。

### View 渲染：

组件通过订阅 Store 的状态变化来实时更新自己的数据，并重新渲染视图。

这个单一数据流的过程确保了整个应用程序的数据流动是可预测且一致的。所有的状态都存储在一个中央的 Store 中，由 Reducer 函数进行管理和更新，而不是分散在各个组件中。这种架构使得应用程序的状态变得易于调试、测试和维护，同时也降低了数据流动的复杂性。

总的来说，Redux 的单一数据流模式提供了一种简单、可预测和可维护的状态管理方案，使得 React 应用程序开发更加高效和优雅。

## 使用

### 安装

```bash
npm install redux react-redux --save
```

### 创建 store

在 Redux 中，我们通过创建一个 Store 来保存应用程序的状态。一个 Redux 应用只有一个全局唯一的 Store，类似于全局变量存储仓库。

```js
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
```

### 创建 reducer

Reducer 是一个纯函数，用于处理应用程序状态的变化。它接收当前的状态和一个 Action，根据 Action 的类型来更新状态。

```js
const defaultStore = {
  inputValue: 'h7ml',
  list: ['前端', '前端物语'],
}

export default (state = defaultStore, action) => {
  if (action.type === 'value/changeInput') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.payload
    return newState
  }
  return state
}
```

### 创建 action

Action 是一个普通的 JavaScript 对象，它描述了发生的事件和带有的数据。Action 必须包含一个 type 字段，用于标识它的类型。其他字段可以用来传递任意数据。

```js
export function changeInputAction(value) {
  return {
    type: 'value/changeInput',
    payload: value,
  }
}
```

### 组件中使用

在组件中，我们可以通过 React 的 useState 来获取 Store 中的状态，并且使用 store.subscribe 来订阅状态变化，以便在状态发生变化时更新组件。

```js
import './App.css'
import { useState } from 'react'
import { Input } from 'antd'
import store from './store'
import 'antd/dist/antd.css'

function App() {
  const [appData, setAppData] = useState(store.getState())

  store.subscribe(() => {
    setAppData(store.getState())
  })

  // ... 省略其它代码

  const changeInputValue = (e) => {
    const action = {
      type: 'value/changeInput',
      payload: e.target.value,
    }
    store.dispatch(action)
  }

  return (
    <div>
      <Input placeholder="Write Something" onChange={changeInputValue} />
      {/* ... 省略其它代码 */}
    </div>
  )
}

export default App
```

## 总结

我们可以看到 Redux 的基本使用方法。组件通过订阅 Store 的状态变化来实时更新自己的数据，通过 dispatch 一个 action 来触发状态的更新。

## 高级使用

在高级使用部分，我们将介绍 Redux 中的 Action Creator 和拆分 Reducer。

### Action Creator

Action Creator 是一个函数，用来创建 Action 对象。它封装了创建 Action 的过程，使得代码更加简洁和易于维护。

```js
const defaultStore = 'Write something'

function inputValue(state = defaultStore, action) {
  if (action.type === 'value/changeInput') {
    let newState = JSON.parse(JSON.stringify(state))
    newState = action.payload
    return newState
  }
  return state
}

export class inputValueAction {
  static changeInput = (input) => {
    return {
      type: 'value/changeInput',
      payload: input,
    }
  }
}

export default inputValue
```

### 拆分 Reducer

当应用变得庞大复杂时，单一的 Reducer 可能会变得过于庞大。为了保持代码的清晰和易于维护，我们可以将 Reducer 进行拆分，分成多个子 Reducer，然后再合并成一个 Root Reducer

```js
// reducers/inputValue.js
const defaultStore = 'Write something';

export default (state = defaultStore, action) => {
    if (action.type === 'value/changeInput') {
        let newState = JSON.parse(JSON.stringify(state));
        newState = action.payload;
        return newState;
    }
    return state;
}

// reducers/list.js
const defaultStore = ['搞114514', '坐下北泽JR'];

export default (state = defaultStore, action) => {
    if (action.type === 'list/addItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.push(action.payload);
        return newState;
    }
    return state;
}

// reducers/index.js
import { combineReducers } from "redux";
import inputValue from "./inputValue";
import list from "./list";

export default combineReducers({
    inputValue,
    list
});
```

### 使用 Root Reducer

在根组件中，我们可以使用 combineReducers 函数将所有子 Reducer 合并成一个 Root Reducer，并传递给 createStore 函数来创建 Store

```js
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
```

## react-redux

当我们使用 React 来开发应用时，结合 Redux 可以更好地管理应用状态。react-redux 是 Redux 官方推荐的用于在 React 应用中集成 Redux 的官方库。它提供了一些高阶组件和钩子函数，帮助我们简化 Redux 在 React 中的使用。

主要有两个核心组件：Provider 和 connect。

### Provider

Provider 组件是一个顶层组件，它接受 Redux 的 store 作为 props，并使得整个应用程序中的所有组件都能够访问到 Redux 的 store。通过 Provider 组件，我们无需手动将 store 传递给每个需要使用它的组件，而是让 React 的 Context 机制来帮助我们自动传递 store。

```js
import React from 'react'
import { Provider } from 'react-redux'
import store from './store' // 导入Redux的store

import App from './App'

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root
```

在上面的例子中，我们使用 Provider 将 Redux 的 store 传递给整个应用程序，从而让 App 组件及其子组件都可以访问到 Redux 的 store。

### connect

react-redux 提供了 connect 函数，它允许我们将组件连接到 Redux 的 store，从而可以访问 store 中的状态和派发 action。

```js
import React from 'react'
import { connect } from 'react-redux'

function App(props) {
  // 可以通过props访问store中的状态
  const { inputValue, list } = props

  // ... 省略其它代码
}

// mapStateToProps函数：将store中的状态映射为组件的props
function mapStateToProps(state) {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

export default connect(mapStateToProps)(App)
```

我们使用 connect 函数将 App 组件连接到 Redux 的 store，通过 mapStateToProps 函数将 store 中的状态映射为组件的 props。现在，App 组件可以通过 props 来访问 Redux 的状态，同时还可以通过 dispatch 方法派发 action 来更新状态。

### 使用 connect 函数更新状态

除了通过 mapStateToProps 函数访问状态外，connect 函数还可以接收第二个参数 mapDispatchToProps，它允许我们将 action creators 封装成函数，并作为 props 传递给组件。

```js
import React from 'react';
import { connect } from 'react-redux';
import { inputValueAction } from './actions'; // 导入action creators

const App = (props) => {
  // 可以通过props访问store中的状态和action creators
  const { inputValue, list, changeInputValue } = props;

  // ... 省略其它代码

  const changeInputValue = (e) => {
    // 使用封装后的action creator来派发action
    changeInputValueAction(e.target.value);
  };

  // ... 省略其它代码
};

// mapStateToProps函数：将store中的状态映射为组件的props
const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list,
});

// mapDispatchToProps函数：将action creators映射为组件的props
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (input) => dispatch(inputValueAction.changeInput(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

在上面的例子中，我们使用 mapDispatchToProps 函数将 inputValueAction.changeInput 封装为 changeInputValue 函数，并将它作为 props 传递给 App 组件。现在，App 组件可以通过 changeInputValue 来派发 action，并更新 Redux 的状态。通过 react-redux 库的提供的 Provider 和 connect 函数，我们可以更加方便地在 React 应用中集成 Redux，并在组件中访问和更新状态，使得应用开发更加高效和简洁。

## 小结

在高级使用部分，我们引入了 Action Creator 来封装创建 Action 的过程，使代码更加简洁。同时，我们将 Reducer 进行了拆分，通过 combineReducers 函数合并成一个 Root Reducer，从而保持代码的清晰和易于维护。

## 总结

Redux 是一个强大的状态管理库，可以帮助我们更好地管理 React 应用程序的状态。在初体验中，我们了解了 Redux 的基本使用方法，包括创建 Store、创建 Reducer 和在组件中调用 Store。在高级使用中，我们学习了 Action Creator 和拆分 Reducer 的技巧，使得 Redux 在应对大型复杂应用时更加灵活和高效。
