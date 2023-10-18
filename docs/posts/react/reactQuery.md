---
icon: react
description: 本文介绍了如何使用 React Query 让前端项目的状态管理变得更加高效优雅，详细解析了 React Query 的用法和特性。
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>React Query 状态管理
order: 3
star: 3
date: 2024-04-13
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
category:
  - react
  - react query
tag:
  - React
  - 状态管理
  - React Query
shortTitle: React Query 状态管理
head:
  - - meta
    - name: keywords
      content: React, 状态管理, React Query, 前端开发, 缓存, 自动更新, 异步请求
---

# 使用 react-query 让状态管理更加高效优雅

## 什么是 react-query

React Query 是一个基于 React 的轻量级数据获取和状态管理库，其主要关注点在于客户端如何更好地管理服务器端状态。与传统的状态管理库（如 Redux 和 MobX）相比，它专注于处理服务器状态，简化了与后端数据交互的逻辑。

React Query 通过提供 useQuery、useMutation 等 hooks，使得开发者能够轻松地获取、更新、删除服务器端数据。此外，它还内置了数据缓存、自动更新、重试等功能，进一步优化了客户端与服务器端状态同步的体验。

因此，React Query 的核心价值在于帮助开发者更优雅地管理客户端与服务器端状态的交互，提升前端开发效率。

## 客户端应用状态

1. 客户端状态 Client State:多数用于控制客户端的 UI 展示，储存在于客户端。

2. 服务端状态 Server State:客户端通过异步请求获得的数据，储存在于服务端.

## 服务端状态有以下特点

1. 存储在远端

2. 需要异步 API 来查询和更新

3. 数据不同步

### React Query 还针对下列常见需求给出了自己的解决方案

#### 1. 缓存

```tsx
import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data } = useQuery('todo', () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Todo</h1>
      <div>{data.title}</div>
    </div>
  );
}

export default App;
```

#### 2. 将对同一数据的多个请求简化为一个请求

```tsx
import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data } = useQuery('todos', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default App;
```

#### 3. 在后台更新”过期”数据

```tsx
import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data } = useQuery(
    'todos',
    () => fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
      staleTime: 10000, // 10 秒后数据过期，但仍会在后台更新
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default App;
```

#### 4. 知道数据何时”过期”

```tsx
import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data, isStale } = useQuery(
    'todos',
    () => fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()),
    {
      staleTime: 10000, // 10 秒后数据过期
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      {isStale && <div>Data is stale</div>}
    </div>
  );
}

export default App;
```

#### 5. 尽可能快地反映数据的更新

```tsx
import { useQuery, useMutation } from 'react-query';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<TodoProps[]> =>
  fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json());

const updateTodo = async (todo: TodoProps): Promise<TodoProps> =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());

function App() {
  const { isLoading, error, data } = useQuery('todos', fetchTodos);

  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateTodo, {
    onSuccess: (data) => {
      queryClient.setQueryData('todos', (old) => old.map((todo: TodoProps) => (todo.id === data.id ? data : todo)));
    },
  });

  const handleToggleComplete = (todo: TodoProps) => {
    mutate({ ...todo, completed: !todo.completed });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((todo: TodoProps) => (
        <li key={todo.id}>
          {todo.title} <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo)} />
        </li>
      ))}
    </ul>
  );
}

export default App;
```

#### 6. 性能优化，如分页和懒加载数据

```tsx
import { useInfiniteQuery } from 'react-query';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async ({ pageParam = 0 }) =>
  fetch(`https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`).then((res) => res.json());

function Todos() {
  const { data, error, isLoading, isFetching, fetchNextPage } = useInfiniteQuery('todos', fetchTodos, {
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.length > 0 ? lastPage[lastPage.length - 1].id : null;
      return nextPage ? nextPage + 1 : null;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.pages.map((page) => (
        <ul key={page[0].id}>
          {page.map((todo: TodoProps) => (
            <li key={todo.id}>
              {todo.title} {todo.completed && '✓'}
            </li>
          ))}
        </ul>
      ))}
      {isFetching ? <div>Fetching more...</div> : null}
      <button onClick={() => fetchNextPage()} disabled={!data.hasNextPage}>
        Load more
      </button>
    </>
  );
}

export default Todos;
```

#### 7. 管理内存

```tsx
import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data } = useQuery('todos', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default App;
```

#### 8. 共享数据

```tsx
// users.ts
import { useQuery } from 'react-query';

interface UserProps {
  id: number;
  name: string;
}

const fetchUsers = async (): Promise<UserProps[]> =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

export function useUsers() {
  return useQuery('users', fetchUsers);
}

// todos.ts
import { useQuery } from 'react-query';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<TodoProps[]> =>
  fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json());

export function useTodos() {
  return useQuery('todos', fetchTodos);
}

// app.tsx
import { useUsers } from './users';
import { useTodos } from './todos';

function App() {
  const { data: users } = useUsers();
  const { isLoading, error, data: todos } = useTodos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed && '✓'} ({users.find((user) => user.id === todo.userId)?.name})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
```

## 使用 react-query

### 1. 首先，需要安装 React Query：

```bash
npm install react-query
```

安装完成后，在项目的根组件中引入 <code>QueryClient</code> 和 <code>QueryClientProvider</code>：

```jsx
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}>{/* 应用的其他部分 */}</QueryClientProvider>;
}

export default App;
```

### 2. 使用 useQuery 获取数据

React Query 提供了一个名为 <code>useQuery</code> 的 hook，可以用于获取远程数据。这是一个简单的示例：

```jsx
import { useQuery } from 'react-query';
import axios from 'axios';

async function fetchUsers() {
  const response = await axios.get('https://api.example.com/users');
  return response.data;
}

function Users() {
  const { data, isLoading, error } = useQuery('users', fetchUsers);

  if (isLoading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>发生错误：{error.message}</div>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
```

### 3. 优雅地处理错误和重试

React Query 默认会在请求失败时尝试重试 3 次。你还可以自定义重试次数和重试间隔，例如：

```jsx
const { data, isLoading, error } = useQuery('users', fetchUsers, {
  retry: 5,
  retryDelay: (attempt) => attempt * 1000,
});
```

### 4. 缓存和自动更新

React Query 默认会缓存数据，减少不必要的请求。当组件卸载后，数据仍然保留在缓存中。当再次使用相同的 key 查询时，React Query 会直接使用缓存中的数据。同时，React Query 还可以在后台自动更新数据，例如：

```jsx
const { data, isLoading, error } = useQuery('users', fetchUsers, {
  refetchOnWindowFocus: true,
});
```

### 5. 使用 useMutation 发送数据

React Query 还提供了 <code>useMutation</code> hook，用于处理数据的更改（如添加、修改、删除）。这是一个简单的示例：

```jsx
import { useMutation } from 'react-query';
import axios from 'axios';
async function addUser(newUser) {
  const response = await axios.post('https://api.example.com/users', newUser);
  return response.data;
}

function CreateUser() {
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      // 通知用户添加成功
      alert('用户添加成功！');
    },
    onError: () => {
      // 通知用户添加失败
      alert('用户添加失败，请重试。');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
    };
    mutation.mutate(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="请输入用户名" />
      <button type="submit">添加用户</button>
    </form>
  );
}

export default CreateUser;
```

在上面的示例中，`useMutation` hook 用于处理添加用户的操作。当添加成功时，会显示成功提示；如果添加失败，则显示失败提示。

### 6. 使用 QueryClient 无缝整合

使用 `QueryClient` 可以让你更好地控制 React Query 的行为。例如，你可以在添加用户成功后，使用户列表的缓存失效，以便立即获取更新后的数据：

```jsx
import { useQueryClient } from 'react-query';

function CreateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation(addUser, {
    onSuccess: () => {
      // 使用户列表缓存失效
      queryClient.invalidateQueries('users');
      // 通知用户添加成功
      alert('用户添加成功！');
    },
    onError: () => {
      // 通知用户添加失败
      alert('用户添加失败，请重试。');
    },
  });

  // ... 其他代码
}
```

总结 React Query 是一个强大且灵活的状态管理库，可以让你的项目状态管理变得更加高效优雅。通过使用 React Query 提供的 <code>useQuery</code> 和 <code>useMutation</code> 等 hooks，可以轻松地处理服务器状态，同时享受缓存、重试和自动更新等功能。如果你在寻找一个简单易用且功能强大的状态管理库，React Query 是一个值得尝试的选择。

## QueryClient

`QueryClient 是 React Query 的核心类，它负责管理查询和突变的缓存、配置以及其他内部状态。你可以将其视为一个全局对象，它在整个应用程序中存储并管理所有查询和突变的状态。

创建一个 QueryClient 实例的方法如下：

```jsx
import { QueryClient } from 'react-query';
const queryClient = new QueryClient();
```

在创建 QueryClient 时，你还可以传入配置选项来自定义其行为。例如：

```jsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 设置全局默认的重试次数
      cacheTime: 1000 * 60 * 5, // 缓存数据的时长（毫秒）
    },
  },
});
```

## QueryClientProvider

`QueryClientProvider` 是一个 React 组件，它的作用是将创建好的 QueryClient 实例传递给应用程序中的其他组件。你可以将它视为 React Query 的上下文提供者，它使得 React Query 可以在整个应用程序范围内工作。使用 QueryClientProvider 的方法如下：

```jsx
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}>{/* 应用的其他部分 */}</QueryClientProvider>;
}

export default App;
```

在项目的根组件中引入 QueryClientProvider 并传入 QueryClient 实例，这样你就可以在应用的任何地方使用 React Query 提供的 hooks，例如 useQuery 和 useMutation 等。

QueryClient 负责管理和配置 React Query 的内部状态，而 QueryClientProvider 则负责将 QueryClient 实例传递给整个应用程序，使得其他组件可以方便地使用 React Query 的功能。在使用 React Query 时，这两个组件是不可或缺的。

## useMutation 里 如何将实时状态传递出去

<code>useMutation</code> 提供了一个名为 <code>onMutate</code> 的配置选项，可以在 mutation 开始之前执行。你可以使用此选项捕获 mutation 的实时状态，并将其传递给外部组件。例如，我们在添加用户的示例中增加一个实时状态传递功能。首先，在 <code>CreateUser</code> 组件中定义一个名为 <code>onStatusChange</code> 的回调函数，然后将此回调函数作为 prop 传递给子组件：

```jsx
function CreateUser({ onStatusChange }) {
  // ...
  const mutation = useMutation(addUser, {
    onMutate: () => {
      onStatusChange('pending');
    },
    onSuccess: () => {
      onStatusChange('success');
      // ...
    },
    onError: () => {
      onStatusChange('error');
      // ...
    },
  });
  // ...
}
```

然后，在父组件中接收 <code>onStatusChange</code> 回调并处理状态变化：

```jsx
function App() {
  const [status, setStatus] = useState('');

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div>
      <CreateUser onStatusChange={handleStatusChange} />
      {status === 'pending' && <p>正在添加用户...</p>}
      {status === 'success' && <p>用户添加成功！</p>}
      {status === 'error' && <p>用户添加失败，请重试。</p>}
    </div>
  );
}
```

现在，当添加用户的 mutation 进行中，父组件会接收到实时状态并显示相应的提示信息。

useMutation 是 react-query 提供的一个自定义 hook，用于执行数据修改操作（create/update/delete），并处理相关的状态变化。下面列举出 useMutation 提供的所有方法：

1. mutate(data, options?): 用于手动触发 mutation 函数执行，并更新相关的状态变量。

● data: 要传递给 mutation 函数的数据。 ● options: 可选对象，包含以下属性： ○ onMutate: 在 mutation 函数执行之前调用的回调函数。 ○ onSuccess: 在 mutation 函数成功执行后调用的回调函数。 ○ onError: 在 mutation 函数执行出错后调用的回调函数。 ○ onSettled: 在 mutation 函数执行结束后调用的回调函数。 ○ variables: 要覆盖默认 mutationKey 的参数对象。 ○ update: 更新缓存的函数，用于手动更新缓存中的数据。 ○ optimisticUpdate: 在 mutation 函数执行期间进行乐观更新的函数。 ○ throwOnError: 是否在 mutation 函数执行出错时抛出异常。 ○ retry: 是否自动重试 mutation 函数，或者提供一个重试配置对象。

2.  mutateAsync(data, options?): 与 mutate 方法类似，但使用 async/await 语法来执行 mutation 函数，并返回一个 Promise 对象。不会触发 isLoading 和 isError 等状态变量的更新，需要手动处理结果。
3.  返回值：一个包含以下属性的对象：

● mutate: 用于触发 mutation 函数执行的方法。 ● mutateAsync: 使用 async/await 语法来执行 mutation 函数，并返回一个 Promise 对象。不会触发 isLoading 和 isError 等状态变量的更新，需要手动处理结果。 ● reset: 重置 mutation 函数的状态，清除缓存中的数据并重新加载数据。 ● isLoading: 表示 mutation 函数是否在执行的布尔值。 ● isError: 表示 mutation 函数执行期间是否出错的布尔值。 ● error: 如果 mutation 函数执行出错，则为错误对象。 ● data: 如果 mutation 函数执行成功，则为返回的数据。
