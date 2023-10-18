---
title: 基本原则
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-03-08 07:27:19
---

二十三个经典的 [设计模式](https://www.h7ml.cn/designPattern/) 已经过完了 ，这里再把一些基本原则过一下，以便平时开发中可以更好的体会。

# 单一职责原则 SRP(Single Responsibility Principle)

> There should never be more than one reason for a class to change." In other words, every class should have only one responsibility.

定义：一个类或者模块应该有且只有一个改变的原因，在 `js` 中的话更多的会应用在对象、函数中。

最难的地方就在于结合具体场景对单一职责的判定了，为了应用这个原则把一个模块拆的太细其实也不太好，所以需要我们在方便性和稳定性之间做一个权衡。

之前讲的 [代理模式](https://www.h7ml.cn/designPattern/)、[装饰器模式](https://www.h7ml.cn/designPattern/decorator.html) 都有体现。

# 开闭原则 OCP(open–closed principle)

> Software entities should be open for extension, but closed for modification.

定义：一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。模块应尽量在不修改原代码的情况下进行扩展。

平常开发中，要把变的部分和不变的部分分离出来，设计一个结构的时候尽可能的考虑一下未来可能变化的部分。

可以通过放置 `hook` 、使用回调函数的方式达到扩展的目的。

之前讲的 [发布订阅模式](https://www.h7ml.cn/designPattern/publishSubscribe.html)、[模版方法模式](https://www.h7ml.cn/designPattern/template.html)、[策略模式](https://www.h7ml.cn/designPattern/strategy.html)、[职责链模式](https://www.h7ml.cn/designPattern/chainofresponsibility.html) 都有体现。

# 里氏替换原则 LSP(Liskov substitution principle)

> Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.

定义：所有引用基类的地方必须能透明地使用其子类的对象，也可以简单理解为任何基类可以出现的地方，子类一定可以出现。

举个例子就是如果某个地方可以用 `A` 类， `B` 类继承于 `A` 类，那么这个地方一定可以使用 `B` 类。

这个原则告诉我们在继承类的时候，如果要实现一个新功能，不要去覆盖父类已经实现的方法，而应该去写一个新方法。

平常前端开发中很少去写类和继承，这个原则用的比较少。

# 接口隔离原则 ISP(Interface Segregation Principle)

> Many client-specific interfaces are better than one general-purpose interface.

定义：客户端不应该依赖它不需要的接口，类间的依赖关系应该建立在最小的接口上。简单来说就是建立单一的接口，不要建立臃肿庞大的接口。也就是接口尽量细化，同时接口中的方法尽量少。

举个例子就是 `A` 接口有 `5` 个方法，`B` 类实现 `A` 接口，但 `B` 类只用到其中的 `3` 个方法，此时可以考虑对 `A` 接口进行拆分。

`js` 中没有接口，忽略。

# 依赖倒转原则 DIP(Dependency Inversion Principle)

> Depend upon abstractions, not concretions

定义： 程序要依赖于抽象接口，不要依赖于具体实现。简单的说就是要对抽象进行编程，不要对实现进行编程，这样就降低了客户与实现模块间的耦合。

其实就是经常说的面向接口（或者基类）编程。

但 `js` 中没有接口和抽象类，这种原则也就用不到了。

上边五个原则就是经常看到的 `SOLID` 原则，除了这些还有几个其他的原则。

# 最小知道原则 LOD(principle of least knowledge)

定义：一个软件实体应当尽可能少的与其他实体发生相互作用。每一个软件单位对其他的单位都只有最少的知识，而且局限于那些与本单位密切相关的软件单位。

实体的话在前端中更多的对应对象、函数，[门面模式](https://www.h7ml.cn/designPattern/appearance.html) 可以看作该原则的应用。

最小知道原则又叫做迪米特法则 LOD(Law of Demeter)，迪米特其实是宙斯(Zeus) 的姐姐，名字来源的话这里截取下[维基百科](https://en.wikipedia.org/wiki/Law_of_Demeter)。

> _The Greek goddess of Agriculture._
>
> The Demeter project was named after Demeter because we were working on a hardware description language Zeus and we were looking for a tool to simplify the implementation of Zeus. We were looking for a tool name related to Zeus and we chose a sister of Zeus: Demeter.
>
> Later we promoted the idea that Demeter-style software development is about growing software as opposed to building software. We introduced the concept of a growth plan which is basically a sequence of more and more complex UML class diagrams.
>
> Growth plans are useful for building systems incrementally.

大意就是当时是用一个叫做 `Zeus` 的硬件语言，然后找到了一个优化 `Zens` 的工具，为了让它们产生联系，就起了 `Demeter` 这个名字。

![img](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.com25_29914_743225_ccd123bf574133ea11e60e85e7057014_38a998_301.jpg)

另外截取一下 「JavaScript 设计开发与实现」书里提到的关于两个名字之间的建议：

> 许多人更倾向于使用迪米特法则这个名字，也许是因为显得更酷一点。但本书参考 _Head First_
>
> _Design Patterns_ 的建议，称之为最少知识原则。一是因为这个名字更能体现其含义，另一个原因
>
> 是“法则”给人的感觉是必须强制遵守，而原则只是一种指导，没有哪条原则是在实际开发中必
>
> 须遵守的。比如，虽然遵守最小知识原则减少了对象之间的依赖，但也有可能增加一些庞大到难
>
> 以维护的第三者对象。跟单一职责原则一样，在实际开发中，是否选择让代码符合最少知识原则，
>
> 要根据具体的环境来定。

# 合成/聚合复用原则 CARP(Composite/Aggregate Reuse Principle)

定义：尽量使用合成/聚合，而不是通过继承达到复用的目的。

# KISS 原则

定义： Keep It Simple, Stupid，在设计中应当注重简约的原则。

# YAGNI 原则

定义：You aren't gonna need it，表示暂时不需要的就不要做。

# DRY 原则

定义：Don't Repeat Yourself，不要写重复的代码。

# 总

所有的原则只是协助于我们写成易维护、易扩展的代码，不能为了去实现而实现、进行过度设计。

一些代码如果未来完全不用改变，那就用最简单的方式实现即可，当第二次、第三次修改的时候再来重构也不迟。

设计模式和基本原则的应用一定是结合具体场景的，空谈的话也没有任何意义。

我们只需要先了解这些原则，然后在日常开发中慢慢进行体会。
