---
head:
  - - meta
    - name: og:title
      content: React开发技巧总结
  - - meta
    - name: og:url
      content: https://www.h7ml.cn/posts/2024/react-skill
  - - meta
    - name: og:image
      content: https://www.h7ml.cn/logo.png
---

# React开发技巧总结

## 1. useImperativeHandle 暴露部分 API

`useImperativeHandle` 允许我们自定义通过 ref 暴露给父组件的实例值。

```jsx
useImperativeHandle(ref, () => ({
  // 只暴露 focus，没有别的
  focus() {
    realInputRef.current.focus()
  },
}))
```

## 2. flushSync 同步更新DOM

`flushSync` 中的代码执行后，立即同步更新 DOM。

```jsx
function handleAdd() {
  const newTodo = { id: nextId++, text }
  flushSync(() => {
    setText('')
    setTodos([...todos, newTodo])
  })
  listRef.current.lastChild.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  })
}
```

## 3. useMemo 缓存计算结果

`useMemo` Hook 类似于 Vue 的 `computed`，用于缓存（或者说记忆（`memoize`））一个昂贵的计算。

```jsx
import { useMemo, useState } from 'react'

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('')
  const visibleTodos = useMemo(() => {
    // ✅ 除非 todos 或 filter 发生变化，否则不会重新执行
    return getFilteredTodos(todos, filter)
  }, [todos, filter])
  // ...
}
```

## 4. 灵活运用组件 key

通过给组件设置 key，我们可以控制组件的重新创建和状态重置。

```jsx
<Profile
  userId={userId}
  key={userId} // 👈 当 userId 变化时，Profile 组件将被重新创建
/>
```

## 5. composeRefs 组合多个 ref

当需要将多个 ref 应用到同一个元素时，可以使用 `composeRefs` 函数。

```jsx
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function')
    ref(value)
  else if (ref !== null && ref !== undefined)
    (ref as React.MutableRefObject<T>).current = value
}

export function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach(ref => setRef(ref, node))
}
```

## 6. useResizeObserver 监听元素大小变化

自定义 Hook 来监听元素大小变化并执行回调。

```jsx
import { throttle } from 'lodash'
import { RefObject, useLayoutEffect, useMemo } from 'react'

export function useResizeObserver(ref: RefObject<HTMLElement>, callBack: (element: HTMLElement) => void, delay = 50) {
  const trigger = useMemo(
    () =>
      throttle((ele) => {
        callBack(ele)
      }, delay),
    [],
  )

  useLayoutEffect(() => {
    if (!ref.current)
      return

    const observer
      = 'ResizeObserver' in window
        ? new ResizeObserver(() => {
          trigger(ref.current)
        })
        : null
    if (observer)
      observer.observe(ref.current)

    // initial check
    trigger(ref.current)
    return () => {
      // disconnect
      if (observer)
        observer.disconnect()
    }
  }, [ref])
}
```

## 7. React 深色模式/暗黑模式

使用 media 查询来设置主题色。

```html
<meta
  name="theme-color"
  media="(prefers-color-scheme: light)"
  content="white" />
<meta 
  name="theme-color" 
  media="(prefers-color-scheme: dark)" 
  content="black" />
```

## 8. useEffect 使用心得

- 空依赖数组 `[]` 表示只在组件挂载时执行一次。
- 不提供依赖数组会在每次渲染后执行。
- 小心使用 DOM refs 作为依赖。

## 9. useReducer 管理复杂状态

用于管理复杂的状态逻辑，类似于 Redux 中的 reducer 概念。

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

## 10. 自定义 Hook

提取可重用的组件逻辑到自定义 Hook 中。

```jsx
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
```

## 11. React.memo 和 useCallback

使用 `React.memo` 和 `useCallback` 来优化性能，避免不必要的重渲染。

```jsx
import React, { useCallback, useState } from 'react';

const MyComponent = React.memo(function MyComponent(props) {
  /* 只有当props改变时才会重新渲染 */
});

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <MyComponent onIncrement={increment} />;
}
```

## 12. Error Boundaries

使用错误边界捕获子组件树中的 JavaScript 错误。

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

## 13. Portals

使用 Portals 将子节点渲染到父组件 DOM 树之外的 DOM 节点。

```jsx
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root')
  );
}
```

## 14. useLatestCallback

用于替代 `useCallback`，解决返回函数地址不同的问题。

```jsx
export function useLatestCallback<F extends (...args: any[]) => any>(fn: F): LatestCallback<F> {
  const cb = useRef<LatestCallback<F>>()
  if ('fn' in fn)
    return fn as any

  if (!cb.current)
    cb.current = Object.assign<any, any>((...args: any[]) => cb.current!.fn(...args), { fn })
  else if (cb.current.fn !== fn)
    cb.current.fn = fn

  return cb.current!
}
```
