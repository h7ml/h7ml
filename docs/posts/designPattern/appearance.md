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

## 场景

网络请求中，我们一般使用 `axios` 库，支持用 `Promise` 风格调用。

```js
axios
  .get('/api/user', {
    params: {
      ID: '123',
    },
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

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
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

可以看到上边的 `get` 和 `post` 传参并不统一，使用起来会比较繁琐，`post` 还需要手动传递 `headers` 。

为了解决这些问题，我们可以通过外观（门面）模式来解决。

## 外观（门面）模式

### 模式定义

看下 [维基百科](https://en.wikipedia.org/wiki/Facade_pattern) 的定义。

> The **facade pattern** (also spelled _façade_) is a [software-design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) commonly used in [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming). Analogous to a [facade](https://en.wikipedia.org/wiki/Facade) in architecture, a facade is an [object](<https://en.wikipedia.org/wiki/Object_(computer_science)>) that serves as a front-facing interface masking more complex underlying or structural code.

外观模式相当于为一个相对复杂的接口或者结构提供一个上层接口供用户使用，看一下 `UML` 类图。

![image-20220215084348154](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220215084348154.png)

举一个简单例子，比如开电脑是一个复杂的过程，我们可以封装成一个函数来实现：

```ts

class CPU {
  freeze(): void { /* 冻结CPU */ }
  jump(position: number): void { /* 跳转到指定位置 */ }
  execute(): void { /* 执行指令 */ }
}

class Memory {
  load(position: number, data: Uint8Array): void {
    /* 加载数据到内存 */
  }
}

class HardDrive {
  read(lba: number, size: number): Uint8Array {
    /* 从硬盘读取数据 */
    return new Uint8Array(size);
  }
}

/* 外观模式 */

class Computer {
  cpu: CPU;
  memory: Memory;
  hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  startComputer(): void {
    this.cpu.freeze(); // 冻结CPU
    this.memory.load(BOOT_ADDRESS, this.hardDrive.read(BOOT_SECTOR, SECTOR_SIZE)); // 加载启动数据到内存
    this.cpu.jump(BOOT_ADDRESS); // 跳转到启动地址
    this.cpu.execute(); // 执行启动程序
  }
}

/* 客户端 */

class You {
  static main(): void {
    const facade = new Computer();
    facade.startComputer();
  }
}

// 常量定义
const BOOT_ADDRESS = 0x0; // 启动地址
const BOOT_SECTOR = 0x0; // 启动扇区
const SECTOR_SIZE = 512; // 扇区大小

You.main(); // 启动计算机
```

`UML` 类图中外观模式会和很多 `class` 交互，但在 `js` 中可能会很少遇到这种情况，通常是当参数比较复杂或者某个功能使用起来比较麻烦的时候我们就可以通过外观模式进行简化。

## 代码实现

对于开头 `axios` 的问题，我们可以对 `axios` 进行一层封装。

```js
// request.js
import axios from 'axios'
export const get = function (url, params) {
  return axios.get(url, { params })
}

export const post = function (url, params) {
  return axios.post(url, { ...params }, { headers: { 'Content-Type': 'application/json' } })
}
```

然后引用 `request.js` 进行调用。

```js
import { get, post } from './request'

get('/api/user', {
  ID: '123',
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

post('/api/user', {
  firstName: 'wind',
  lastName: 'liang',
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

> 上边的封装只是为了演示外观模式的使用，实际项目中封装的会更加全面

通过门面模式除了简化了我们的调用，还有一个好处就是将底层调用封装了起来，未来如果底层需要变化，比如上边的 `axios` 替换为 `fetch` ，我们只需要去修改 `request.js` 即可，业务方无需感知。

## 更多场景

外观模式说的宽泛的话就是将复杂的调用包装一层变的简单些。

平时用到的 `Vue` 的 `template` 、`React` 的 `jsx` ，也可以认为使用了外观模式，他们都将底层 `dom` 创建封装起来，使得我们编写页面会变得更加简单。

## 易混设计模式

前边讲到的 [代理模式](https://www.h7ml.cn/posts/designPattern/proxy.html)、[适配器模式](https://www.h7ml.cn/posts/designPattern/adapter.html)、[模版方法](https://www.h7ml.cn/posts/designPattern/template.html) 结构上和外观模式看起来都有些像，区别就在于他们的意图不同：

- 适配器模式是为了解决两个对象之间不匹配的问题，而原对象又不适合直接修改，此时可以使用适配器模式进行一层转换。
- 代理模式是为了增强原对象的功能，提供的接口不会改变。
- 模版模式是将不同功能组合在一起，只提供框架，具体实现还需要调用者传进来。
- 外观模式是将比较复杂的调用进行一层封装，提供一个新的接口供用户使用。

## 总结

外观模式是一种比较自然和直观的设计模式，通常在某个功能复杂或者使用频率较高的情况下会被考虑使用。通过外观模式，我们可以将一组相关联的接口和实现进行封装，提供一个简化的接口给客户端使用，从而减少客户端与子系统之间的直接交互，降低了系统的复杂度。

除了简化接口和降低复杂度外，外观模式还具有一个重要的好处，即能够更好地应对底层实现的变化。因为客户端只依赖于外观类提供的接口，而不需要了解底层子系统的具体实现细节，所以当底层实现发生变化时，只需调整外观类而不影响客户端的代码。

总而言之，外观模式提供了一种简单且灵活的方式来管理复杂系统的接口和实现，使得代码更加清晰易懂，并且有助于未来系统的维护和扩展。
