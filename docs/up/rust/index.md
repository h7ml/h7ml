# Rust 基础概念

## 前言

Rust 是一门系统编程语言，它的目标是提供一种安全、并发、实用的编程语言。Rust 的设计借鉴了现有的一些编程语言，如 C++、Haskell、OCaml 等，但是它又有自己的特色，比如内存安全、线程安全等。本文旨在通过类比前端编程知识来解释 Rust 的语法

## 变量和数据类型

Rust 是一门静态类型语言，变量在使用前需声明，数据类型包括基本类型、复合类型和自定义类型。

### 基本类型

- 整数：有符号和无符号，如 `i32` 和 `u64`。
- 浮点数：单精度 `f32` 和双精度 `f64`。
- 布尔值：`bool`，取值为 `true` 或 `false`。
- 字符：`char`，使用单引号表示。

#### 整数

Rust 的整数类型包括有符号和无符号两种类型，分别有 8、16、32、64 和 arch（与机器架构相关）五种位数。

```rust
let a: i32 = 42;
let b: u64 = 0xff;
```

#### 浮点数

Rust 的浮点数类型包括单精度(f32)和双精度(f64)两种。

```rust
let a: f32 = 3.14;
let b: f64 = 3.14159265358979323846;
```

#### 布尔值

Rust 的布尔值类型为 `bool`，有两个值：`true` 和 `false`。

```rust
let a: bool = true;
let b: bool = false;
```

#### 字符

Rust 的字符类型为 `char`，使用单引号表示。

```rust
let a: char = 'A';
let b: char = '字';
```

### 复合类型

- 元组（tuple）：包含多个类型的值的组合。
- 数组（array）：固定长度的相同类型元素集合。

#### 元组

元组是一个可以包含多个类型的值的组合，类似 TS 的元组。

```rust
let a: (i32, f64, bool) = (42, 3.14, true);
```

访问元组中的值可以使用模式匹配或者使用点号加索引。

```rust
let (x, y, z) = a;
println!("x: {}, y: {}, z: {}", x, y, z); // 输出：x: 42, y: 3.14, z: true

let first = a.0;
let second = a.1;
let third = a.2;
println!("first: {}, second: {}, third: {}", first, second, third); // 输出：first: 42, second: 3.14, third: true
```

#### 数组

数组是具有固定长度的相同类型元素的集合，类似 TS 的数组。

```rust
let a: [i32; 5] = [1, 2, 3, 4, 5];
```

访问数组中的元素可以使用索引。

```rust
let first = a[0];
let second = a[1];
println!("first: {}, second: {}", first, second); // 输出：first: 1, second: 2
```

### 自定义类型

- 结构体（struct）：类似于 JavaScript 的对象。
- 枚举（enum）：表示多种类型。
- Trait：定义共享行为。

#### 结构体

Rust 的结构体（struct）类似于 JavaScript 的对象。结构体可以包含多个字段，每个字段需要指定类型。

```rust
struct Point {
    x: f64,
    y: f64,
}

let p = Point { x: 1.0, y: 2.0 };
println!("point: ({}, {})", p.x, p.y);
```

#### 枚举

Rust 的枚举（enum）类似于 JavaScript 的类，但它可以表示多种类型。

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

let m = Message::Write(String::from("hello"));
```

#### Trait

Trait 是 Rust 中的一种特殊类型，用于定义共享行为。Trait 可以被其他类型实现，从而获得 Trait 中定义的方法。

```rust
trait Printable {
    fn print(&self);
}

struct Point {
    x: i32,
    y: i32,
}

impl Printable for Point {
    fn print(&self) {
        println!("({}, {})", self.x, self.y);
    }
}

let p = Point { x: 1, y: 2 };
p
```

## 控制流

Rust 支持常见的控制流结构，如 `if`、`else`、`while`、`for` 等。

### if 和 else

Rust 的 if 和 else 语法与 JavaScript 类似。

```rust
let a = 42;

if a < 0 {
    println!("a is negative");
} else if a > 0 {
    println!("a is positive");
} else {
    println!("a is zero");
}
```

### while

Rust 的 while 语法与 JavaScript 类似。

```rust
let mut a = 5;

while a > 0 {
    println!("a is {}", a);
    a -= 1;
}
```

### for

Rust 的 for 语法可以用于遍历集合，如数组和范围。

```rust
let a = [1, 2, 3, 4, 5];

for element in a.iter() {
    println!("the value is: {}", element);
}
```

使用范围：

```rust
for number in (1..4).rev() {
    println!("{}!", number);
}
println!("LIFTOFF!!!");
```

## 函数

Rust 的函数定义使用 `fn` 关键字，参数和返回值需指定类型。
返回值类型使用 `->` 指定。

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

let result = add(1, 2);
println!("1 + 2 = {}", result);
```

这只是 Rust 语言的基本概念和语法，更多的功能和特性需要在实际项目中不断学习和探索。希望本文能为前端开发者提供一个 Rust 入门的参考。

## 错误处理

Rust 提供了一种强大的错误处理机制，可以帮助你编写健壮的代码。Rust 有两种错误类型：可恢复错误（recoverable errors）和不可恢复错误（unrecoverable errors）。Rust 使用 `Result` 枚举处理可恢复错误；使用 `panic!` 宏处理不可恢复错误。

### 可恢复错误

可恢复错误是那些可以通过返回一个 `Result` 类型来处理的错误。`Result` 类型是一个枚举类型，有两个变体：`Ok` 和 `Err`。例如在这个示例中，尝试打开一个文件。如果文件打开成功，将得到一个 Ok 变体，其中包含一个 File 对象。

```rust
use std::fs::File;

fn main() {
    let f = File::open("hello.txt");

    match f {
        Ok(file) => println!("File opened: {:?}", file),
        Err(error) => println!("Failed to open file: {:?}", error),
    }
}
```

#### Result

Result 是一个枚举类型，用于表示可能出错的操作的结果。它有两个变体：`Ok` 和 `Err`。

```rust
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("division by zero".to_string())
    } else {
        Ok(a / b)
    }
}

let a = divide(4, 2);
let b = divide(4, 0);
```

可以使用模式匹配来处理 Result 类型的值。

```rust
match a {
    Ok(value) => println!("a: {}", value),
    Err(error) => println!("a: error: {}", error),
}

match b {
    Ok(value) => println!("b: {}", value),
    Err(error) => println!("b: error: {}", error),
}
```

### 不可恢复错误

不可恢复错误是那些无法通过返回一个 `Result` 类型来处理的错误。这类错误通常表示程序中的严重问题，需要立即终止程序的执行。在 Rust 中，可以使用 `panic!` 宏来触发不可恢复错误。例如在这个示例中，使用 `panic!` 宏来触发一个不可恢复错误。当程序执行到这一行时，它将立即终止，并显示一个错误消息。

```rust
fn main() {
    panic!("crash and burn");
}
```

#### panic!

panic! 是一个宏，用于在遇到不可恢复错误时终止程序。例如

```rust
fn main() {
    panic!("This is an unrecoverable error.");
}
```

## 模块系统

Rust 的模块系统用于组织和管理代码。模块系统包括以下几个部分：模块（module）、包（package）、库（library）和二进制（binary）。

### 模块

模块是 Rust 中的命名空间，用于将相关的代码组织在一起。可以使用 mod 关键字定义模块。

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }

    pub fn subtract
}
```

在一个模块中，可以使用 pub 关键字将函数、结构体、枚举等声明为公共的，这样它们就可以在其他模块中被访问。

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }

    pub fn subtract(a: i32, b: i32) -> i32 {
        a - b
    }
}

fn main() {
    let sum = math::add(1, 2);
    let difference = math::subtract(3, 1);
    println!("sum: {}, difference: {}", sum, difference);
}
```

### 包和库

包（package）是一个包含一个或多个库（library）的项目。库是一组相关的模块。在 Rust 中，可以使用 Cargo 工具来创建和管理包和库。

要创建一个新的包，可以使用 cargo new 命令

这将创建一个名为 my_package 的新包，其中包含一个名为 my_package 的库。库的源代码位于 src/lib.rs 文件中。

要在包中添加一个新的库，可以在 src 目录下创建一个新的子目录，并在其中创建一个 lib.rs 文件。

### 二进制

二进制（binary）是一个可执行程序。在 Rust 中，可以使用 Cargo 工具来创建和管理二进制。

要创建一个新的二进制，可以使用 cargo new --bin 命令：

cargo new
这将创建一个名为 my_binary 的新二进制，其中包含一个名为 my_binary 的可执行程序。程序的源代码位于 src/main.rs 文件中。

要在包中添加一个新的二进制，可以在 src/bin 目录下创建一个新的 .rs 文件。

## 所有权与借用

### 所有权(ownership)

所有权是 Rust 中的一个核心概念，用于管理内存。在 Rust 中，每个值都有一个唯一的所有者，当所有者离开作用域时，值将被自动回收。这种机制可以避免内存泄漏和悬垂指针等问题。

```rust
{
    let s = String::from("hello");
} // s 离开作用域，内存被回收
```

当一个值被赋值给另一个变量时，原变量将失去所有权，值的所有权将转移给新变量。

```rust
let s1 = String::from("hello");
let s2 = s1; // s1 失去所有权，s2 获得所有权
```

### 借用(borrowing)

借用是 Rust 中的另一个核心概念，用于在不转移所有权的情况下访问值。借用有两种形式：可变借用（mutable borrowing）和不可变借用（immutable borrowing）。

#### 不可变借用

不可变借用是对值的只读访问。可以使用 & 符号创建不可变引用。

```rust
fn print_length(s: &String) {
    println!("length: {}", s.len());
}

let s = String::from("hello");
print_length(&s); // 不可变借用 s
```

#### 可变借用

可变借用是对值的可写访问。可以使用 &mut 符号创建可变引用。

```rust
fn append_world(s: &mut String) {
    s.push_str(" world");
}

let mut s = String::from("hello");
append_world(&mut s); // 可变借用 s
println!("{}", s); // 输出：hello world
```

_注意：在同一作用域中_

## 并发编程

Rust 提供了一些原生的并发编程特性，如线程、通道和互斥锁。这些特性可以编写高效且安全的并发代码。

### 线程

线程是操作系统中的并发执行单元。在 Rust 中，可以使用 `std::thread` 模块创建和管理线程。

```rust
use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("thread: {}", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("main: {}", i);
        thread::sleep(Duration::from_millis(1));
    }

    handle.join().unwrap();
}
```

### 通道

通道（channel）是一种用于在线程之间传递消息的同步原语。在 Rust 中，可以使用 std::sync::mpsc 模块创建和管理通道。

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    let handle = thread::spawn(move || {
        let val = String::from("hi");
        tx.send(val).unwrap();
    });

    let received = rx.recv().unwrap();
    println!("Got: {}", received);

    handle.join().unwrap();
}
```

### 互斥锁

互斥锁（mutex）是一种用于在线程之间同步访问共享资源的同步原语。在 Rust 中，可以使用 std::sync::Mutex 类型创建和管理互斥锁。

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", *counter.lock().unwrap());
}
```

在这个示例中，使用 Arc（原子引用计数）和 Mutex（互斥锁）来同步访问一个共享的 counter 变量。创建了 10 个线程，每个线程都尝试对 counter 进行加 1 操作。通过使用互斥锁，确保了在任何时刻只有一个线程可以访问 counter。
