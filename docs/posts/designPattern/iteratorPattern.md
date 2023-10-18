---
title: 迭代器模式
category:
  - 设计模式
  - frontend
tag:
  - 设计模式
  - frontend
author: h7ml
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
date: 2022-02-26 09:09:00
---

# 场景

`for...of....` 的原理是？

# 迭代器模式

看下 [维基百科](https://en.wikipedia.org/wiki/Iterator_pattern) 给的定义：

> In [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), the **iterator pattern** is a [design pattern](<https://en.wikipedia.org/wiki/Design_pattern_(computer_science)>) in which an [iterator](https://en.wikipedia.org/wiki/Iterator) is used to traverse a [container](<https://en.wikipedia.org/wiki/Container_(data_structure)>) and access the container's elements. The iterator pattern decouples [algorithms](https://en.wikipedia.org/wiki/Algorithm) from containers; in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.

说白了就是有个容器类，有一个迭代器类，容器类持有一个迭代器类的对象，然后我们不需要知道容器中元素的具体结构，通过迭代器对象就能够进行遍历。

![image-20220226101825545](http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220226101825545.png)

不妨可以看下 `java` 的具体实现：

```java
public interface Iterator<E> {
  boolean hasNext();
  void next();
  E currentItem();
}

// 迭代器类
public class ArrayIterator<E> implements Iterator<E> {
  private int cursor;
  private ArrayList<E> arrayList;

  public ArrayIterator(ArrayList<E> arrayList) {
    this.cursor = 0;
    this.arrayList = arrayList;
  }

  @Override
  public boolean hasNext() {
    return cursor != arrayList.size();
  }

  @Override
  public void next() {
    cursor++;
  }

  @Override
  public E currentItem() {
    if (cursor >= arrayList.size()) {
      throw new NoSuchElementException();
    }
    return arrayList.get(cursor);
  }
}

public class Demo {
  public static void main(String[] args) {
    ArrayList<String> names = new ArrayList<>();
    names.add("wind");
    names.add("liang");
    names.add("2022");

    Iterator<String> iterator = new ArrayIterator(names);
    while (iterator.hasNext()) {
      System.out.println(iterator.currentItem());
      iterator.next();
    }
  }
}
```

容器类使用 `java` 自带的 `ArrayList` 类，然后我们手动实现一个迭代器类 `ArrayIterator`。

# js 的迭代器模式

`js` 中我们不需要专门定义迭代器的类了，我们可以让容器包含一个 `Symbol.iterator` 方法，该方法返回一个迭代器对象。

迭代器对象包含一个 `next` 方法用来获取元素，同时获取到的元素除了本身的 `value` 外，还返回一个布尔型变量代表是否有下一个元素。

```js
const container = (arr) => {
  let nextIndex = 0;
  return {
    [Symbol.iterator]() {
      return {
        next: function () {
          return nextIndex < arr.length
            ? {
                value: arr[nextIndex++],
                done: false,
              }
            : {
                value: undefined,
                done: true,
              };
        },
      };
    },
  };
};

const list = container(['wind', 'liang', '亮']);
const iterator = list[Symbol.iterator]();

while (true) {
  const data = iterator.next();
  if (data.done) {
    break;
  } else {
    console.log(data.value);
  }
}
```

事实上，数组已经为我们提前实现了迭代器，我们直接通过 `Symbol.iterator` 方法拿到，不需要自己再实现了。

```js
const array = ['wind', 'liang', '亮'];
const iteratorArray = array[Symbol.iterator]();

while (true) {
  const data = iteratorArray.next();
  if (data.done) {
    break;
  } else {
    console.log(data.value);
  }
}
```

还有字符串也为我们内置了迭代器。

```js
const string = 'windliang';
const iteratorString = string[Symbol.iterator]();

while (true) {
  const data = iteratorString.next();
  if (data.done) {
    break;
  } else {
    console.log(data.value);
  }
}
```

同理，`Map`、`Set` 都帮我们内置了 `Symbol.iterator` 方法，可以返回一个迭代器。

此外，我们也不需要每次都去 `while` 循环、然后判断是否结束循环了，直接使用 `for...of...` 即可。

```js
const array = ['wind', 'liang', '亮'];
for (const a of array) {
  console.log(a);
}

const string = 'windliang';
for (const s of string) {
  console.log(s);
}
```

# 注意

因为数组是通过 `index` 来获取元素的，如果在遍历过程中删除元素，可能会产生非预期内的事情。

```js
const array = ['wind', 'liang', '亮'];
for (const a of array) {
  console.log(a);
  if (a === 'wind') {
    array.splice(0, 1);
  }
}
console.log(array);
```

可以先思考下会怎么输出，然后看下结果：

```js
wind;
亮[('liang', '亮')];
```

我们是成功删除了 `wind` ，但是原数组中 `liang` 就不会遍历到了，也比较好理解。

开始的时候，指针 `index` 指向 `wind`，进行了输出 `console.log(a); // wind`

```js
 0     1   2
wind liang 亮
 ^
index
```

此时删除了 `wind` ，`array.splice(0, 1);` 数组整体前移。

```js
 0    1
liang 亮
 ^
index
```

然后指针后移，遍历下个元素。

```js
0     1
liang 亮
      ^
     index
```

就直接走到 `亮` 了，而没有遍历 `liang` 。

原因就是 `liang` 的位置之前是 `wind` ，`wind` 之前已经遍历过了，指针后移就把 `liang` 跳过了。

# 总

迭代器模式的好处就是可以不知道容器中元素的结构就可以遍历，一般由容器提供一个迭代器供我们使用。为了实现不同的遍历顺序，只需要提供新的迭代器即可。

一般编程语言中都内置了迭代器，`js` 也不例外，在 `Array`、`String`、`Map`、`Set` 中都内置了`Symbol.iterator` 方法返回一个迭代器对象，同时提供了`for...of...` 语法统一了各个对象的遍历方式。
