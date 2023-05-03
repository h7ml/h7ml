---
icon: git
order: 1
date: 2022-03-20
author: h7ml
category: git
tag: git
title: Git
star: true
---

## Git 常用命令

### 初始化

```shell
git init
```

## 克隆项目

```
git clone
```

## 长期保存密码

```shell
git config --global credential.helperstore
```

## 获取分支

```shell
git fetch origin
```

## 合并分支

```shell
git merge
```

## 获取并且合并分支

```shell
git pull origin
```

## 切换分支

```shell
git checkout
```

## 新建并切换到分支

```shell
git checkout -b
```

## 删除分支

```shell
git branch -d
```

## 查看修改状态

```shell
git status
```

## 查看所有的修改内容

```shell
git diff
```

## 查看指定文件修改内容

```shell
git diff <file
```

## 添加指定文件到暂存区

```shell
git add
```

## 添加所有文件到暂存区

```shell
git add all
```

## 查看已经在提交区（即已经 add 了的）所有修改内容

```shell
git diff --cached
```

## 提交暂存区修改到本地

```shell
git commit -m ""
```

## 修改刚才提交的描述

```shell
git commit --amend -m ""
```

## 提交本地版本到远端

```shell
git push origin
```

## 其他分支有紧急问题，需要马上切过去处理，但当前分支又只改了一半，又不想 commit

```shell
git stash
```

## 处理完其他分支的紧急问题以后，回到原先分支继续修改

```shell
git stash pop
```

## 清除所有没有 add 了的修改

```shell
git checkout .
```

## 清除指定没有 add 了的文件的修改

```shell
git checkout
```

## 清除 untracked 的文件

```shell
git clean -fd
```

## 清除 - `git ignore了的文件`

```shell
git clean -x
```

## commit 了修改到本地，想放弃这个 commit

```shell
git reset HEAD~
```

## commit 了修改到本地，想放弃这个 commit，并清空修改

```shell
git reset --hard HEAD~
```

## commit 了修改到本地，想恢复特定文件成指定的历史版本

```shell
git checkout --
```

## 打标签

```shell
git tag -a v1.0 -m "somthing message"
```

## 删除标签

```shell
git tag -d v1.0
```

## 列出所有标签

```shell
git tag
```

## 推送特定标签到远端

```shell
git push origin v1.0
```

## 推送所有标签到远端

```shell
git push origin --tags
```

## 删除远端 tag

```shell
git push origin -d tag v1.0
```

## 查看当前的 Git 配置

```shell
git config --list
```

## 设置使用 Git 时的用户名称

```shell
git config [--global] user.name "h7ml"
```

## 设置使用 Git 时的邮箱地址

```shell
git config [--global] user.email "h7ml@qq.com"
```

## 新建一个空白分支

```shell
`git checkout --orphan 分支名
```

## 显示所有远程仓库

```shell
git remote -v
```

## 取回远程仓库的变化，并与本地分支合并

```shell
git pull [remote][branch]
```

## 强行推送当前分支到远程仓库，忽略冲突

```shell
git push [remote] --force
```

## 只暂存被追踪的文件

```shell
git stash
```

```shell
git stash save '说明信息' # 添加说明信息`
```

```shell
git stash -u # 暂存所有文件
```

## 查看 stash 列表

```shell
git stash list
```

## 取出最近一次的 stash

```shell
git stash apply
```

## 取出并删除最近一次的 stash

```shell
git stash pop
```

## 清空所有 stash

```shell
git stash clear
```

## 查看提交过的完整日志

```shell
git log
```

```shell
git log --oneline # 查看精简日志（精简版本号和提交信息）
```

```shell
git log --pretty=oneline # 查看精简日志（完整版本号和提交信息）
```

## 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）

```shell
git reflog
```

## 撤销 commit 操作

```shell
git reset --soft HEAD~1 # git reset --soft commit_id
```

## 撤销 commit 和 add 操作

```shell
git reset --mixed HEAD~1 # git reset --mixed commit_id
```

## 撤销 commit 和 add 操作同时撤销本地已追踪内容的修改

```shell
git reset --hard HEAD~1 # git reset --hard commit_id`
```

## 删除 Git 中的所有提交历史记录

### 1. 创建 orphan 分支

```shell
git checkout --orphan [分支名]
```

### 2. 添加需要上传文件

```shell
git add .
```

### 3. 提交更改

```shell
git commit -m "Initial"
```

### 4. 删除需要清空提交记录的分支

```shell
git branch -D master
```

### 5. 将当前分支重命名为需要清空提交记录的分支名

```shell
git branch -m master
```

### 6. 强制更新存储库

```shell
git push -f origin master
```

## 同步 github fork 项目上游更新

### 1. 添加上游仓库

```shell
git remote add upstream https://github.com/baidu/amis
```

### 2. 拉取上游变动

```shell
git fetch upstream
```

### 3. 合并(以 master 位置为例)

```shell
git rebase upstream/master
```

### 4. 更新远程 fork 仓库分支(以 master 位置为例)

```shell
git push origin master
```

## 将代码提交到 github 的 gh-pages 分支

### 1. 安装 gh-pages

```shell
yarn add -D gh-pages
```

## 2. 在 package.json 中添加如下脚本

```json
"deploy": "gh-pages -d dist -m deploy",
"deploy:build": "npm run build && npm run deploy"
```

## 3. 运行 deploy 脚本

```shell
yarn deploy
```

## git log 格式化

```shell
git config --global log.date iso8601
```

- relative: 相对时间格式
- local: 本地格式
- iso OR iso8601: ISO8601 格式
- rfc: RFC2822 格式
- short: YYYY-MM-DD 格式
- raw: 时间戳格式
- default: 默认格式

## 自定义输出格式

```shell
# 格式为: [commit hash] [提交时间] [提交信息] [branch tag 信息] [作者名称]
git log --pretty='%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)'

# 配置别名
alias glogp="git log --pretty='%C(yellow)%h%C(reset) %ad %C(green)%s%C(reset) %C(red)%d%C(reset) %C(bold blue)[%an]%C(reset)'"
```

- %C(颜色值): 修改输出颜色
- %H: 完整的 commit hash
- %h: 缩写的 commit hash
- %ad: 提交时间(绝对时间 可以使用 -date= 定制格式)
- %ar: 提交时间(相对时间 按多久之前显示)
- %s: commit message
- %d: branch tag 信息
- %an: 作者名称
- %ae: 作者的邮箱地址

## git 撤销

### 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变

```shell
git reset [文件路径]
```

### 重置暂存区与工作区，与上一次 commit 保持一致

```shell
git reset --hard
```

### 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变

```shell
git reset [commit id]
```

### 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致

```shell
git reset --hard [commit id]
```

### 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变

```shell
git reset --keep [commit id]
```

### 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支

```shell
git revert [commit id]
```

## 暂存操作

### 只暂存被追踪的文件

```shell
git stash
```

### 暂存所有文件并添加说明

```shell
git stash [save '说明信息'] [-u]
```

### 查看 stash 列表

```shell
git stash list
```

### 取出最近一次的 stash

```shell
git stash apply
```

### 取出 stash 列表里对应数字的暂存

```shell
git stash apply 数字
```

### 取出并删除最近一次的 stash

```shell
git stash pop
```

### 清空所有 stash

```shell
git stash clear
```
