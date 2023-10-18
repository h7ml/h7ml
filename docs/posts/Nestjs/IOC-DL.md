---
icon: generic
order: 1
date: 2024-07-14
author: h7ml
title: 控制反转（IOC）与依赖注入（DI）
description: nestjs  控制反转（IOC）与依赖注入（DI）
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>nestjs  控制反转（IOC）与依赖注入（DI）
star: 1
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
shortTitle: nestjs  控制反转（IOC）与依赖注入（DI）
category:
  - IOC
  - DI
  - nestjs
tag:
  - DI
  - IOC
  - nestjs
head:
  - - meta
    - name: keywords
      content: nestjs  控制反转（IOC）与依赖注入（DI）
---

控制反转（IOC）和依赖注入（DI）是面向对象编程中的重要设计原则，用于降低代码间的耦合度，并提高可维护性和可测试性。本文将介绍 IOC 和 DI 的概念、解决的问题、实现思路以及在 Nest 框架中的具体实现。

## 什么是 IOC

IOC（Inversion of Control，控制反转）是一种设计原则，通过将对象的创建和管理交给一个容器来实现。在非 IOC 模式下，对象之间的依赖关系由调用者来控制和管理。而在 IOC 模式下，对象的创建和依赖关系的管理都由容器来完成，从而实现了对象之间的解耦。

### 要解决的问题

在非 IOC 模式下，如果一个类 B 需要使用类 A 的实例，通常会在 B 中创建 A 的实例对象。而如果类 C 又依赖于类 B，这种控制权的嵌套会持续下去，导致依赖关系变得复杂。例如，在一个典型的三层架构中，Controller 依赖于 Service 来实现业务逻辑，Service 依赖于 Repository 来进行数据库操作，Repository 又依赖于 DataSource 来建立数据库连接，而 DataSource 需要从 Config 对象中获取用户名密码等信息。

```typescript
const config = new Config({ username: 'xxx', password: 'xxx' });
const dataSource = new DataSource(config);
const repository = new Repository(dataSource);
const service = new Service(repository);
const controller = new Controller(service);
```

- 上述代码存在两个问题：
  1. 依赖关系复杂，对象的创建必须按照特定顺序实例化。
  2. 这些对象不需要每次都创建新的实例，应该使用单例模式。

### 实现思路

在 IOC 模式下，不再由调用者来查找和创建类的实例，而是将这些职责交给一个容器来管理，以实现类与类之间的解耦。

## DI

依赖注入（Dependency Injection，DI）是实现控制反转的一种常用方式。在 DI 中，程序会在初始化时扫描类之间的依赖关系，并将这些类的实例注入到容器中。

### 思路

在初始化时，程序会扫描类之间的依赖关系，并将这些类的实例放入容器中。在创建对象时，程序会根据类的依赖关系，将相应的依赖对象注入到类中。

### 具体实现

IOC 模式是与语言无关的，不同的框架对 DI 的实现方式也有所不同。

- 在 Java 的 Spring 框架中，可以通过定义 XML 文件来决定类之间的依赖关系。
- 在 Nest 框架中，可以通过装饰器和元数据来实现 DI。在 Nest 框架中，基于 Reflect 的 MetaData 实现了自动分析模块之间的依赖关系。可以使用 Reflect.defineMetadata 和 Reflect.getMetadata 方法来设置和读取类或类属性的元数据。通过配合装饰器语法，可以实现依赖注入。

以下是一个使用 Nest 框架的装饰器实现的例子：

```typescript
import { Injectable, NestInterceptor, Inject, CallHandler, ExecutionContext } from '@nestjs/common';
import { Injectable, NestInterceptor, Inject, CallHandler, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AInterceptor implements NestInterceptor {
  @Inject(Reflector)
  private reflector: Reflector;

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log(this.reflector.get('roles', context.getClass()));
    console.log(this.reflector.get('roles', context.getHandler()));
    return next.handle();
  }
}
```

## IOC 和 DI 的关系

控制反转是一种设计原则，而依赖注入是实现 IOC 的一种常用方式。除了依赖注入，还有其他实现 IOC 的方式，比如依赖查找（Dependency Lookup）等。

## 解决循环引用问题

在模块和服务之间可能存在相互引用的情况，这样就会出现循环依赖。Nest 框架通过使用 forwardRef 来解决循环引用的问题。forwardRef 可以在模块之间创建一个转发引用，Nest 会单独创建这两个模块，并将它们关联起来。

### 模块中的使用示例：

```typescript
@Module({
  imports: [forwardRef(() => BModule)],
})
export class AModule {}
```

### 服务中的使用示例：

```typescript
@Injectable()
export class Service {
  constructor(@Inject(forwardRef(() => BService)) private bService: BService) {}
}
```

以上就是关于控制反转（IOC）与依赖注入（DI）的更深入介绍。通过 IOC 和 DI 的应用，可以实现代码的解耦和提高可维护性。在 Nest 框架中，通过装饰器和元数据的使用，可以更便捷地实现依赖注入。同时，使用 forwardRef 可以解决循环引用的问题，确保模块和服务之间的依赖关系正确建立。
