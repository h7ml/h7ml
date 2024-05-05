---
icon: linux
order: 1
date: 2021-06-27
author: h7ml
title: Linux 常用命令
category: linux
tag: linux
---

# Linux 常用命令

## pwd 显示当前工作目录的绝对路径

`pwd:print working directory` 打印工作目录

**基本语法**

`pwd` （功能描述：显示当前工作目录的绝对路径）

**案例实操**

- 显示当前工作目录的绝对路径

```crystal
[root@hadoop101 ~]# pwd
/root
```

## ls 列出目录的内容

`ls:list` 列出目录内容

**基本语法**

`ls [选项] [目录或是文件]`

**选项说明**

| 选项 | 功能                                                       |
| ---- | ---------------------------------------------------------- |
| `-a` | 全部的文件，连同隐藏档( 开头为 . 的文件) 一起列出来(常用)  |
| `-l` | 长数据串列出，包含文件的属性与权限等等数据(常用)等价于“ll” |

**显示说明**

每行列出的信息依次是：**文件类型与权限 链接数 文件属主 文件属组文件大小用 byte 来表示 建立或最近修改的时间 名字**

**案例实操**

- 查看当前目录的所有内容信息

```crystal
[atguigu@hadoop101 ~]$ ls -al
总用量 44
drwx------. 5 atguigu atguigu 4096 5 月 27 15:15 .
drwxr-xr-x. 3 root root 4096 5 月 27 14:03 ..
drwxrwxrwx. 2 root root 4096 5 月 27 14:14 hello
-rwxrw-r--. 1 atguigu atguigu 34 5 月 27 14:20 test.txt
```

## cd 切换目录

**基本语法**

`cd [参数]`

**参数说明**

| 参数            | 功能                                 |
| --------------- | ------------------------------------ |
| `cd` 绝对路径   | 切换路径                             |
| `cd` 相对路径   | 切换路径                             |
| `cd` ~或者 `cd` | 回到自己的家目录                     |
| `cd -`          | 回到上一次所在目录                   |
| `cd ..`         | 回到当前目录的上一级目录             |
| `cd -P`         | 跳转到实际物理路径，而非快捷方式路径 |

**案例实操**

- 使用绝对路径切换到 `root` 目录

```hs
[root@hadoop101 ~]# cd /root/
```

- 使用相对路径切换到“公共的”目录

```crystal
[root@hadoop101 ~]# cd 公共的/
```

- 表示回到自己的家目录，亦即是 `/root` 这个目录

```crystal
[root@hadoop101 公共的]# cd ~
```

- `cd`\- 回到上一次所在目录

- 表示回到当前目录的上一级目录，亦即是 “`/root/`公共的”的上一级目录的意思

```crystal
[root@hadoop101 公共的]# cd ..
```

## mkdir 创建一个新的目录

`mkdir:Make directory` 建立目录

**基本语法**

- mkdir \[选项\] 要创建的目录

**选项说明**

| 选项 | 功能         |
| ---- | ------------ |
| \-p  | 创建多层目录 |

**案例实操**

- 创建一个目录

```crystal
[root@hadoop101 ~]# mkdir xiyou
[root@hadoop101 ~]# mkdir xiyou/mingjie
```

- 创建一个多级目录

```crystal
[root@hadoop101 ~]# mkdir -p xiyou/dssz/meihouwang
```

## rmdir 删除一个空的目录

`rmdir:Remove directory` 移除目录

**基本语法**

- `rmdir` 要删除的空目录

**案例实操**

- 删除一个空的文件夹

```crystal
[root@hadoop101 ~]# rmdir xiyou/dssz/meihouwang
```

## touch 创建空文件

**基本语法**

- `touch` 文件名称

**案例实操**

```crystal
[root@hadoop101 ~]# touch xiyou/dssz/sunwukong.txt
```

## cp 复制文件或目录

**基本语法**

- `cp [选项] source dest` （功能描述：复制`source`文件到`dest`）

**选项说明**

| 选项 | 功能               |
| ---- | ------------------ |
| `-r` | 递归复制整个文件夹 |

**参数说明**

| 参数     | 功能     |
| -------- | -------- |
| `source` | 源文件   |
| `dest`   | 目标文件 |

**经验技巧**

强制覆盖不提示的方法：\\cp

**案例实操**

- 复制文件

```crystal
[root@hadoop101 ~]# cp xiyou/dssz/suwukong.txt xiyou/mingjie/
```

- 递归复制整个文件夹

```crystal
[root@hadoop101 ~]# cp -r xiyou/dssz/ ./
```

## rm 删除文件或目录

**基本语法**

- `rm [选项] deleteFile` （功能描述：递归删除目录中所有内容）

**选项说明**

| 选项 | 功能                                   |
| ---- | -------------------------------------- |
| `-r` | 递归删除目录中所有内容                 |
| `-f` | 强制执行删除操作，而不提示用于进行确认 |
| `-v` | 显示指令的详细执行过程                 |

**案例实操**

- 删除目录中的内容

```crystal
[root@hadoop101 ~]# rm xiyou/mingjie/sunwukong.txt
```

- 递归删除目录中所有内容

```crystal
[root@hadoop101 ~]# rm -rf dssz/
```

## mv 移动文件与目录或重命名

**基本语法**

- `mv oldNameFile newNameFile` （功能描述：重命名） - `mv /temp/movefile /targetFolder` （功能描述：移动文件）

**案例实操**

- 重命名

```crystal
[root@hadoop101 ~]# mv xiyou/dssz/suwukong.txt xiyou/dssz/houge.txt
```

- 移动文件

```crystal
[root@hadoop101 ~]# mv xiyou/dssz/houge.txt ./
```

## cat 查看文件内容

查看文件内容，从第一行开始显示。

**基本语法**

- `cat [选项]` 要查看的文件

**选项说明**

| 选项 | 功能描述                     |
| ---- | ---------------------------- |
| `-n` | 显示所有行的行号，包括空行。 |

**经验技巧**

- 一般查看比较小的文件，一屏幕能显示全的。

**案例实操**

- 查看文件内容并显示行号

```crystal
[atguigu@hadoop101 ~]$ cat -n houge.txt
```

## more 文件内容分屏查看器

more 指令是一个基于 VI 编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more 指令中内置了若干快捷键，详见操作说明。

**基本语法**

- more 要查看的文件

**操作说明**

| 操作             | 功能说明                                                        |
| ---------------- | --------------------------------------------------------------- |
| `空白键 (space)` | 代表向下翻一页                                                  |
| `Enter`          | 代表向下翻『一行』                                              |
| `q`              | 代表立刻离开 `more` ，不再显示该文件内容。`Ctrl+F` 向下滚动一屏 |
| `Ctrl+F`         | 向下滚动一屏                                                    |
| `Ctrl+B`         | 返回上一屏                                                      |
| `=`              | 输出当前行的行号                                                |
| `:f`             | 输出文件名和当前行的行号                                        |

**案例实操**

- 采用 `more` 查看文件

```crystal
[root@hadoop101 ~]# more smartd.conf
```

## less 分屏显示文件内容

less 指令用来分屏查看文件内容，它的功能与 more 指令类似，但是比 more 指令更加强大，支持各种显示终端。less 指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率。

**基本语法**

- less 要查看的文件

**操作说明**

| 操作         | 功能说明                                       |
| ------------ | ---------------------------------------------- |
| `空白键`     | 向下翻动一页                                   |
| `[pagedown]` | 向下翻动一页                                   |
| `[pageup]`   | 向上翻动一页                                   |
| `/字串`      | 向下搜寻『字串』的功能 n：向下查找 N：向上查找 |
| `?字串`      | 向上搜寻『字串』的功能 n：向上查找 N：向下查找 |
| `q`          | 离开 less 这个程序                             |

**经验技巧**

- 用`SecureCRT`时`[pagedown]`和`[pageup]`可能会出现无法识别的问题

**案例实操**

- 采用 less 查看文件

```crystal
[root@hadoop101 ~]# less smartd.conf
```

## echo 输出内容到控制台

**基本语法**

- `echo [选项] [输出内容]`

**选项说明**

- `-e：` 支持反斜线控制的字符转换

| 控制字符 | 作用                  |
| -------- | --------------------- |
| `\\`     | 输出\\本身            |
| `\n`     | 换行符                |
| `\t`     | 制表符，也就是 Tab 键 |

案例实操

```crystal
[atguigu@hadoop101 ~]$ echo “hello\tworld”
hello\tworld
[atguigu@hadoop101 ~]$ echo -e “hello\tworld”
hello world
```

## head 显示文件头部内容

`head` 用于显示文件的开头部分内容，默认情况下 `head` 指令显示文件的前 10 行内容。

**基本语法**

- `head` 文件 （功能描述：查看文件头 10 行内容）
- `head -n 5` 文件 （功能描述：查看文件头 5 行内容，5 可以是任意行数）

**选项说明**

| 选项       | 功能                   |
| ---------- | ---------------------- |
| `-n<行数>` | 指定显示头部内容的行数 |

**案例实操**

- 查看文件的头 2 行

```crystal
[root@hadoop101 ~]# head -n 2 smartd.conf
```

## tail 输出文件尾部内容

tail 用于输出文件中尾部的内容，默认情况下 tail 指令显示文件的后 10 行内容。

**基本语法**

- `tail 文件` （功能描述：查看文件尾部 10 行内容）
- `tail -n 5 文件` （功能描述：查看文件尾部 5 行内容，5 可以是任意行数）
- **`tail -f 文件` （功能描述：实时追踪该文档的所有更新）**

**选项说明**

| 选项       | 功能                                 |
| ---------- | ------------------------------------ |
| `-n<行数>` | 输出文件尾部 n 行内容                |
| `-f`       | 显示文件最新追加的内容，监视文件变化 |

**案例实操**

- 查看文件尾 1 行内容

```crystal
[root@hadoop101 ~]# tail -n 1 smartd.conf
```

- 实时追踪该档的所有更新

```crystal
[root@hadoop101 ~]# tail -f houge.txt
```

## **\>** 输出重定向和 **\>>** 追加

**基本语法**

- ls-l >文件 (功能描述:列表的内容写入文件 a.txt 中(覆盖写))
- ls-al >>文件 (功能描述:列表的内容追加到文件 aa.txt 的末尾)
- cat 文件 1 > 文件 2 (功能描述:将文件 1 的内容覆盖到文件 2)
- echo “内容” >> 文件

**案例实操**

- 将 ls 查看信息写入到文件中

```crystal
[root@hadoop101 ~]# ls -l>houge.txt
```

- 将 ls 查看信息追加到文件中

```crystal
[root@hadoop101 ~]# ls -l>>houge.txt
```

- 采用 echo 将 hello 单词追加到文件中

```crystal
[root@hadoop101 ~]# echo hello>>houge.txt
```

## **ln** 软链接

软链接也称为符号链接，类似于 windows 里的快捷方式，有自己的数据块，主要存放

了链接其他文件的路径。

**基本语法**

- `ln -s` \[原文件或目录\] \[软链接名\] (功能描述:给原文件创建一个软链接)

**经验技巧**

- 删除软链接: `rm -rf` 软链接名，而不是 `rm -rf` 软链接名/
- 如果使用 `rm -rf` 软链接名/ 删除，**会把软链接对应的真实目录下内容删掉**

- 查询:通过 `ll` 就可以查看，列表属性第 1 位是 l，尾部会有位置指向。

**案例实操**

- 创建软连接

```crystal
[root@hadoop101 ~]# mv houge.txt xiyou/dssz/
[root@hadoop101 ~]# ln -s xiyou/dssz/houge.txt ./houzi
[root@hadoop101 ~]# ll
lrwxrwxrwx. 1 root root 20 6 月 17 12:56 houzi -> xiyou/dssz/houge.txt
```

- 删除软连接(注意不要写最后的/)

```crystal
[root@hadoop101 ~]# rm -rf houzi
```

- 进入软连接实际物理路径

```crystal
[root@hadoop101 ~]# ln -s xiyou/dssz/ ./dssz
[root@hadoop101 ~]# cd -P dssz/
```

## **history** 查看已经执行过历史命令

**基本语法**

- history (功能描述:查看已经执行过历史命令)

**案例实操**

- 查看已经执行过的历史命令

```crystal
[root@hadoop101 test1]# history
```

## 文件目录类（频繁）

## pwd 显示当前工作目录的绝对路径

`pwd:print working directory` 打印工作目录

**基本语法**

`pwd` （功能描述：显示当前工作目录的绝对路径）

**案例实操**

- 显示当前工作目录的绝对路径

```crystal
[root@hadoop101 ~]# pwd
/root
```

## ls 列出目录的内容

`ls:list` 列出目录内容

**基本语法**

`ls [选项] [目录或是文件]`

**选项说明**

| 选项 | 功能                                                       |
| ---- | ---------------------------------------------------------- |
| `-a` | 全部的文件，连同隐藏档( 开头为 . 的文件) 一起列出来(常用)  |
| `-l` | 长数据串列出，包含文件的属性与权限等等数据(常用)等价于“ll” |

**显示说明**

每行列出的信息依次是：**文件类型与权限 链接数 文件属主 文件属组文件大小用 byte 来表示 建立或最近修改的时间 名字**

**案例实操**

- 查看当前目录的所有内容信息

```crystal
[atguigu@hadoop101 ~]$ ls -al
总用量 44
drwx------. 5 atguigu atguigu 4096 5 月 27 15:15 .
drwxr-xr-x. 3 root root 4096 5 月 27 14:03 ..
drwxrwxrwx. 2 root root 4096 5 月 27 14:14 hello
-rwxrw-r--. 1 atguigu atguigu 34 5 月 27 14:20 test.txt
```

## cd 切换目录

**基本语法**

`cd [参数]`

**参数说明**

| 参数            | 功能                                 |
| --------------- | ------------------------------------ |
| `cd` 绝对路径   | 切换路径                             |
| `cd` 相对路径   | 切换路径                             |
| `cd` ~或者 `cd` | 回到自己的家目录                     |
| `cd -`          | 回到上一次所在目录                   |
| `cd ..`         | 回到当前目录的上一级目录             |
| `cd -P`         | 跳转到实际物理路径，而非快捷方式路径 |

**案例实操**

- 使用绝对路径切换到 `root` 目录

```hs
[root@hadoop101 ~]# cd /root/
```

- 使用相对路径切换到“公共的”目录

```crystal
[root@hadoop101 ~]# cd 公共的/
```

- 表示回到自己的家目录，亦即是 `/root` 这个目录

```crystal
[root@hadoop101 公共的]# cd ~
```

- `cd`\- 回到上一次所在目录

- 表示回到当前目录的上一级目录，亦即是 “`/root/`公共的”的上一级目录的意思

```crystal
[root@hadoop101 公共的]# cd ..
```

## mkdir 创建一个新的目录

`mkdir:Make directory` 建立目录

**基本语法**

- mkdir \[选项\] 要创建的目录

**选项说明**

| 选项 | 功能         |
| ---- | ------------ |
| \-p  | 创建多层目录 |

**案例实操**

- 创建一个目录

```crystal
[root@hadoop101 ~]# mkdir xiyou
[root@hadoop101 ~]# mkdir xiyou/mingjie
```

- 创建一个多级目录

```crystal
[root@hadoop101 ~]# mkdir -p xiyou/dssz/meihouwang
```

## rmdir 删除一个空的目录

`rmdir:Remove directory` 移除目录

**基本语法**

- `rmdir` 要删除的空目录

**案例实操**

- 删除一个空的文件夹

```crystal
[root@hadoop101 ~]# rmdir xiyou/dssz/meihouwang
```

## touch 创建空文件

**基本语法**

- `touch` 文件名称

**案例实操**

```crystal
[root@hadoop101 ~]# touch xiyou/dssz/sunwukong.txt
```

## cp 复制文件或目录

**基本语法**

- `cp [选项] source dest` （功能描述：复制`source`文件到`dest`）

**选项说明**

| 选项 | 功能               |
| ---- | ------------------ |
| `-r` | 递归复制整个文件夹 |

**参数说明**

| 参数     | 功能     |
| -------- | -------- |
| `source` | 源文件   |
| `dest`   | 目标文件 |

**经验技巧**

强制覆盖不提示的方法：\\cp

**案例实操**

- 复制文件

```crystal
[root@hadoop101 ~]# cp xiyou/dssz/suwukong.txt xiyou/mingjie/
```

- 递归复制整个文件夹

```crystal
[root@hadoop101 ~]# cp -r xiyou/dssz/ ./
```

## rm 删除文件或目录

**基本语法**

- `rm [选项] deleteFile` （功能描述：递归删除目录中所有内容）

**选项说明**

| 选项 | 功能                                   |
| ---- | -------------------------------------- |
| `-r` | 递归删除目录中所有内容                 |
| `-f` | 强制执行删除操作，而不提示用于进行确认 |
| `-v` | 显示指令的详细执行过程                 |

**案例实操**

- 删除目录中的内容

```crystal
[root@hadoop101 ~]# rm xiyou/mingjie/sunwukong.txt
```

- 递归删除目录中所有内容

```crystal
[root@hadoop101 ~]# rm -rf dssz/
```

## mv 移动文件与目录或重命名

**基本语法**

- `mv oldNameFile newNameFile` （功能描述：重命名） - `mv /temp/movefile /targetFolder` （功能描述：移动文件）

**案例实操**

- 重命名

```crystal
[root@hadoop101 ~]# mv xiyou/dssz/suwukong.txt xiyou/dssz/houge.txt
```

- 移动文件

```crystal
[root@hadoop101 ~]# mv xiyou/dssz/houge.txt ./
```

## cat 查看文件内容

查看文件内容，从第一行开始显示。

**基本语法**

- `cat [选项]` 要查看的文件

**选项说明**

| 选项 | 功能描述                     |
| ---- | ---------------------------- |
| `-n` | 显示所有行的行号，包括空行。 |

**经验技巧**

- 一般查看比较小的文件，一屏幕能显示全的。

**案例实操**

- 查看文件内容并显示行号

```crystal
[atguigu@hadoop101 ~]$ cat -n houge.txt
```

## more 文件内容分屏查看器

more 指令是一个基于 VI 编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more 指令中内置了若干快捷键，详见操作说明。

**基本语法**

- more 要查看的文件

**操作说明**

| 操作             | 功能说明                                                        |
| ---------------- | --------------------------------------------------------------- |
| `空白键 (space)` | 代表向下翻一页                                                  |
| `Enter`          | 代表向下翻『一行』                                              |
| `q`              | 代表立刻离开 `more` ，不再显示该文件内容。`Ctrl+F` 向下滚动一屏 |
| `Ctrl+F`         | 向下滚动一屏                                                    |
| `Ctrl+B`         | 返回上一屏                                                      |
| `=`              | 输出当前行的行号                                                |
| `:f`             | 输出文件名和当前行的行号                                        |

**案例实操**

- 采用 `more` 查看文件

```crystal
[root@hadoop101 ~]# more smartd.conf
```

## less 分屏显示文件内容

less 指令用来分屏查看文件内容，它的功能与 more 指令类似，但是比 more 指令更加强大，支持各种显示终端。less 指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率。

**基本语法**

- less 要查看的文件

**操作说明**

| 操作         | 功能说明                                       |
| ------------ | ---------------------------------------------- |
| `空白键`     | 向下翻动一页                                   |
| `[pagedown]` | 向下翻动一页                                   |
| `[pageup]`   | 向上翻动一页                                   |
| `/字串`      | 向下搜寻『字串』的功能 n：向下查找 N：向上查找 |
| `?字串`      | 向上搜寻『字串』的功能 n：向上查找 N：向下查找 |
| `q`          | 离开 less 这个程序                             |

**经验技巧**

- 用`SecureCRT`时`[pagedown]`和`[pageup]`可能会出现无法识别的问题

**案例实操**

- 采用 less 查看文件

```crystal
[root@hadoop101 ~]# less smartd.conf
```

## echo 输出内容到控制台

**基本语法**

- `echo [选项] [输出内容]`

**选项说明**

- `-e：` 支持反斜线控制的字符转换

| 控制字符 | 作用                  |
| -------- | --------------------- |
| `\\`     | 输出\\本身            |
| `\n`     | 换行符                |
| `\t`     | 制表符，也就是 Tab 键 |

案例实操

```crystal
[atguigu@hadoop101 ~]$ echo “hello\tworld”
hello\tworld
[atguigu@hadoop101 ~]$ echo -e “hello\tworld”
hello world
```

## head 显示文件头部内容

`head` 用于显示文件的开头部分内容，默认情况下 `head` 指令显示文件的前 10 行内容。

**基本语法**

- `head` 文件 （功能描述：查看文件头 10 行内容）
- `head -n 5` 文件 （功能描述：查看文件头 5 行内容，5 可以是任意行数）

**选项说明**

| 选项       | 功能                   |
| ---------- | ---------------------- |
| `-n<行数>` | 指定显示头部内容的行数 |

**案例实操**

- 查看文件的头 2 行

```crystal
[root@hadoop101 ~]# head -n 2 smartd.conf
```

## tail 输出文件尾部内容

tail 用于输出文件中尾部的内容，默认情况下 tail 指令显示文件的后 10 行内容。

**基本语法**

- `tail 文件` （功能描述：查看文件尾部 10 行内容）
- `tail -n 5 文件` （功能描述：查看文件尾部 5 行内容，5 可以是任意行数）
- **`tail -f 文件` （功能描述：实时追踪该文档的所有更新）**

**选项说明**

| 选项       | 功能                                 |
| ---------- | ------------------------------------ |
| `-n<行数>` | 输出文件尾部 n 行内容                |
| `-f`       | 显示文件最新追加的内容，监视文件变化 |

**案例实操**

- 查看文件尾 1 行内容

```crystal
[root@hadoop101 ~]# tail -n 1 smartd.conf
```

- 实时追踪该档的所有更新

```crystal
[root@hadoop101 ~]# tail -f houge.txt
```

## **\>** 输出重定向和 **\>>** 追加

**基本语法**

- ls-l >文件 (功能描述:列表的内容写入文件 a.txt 中(覆盖写))
- ls-al >>文件 (功能描述:列表的内容追加到文件 aa.txt 的末尾)
- cat 文件 1 > 文件 2 (功能描述:将文件 1 的内容覆盖到文件 2)
- echo “内容” >> 文件

**案例实操**

- 将 ls 查看信息写入到文件中

```crystal
[root@hadoop101 ~]# ls -l>houge.txt
```

- 将 ls 查看信息追加到文件中

```crystal
[root@hadoop101 ~]# ls -l>>houge.txt
```

- 采用 echo 将 hello 单词追加到文件中

```crystal
[root@hadoop101 ~]# echo hello>>houge.txt
```

## **ln** 软链接

软链接也称为符号链接，类似于 windows 里的快捷方式，有自己的数据块，主要存放

了链接其他文件的路径。

**基本语法**

- `ln -s` \[原文件或目录\] \[软链接名\] (功能描述:给原文件创建一个软链接)

**经验技巧**

- 删除软链接: `rm -rf` 软链接名，而不是 `rm -rf` 软链接名/
- 如果使用 `rm -rf` 软链接名/ 删除，**会把软链接对应的真实目录下内容删掉**

- 查询:通过 `ll` 就可以查看，列表属性第 1 位是 l，尾部会有位置指向。

**案例实操**

- 创建软连接

```crystal
[root@hadoop101 ~]# mv houge.txt xiyou/dssz/
[root@hadoop101 ~]# ln -s xiyou/dssz/houge.txt ./houzi
[root@hadoop101 ~]# ll
lrwxrwxrwx. 1 root root 20 6 月 17 12:56 houzi -> xiyou/dssz/houge.txt
```

- 删除软连接(注意不要写最后的/)

```crystal
[root@hadoop101 ~]# rm -rf houzi
```

- 进入软连接实际物理路径

```crystal
[root@hadoop101 ~]# ln -s xiyou/dssz/ ./dssz
[root@hadoop101 ~]# cd -P dssz/
```

## **history** 查看已经执行过历史命令

**基本语法**

- history (功能描述:查看已经执行过历史命令)

**案例实操**

- 查看已经执行过的历史命令

```crystal
[root@hadoop101 test1]# history
```

## 时间日期类

## **date** 显示当前时间

**基本语法**

```crystal
date [OPTION]... [+FORMAT]
```

- `date` (功能描述:显示当前时间)
- `date +%Y` (功能描述:显示当前年份)
- `date +%m` (功能描述:显示当前月份)
- `date +%d` (功能描述:显示当前是哪一天)
- `date "+%Y-%m-%d %H:%M:%S"` (功能描述:显示年月日时分秒)

**选项说明**

| 选项            | 功能                                       |
| --------------- | ------------------------------------------ |
| \-d<时间字符串> | 显示指定“时间字符串”表示时间，而非当前时间 |
| \-s<日期时间>   | 设置系统日期时间                           |

**参数说明**

| 参数            | 功能                         |
| --------------- | ---------------------------- |
| <+日期时间格式> | 指定显示时使用的日期时间格式 |

**案例实操**

- 显示当前时间信息

```crystal
[root@hadoop101 ~]# date
2017 年 06 月 19 日 星期一 20:53:30 CST
```

- 显示当前时间年月日

```crystal
[root@hadoop101 ~]# date +%Y%m%d
20170619
```

- 显示当前时间年月日时分秒

```crystal
[root@hadoop101 ~]# date "+%Y-%m-%d %H:%M:%S"
2017-06-19 20:54:58
```

## **date** 显示非当前时间

**基本语法**

- `date -d '1 days ago'`(功能描述:显示前一天时间)
- `date -d '-1 days ago'`(功能描述:显示明天时间)

**案例实操**

- 显示前一天

```crystal
[root@hadoop101 ~]# date -d '1 days ago'
2017 年 06 月 18 日 星期日 21:07:22 CST
```

- 显示明天时间

```crystal
[root@hadoop101 ~]#date -d '-1 days ago'sh
2017 年 06 月 20 日 星期日 21:07:22 CST
```

## **date** 设置系统时间

**基本语法**

- date -s 字符串时间

**案例实操**

- 设置系统当前时间

```crystal
[root@hadoop101 ~]# date -s "2017-06-19 20:52:18"
```

## **cal** 查看日历

**基本语法**

- cal \[选项\] (功能描述:不加选项，显示本月日历)

**选项说明**

| 选项       | 功能       |
| ---------- | ---------- |
| 具体某一年 | 显示这一年 |

**案例实操**

- 查看当前月的日历

- 查看 2017 年的日历

```crystal
[root@hadoop101 ~]# cal 2017
```

## 用户管理命令

## useradd 添加新用户

**基本语法**

- `useradd` 用户名 (功能描述:添加新用户)
- `useradd -g` 组名 用户名 (功能描述:添加新用户到某个组)

**选项说明**

| 选项         | 功能                                                                         |
| ------------ | ---------------------------------------------------------------------------- |
| `-c comment` | 指定一段注释性描述。                                                         |
| `-d`         | 目录 指定用户主目录，如果此目录不存在，则同时使用-m 选项，可以创建主目录。   |
| `-g`         | 用户组 指定用户所属的用户组。                                                |
| `-G`         | 用户组，用户组 指定用户所属的附加组。                                        |
| **`-m`**     | **自动创建这个用户的主目录 /home/qinjiang**                                  |
| `-s`         | Shell 文件 指定用户的登录 Shell。                                            |
| `-u`         | 用户号 指定用户的用户号，如果同时有-o 选项，则可以重复使用其他用户的标识号。 |

**案例实操**

- 添加一个用户

```crystal
[root@hadoop101 ~]# useradd tangseng
[root@hadoop101 ~]#ll /home/
```

## **passwd** 设置用户密码

**基本语法**

- `passwd` 用户名 (功能描述:设置用户密码)

**案例实操**

- 设置用户的密码

```crystal
[root@hadoop101 ~]# passwd tangseng
```

## 查看用户是否存在

**基本语法**

- `id` 用户名

**案例实操**

- 看用户是否存在

```crystal
[root@hadoop101 ~]#id tangseng
```

## cat /etc/passwd 查看创建了哪些用户

- 案例实操

```crystal
[root@hadoop101 ~]# cat  /etc/passwd
```

![image-20220903182240503](http://static.5ibug.net/vitepress/assets/images/linux/202209031822555.png)

## su 切换用户

`su: swith user` 切换用户

**基本语法**

- `su`用户名称 (功能描述:切换用户，只能获得用户的执行权限，不能获得环境变量)
- `su -` 用户名称 (功能描述:切换到用户并获得该用户的环境变量及执行权限)

**案例实操**

- 切换用户

```crystal
[root@hadoop101 ~]#su tangseng
[root@hadoop101 ~]#echo $PATH
/usr/lib64/qt-
3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/b
in
[root@hadoop101 ~]#exit
[root@hadoop101 ~]#su - tangseng
[root@hadoop101 ~]#echo $PATH
/usr/lib64/qt-
3.3/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/home/t
angseng/bin
```

**root 超级用户**

![image-20220903182757221](http://static.5ibug.net/vitepress/assets/images/linux/202209031827268.png)

**普通用户**

![image-20220903182828864](http://static.5ibug.net/vitepress/assets/images/linux/202209031828923.png)

## **userdel** 删除用户

**基本语法**

- `userdel` 用户名 (功能描述:删除用户但保存用户主目录)
- `userdel -r` 用户名 **2**) (功能描述:用户和用户主目录，都删除

**选项说明**

| 选项         | 功能                                                                         |
| ------------ | ---------------------------------------------------------------------------- |
| `-r`         | 删除用户的同时，删除与用户相关的所有文件。                                   |
| `-c comment` | 指定一段注释性描述。                                                         |
| `-d`         | 目录 指定用户主目录，如果此目录不存在，则同时使用-m 选项，可以创建主目录。   |
| `-g`         | 用户组 指定用户所属的用户组。                                                |
| `-G`         | 用户组，用户组 指定用户所属的附加组。                                        |
| **`-m`**     | **自动创建这个用户的主目录 /home/qinjiang**                                  |
| `-s`         | Shell 文件 指定用户的登录 Shell。                                            |
| `-u`         | 用户号 指定用户的用户号，如果同时有-o 选项，则可以重复使用其他用户的标识号。 |

**案例实操**

- 删除用户但保存用户主目录

```crystal
[root@hadoop101 ~]#userdel tangseng
[root@hadoop101 ~]#ll /home/
```

- 删除用户和用户主目录，都删除

```crystal
[root@hadoop101 ~]#useradd zhubajie
[root@hadoop101 ~]#ll /home/
[root@hadoop101 ~]#userdel -r zhubajie
[root@hadoop101 ~]#ll /home/
```

## **who** 查看登录用户信息

**基本语法**

- `whoami` (功能描述:显示自身用户名称)
- `who am i` (功能描述:显示登录用户的用户名以及登陆时间)

**案例实操**

- 显示自身用户名称

```crystal
[root@hadoop101 opt]# whoami
```

- 显示登录用户的用户名

```crystal
[root@hadoop101 opt]# who am i
```

## **sudo** 设置普通用户具有 **root** 权限

- 添加 **`atguigu`** 用户，并对其设置密码。

```crystal
[root@hadoop101 ~]#useradd atguigu
[root@hadoop101 ~]#passwd atguigu
```

- 修改配置文件

```crystal
[root@hadoop101 ~]#vi /etc/sudoers
```

修改 `/etc/sudoers` 文件，找到下面一行(91 行)，在 `root` 下面添加一行，如下所示:

```visual
## Allow root to run any commands anywhere
root       ALL=(ALL)     ALL
atguigu   ALL=(ALL)     ALL
```

或者配置成采用 `sudo` 命令时，不需要输入密码

```visual
## Allow root to run any commands anywhere
root       ALL=(ALL)     ALL
atguigu   ALL=(ALL)     NOPASSWD:ALL
```

修改完毕，现在可以用 `atguigu` 帐号登录，然后用命令 `sudo` ，即可获得 `root` 权限进行 操作。

**案例实操**

- 用普通用户在`/opt` 目录下创建一个文件夹

```crystal
[atguigu@hadoop101 opt]$ sudo mkdir module
[root@hadoop101 opt]# chown atguigu:atguigu module/
```

## **usermod** 修改用户

**基本语法**

- `usermod -g` 用户组 用户名

**选项说明**

| 选项 | 功能                                                     |
| ---- | -------------------------------------------------------- |
| `-g` | 修改用户的初始登录组，给定的组必须存在。默认组 id 是 1。 |

**案例实操**

- 将用户加入到用户组

```crystal
[root@hadoop101 opt]# usermod -g root zhubajie
```

## 锁定账号

**`root` 冻结这个账号，一旦冻结，这个人就登录不上系统了**

可使用的选项：

- **`-l` 锁定口令，即禁用账号。**
- `-u` 口令解锁。
- `-d` 使账号无口令。
- `-f` 强迫用户下次登录时修改口令。

```bash
# passwd -l gh # 锁定之后这个用户就不可以登录了
# passwd -d gh # 没有密码也不能登录
```

此命令将用户 `kuangshen`的口令删除，这样用户 `kuangshen`下一次登录时，系统就不再允许该用户登录了。

`passwd` 命令还可以用 -l(lock) 选项锁定某一用户，使其不能登录

## 用户组管理

每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同 `Linux` 系统对用户组的规定有所不同，

如`Linux`下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。

用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对 `/etc/group`文件的更新。

## **groupadd** 新增组

**基本语法**

- `groupadd` 组名

**选项说明**

| 选项 | 功能                                  |
| ---- | ------------------------------------- |
| `-m` | 自动创建者用户的主目录 `/home/xiaohe` |
| `-g` | 给用户分配组！                        |

**案例实操**

- 添加一个`xitianqujing`组

```crystal
[root@hadoop101 opt]#groupadd xitianqujing
```

## groupdel 删除组

**基本语法**

- `groupdel` 组名

**案例实操**

- 删除`xitianqujing`组

```crystal
[root@hadoop101 opt]# groupdel xitianqujing
```

## groupmod 修改组

**基本语法**

- `groupmod -n` 新组名 老组名

**选项说明**

| 选项         | 功能                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `-n<新组名>` | 指定工作组的新组名                                                   |
| `-g`         | GID 为用户组指定新的组标识号                                         |
| `-o`         | 与`-g`选项同时使用，用户组的新 GID 可以与系统已有用户组的 GID 相同。 |

**案例实操**

- 修改`atguigu`组名称为`atguigu1`

```crystal
[root@hadoop101 ~]#groupadd xitianqujing
[root@hadoop101 ~]# groupmod -n xitian xitianqujing
```

## 查看创建了哪些组

**cat /etc/group**

**基本操作**

```crystal
[root@hadoop101 atguigu]# cat  /etc/group
```

## 文件权限

## 文件属性

`Linux`系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限。 为了保护系统的安全性，`Linux`系统对不同的用户访问同一文件(包括目录文件)的权限做 了不同的规定。在`Linux`中我们可以使用`ll`或者 l`s -l`命令来显示一个文件的属性以及文件所属 的用户和组。

**从左到右的 10 个字符表示**

![查看源图像](http://static.5ibug.net/vitepress/assets/images/linux/202209041105760.png)

如果没有权限，就会出现减号`[ - ]`而已。从左至右用 0-9 这些数字来表示:

- 0 首位表示类型
  - 在`Linux`中第一个字符代表这个文件是目录、文件或链接文件等等
  - `-` 代表文件
  - `d` 代表目录
  - `l` 链接文档(`link file`)
- 第 1-3 位确定属主(该文件的所有者)拥有该文件的权限。---`User`
- 第 4-6 位确定属组(所有者的同组用户)拥有该文件的权限，---`Group`
- 第 7-9 位确定其他用户拥有该文件的权限 ---`Other`

**rwx 作用文件和目录的不同解释**

- 作用到文件:

  - `[ r ]`代表可读(`read`): 可以读取，查看
  - `[ w ]`代表可写(`write`): 可以修改，但是不代表可以删除该文件，删除一个文件的**前提条件是对该文件所在的目录有写权限，才能删除该文件**
  - `[ x ]`代表可执行(`execute`):可以被系统执行

- 作用到目录:

  - `[ r ]`代表可读(`read`): 可以读取，ls 查看目录内容
  - `[ w ]`代表可写(`write`): 可以修改，目录内创建+删除+重命名目录
  - `[ x ]`代表可执行(`execute`):可以进入该目录

**案例实操**

```crystal
[root@hadoop101 ~]# ll
总用量 104
-rw-------. 1 root root 1248 1 月 8 17:36 anaconda-ks.cfg drwxr-xr-x. 2 root root 4096 1 月 12 14:02 dssz
lrwxrwxrwx. 1 root root 20 1 月 12 14:32 houzi -> xiyou/dssz/houge.tx
```

![image-20220904111228091](http://static.5ibug.net/vitepress/assets/images/linux/202209041112121.png)

- 如果查看到是文件:链接数指的是硬链接个数。
- 如果查看的是文件夹:链接数指的是子文件夹个数。

## **chmod** 改变权限

**基本语法**

![image-20220904111325854](http://static.5ibug.net/vitepress/assets/images/linux/202209041113882.png)

- 第一种方式变更权限

```crystal
chmod [{ugoa}{+-=}{rwx}]文件或目录
```

- 第二种方式变更权限

```crystal
chmod [mode=421 ] [文件或目录]
```

**经验技巧**

- u:所有者 g:所有组 o:其他人 a:所有人(u、g、o 的总和)
- r=4 w=2 x=1 rwx=4+2+1=7

这里的 421 其实就是二进制的转换，每个选项上有值则为 1，‘-’则为 0。

例如：rwx = 0111 = 7、 r-x = 0101 = 5 、r-x = 0101 = 5 ，所以得 755

![image-20220904113147886](http://static.5ibug.net/vitepress/assets/images/linux/202209041131915.png)

**案例实操**

- 修改文件使其所属主用户具有执行权限

```crystal
[root@hadoop101 ~]# cp xiyou/dssz/houge.txt ./
[root@hadoop101 ~]# chmod u+x houge.txt
```

- 修改文件使其所属组用户具有执行权限

```crystal
[root@hadoop101 ~]# chmod g+x houge.txt
```

- 修改文件所属主用户执行权限,并使其他用户具有执行权限

```crystal
[root@hadoop101 ~]# chmod u-x,o+x houge.txt
```

- 采用数字的方式，设置文件所有者、所属组、其他用户都具有可读可写可执行权限。

```crystal
[root@hadoop101 ~]# chmod 777 houge.txt
```

- 修改整个文件夹里面的所有文件的所有者、所属组、其他用户都具有可读可写可 执行权限。

```crystal
[root@hadoop101 ~]# chmod -R 777 xiyou/
```

## **chown** 改变所有者

**基本语法**

- chown \[选项\] \[最终用户\] \[文件或目录\] （功能描述:改变文件或者目录的所有者）

**选项说明**

| 选项 | 功能     |
| ---- | -------- |
| \-R  | 递归操作 |

**案例实操**

- 修改文件所有者

```crystal
[root@hadoop101 ~]# chown atguigu houge.txt
[root@hadoop101 ~]# ls -al
-rwxrwxrwx.1atguiguroot5515月 2313:02houge.txt
```

- 递归改变文件所有者和所有组

```crystal
[root@hadoop101 xiyou]# ll
drwxrwxrwx. 2 root root 4096 9 月 3 21:20 xiyou
[root@hadoop101 xiyou]# chown -R atguigu:atguigu xiyou/ [root@hadoop101 xiyou]# ll
drwxrwxrwx. 2 atguigu atguigu 4096 9 月 3 21:20 xiyou
```

## chgrp 改变所属组

**基本语法**

- chgrp \[最终用户组\] \[文件或目录\]（功能描述:改变文件或者目录的所属组）

**案例实操**

- 修改文件的所属组

```crystal
[root@hadoop101 ~]# chgrp root houge.txt
[root@hadoop101 ~]# ls -al
-rwxrwxrwx.1atguiguroot5515月 2313:02houge.txt
```

## 压缩解压缩（频繁）

## **gzip/gunzip** 压缩

**基本语法**

- `gzip` 文件 (功能描述:压缩文件，只能将文件压缩为`*.gz` 文件)
- `gunzip` 文件`.gz` (功能描述:解压缩文件命令)

**经验技巧**

- 只能压缩文件不能压缩目录
- 不保留原来的文件
- 同时多个文件会产生多个压缩包

**案例实操**

- `gzip`压缩

```crystal
[root@hadoop101 ~]# ls
test.java
[root@hadoop101 ~]# gzip houge.txt
[root@hadoop101 ~]# ls
houge.txt.gz
```

- gunzip 解压缩文件

```crystal
[root@hadoop101 ~]# gunzip houge.txt.gz
[root@hadoop101 ~]# ls
houge.txt
```

## **zip/unzip** 压缩

**基本语法**

- `zip` \[选项\] `XXX.zip` 将要压缩的内容（功能描述:压缩文件和目录的命令）
- `unzip` \[选项\] `XXX.zip` （功能描述:解压缩文件）

**选项说明**

| zip 选项 | 功能     |
| -------- | -------- |
| `-r`     | 压缩目录 |

| unzip 选项 | 功能                     |
| ---------- | ------------------------ |
| `-d`<目录> | 指定解压后文件的存放目录 |

**经验技巧**

- `zip` 压缩命令在`windows/linux`都通用，可以压缩目录且保留源文件。

**案例实操**

- 压缩 `houge.txt` 和`bailongma.txt`，压缩后的名称为`mypackage.zip`

```crystal
[root@hadoop101 opt]# touch bailongma.txt
[root@hadoop101 ~]# zip mypackage.zip houge.txt bailongma.txt
  adding: houge.txt (stored 0%)
adding: bailongma.txt (stored 0%) [root@hadoop101 opt]# ls
houge.txt bailongma.txt mypackage.zip
```

- 解压 `mypackage.zip`

```crystal
[root@hadoop101 ~]# unzip mypackage.zip
Archive:  houma.zip
 extracting: houge.txt
extracting: bailongma.txt [root@hadoop101 ~]# ls
houge.txt bailongma.txt mypackage.zip
```

- 解压`mypackage.zip`到指定目录`-d`

```crystal
[root@hadoop101 ~]# unzip mypackage.zip -d /opt
[root@hadoop101 ~]# ls /opt/
```

## **tar** 打包

**基本语法**

- tar \[选项\] XXX.tar.gz 将要打包进去的内容 （功能描述:打包目录，压缩后的文件格式.tar.gz)

**选项说明**

| 选项 | 功能                                 |
| ---- | ------------------------------------ |
| `-c` | 产生`.tar` 打包文件                  |
| `-v` | 显示详细信息                         |
| `-f` | 指定压缩后的文件名 `-z` 打包同时压缩 |
| `-x` | 解包`.tar` 文件                      |
| `-C` | 解压到指定目录                       |

**案例实操**

- 压缩多个文件

```crystal
[root@hadoop101 opt]# tar -zcvf houma.tar.gz houge.txt bailongma.txt
houge.txt
bailongma.txt
[root@hadoop101 opt]# ls
houma.tar.gz houge.txt bailongma.txt
```

- 压缩目录

```crystal
[root@hadoop101 ~]# tar -zcvf xiyou.tar.gz xiyou/
xiyou/
xiyou/mingjie/
xiyou/dssz/
xiyou/dssz/houge.txt
```

- 解压到当前目录

```crystal
[root@hadoop101 ~]# tar -zxvf houma.tar.gz
```

- 解压到指定目录

```crystal
[root@hadoop101 ~]# tar -zxvf xiyou.tar.gz -C /opt
[root@hadoop101 ~]# ll /opt/
```

## 磁盘查看与分区

## du 查看文件和目录占用的磁盘空间

`du: disk usage`磁盘占用情况

**基本语法**

- `du` 目录/文件 （功能描述：显示目录下每个子目录的磁盘使用情况）

**选项说明**

| 选项            | 功能                                                           |
| --------------- | -------------------------------------------------------------- |
| `-h`            | 以人们较易阅读的 `GBytes`, `MBytes`, `KBytes` 等格式自行显示； |
| `-a`            | 不仅查看子目录大小，还要包括文件                               |
| `-c`            | 显示所有的文件和子目录大小后，显示总和                         |
| `-s`            | 只显示总和                                                     |
| `--max-depth=n` | 指定统计子目录的深度为第 n                                     |

**案例实操**

- 查看当前用户主目录占用的磁盘空间大小

```crystal
[root@hadoop101 ~]# du -sh
166M .
```

## df 查看磁盘空间使用情况

`df: disk free` 空余磁盘

**基本语法**

`df` 选项 （功能描述：列出文件系统的整体磁盘使用量，检查文件系统的磁盘空间占 用情况)

**选项说明**

| 选项 | 功能                                                           |
| ---- | -------------------------------------------------------------- |
| `-h` | 以人们较易阅读的 `GBytes`, `MBytes`, `KBytes` 等格式自行显示； |

## lsblk 查看设备挂载情况

**基本语法**

`lsblk` （功能描述：查看设备挂载情况）

**选项说明**

| 选项 | 功能                                     |
| ---- | ---------------------------------------- |
| `-f` | 查看详细的设备挂载情况，显示文件系统信息 |

## mount/umount 挂载/卸载

对于 Linux 用户来讲，不论有几个分区，分别分给哪一个目录使用，它总归就是一个根 目录、一个独立且唯一的文件结构。

Linux 中每个分区都是用来组成整个文件系统的一部分，它在用一种叫做“挂载”的处理 方法，它整个文件系统中包含了一整套的文件和目录，并将一个分区和一个目录联系起来， 要载入的那个分区将使它的存储空间在这个目录下获得。

**挂载前准备（必须要有光盘或者已经连接镜像文件）**

![image-20220905141419004](http://static.5ibug.net/vitepress/assets/images/linux/image-20220905141419004.png)

![image-20220905141435031](http://static.5ibug.net/vitepress/assets/images/linux/image-20220905141435031.png)

**基本语法**

- `mount [-t vfstype] [-o options] device dir` （功能描述：挂载设备）
- `umount` 设备文件名或挂载点 （功能描述：卸载设备）

**参数说明**

| 参数        | 功能                                                            |
| ----------- | --------------------------------------------------------------- |
| `-t vfstyp` | 指定文件系统的类型，通常不必指定。mount 会自动选择正确的类 型。 |

常用类型有：
光盘或光盘镜像：iso9660
DOS fat16 文件系统：msdos
Windows 9x fat32 文件系统：vfat
Windows NT ntfs 文件系统：ntfs
Mount Windows 文件网络共享：smbfs
UNIX(LINUX) 文件网络共享：nfs | | `-o options` | 主要用来描述设备或档案的挂接方式。
常用的参数有：
`loop`：用来把一个文件当成硬盘分区挂接上系统
`ro`：采用只读方式挂接设备
`rw`：采用读写方式挂接设备
`iocharset`：指定访问文件系统所用字符集 | | `device` | 要挂接`(mount)`的设备 | | `dir` | 设备在系统上的挂接点`(mount point)` |

**案例实操**

- 挂载光盘镜像文件

```crystal
[root@hadoop101 ~]# mkdir /mnt/cdrom/ 建立挂载点
[root@hadoop101 ~]# mount -t iso9660 /dev/cdrom /mnt/cdrom/ 设备/dev/cdrom 挂载到 挂载点 ： /mnt/cdrom 中
[root@hadoop101 ~]# ll /mnt/cdro
```

- 卸载光盘镜像文件

```crystal
[root@hadoop101 ~]# umount /mnt/cdrom
```

**设置开机自动挂载**

```crystal
[root@hadoop101 ~]# vi /etc/fstab
```

添加红框中的内容，保存退出

![image-20220905142329559](http://static.5ibug.net/vitepress/assets/images/linux/image-20220905142329559.png)

## fdisk 分区

**基本语法**

- `fdisk -l` （功能描述：查看磁盘分区详情）
- `fdisk` 硬盘设备名 （功能描述：对新增硬盘进行分区操作）

**选项说明**

| 选项    | 功能                   |
| ------- | ---------------------- |
| **\-l** | 显示所有硬盘的分区列表 |

**经验技巧**

- 该命令必须在 root 用户下才能使用

**功能说明**

- Linux 分区

  - `Device`：分区序列
  - `Boot`：引导
  - `Start`：从 X 磁柱开始
  - `End`：到 Y 磁柱结束
  - `Blocks`：容量
  - `Id`：分区类型 ID
  - `System`：分区类型

- 分区操作按键说明

  - `m`：显示命令列表
  - `p`：显示当前磁盘分区
  - `n`：新增分区
  - `w`：写入分区信息并退出
  - `q`：不保存分区信息直接退出

**案例实操**

- 查看系统分区情况

```crystal
[root@hadoop101 /]# fdisk -l
磁盘 /dev/sda：21.5 GB, 21474836480 字节，41943040 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0x000a9795

   设备 Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048      616447      307200   83  Linux
/dev/sda2          616448     4810751     2097152   82  Linux swap / Solaris
/dev/sda3         4810752    41943039    18566144   83  Linux
```

## 进程管理（频繁）

进程是正在执行的一个程序或命令，每一个进程都是一个运行的实体，都有自己的地 址空间，并占用一定的系统资源。

## ps 查看当前系统进程状态

`ps:process status` 进程

**基本语法**

- `ps aux | grep xxx` （功能描述：查看系统中所有进程）
- `ps -ef | grep xxx` （功能描述：可以查看子父进程之间的关系）

**选项说明**

| 选项 | 功能                         |
| ---- | ---------------------------- |
| `a`  | 列出带有终端的所有用户的进程 |
| `x`  | 列出当前用户的所有进程       |
| `u`  | 面向用户友好的显示风格       |
| `-e` | 列出所有进程                 |
| `-u` | 列出某个用户关联的所有进程   |
| `-f` | 显示完整格式的进程列表       |

**功能说明**

- `ps aux` 显示信息说明
  - `USER`：该进程是由哪个用户产生的
  - `PID`：进程的 ID 号
  - `%CPU`：该进程占用 CPU 资源的百分比，占用越高，进程越耗费资源；
  - `%MEM`：该进程占用物理内存的百分比，占用越高，进程越耗费资源；
  - `VSZ`：该进程占用虚拟内存的大小，单位 KB；
  - `RSS`：该进程占用实际物理内存的大小，单位 KB；
  - `TTY`：该进程是在哪个终端中运行的。对于 `CentOS` 来说，`tty1` 是图形化终端，
  - `tty2-tty6` 是本地的字符界面终端。`pts/0-255` 代表虚拟终端。
  - `STAT`：进程状态。常见的状态有：R：运行状态、S：睡眠状态、T：暂停状态、Z：僵尸状态、s：包含子进程、l：多线程、+：前台显示
  - `START`：该进程的启动时间
  - `TIME`：该进程占用 CPU 的运算时间，注意不是系统时间
  - `COMMAND`：产生此进程的命令名
- `ps -ef` 显示信息说明
  - `UID`：用户 ID
  - `PID`：进程 ID
  - `PPID`：父进程 ID
  - `C`：CPU 用于计算执行优先级的因子。数值越大，表明进程是 CPU 密集型运算，执行优先级会降低；数值越小，表明进程是 I/O 密集型运算，执行优先级会提高
  - `STIME`：进程启动的时间
  - `TTY`：完整的终端名称
  - `TIME`：CPU 时间
  - `CMD`：启动进程所用的命令和参数

**经验技巧**

- 如果想查看进程的 CPU 占用率和内存占用率，可以使用 aux
- 如果想查看进程的父进程 ID 可以使用 e

**案例实操**

```crystal
[root@hadoop101 datas]# ps aux
```

![image-20220905164243982](http://static.5ibug.net/vitepress/assets/images/linux/image-20220905164243982.png)

```crystal
[root@hadoop101 datas]# ps -ef
```

![image-20220905164305340](http://static.5ibug.net/vitepress/assets/images/linux/image-20220905164305340.png)

## kill 终止进程

**基本语法**

- `kill` \[选项\] 进程号 （功能描述：通过进程号杀死进程）
- `killall` 进程名称 （功能描述：通过进程名称杀死进程，也支持通配符，这 在系统因负载过大而变得很慢时很有用)

**选项说明**

| 选项 | 功能                 |
| ---- | -------------------- |
| `-9` | 表示强迫进程立即停止 |

**案例实操**

- 杀死浏览器进程

```crystal
[root@hadoop101 桌面]# kill -9 5102
```

- 通过进程名称杀死进程

```crystal
[root@hadoop101 桌面]# killall firefox
```

## pstree 查看进程树

**基本语法**

- `pstree` \[选项\]

**选项说明**

| 选项 | 功能               |
| ---- | ------------------ |
| `-p` | 显示进程的 `PID`   |
| `-u` | 显示进程的所属用户 |

**案例实操**

- 显示进程 `pid`

```crystal
[root@hadoop101 datas]# pstree -p
```

- 显示进程所属用户

```crystal
[root@hadoop101 datas]# pstree -u
```

## top 实时监控系统进程状态

**基本命令**

- `top` \[选项\]

**选项说明**

| 选项 | 功能                                                                                 |
| ---- | ------------------------------------------------------------------------------------ |
| `-d` | 秒数 指定 top 命令每隔几秒更新。默认是 3 秒在 top 命令的交互模式当中可以执行的命令： |
| `i`  | 使 top 不显示任何闲置或者僵死进程。                                                  |
| `-p` | 通过指定监控进程 ID 来仅仅监控某个进程的状态。                                       |

**操作说明**

| 操作 | 功能                              |
| ---- | --------------------------------- |
| `P`  | 以 `CPU` 使用率排序，默认就是此项 |
| `M`  | 以内存的使用率排序                |
| `N`  | 以 `PID` 排序                     |
| `q`  | 退出 `top`                        |

**查询结果字段解释**

- 第一行信息为任务队列信息

| 内容                             | 说明                                                                                                      |
| -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `12:26:46`                       | 系统当前时间                                                                                              |
| `up 1 day, 13:32`                | 系统的运行时间，本机已经运行 1 天 13 小时 32 分钟                                                         |
| `2 users`                        | 当前登录了两个用户                                                                                        |
| `load average: 0.00, 0.00, 0.00` | 系统在之前 1 分钟，5 分钟，15 分钟的平均负载。一般认为小于 1 时，负载较小。如果大于 1，系统已经超出负荷。 |

- 第二行为进程信息

| 内容              | 说明                                     |
| ----------------- | ---------------------------------------- |
| `Tasks: 95 total` | 系统中的进程总数                         |
| `1 running`       | 正在运行的进程数                         |
| `94 sleeping`     | 睡眠的进程                               |
| `0 stopped`       | 正在停止的进程                           |
| `0 zombie`        | 僵尸进程。如果不是 0，需要手工检查僵尸进 |

- 第三行为 CPU 信息

| 内容                      | 说明                                                               |
| ------------------------- | ------------------------------------------------------------------ |
| `Cpu(s): 0.1%us`          | 用户模式占用的 CPU 百分比                                          |
| `0.1%sy`                  | 系统模式占用的 CPU 百分比                                          |
| `0.0%ni`                  | 改变过优先级的用户进程占用的 CPU 百分比                            |
| `99.7%id`                 | 空闲 CPU 的 CPU 百分比                                             |
| `0.1%wa`                  | 等待输入/输出的进程的占用 CPU 百分比                               |
| `0.0%hi`                  | 硬中断请求服务占用的 CPU 百分比                                    |
| `0.1%si`                  | 软中断请求服务占用的 CPU 百分                                      |
| `0.0%st st（Steal time）` | 虚拟时间百分比。就是当有虚拟机时，虚拟 CPU 等待实际 CPU 的时间百分 |

- 第四行为物理内存信息

| 内容                 | 说明                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------- |
| `Mem: 625344k total` | 物理内存的总量，单位 KB                                                                     |
| `571504k used`       | 已经使用的物理内存数量                                                                      |
| `53840k free`        | 空闲的物理内存数量，我们使用的是虚拟机，总共只分配了 628MB 内存，所以只有 53MB 的空闲内存了 |
| `65800k buffers`     | 作为缓冲的内存数量                                                                          |

- 第五行为交换分区（swap）信息

| 内容                  | 说明                         |
| --------------------- | ---------------------------- |
| `Swap: 524280k total` | 交换分区（虚拟内存）的总大小 |
| `0k used`             | 已经使用的交互分区的大小     |
| `524280k free`        | 空闲交换分区的大小           |
| `409280k cached`      | 作为缓存的交互分区的大小     |

**案例实操**

```crystal
[root@hadoop101 atguigu]# top -d 1
[root@hadoop101 atguigu]# top -i
[root@hadoop101 atguigu]# top -p 25
```

执行上述命令后，可以按 P、M、N 对查询出的进程结果进行排

## netstat 显示网络状态和端口占用信息

**基本语法**

- `netstat -anp | grep` 进程号 （功能描述：查看该进程网络)
- `netstat –nlp | grep` 端口号 （功能描述：查看网络端口号占用情况)

**选项说明**

| 选项 | 功能                                                 |
| ---- | ---------------------------------------------------- |
| `-a` | 显示所有正在监听（listen）和未监听的套接字（socket） |
| `-n` | 拒绝显示别名，能显示数字的全部转化成数字             |
| `-l` | 仅列出在监听的服务状态                               |
| `-p` | 表示显示哪个进程在调用                               |

**案例实操**

- 通过进程号查看 sshd 进程的网络信息

```crystal
[root@hadoop101 hadoop-2.7.2]# netstat -anp | grep sshd
tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN
951/sshd
tcp 0 0 192.168.202.100:22 192.168.202.1:57741
ESTABLISHED 3380/sshd: root@pts
tcp 0 52 192.168.202.100:22 192.168.202.1:57783
ESTABLISHED 3568/sshd: root@pts
tcp 0 0 192.168.202.100:22 192.168.202.1:57679
ESTABLISHED 3142/sshd: root@pts
tcp6 0 0 :::22 :::* LISTEN
951/sshd
unix 2 [ ] DGRAM 39574 3568/sshd:
root@pts
unix 2 [ ] DGRAM 37452 3142/sshd:
root@pts
unix 2 [ ] DGRAM 48651 3380/sshd:
root@pts
unix 3 [ ] STREAM CONNECTED 21224 951/ssh
```

- 查看某端口号是否被占用

```crystal
[root@hadoop101 桌面]# netstat -nltp | grep 22
tcp 0 0 192.168.122.1:53 0.0.0.0:* LISTEN
1324/dnsmasq
tcp 0 0 0.0.0.0:22 0.0.0.0:* LISTEN
951/sshd
tcp6 0 0 :::22 :::* LISTEN
951/ssh
```

## crontab 系统定时任务

## crontab 服务管理

- crontab 服务管理

```crystal
[root@hadoop101 ~]# systemctl restart crond
```

## crontab 定时任务设置

**基本语法**

- `crontab` \[选项

**选项说明**

| 选项 | 功能                              |
| ---- | --------------------------------- |
| `-e` | 编辑 `crontab` 定时任务           |
| `-l` | 查询 `crontab` 任务               |
| `-r` | 删除当前用户所有的 `crontab` 任务 |

**参数说明**

```crystal
[root@hadoop101 ~]# crontab -e
```

- 进入 crontab 编辑界面。会打开 vim 编辑你的工作。例如：`*****`执行的任务

| 项目       | 含义                 | 范围                            |
| ---------- | -------------------- | ------------------------------- |
| 第一个“\*” | 一小时当中的第几分钟 | 0-59                            |
| 第二个“\*” | 一天当中的第几小时   | 0-23                            |
| 第三个“\*” | 一个月当中的第几天   | 1-31                            |
| 第四个“\*” | 一年当中的第几月     | 1-12                            |
| 第五个“\*” | 一周当中的星期几     | 0-7（ 0 和 7 都 代 表 星 期日） |

- 特殊符号

| 特殊符                                                         | 号 含义                                                                                |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `*`                                                            | 代表任何时间。比如第一个“\*”就代表一小时中每分钟都执行一次的意思。                     |
| `，`                                                           | 代表不连续的时间。比如“`0 8,12,16 * * * 命令`”，                                       |
| 就代表在每天的 8 点 0 分，12 点 0 分，16 点 0 分都执行一次命令 |
| `-`                                                            | 代表连续的时间范围。比如“`0 5 * * 1-6 命令`”，代表在周一到周六的凌晨 5 点 0 分执行命令 |
| `*/n`                                                          | 代表每隔多久执行一次。比如“`_/10 _ * * * 命令`”，代表每隔 10 分钟就执行一遍命令        |

- 特定时间执行命令

| 时间                | 含义                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `45 22 * * * 命令`  | 每天 22 点 45 分执行命令                                                                                                             |
| `0 17 * * 1 命令`   | 每周 1 的 17 点 0 分执行命令                                                                                                         |
| `0 5 1,15 * * 命令` | 每月 1 号和 15 号的凌晨 5 点 0 分执行命令                                                                                            |
| `40 4 * * 1-5 命令` | 每周一到周五的凌晨 4 点 40 分执行命令                                                                                                |
| `*/10 4 * * * 命令` | 每天的凌晨 4 点，每隔 10 分钟执行一次命令                                                                                            |
| `0 0 1,15 * 1 命令` | 每月 1 号和 15 号，每周 1 的 0 点 0 分都会执行命令。注意：星期几和几号最好不要同时出现，因为他们定义的都是天。非常容易让管理员混乱。 |

**案例实操**

- 每隔 1 分钟，向`/root/bailongma.txt` 文件中添加一个 11 的数字

```crystal
[root@hadoop101 ~]# */1 * * * * /bin/echo ”11” >>> /root/bailongma.tx
```

## 软件包管理（频繁）

## RPM 包管理

`RPM（RedHat Package Manager）`，`RedHat`软件包管理工具，类似`windows`里面的`setup.exe` 是`Linux`这系列操作系统里面的打包安装工具，它虽然是`RedHat`的标志，但理念是通用的。 `RPM`包的名称格式 `Apache-1.3.23-11.i386.rpm`

- `“apache”` 软件名称
- `“1.3.23-11”`软件的版本号，主版本和此版本
- `“i386”`是软件所运行的硬件平台，`Intel` 32 位处理器的统称
- `“rpm”`文件扩展名，代表 RPM 包

### 查询命令（rpm -qa）

**基本语法**

- `rpm -qa` （功能描述：查询所安装的所有 rpm 软件包）

**经验技巧**

- 由于软件包比较多，一般都会采取过滤。`rpm -qa | grep rpm`软件包

**案例实操**

- 查询`firefox`软件安装情况

```crystal
[root@hadoop101 Packages]# rpm -qa |grep firefox
firefox-45.0.1-1.el6.centos.x86_64
```

### 卸载命令（rpm -e）

**基本语法**

- `rpm -e` RPM 软件
- `rpm -e --nodeps` 软件

**选项说明**

| 选项       | 功能                                                                                   |
| ---------- | -------------------------------------------------------------------------------------- |
| `-e`       | 卸载软件包                                                                             |
| `--nodeps` | 卸载软件时，不检查依赖。这样的话，那些使用该软件包的软件在此之后可能就不能正常工作了。 |

**案例实操**

- 卸载`firefox`软件

```crystal
[root@hadoop101 Packages]# rpm -e firefox
```

### 安装命令（rpm -ivh）

**基本语法**

`rpm -ivh` RPM 包全名

**选项说明**

| 选项       | 功能                      |
| ---------- | ------------------------- |
| `-i`       | `install`，安装           |
| `-v`       | `--verbose`，显示详细信息 |
| `-h`       | `--hash`，进度条          |
| `--nodeps` | 安装前不检查依赖          |

**案例实操**

- 安装`firefox`软件

```crystal
[root@hadoop101 Packages]# pwd
/run/media/root/CentOS 7 x86_64/Packages
[root@hadoop101 Packages]# rpm -ivh firefox-45.0.1-1.el6.centos.x86_64.rpm
warning: firefox-45.0.1-1.el6.centos.x86_64.rpm: Header V3 RSA/SHA1
Signature, key ID c105b9de: NOKEY
Preparing... ###########################################
[100%]
1:firefox ###########################################
[100%]
```

## YUM 仓库配置

YUM（全称为 `Yellow dog Updater, Modified）`是一个在 `Fedora` 和 `RedHat` 以及 `CentOS` 中的 `Shell` 前端软件包管理器。基于 `RPM` 包管理，能够从指定的服务器自动下载 RPM 包 并且安装，**可以自动处理依赖性关系**，并且一次安装所有依赖的软件包，无须繁琐地一次 次下载、安装。

![image-20220905173104955](http://static.5ibug.net/vitepress/assets/images/linux/image-20220905173104955.png)

### 常用命令

**基本语法**

- yum \[选项\] \[参数\]

**选项说明**

| 选项 | 功能                  |
| ---- | --------------------- |
| `-y` | 对所有提问都回答“yes" |

**参数说明**

| 参数           | 功能                              |
| -------------- | --------------------------------- |
| `install`      | 安装 `rpm` 软件包                 |
| `update`       | 更新 `rpm` 软件包                 |
| `check-update` | 检查是否有可用的更新 `rpm` 软件包 |
| `remove`       | 删除指定的 `rpm` 软件包           |
| `list`         | 显示软件包信息                    |
| `clean`        | 清理 `yum` 过期的缓存             |
| `deplist`      | 显示 `yum` 软件包的所有依赖关系   |

**案例实操**

- 采用 `yum` 方式安装 `firefox`

```crystal
[root@hadoop101 ~]#yum -y install firefox
```

### 修改网络 YUM 源

默认的系统 YUM 源，需要连接国外 `apache` 网站，网速比较慢，可以修改关联的网络 YUM 源为国内镜像的网站，比如网易 `163`,`aliyun` 等

- 安装 `wget`, `wget` 用来从指定的 `URL` 下载文件

```crystal
[root@hadoop101 ~] yum install wget
```

- 在`/etc/yum.repos.d/`目录下，备份默认的 `repos` 文件

```crystal
[root@hadoop101 yum.repos.d] pwd
/etc/yum.repos.d
[root@hadoop101 yum.repos.d] cp CentOS-Base.repo CentOS-Base
.repo.backup
```

- 下载网易 163 或者是 `aliyun` 的 `repos` 文件,任选其一

```crystal
[root@hadoop101 yum.repos.d] wget
http://mirrors.aliyun.com/repo/Centos-7.repo //阿里云
[root@hadoop101 yum.repos.d] wget
http://mirrors.163.com/.help/CentOS7-Base-163.repo //网易 163
```

![image-20220905173807424](http://static.5ibug.net/vitepress/assets/images/linux/image-20220905173807424.png)

- 使用下载好的 `repos` 文件替换默认的 `repos` 文件。例如:用 `CentOS7-Base-163.repo` 替换 `CentOS-Base.rep`

```crystal
[root@hadoop101 yum.repos.d]# mv CentOS7-Base-163.repo CentOS-Base.repo
```

- 清理旧缓存数据，缓存新数据

```crystal
[root@hadoop101 yum.repos.d]#yum clean all
[root@hadoop101 yum.repos.d]#yum makecach
# yum makecache 就是把服务器的包信息下载到本地电脑缓存起来
```

- 测试

```crystal
[root@hadoop101 yum.repos.d]# yum list | grep firefox
[root@hadoop101 ~]#yum -y install firefox
```
