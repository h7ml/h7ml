---
icon: git
order: 4
date: 2021-05-27
author: h7ml
title: gitignore
category: engineering
tag: git
star: true
---

配置此文件可以让 git 对某些特定文件不追踪变化

## gitignore 语法规则

- 空行不匹配任何文件，可以作为分隔符来提高可读性
- `#` 为开头的行作为注释，若真的需要 `#`，则需要使用 `\#`
- `/` 作为目录分割
- `!` 用于排除已忽略目录中的某个子文件/目录（即再次追踪）
- 如果在某个模式的开头或者中间（或者两者都有）存在 `/`，那么就是 `gitignore` 文件所在的根目录
- 如果末尾存在 `/`，那么只匹配目录，不再匹配文件
- `*` 匹配除了 `/` 之外的任何，`?` 匹配除 `/` 之外的**一个字符**，范围符号例如 [a-zA-Z] 匹配范围中的一个字符
- `**` 的意义就比较多了
  - 例如 `**/foo` 匹配所有地方的 `foo` 文件或文件夹，与 `foo` 的模式相同
  - `**/foo/bar` 匹配任何地方的 `foo` 目录下的 `bar` 文件或文件夹
  - 后面的 `/**` 则匹配所有的子目录或者子文件，例如 `a/**` 匹配 a 下的所有目录和文件
  - 中间的 `**` 则表示无限深度的子目录，例如 `a/**/b` 匹配 a 下的所有子目录下的 b 文件或文件夹

## 例子

```
.cache
.DS_Store
.idea
*.log
*.tgz
coverage
dist
lib-cov
logs
node_modules
temp
```
