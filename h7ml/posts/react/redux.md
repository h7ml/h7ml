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


## 什么是Redux

Redux是一个用于JavaScript应用程序的状态管理库，它帮助我们有效地管理应用程序的状态，并使组件之间的数据传递更加简单和可控。Redux使用单一的数据存储（store）来保存整个应用程序的状态，并通过Reducers和Actions来处理状态的变化。

## Redux的核心概念

Redux的单一数据流是指整个应用程序中的数据状态（state）存储在一个单一的JavaScript对象中，通常称为"Store"。这个Store是唯一的，并且整个应用程序共享它。所有的数据改变都通过派发（dispatch）"Action"来完成，Action是一个包含描述改变的信息的简单对象。然后，这些Action会被传递给Reducer函数，Reducer会根据Action的类型来更新Store中的数据状态。组件可以订阅（subscribe）Store的状态变化，以便在状态改变时重新渲染自己。

### Store：
整个应用程序只有一个Store，它是一个包含应用程序状态的JavaScript对象。在Redux中，我们使用createStore函数来创建这个Store，并将一个根Reducer传递给它。

### Action：
Action是一个普通的JavaScript对象，它描述了发生的事件和带有的数据。Action必须包含一个type字段，用于标识它的类型。其他字段可以用来传递任意数据。

### Dispatch：
当应用程序中的某个组件需要改变状态时，它会调用store.dispatch(action)方法来派发一个Action。

### Reducer：
Reducer是一个纯函数，它接收当前的状态和一个Action作为参数，并根据Action的类型来返回一个新的状态。Reducer不会直接修改原始状态，而是返回一个全新的状态对象。Redux应用中可以有多个Reducer，但最终它们会被合并成一个根Reducer，并传递给createStore函数。

### State更新：
当Action被派发时，Redux会调用根Reducer函数，并将当前的状态和Action传递给它。Reducer函数根据Action的类型来更新状态，并返回一个新的状态对象。Redux会用新的状态对象替换原始状态，从而更新整个应用程序的状态。

### 订阅：
组件可以通过store.subscribe(listener)方法来订阅Store的状态变化。一旦状态发生改变，订阅的监听器（listener）就会被调用，组件可以在这里进行重新渲染，从而反映最新的状态。

### View渲染：
组件通过订阅Store的状态变化来实时更新自己的数据，并重新渲染视图。

这个单一数据流的过程确保了整个应用程序的数据流动是可预测且一致的。所有的状态都存储在一个中央的Store中，由Reducer函数进行管理和更新，而不是分散在各个组件中。这种架构使得应用程序的状态变得易于调试、测试和维护，同时也降低了数据流动的复杂性。

总的来说，Redux的单一数据流模式提供了一种简单、可预测和可维护的状态管理方案，使得React应用程序开发更加高效和优雅。

## 使用

### 安装

```bash
npm install redux react-redux --save
```

### 创建store
在Redux中，我们通过创建一个Store来保存应用程序的状态。一个Redux应用只有一个全局唯一的Store，类似于全局变量存储仓库。

```js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

### 创建reducer
Reducer是一个纯函数，用于处理应用程序状态的变化。它接收当前的状态和一个Action，根据Action的类型来更新状态。

```js
const defaultStore = {
  inputValue: 'h7ml',
  list: ['前端', '前端物语'],
};

export default (state = defaultStore, action) => {
  if (action.type === 'value/changeInput') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.payload;
    return newState;
  }
  return state;
};
```

### 创建action
Action是一个普通的JavaScript对象，它描述了发生的事件和带有的数据。Action必须包含一个type字段，用于标识它的类型。其他字段可以用来传递任意数据。

```js
export const changeInputAction = (value) => ({
  type: 'value/changeInput',
  payload: value,
});
```

### 组件中使用
在组件中，我们可以通过React的useState来获取Store中的状态，并且使用store.subscribe来订阅状态变化，以便在状态发生变化时更新组件。

```js
import './App.css';
import store from "./store";
import { useState } from "react";
import { Input } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const [appData, setAppData] = useState(store.getState());

  store.subscribe(() => {
    setAppData(store.getState());
  });

  // ... 省略其它代码

  const changeInputValue = (e) => {
    const action = {
      type: 'value/changeInput',
      payload: e.target.value
    };
    store.dispatch(action);
  }

  return (
    <div>
      <Input placeholder={"Write Something"} onChange={changeInputValue} />
      {/* ... 省略其它代码 */}
    </div>
  );
}

export default App;
```

## 总结 

我们可以看到Redux的基本使用方法。组件通过订阅Store的状态变化来实时更新自己的数据，通过dispatch一个action来触发状态的更新。

## 高级使用
在高级使用部分，我们将介绍Redux中的Action Creator和拆分Reducer。

### Action Creator
Action Creator是一个函数，用来创建Action对象。它封装了创建Action的过程，使得代码更加简洁和易于维护。

```js
const defaultStore = 'Write something';

const inputValue = (state = defaultStore, action) => {
  if (action.type === 'value/changeInput') {
    let newState = JSON.parse(JSON.stringify(state));
    newState = action.payload;
    return newState;
  }
  return state;
}

export class inputValueAction {
  static changeInput = (input) => {
    return {
      type: 'value/changeInput',
      payload: input
    }
  }
}

export default inputValue;
```

### 拆分Reducer
当应用变得庞大复杂时，单一的Reducer可能会变得过于庞大。为了保持代码的清晰和易于维护，我们可以将Reducer进行拆分，分成多个子Reducer，然后再合并成一个Root Reducer

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

### 使用Root Reducer
在根组件中，我们可以使用combineReducers函数将所有子Reducer合并成一个Root Reducer，并传递给createStore函数来创建Store
    
```js
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

## react-redux
当我们使用React来开发应用时，结合Redux可以更好地管理应用状态。react-redux是Redux官方推荐的用于在React应用中集成Redux的官方库。它提供了一些高阶组件和钩子函数，帮助我们简化Redux在React中的使用。

主要有两个核心组件：Provider和connect。

### Provider

Provider组件是一个顶层组件，它接受Redux的store作为props，并使得整个应用程序中的所有组件都能够访问到Redux的store。通过Provider组件，我们无需手动将store传递给每个需要使用它的组件，而是让React的Context机制来帮助我们自动传递store。
```js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // 导入Redux的store

import App from './App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
```
在上面的例子中，我们使用Provider将Redux的store传递给整个应用程序，从而让App组件及其子组件都可以访问到Redux的store。

### connect
react-redux提供了connect函数，它允许我们将组件连接到Redux的store，从而可以访问store中的状态和派发action。

```js
import React from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  // 可以通过props访问store中的状态
  const { inputValue, list } = props;

  // ... 省略其它代码
};

// mapStateToProps函数：将store中的状态映射为组件的props
const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list,
});

export default connect(mapStateToProps)(App);

```
我们使用connect函数将App组件连接到Redux的store，通过mapStateToProps函数将store中的状态映射为组件的props。现在，App组件可以通过props来访问Redux的状态，同时还可以通过dispatch方法派发action来更新状态。

### 使用connect函数更新状态
除了通过mapStateToProps函数访问状态外，connect函数还可以接收第二个参数mapDispatchToProps，它允许我们将action creators封装成函数，并作为props传递给组件。

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
  }

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
在上面的例子中，我们使用mapDispatchToProps函数将inputValueAction.changeInput封装为changeInputValue函数，并将它作为props传递给App组件。现在，App组件可以通过changeInputValue来派发action，并更新Redux的状态。
通过react-redux库的提供的Provider和connect函数，我们可以更加方便地在React应用中集成Redux，并在组件中访问和更新状态，使得应用开发更加高效和简洁。

## 小结
在高级使用部分，我们引入了Action Creator来封装创建Action的过程，使代码更加简洁。同时，我们将Reducer进行了拆分，通过combineReducers函数合并成一个Root Reducer，从而保持代码的清晰和易于维护。

## 总结
Redux是一个强大的状态管理库，可以帮助我们更好地管理React应用程序的状态。在初体验中，我们了解了Redux的基本使用方法，包括创建Store、创建Reducer和在组件中调用Store。在高级使用中，我们学习了Action Creator和拆分Reducer的技巧，使得Redux在应对大型复杂应用时更加灵活和高效。
