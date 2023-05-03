---
icon: json
order: 9
date: 2021-05-27
author: h7ml
title: package-lock.json
category: engineering
tag: package.json
star: true
---

## [#](#npm-package-json属性详解) npm package.json 属性详解

> 本文转自[https://www.cnblogs.com/tzyy/p/5193811.html (opens new window)](https://www.cnblogs.com/tzyy/p/5193811.html) ，作者：TZYY

## [#](#概述) 概述

`package.json`必须是一个严格的 json 文件，而不仅仅是 js 里边的一个对象。其中很多属性可以通过`npm-config`来生成

## [#](#name) name

`package.json`中最重要的属性是`name`和`version` 两个属性，这两个属性是必须要有的，否则模块就无法被安装，这两个属性一起形成了一个 npm 模块的唯一标识符。模块中内容变更的同时，模块版本也应该一起变化。 `name` 属性就是你的模块名称，下面是一些命名规则:

- `name`必须小于等于 214 个字节，包括前缀名称在内（如 xxx/xxxmodule）。

- `name`不能以"\_"或"."开头

- 不能含有大写字母

- `name`会成为 url 的一部分，不能含有 url 非法字符

  下面是官网文档的一些建议：

- 不要使用和 node 核心模块一样的名称

- `name`中不要含有"js"和"node"。 It's assumed that it's js, since you're writing a package.json file, and you can specify the engine using the "engines" field. (See below.)

- `name`属性会成为模块 url、命令行中的一个参数或者一个文件夹名称，任何非 url 安全的字符在 name 中都不能使用，也不能以"\_"或"."开头

- `name`属性也许会被写在`require()`的参数中，所以最好取个简短而语义化的值。

- 创建一个模块前可以先到后边的网址查查`name` 是否已经被占用. [https://www.npmjs.com/ (opens new window)](https://www.npmjs.com/)

  - ```sh
    # 发布一个包的时候，需要检验某个包名是否存在
    npm search <ModuleName>
    ```

    1  
    2

`name`属性可以有一些前缀如 e.g. @myorg/mypackage.在 npm-scope(7)的文档中可以看到详细说明

## [#](#version) version

`version`必须可以被 npm 依赖的一个`node-semver`模块解析。具体规则见下面的`dependencies`模块

## [#](#description) description

一个描述，方便别人了解你的模块作用，搜索的时候也有用。

## [#](#keywords) keywords

一个字符串数组，方便别人搜索到本模块

## [#](#homepage) homepage

项目主页 url **注意:** 这个项目主页 url 和 url 属性不同，如果你填写了 url 属性，npm 注册工具会认为你把项目发布到其他地方了，获取模块的时候不会从 npm 官方仓库获取，而是会重定向到 url 属性配置的地址。（原文档中用了 spit(吐)这个单词，作者表示他不是在开玩笑:）

## [#](#bugs) bugs

填写一个 bug 提交地址或者一个邮箱，被你的模块坑到的人可以通过这里吐槽，例如：

```json
{
  "url": "https://github.com/owner/project/issues",
  "email": "project@hostname.com"
}
```

1  
2  
3  
4

url 和 email 可以任意填或不填，如果只填一个，可以直接写成一个字符串而不是对象。如果填写了 url，npm bugs 命令会使用这个 url。

## [#](#license) license

你应该为你的模块制定一个协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。最简单的，例如你用 BSD-3-Clause 或 MIT 之类的协议，如下：

你可以在[https://spdx.org/licenses/ (opens new window)](https://spdx.org/licenses/)这个地址查阅协议列表 。

## [#](#和用户相关的属性-author-contributors) 和用户相关的属性: author, contributors

`author`是一个码农， `contributors`是一个码农数组。 `person`是一个有一些描述属性的对象，如下 like this:

```json
{
  "name": "Barney Rubble",
  "email": "b@rubble.com",
  "url": "http://barnyrubble.tumblr.com/"
}
```

1  
2  
3  
4  
5

也可以按如下格式缩写，npm 会帮着转换:

```text
"Barney Rubble b@rubble.com (http://barnyrubble.tumblr.com/)"
```

1

`email`和`url`属性实际上都是可以省略的。描述用户信息的还有一个`maintainers`（维护者）属性。

## [#](#files) files

`files`属性的值是一个数组，内容是模块下文件名或者文件夹名，如果是文件夹名，则文件夹下所有的文件也会被包含进来（除非文件被另一些配置排除了）你也可以在模块根目录下创建一个`.npmignore`文件（windows 下无法直接创建以"."开头的文件，使用 linux 命令行工具创建如 git bash），写在这个文件里边的文件即便被写在 files 属性里边也会被排除在外，这个文件的写法".gitignore"类似。

## [#](#main) main

`main`属性指定了程序的主入口文件。意思是，如果你的模块被命名为 foo，用户安装了这个模块并通过 require("foo") 来使用这个模块，那么 require 返回的内容就是 main 属性指定的文件中 module.exports 指向的对象。它应该指向模块根目录下的一个文件。对大对数模块而言，这个属性更多的是让模块有一个主入口文件，然而很多模块并不写这个属性。

## [#](#bin) bin

很多模块有一个或多个需要配置到 PATH 路径下的可执行模块，npm 让这个工作变得十分简单（实际上 npm 本身也是通过 bin 属性安装为一个可执行命令的）如果要用 npm 的这个功能，在 package.json 里边配置一个 bin 属性。bin 属性是一个已命令名称为 key，本地文件名称为 value 的 map 如下：

```json
{
  "bin": {
    "myapp": "./cli.js"
  }
}
```

1  
2  
3

模块安装的时候，若是全局安装，则 npm 会为 bin 中配置的文件在 bin 目录下创建一个软连接（对于 windows 系统，默认会在 C: \\Users\\username\\AppData\\Roaming\\npm 目录下），若是局部安装，则会在项目内的./node_modules/.bin/目录下创建一个软链接。因此，按上面的例子，当你安装 myapp 的时候，npm 就会为 cli.js 在/usr/local/bin/myapp 路径创建一个软链接。如果你的模块只有一个可执行文件，并且它的命令名称和模块名称一样，你可以只写一个字符串来代替上面那种配置，例如：

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program"
}
```

1  
2  
3  
4  
5

作用和如下写法相同:

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "./path/to/program"
  }
}
```

1  
2  
3  
4  
5  
6  
7

## [#](#man) man

制定一个或通过数组制定一些文件来让 linux 下的 man 命令查找文档地址。如果只有一个文件被指定的话，安装后直接使用 man+模块名称，而不管 man 指定的文件的实际名称。例如:

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": "./man/doc.1"
}
```

1  
2  
3  
4  
5  
6  
7

通过 man foo 命令会得到 ./man/doc.1 文件的内容。 如果 man 文件名称不是以模块名称开头的，安装的时候会给加上模块名称前缀。因此，下面这段配置：

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/bar.1"]
}
```

1  
2  
3  
4  
5  
6  
7

会创建一些文件来作为 man foo 和 man foo-bar 命令的结果。 man 文件必须以数字结尾，或者如果被压缩了，以.gz 结尾。数字表示文件将被安装到 man 的哪个部分。

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/foo.2"]
}
```

1  
2  
3  
4  
5  
6  
7

会创建 man foo 和 man 2 foo 两条命令。

## [#](#directories) directories

CommonJs 通过 directories 来制定一些方法来描述模块的结构，看看 npm 的 package.json 文件<https://registry.npmjs.org/npm/latest> ，可以发现里边有这个字段的内容。 ![img](http://zoucz.com/blogimgs/2016-02-16/1455624810992.png) 目前这个配置没有任何作用，将来可能会整出一些花样来。

### [#](#directories-lib) directories.lib

告诉用户模块中 lib 目录在哪，这个配置目前没有任何作用，但是对使用模块的人来说是一个很有用的信息。

### [#](#directories-bin) directories.bin

如果你在这里指定了 bin 目录，这个配置下面的文件会被加入到 bin 路径下，如果你已经在 package.json 中配置了 bin 目录，那么这里的配置将不起任何作用。

### [#](#directories-man) directories.man

指定一个目录，目录里边都是 man 文件，这是一种配置 man 文件的语法糖。

### [#](#directories-doc) directories.doc

在这个目录里边放一些 markdown 文件，可能最终有一天它们会被友好的展现出来（应该是在 npm 的网站上）

### [#](#directories-example) directories.example

放一些示例脚本，或许某一天会有用 - -！

## [#](#repository) repository

指定一个代码存放地址，对想要为你的项目贡献代码的人有帮助。像这样：

```json
{
  "type": "git",
  "url": "https://github.com/npm/npm.git"
}
```

```json
{
  "type": "svn",
  "url": "https://v8.googlecode.com/svn/trunk/"
}
```

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11

若你的模块放在 GitHub, GitHub gist, Bitbucket, or GitLab 的仓库里，npm install 的时候可以使用缩写标记来完成：

```
"repository": "npm/npm"

"repository": "gist:11081aaa281"

"repository": "bitbucket:example/repo"

"repository": "gitlab:another/repo"
```

1  
2  
3  
4  
5  
6  
7

## [#](#scripts) scripts

scripts 属性是一个对象，里边指定了项目的生命周期个各个环节需要执行的命令。key 是生命周期中的事件，value 是要执行的命令。 具体的内容有 install start stop 等，详见 [https://docs.npmjs.com/misc/scripts (opens new window)](https://docs.npmjs.com/misc/scripts)

## [#](#config) config

用来设置一些项目不怎么变化的项目配置，例如 port 等。 用户用的时候可以使用如下用法：

```
http.createServer(...).listen(process.env.npm_package_config_port)
```

1

可以通过 npm config set foo:port 80 来修改 config。详见[https://docs.npmjs.com/misc/config (opens new window)](https://docs.npmjs.com/misc/config)

```json
{
  "name": "foo",
  "config": {
    "port": "8080"
  }
}
```

1  
2  
3  
4

## [#](#dependencies) dependencies

dependencies 属性是一个对象，配置模块依赖的模块列表，key 是模块名称，value 是版本范围，版本范围是一个字符，可以被一个或多个空格分割。 dependencies 也可以被指定为一个 git 地址或者一个压缩包地址。 不要把测试工具或 transpilers 写到 dependencies 中。下面是一些写法，详见[https://docs.npmjs.com/misc/semver (opens new window)](https://docs.npmjs.com/misc/semver)

```
+ version 精确匹配版本
+ \>version 必须大于某个版本
+ \>=version 大于等于
+ <version 小于
+ <=versionversion 小于
+ ~version "约等于"，具体规则详见semver文档
+ ^version "兼容版本"具体规则详见semver文档
+ 1.2.x 仅一点二点几的版本
+ http://... 见下面url作为denpendencies的说明
+
    + 任何版本
+ "" 空字符，和\*相同
+ version1 - version2 相当于 >=version1 <=version2.
+ range1 || range2 范围1和范围2满足任意一个都行
+ git... 见下面git url作为denpendencies的说明
+ user/repo See 见下面GitHub仓库的说明
+ tag
  发布的一个特殊的标签，见npm-tag的文档 [https://docs.npmjs.com/getting-started/using-tags (opens new window)](https://docs.npmjs.com/getting-started/using-tags)
+ path/path/path 见下面本地模块的说明 下面的写法都是可以的:
```

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15

## [#](#urls-as-dependencies) URLs as Dependencies

在版本范围的地方可以写一个 url 指向一个压缩包，模块安装的时候会把这个压缩包下载下来安装到模块本地。

## [#](#git-urls-as-dependencies) Git URLs as Dependencies

Git url 可以像下面一样:

```text
git://github.com/user/project.git#commit-ish
git+ssh://user@hostname:project.git#commit-ish
git+ssh://user@hostname/project.git#commit-ish
git+http://user@hostname/project/blah.git#commit-ish
git+https://user@hostname/project/blah.git#commit-ish
```

1  
2  
3  
4  
5

commit-ish 可以是任意标签，哈希值，或者可以检出的分支，默认是 master 分支。

## [#](#github-urls) GitHub URLs

支持 github 的 username/modulename 的写法，#后边可以加后缀写明分支 hash 或标签：

```json
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "visionmedia/express",
    "mocha": "visionmedia/mocha#4727d357ea"
  }
}
```

1  
2  
3  
4  
5  
6  
7  
8

## [#](#local-paths) Local Paths

npm2.0.0 版本以上可以提供一个本地路径来安装一个本地的模块，通过 npm install xxx --save 来安装，格式如下：

```text
../foo/bar
~/foo/bar
./foo/bar
/foo/bar
```

1  
2  
3  
4

package.json 生成的相对路径如下:

```json
{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

1  
2  
3  
4  
5  
6

这种属性在离线开发或者测试需要用 npm install 的情况，又不想自己搞一个 npm server 的时候有用，但是发布模块到公共仓库时不应该使用这种属性。

## [#](#devdependencies) devDependencies

如果有人想要下载并使用你的模块，也许他们并不希望或需要下载一些你在开发过程中使用的额外的测试或者文档框架。在这种情况下，最好的方法是把这些依赖添加到 devDependencies 属性的对象中。 这些模块会在 npm link 或者 npm install 的时候被安装，也可以像其他 npm 配置一样被管理，详见 npm 的 config 文档。对于一些跨平台的构建任务，例如把 CoffeeScript 编译成 JavaScript，就可以通过在 package.json 的 script 属性里边配置 prepublish 脚本来完成这个任务，然后需要依赖的 coffee-script 模块就写在 devDependencies 属性种。例如:

```json
{
  "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepublish": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11

prepublish 脚本会在发布之前运行，因此用户在使用之前就不用再自己去完成编译的过程了。在开发模式下，运行 npm install 也会执行这个脚本（见 npm script 文档），因此可以很方便的调试。

## [#](#peerdependencies) peerDependencies

有时候做一些插件开发，比如 grunt 等工具的插件，它们往往是在 grunt 的某个版本的基础上开发的，而在他们的代码中并不会出现 require(" grunt")这样的依赖，dependencies 配置里边也不会写上 grunt 的依赖，为了说明此模块只能作为插件跑在宿主的某个版本范围下，可以配置 peerDependencies：

```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x"
  }
}
```

1  
2  
3  
4  
5  
6  
7

上面这个配置确保再 npm install 的时候 tea-latte 会和 2.x 版本的 tea 一起安装，而且它们两个的依赖关系是同级的： ├── tea-latte@1.3.5 └── tea@2.2.0 这个配置的目的是让 npm 知道，如果要使用此插件模块，请确保安装了兼容版本的宿主模块。

## [#](#bundleddependencies) bundledDependencies

上面的单词少个 d，写成 bundleDependencies 也可以。 指定发布的时候会被一起打包的模块。

## [#](#optionaldependencies) optionalDependencies

如果一个依赖模块可以被使用，同时你也希望在该模块找不到或无法获取时 npm 继续运行，你可以把这个模块依赖放到 optionalDependencies 配置中。这个配置的写法和 dependencies 的写法一样，不同的是这里边写的模块安装失败不会导致 npm install 失败。 当然，这种模块就需要你自己在代码中处理模块确实的情况了，例如：

```js
try {
  var foo = require('foo');
  var fooVersion = require('foo/package.json').version;
} catch (er) {
  foo = null;
}
if (notGoodFooVersion(fooVersion)) {
  foo = null;
}

// .. then later in your program ..

if (foo) {
  foo.doFooThings();
}
```

1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14  
15

optionalDependencies 中的配置会覆盖 dependencies 中的配置，最好只在一个地方写。

## [#](#engines) engines

你可以指定项目运行的 node 版本范围，如下： { "engines" : { "node" : ">=0.10.3 <0.12" } } 和 dependencies 一样，如果你不指定版本范围或者指定为\*，任何版本的 node 都可以。也可以指定一些 npm 版本可以正确的安装你的模块，例如： { "engines" : { "npm" : "~1.0.20" } } 要注意的是，除非你设置了 engine-strict 属性，engines 属性是仅供参考的。

## [#](#enginestrict) engineStrict

注意：这个属性已经弃用，将在 npm 3.0.0 版本干掉。

## [#](#os) os

可以指定你的模块只能在哪个操作系统上跑： "os" : \[ "darwin", "linux" \] 也可以指定黑名单而不是白名单： "os" : \[ "! win32" \] 服务的操作系统是由 process.platform 来判断的，这个属性允许黑白名单同时存在，虽然没啥必要这样搞...

## [#](#cpu) cpu

限制模块只能在某某 cpu 架构下运行 "cpu" : \[ "x64", "ia32" \] 同样可以设置黑名单: "cpu" : \[ "!arm", "!mips" \] cpu 架构通过 process.arch 判断

## [#](#preferglobal) preferGlobal

如果您的软件包主要用于安装到全局的命令行应用程序，那么该值设置为 true ，如果它被安装在本地，则提供一个警告。实际上该配置并没有阻止用户把模块安装到本地，只是防止该模块被错误的使用引起一些问题。

## [#](#private) private

如果这个属性被设置为 true，npm 将拒绝发布它，这是为了防止一个私有模块被无意间发布出去。如果你只想让模块被发布到一个特定的 npm 仓库，如一个内部的仓库，可与在下面的 publishConfig 中配置仓库参数。

## [#](#publishconfig) publishConfig

这个配置是会在模块发布时用到的一些值的集合。如果你不想模块被默认被标记为最新的，或者默认发布到公共仓库，可以在这里配置 tag 或仓库地址。

## [#](#default-values) DEFAULT VALUES

npm 设置了一些默认参数，如： "scripts": {"start": "node server.js"} 如果模块根目录下有一个 server.js 文件，那么 npm start 会默认运行这个文件。 "scripts":{"preinstall": "node-gyp rebuild"} 如果模块根目录下有 binding.gyp, npm 将默认用 node-gyp 来编译 preinstall 的脚本 "contributors": \[...\] 若模块根目录下有 AUTHORS 文件，则 npm 会按 Name (url) 格式解析每一行的数据添加到 contributors 中，可以用#添加行注释

## [#](#参考文档列表-https-docs-npmjs-com) 参考文档列表(<https://docs.npmjs.com/>)
