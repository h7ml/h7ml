---
title: 外观模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-02-14 08:15:00
---

# 场景

网络请求中，我们一般使用 `axios` 库，支持用 `Promise` 风格调用。

```js
axios
  .get('/api/user', {
    params: {
      ID: '123',
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios
  .post(
    '/api/user',
    {
      firstName: 'wind',
      lastName: 'liang',
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

可以看到上边的 `get` 和 `post` 传参并不统一，使用起来会比较繁琐，`post` 还需要手动传递 `headers` 。

为了解决这些问题，我们可以通过外观（门面）模式来解决。

# 外观（门面）模式

看下 [维基百科](https://en.wikipedia.org/wiki/Facade_pattern) 的定义。

> The **facade pattern** (also spelled _façade_) is a [software-design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) commonly used in [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming). Analogous to a [facade](https://en.wikipedia.org/wiki/Facade) in architecture, a facade is an [object](<https://en.wikipedia.org/wiki/Object_(computer_science)>) that serves as a front-facing interface masking more complex underlying or structural code.

外观模式相当于为一个相对复杂的接口或者结构提供一个上层接口供用户使用，看一下 `UML` 类图。

![image-20220215084348154](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220215084348154.png)

举一个简单例子，比如开电脑是一个复杂的过程，我们可以封装成一个函数来实现：

```js
/* Complex parts */

class CPU {
 public void freeze() { ... }
 public void jump(long position) { ... }
 public void execute() { ... }
}

class Memory {
 public void load(long position, byte[] data) {
  ...
 }
}

class HardDrive {
 public byte[] read(long lba, int size) {
  ...
 }
}

/* Façade */

class Computer {
 public void startComputer() {
  cpu.freeze();
  memory.load(BOOT_ADDRESS, hardDrive.read(BOOT_SECTOR, SECTOR_SIZE));
  cpu.jump(BOOT_ADDRESS);
  cpu.execute();
 }
}

/* Client */

class You {
 public static void main(String[] args) {
  Computer facade = new Computer();
  facade.startComputer();
 }
}
```

改写成 `js` 。

算了不改写了，哈哈，直白点其实就是把几个函数封装到了一个函数来调用。

`UML` 类图中外观模式会和很多 `class` 交互，但在 `js` 中可能会很少遇到这种情况，通常是当参数比较复杂或者某个功能使用起来比较麻烦的时候我们就可以通过外观模式进行简化。

# 代码实现

回到开头 `axios` 的问题，我们可以对 `axios` 进行一层封装。

```js
// request.js
import axios from 'axios';
export const get = function (url, params) {
  return axios.get(url, { params });
};

export const post = function (url, params) {
  return axios.post(url, { ...params }, { headers: { 'Content-Type': 'application/json' } });
};
```

然后引用 `request.js` 进行调用。

```js
import { get, post } from './request';

get('/api/user', {
  ID: '123',
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

post('/api/user', {
  firstName: 'wind',
  lastName: 'liang',
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

_补充一句：上边的封装只是为了演示外观模式的使用，实际项目中封装的会更加全面_

通过门面模式除了简化了我们的调用，还有一个好处就是将底层调用封装了起来，未来如果底层需要变化，比如上边的 `axios` 替换为 `fetch` ，我们只需要去修改 `request.js` 即可，业务方无需感知。

# 更多场景

外观模式说的宽泛的话就是将复杂的调用包装一层变的简单些。

我们平时用到的 `Vue` 的 `template` 、`React` 的 `jsx` ，也可以认为使用了外观模式，他们都将底层 `dom` 创建封装起来，使得我们编写页面会变得更加简单。

# 易混设计模式

前边讲到的 [代理模式](https://www.h7ml.cn/designPattern/proxy.html)、[适配器模式](https://www.h7ml.cn/designPattern/adapter.html)、[模版方法](https://www.h7ml.cn/designPattern/template.html) 结构上和外观模式看起来都有些像，区别就在于他们的意图不同：

- 适配器模式是为了解决两个对象之间不匹配的问题，而原对象又不适合直接修改，此时可以使用适配器模式进行一层转换。
- 代理模式是为了增强原对象的功能，提供的接口不会改变。
- 模版模式是将不同功能组合在一起，只提供框架，具体实现还需要调用者传进来。
- 外观模式是将比较复杂的调用进行一层封装，提供一个新的接口供用户使用。

# 总

外观模式是一个比较自然的设计模式，某个功能感觉用起来太麻烦还频繁，自然会想到去封装一层再来使用。

外观模式一个额外好处就是未来能够更好的应对底层的变化。
