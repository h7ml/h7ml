---
title: 建造者模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-02-24 08:42:00
---

# 场景

如果我们定义了某个函数：

```js
function getPhone(size, type, screen, price=100) {
  ...
}
```

如果这个函数很稳定那没什么问题，但如果经常变动，比如新增参数。

```js
function getPhone(size, type, screen, price=100, discount) {
  ...
}
```

此时我们如果想继续使用 `price` 的默认值，调用的时候还必须显性的传 `undefined`，`getPhone(4.3, 'iOS', 'OLED', undefined, 0.8)`。

如果再增加一个带默认值的参数，就会看起来越来越怪。

```js
function getPhone(size, type, screen, price=100, discount, mode='test') {
  ...
}
```

如果这个函数在很多地方都调用过，改的时候还需要保证修改后其他地方传参是正常的。

此时可以借助建造者模式的思想去改造它。

# 建造者模式

看下 [维基百科](https://en.wikipedia.org/wiki/Builder_pattern) 给的定义：

> The **builder pattern** is a [design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) designed to provide a flexible solution to various object creation problems in [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming). The intent of the Builder design pattern is to [separate](https://en.wikipedia.org/wiki/Separation_of_concerns) the construction of a complex object from its representation. It is one of the [Gang of Four design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

建造者模式属于创建型设计模式，也就是为了生成对象。它将复杂的创建过程从构造函数分离出来，然后就可以在不改变原有构造函数的基础上，创建各种各样的对象。

`GoF` 书中提供的做法就是新创建一个 `Builder` 类，对象的创建委托给 `Builder` 类，原始的类不做操作，只负责调用即可。

![image-20220225075740520](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220225075740520.png)

`Director` 类在构造函数中持有一个 `Builder` 实例，然后调用 `Builder` 类的 `buildPart` 和 `getResult` 即可创建对象。未来有新的对象需要创建的话，只需要实现新的 `Builder` 类即可，无需修改 `Director` 实例。

原始的建造者模式把对象的创建完全抽离到了 `Builder` 类中，这可能会导致原始类没啥用了，也许我们可以不全部抽离，`Builder` 类只负责接收参数即可。

_以下示例来自极客时间的 [设计模式之美](http://gk.link/a/11c3G)_

```java
public class ResourcePoolConfig {
  private static final int DEFAULT_MAX_TOTAL = 8;
  private static final int DEFAULT_MAX_IDLE = 8;
  private static final int DEFAULT_MIN_IDLE = 0;

  private String name;
  private int maxTotal = DEFAULT_MAX_TOTAL;
  private int maxIdle = DEFAULT_MAX_IDLE;
  private int minIdle = DEFAULT_MIN_IDLE;

  public ResourcePoolConfig(String name, Integer maxTotal, Integer maxIdle, Integer minIdle) {
    if (StringUtils.isBlank(name)) {
      throw new IllegalArgumentException("name should not be empty.");
    }
    this.name = name;

    if (maxTotal != null) {
      if (maxTotal <= 0) {
        throw new IllegalArgumentException("maxTotal should be positive.");
      }
      this.maxTotal = maxTotal;
    }

    if (maxIdle != null) {
      if (maxIdle < 0) {
        throw new IllegalArgumentException("maxIdle should not be negative.");
      }
      this.maxIdle = maxIdle;
    }

    if (minIdle != null) {
      if (minIdle < 0) {
        throw new IllegalArgumentException("minIdle should not be negative.");
      }
      this.minIdle = minIdle;
    }
  }
  //...省略getter方法...
}
```

上边的 `ResourcePoolConfig` 类构造函数需要 `4` 个参数，如果经常变动，未来可能会越来越多，代码的可读性和易用性都会变差。因此这里可以用到建造者模式，但这里的建造者模式只用来传递参数，其他的逻辑还是维持在 `ResourcePoolConfig` 类中不变。

```java
public class ResourcePoolConfig {
  private String name;
  private int maxTotal;
  private int maxIdle;
  private int minIdle;

  private ResourcePoolConfig(Builder builder) {
    this.name = builder.name;
    this.maxTotal = builder.maxTotal;
    this.maxIdle = builder.maxIdle;
    this.minIdle = builder.minIdle;
  }
  //...省略getter方法...

  //我们将Builder类设计成了ResourcePoolConfig的内部类。
  //我们也可以将Builder类设计成独立的非内部类ResourcePoolConfigBuilder。
  public static class Builder {
    private static final int DEFAULT_MAX_TOTAL = 8;
    private static final int DEFAULT_MAX_IDLE = 8;
    private static final int DEFAULT_MIN_IDLE = 0;

    private String name;
    private int maxTotal = DEFAULT_MAX_TOTAL;
    private int maxIdle = DEFAULT_MAX_IDLE;
    private int minIdle = DEFAULT_MIN_IDLE;

    public ResourcePoolConfig build() {
      // 校验逻辑放到这里来做，包括必填项校验、依赖关系校验、约束条件校验等
      if (StringUtils.isBlank(name)) {
        throw new IllegalArgumentException("...");
      }
      if (maxIdle > maxTotal) {
        throw new IllegalArgumentException("...");
      }
      if (minIdle > maxTotal || minIdle > maxIdle) {
        throw new IllegalArgumentException("...");
      }

      return new ResourcePoolConfig(this);
    }

    public Builder setName(String name) {
      if (StringUtils.isBlank(name)) {
        throw new IllegalArgumentException("...");
      }
      this.name = name;
      return this;
    }

    public Builder setMaxTotal(int maxTotal) {
      if (maxTotal <= 0) {
        throw new IllegalArgumentException("...");
      }
      this.maxTotal = maxTotal;
      return this;
    }

    public Builder setMaxIdle(int maxIdle) {
      if (maxIdle < 0) {
        throw new IllegalArgumentException("...");
      }
      this.maxIdle = maxIdle;
      return this;
    }

    public Builder setMinIdle(int minIdle) {
      if (minIdle < 0) {
        throw new IllegalArgumentException("...");
      }
      this.minIdle = minIdle;
      return this;
    }
  }
}

// 这段代码会抛出IllegalArgumentException，因为minIdle>maxIdle
ResourcePoolConfig config = new ResourcePoolConfig.Builder()
        .setName("dbconnectionpool")
        .setMaxTotal(16)
        .setMaxIdle(10)
        .setMinIdle(12)
        .build();
```

这样的话我们可以通过 `ResourcePoolConfig.Builder()` 来设置参数，将生成的参数对象传递给 `ResourcePoolConfig` 类的构造函数即可。

这里可以看作是变种的建造者模式，我们不是创建不同的 `Builder` 类来创建对象，而是给 `Builder` 类传递不同的参数来创建不同的对象。

# 代码实现

_这里也只讨论变种的建造者模式。_

在 `js` 中，我们同样可以照猫画虎的引入一个 `Builer` 类来接受参数，然后将创建参数对象传递给原始类。

但之所以在 `Java` 中引入新的 `Builder` 类是因为 `Java` 只能通过类来创建对象，但在 `js` 中我们是可以通过字面量来创建对象的，并且 `ES6` 还提供了对象的解构语法，会让我们使用起来更加简洁。

我们只需要将参数列表聚合为一个对象，然后通过解构取参数即可。

```js
function getPhone(size, type, screen, price = 100, discount) {
  console.log('size', size);
  console.log('type', type);
  console.log('screen', screen);
  console.log('price', price);
  console.log('discount', discount);
}
```

我们只需要改成：

```js
function getPhone({ size, type = 'iOS', screen = 'OLED', price = 100, discount } = {}) {
  console.log('size', size);
  console.log('type', type);
  console.log('screen', screen);
  console.log('price', price);
  console.log('discount', discount);
}

getPhone({ size: 4, discount: 0.1, type: 'android' }); // 只需要传递需要的参数
```

上边的写法可以很方便的设置默认值，并且参数的顺序也不再重要，未来再扩展的时候也不需要太担心其他地方调用时候传参是否会引起问题。

注意一下参数列表中 `{...} = {}` 后边的大括号最好写一下，不然如果用户调用函数的时候什么都没有传，解构就会直接失败了。

```js
function getPhone({ size, type = 'iOS', screen = 'OLED', price = 100, discount }) {
  console.log('size', size);
  console.log('type', type);
  console.log('screen', screen);
  console.log('price', price);
  console.log('discount', discount);
}

getPhone();
```

![image-20220225083640409](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220225083640409.png)

# 更多场景

通过对象来传递参数除了用在函数中以外，设计组件的时候，如果组件的参数会经常变动，并且越来越多，我们不妨引入一个 `Object` 类型的参数，然后将相关的参数内聚到 `Object` 中进行传递。

# 总

原始的建造者模式不清楚有没有实际应用，目前还没遇到，未来有的话再补充吧。

变种的建造者模式（只传递参数）在 `js` 中也很简单，直接通过对象传递参数即可。
