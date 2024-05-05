---
icon: linux
order: 1
date: 2021-06-27
author: h7ml
title: Linux 基础操作
category: linux
tag: linux
---

### 无界面安装

WARNING

这里不展示虚拟机安装镜像的过程

[B 站视频 open in new window](https://www.bilibili.com/video/BV1pT4y1U77E?spm_id_from=333.337.search-card.all.click&vd_source=335bcf5c499188a85a8e39829a56fcae)

### `installation`界面

镜像安装完成后会出现这个界面

![image-20220902224634255](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209022246046.png)

按 r 刷新之后会有三个感叹号

![image-20220902224805585](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209022248613.png)

分别是：5 磁盘设置、8 密码设置、9 创建用户

### 按 5 进行磁盘设置

之后依次按 c、c、c，之后的界面是这样

![image-20220902225026986](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209022250019.png)

### 按 8 进行秘密设置

![image-20220902225233917](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209022252951.png)

这里会进行两次密码输入，

1. 第一次设置
2. 第二次确认输入
3. 最后输入 yes
4. 回到`installation`界面按 b 保存

### 安装完成

![image-20220902225745585](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209022257616.png)

在此界面按回车键（Enter）完成安装

### 登录

![image-20220902225857209](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209022258237.png)

输入用户名：root

输入密码：xxxxx

## 目录结构

### /bin

是`Binary`的缩写，这个目录存放着最经常常用的命令

### /sbin

s 就是`Super User`的意思，这里存放的是系统管理员使用的系统管理程序

### /home

存放普通用户的主目录，在`Linux`中每个用户都有一个自己的目录，一般该目录是以用户买的账号命名的

### /root

该目录系统管理员，也城作为超级权限者的用户主目录

### /lib

系统开机所需要最基本的动态连接共享库，其作用类似于`Windows`里的 DLL 文件。几乎所有的应用程序都需要用这些共享库

### /lost+found

这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件

### /etc

所有的系统管理所需要的配置文件和子目录。

### /usr

这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于`windows`下的`program files`目录。

### /boot

这里存放的是启动`Liux`时使用的一些核心文件，包括一些连接文件以及镜像文件，自己的安装别放这里。

### /proc

这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。

### /srv

`service`缩写，该目录存放一些服务启动之后需要提取的数据。

### /sys

这是`iux2.6`内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统`sysfs`

### /tmp

这个目录是用来存放一些临时文件的

### /dev

类似于`windows`的设备管理器，把所有的硬件用文件的形式存储。

### /media(CentOS6)

`linux`系统会自动识别一些设备，例如 U 盘、光驱等等，当识别后，`linux`会把识别的设备挂载到这个目录下。

`CentOS7`迁移到`/run/media`

### /mnt

系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将外部的存储挂载在`/mnt`/上，然后进入该目录就可以查看里的内容了

### /opt

这是给主机额外安装软件所摆放的目录。比如你安装一个`ysq`数据库则就可以放到这个目录下。默认是空的。

### /var

这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

## vim 软键盘

**vim 用过一些插件可以实现和 IDE 一样的功能**

Vim 是从 vi 发展出来的一个文本编辑器。代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。

**Linux 中，必须会使用 Vim（查看内容，编辑内容，保存内容）**

简单的来说， vi 是老式的字处理器，不过功能已经很齐全了，但是还是有可以进步的地方。

vim 则可以说是程序开发者的一项很好用的工具。

可以理解 vim 是 vi 的升级版

连 vim 的官方网站 (<http://www.vim.org>) 自己也说 vim 是一个程序开发工具而不是文字处理软件

![](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/R-C.png)

## 三种使用模式

基本上 vi/vim 共分为三种模式，分别是**命令模式（Command mode），输入模式（Insert mode）和底线命令模式（Last line mode）**。这三种模式的作用分别是：

### **命令模式：**

用户刚刚启动 vi/vim，便进入了命令模式。

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/4fd4be4bb88845e0b7f41e867617d7ac.png)

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/d5a40e5a140a4cedb7295c6c9c1d711d.png)

此状态下敲击键盘动作会被 Vim 识别为命令，而非输入字符。比如我们此时按下 i，并不会输入一个字符，i 被当作了一个命令。

以下是常用的几个命令：

- `i` 切换到输入模式，以输入字符。
- `x` 删除当前光标所在处的字符。
- `:` 切换到底线命令模式，以在最底一行输入命令。如果是便捷模式，需要退出便捷模式`ESC`

**若想要编辑文本：** 启动`Vim`，进入了命令模式，按下 i，切换到输入模式。

命令模式只有一些最基本的命令，因此仍要依靠底线命令模式输入更多命令。

### 输入模式

在命令模式下按下 i 就进入了输入模式。

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/8d56ceca1d32437f993a9b034492d8d3.png)

在输入模式中，可以使用以下按键：

- 字符按键以及 Shift 组合，输入字符
- `ENTER`，回车键，换行
- `BACK SPACE`，退格键，删除光标前一个字符
- `DEL`，删除键，删除光标后一个字符
- 方向键，在文本中移动光标
- `HOME/END`，移动光标到行首/行尾
- `Page Up/Page Down`，上/下翻页
- `Insert`，切换光标为输入/替换模式，光标将变成竖线/下划线
- `ESC`，退出输入模式，切换到命令模式

### 底线命令模式

在命令模式下按下:（英文冒号）就进入了底线命令模式。

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/1eb4505e2ce94a289a15ecdd9c564491.png)

底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。

在底线命令模式中，基本的命令有（已经省略了冒号）：

**q 退出程序**

**w 保存文件**

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/c18ef81b791946f095584f4d520e0667.png)

按 ESC 键可随时退出底线命令模式。

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/25286118bf024e4ebcf26cbae5e6d5d5.png)

![img](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/a4fb10889a3b4c3abf9470addc3606aa.png)

### 完整的演示

> **说明新建或者编辑文件，按 i 进入编辑模式，编写内容，编写完成后退出编辑模式，esc，退出之后进入底线命令模式：wq 保存退出！**

## **Vim 按键说明**

### **第一部分：一般模式可用的光标移动、复制粘贴、搜索替换等**

| 移动光标的方法 |  |
| --- | --- |
| **h 或 向左箭头键(←)** | **光标向左移动一个字符** |
| **j 或 向下箭头键(↓)** | **光标向下移动一个字符** |
| **k 或 向上箭头键(↑)** | **光标向上移动一个字符** |
| **l 或 向右箭头键(→)** | **光标向右移动一个字符** |
| `[Ctrl] + [f]` | 屏幕『向下』移动一页，相当于 \[Page Down\]按键 (常用) |
| `[Ctrl] + [b]` | 屏幕『向上』移动一页，相当于 \[Page Up\] 按键 (常用) |
| `[Ctrl] + [d]` | 屏幕『向下』移动半页 |
| `[Ctrl] + [u]` | 屏幕『向上』移动半页 |
| `+` | 光标移动到非空格符的下一行 |
| `-` | 光标移动到非空格符的上一行 |
| **`n<span space>`** | \*\*那个 n 表示『数字』，例如 20 。按下数字后再按空格键， |
| 光标会向右移动这一行的 n 个字符。 数字 加 空格\*\* |
| `0` 或功能键`[Home]` | 这是数字『 0 』：移动到这一行的最前面字符处 (常用) |
| `$` 或功能键`[End]` | 移动到这一行的最后面字符处(常用) |
| `H` | 光标移动到这个屏幕的最上方那一行的第一个字符 |
| `M` | 光标移动到这个屏幕的中央那一行的第一个字符 |
| `L` | 光标移动到这个屏幕的最下方那一行的第一个字符 |
| `G` | 移动到这个档案的最后一行(常用) |
| `nG` | n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行(可配合 :set nu) |
| `gg` | 移动到这个档案的第一行，相当于 1G 啊！(常用) |
| **`n<span Enter>`** | **n 为数字。光标向下移动 n 行(常用)** |

| 搜索替换 |  |
| --- | --- |
| `/word` | 向光标之下寻找一个名称为 `word` 的字符串。 |
| 例如要在档案内搜寻 `vbird` 这个字符串，就输入 `/vbird` 即可！(常用) |
| `?word` | 向光标之上寻找一个字符串名称为 `word` 的字符串。 |
| `n` | 这个 `n` 是英文按键。代表重复前一个搜寻的动作。 |

举例来说：如果刚刚我们执行 `/vbird` 去向下搜寻 `vbird` 这个字符串，则按下 `n` 后，
会向下继续搜寻下一个名称为 `vbird` 的字符串。如果是执行 `?vbird` 的 | | `N` | 这个 `N` 是英文按键。与 `n` 刚好相反，为『反向』进行前一个搜寻动作。
例如 `/vbird` 后，按下 `N` 则表示『向上』搜寻 `vbird` 。 |

| 删除、 复制与粘贴 |  |
| --- | --- |
| `x, X` | 在一行字当中，x 为向后删除一个字符 (相当于 `[del]` 按键)， |
| X 为向前删除一个字符(相当于 `[backspace]` 亦即是退格键) (常用) |
| `nx` | n 为数字，连续向后删除 n 个字符。举例来说，我要连续删除 10 个字符， `『10x』`。 |
| `dd` | 删除游标所在的那一整行(常用) |
| `dw` | 删除游标所在的一个词 |
| `ndd` | n 为数字。删除光标所在的向下 n 行，例如 `20dd` 则是删除 20 行 (常用) |
| `d1G` | 删除光标所在到第一行的所有数据 |
| `dG` | 删除光标所在到最后一行的所有数据 |
| `d$` | 删除游标所在处，到该行的最后一个字符 |
| `d0` | 那个是数字的 0 ，删除游标所在处，到该行的最前面一个字符 |
| `yy` | 复制游标所在的那一行(常用) |
| `yw` | 复制游标所在的一个词 |
| `nyy` | n 为数字。复制光标所在的向下 n 行，例如 `20yy` 则是复制 20 行(常用) |
| `y1G` | 复制游标所在行到第一行的所有数据 |
| `yG` | 复制游标所在行到最后一行的所有数据 |
| `y0` | 复制光标所在的那个字符到该行行首的所有数据 |
| `y$` | 复制光标所在的那个字符到该行行尾的所有数据 |
| `p, P` | p 为将已复制的数据在光标下一行贴上，P 则为贴在游标上一行！ |

举例来说，我目前光标在第 20 行，且已经复制了 10 行数据。则按下 p 后，
那 10 行数据会贴在原本的 20 行之后，亦即由 21 行开始贴。
但如果是按下 P 呢？那么原本的第 20 行会被推到变成 30 行。(常用) | | `J` | 将光标所在行与下一行的数据结合成同一行 | | `c` | 重复删除多个数据，例如向下删除 10 行，`[ 10cj ]` | | **`u`** | **复原前一个动作。(常用)** | | **`[Ctrl]+r`** | **重做上一个动作。(常用)** | | `crystalift+6（^）` | 移动到行头 | | \`crystalift+4 （ | $）\` 移动到行尾 | | `n+shift+g` | n 为数字。移动到页头 | | `crystalift+g` | 移动到页尾 | | `n+shift+g` | n 为数字。移动到目标行 |

### **第二部分：一般模式切换到编辑模式的可用的按钮说明**

| 进入输入或取代的编辑模式 |  |
| --- | --- |
| `i, I` | **进入输入模式`(Insert mode)`：i 为『从目前光标所在处输入』， I 为『在目前所在行的第一个非空格符处开始输入』。(常用)** |
| `a, A` | 进入输入模式`(Insert mode)`：a 为『从目前光标所在的下一个字符处开始输入』， A 为『从光标所在行的最后一个字符处开始输入』。(常用) |
| `o, O` | 进入输入模式`(Insert mode)`：这是英文字母 o 的大小写。o 为『在目前光标所在的下一行处输入新的一行』；O 为在目前光标所在处的上一行输入新的一行！(常用) |
| `r, R` | 进入取代模式`(Replace mode)`：r 只会取代光标所在的那一个字符一次；R 会一直取代光标所在的文字，直到按下 `ESC` 为止；(常用) |
| **`[Esc]`** | **退出编辑模式，回到一般模式中(常用)** |

### **第三部分：一般模式切换到指令行模式的可用的按钮说明**

| 指令行的储存、离开等指令 |  |
| --- | --- |
| **`:w`** | **将编辑的数据写入硬盘档案中(常用)** |
| **`:w!`** | **若文件属性为『只读』时，强制写入该档案。不过，到底能不能写入， 还是跟你对该档案的档案权限有关啊！** |
| **`:q`** | **离开 vi (常用)** |
| **`:q!`** | **若曾修改过档案，又不想储存，使用 ! 为强制离开不储存档案。** |
| **`:wq`** | **储存后离开，若为 :wq! 则为强制储存后离开 (常用)** |
| **`ZZ`** | **这是大写的 Z 喔！若档案没有更动，则不储存离开，若档案已经被更动过，则储存后离开！** |
| `:w [filename]` | 将编辑的数据储存成另一个档案（类似另存新档） |
| `:r [filename]` | 在编辑的数据中，读入另一个档案的数据。亦即将 `『filename』` 这个档案内容加到游标所在行后面 |
| `:n1,n2 w [filename]` | 将 `n1` 到 `n2` 的内容储存成 `filename` 这个档案。 |
| `:! command` | 暂时离开 `vi` 到指令行模式下执行 `command` 的显示结果！例如 `『:! ls /home』`即可在 `vi` 当中看 `/home` 底下以 `ls` 输出的档案信息！ |
| **`:set nu` 设置行号，代码中** | **显示行号，设定之后，会在每一行的前缀显示该行的行号** |
| `:set nonu` | 与 `set nu` 相反，为取消行号！ |

> 注意一下啊，那个惊叹号 (!) 在 vi 当中，常常具有『强制』的意思～

## 查看网络 IP 和 网关

### 查看虚拟网络编辑器

![image-20220902124633366](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/image-20220902124633366.png)

### 修改虚拟网卡 Ip

![image-20220902124802103](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/image-20220902124802103.png)

### 查看网关

![image-20220902124941641](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/image-20220902124941641.png)

### 查看 windows 环境的中 VMnet8 网络配置

![image-20220902125021997](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/image-20220902125021997.png)

## 配置网络 ip 地址

### ifconfig 配置网络接口

`ifconfig :network interfaces configuring` 网络接口配置

1、基本语法

- `ifconfig` （功能描述：显示所有网络接口的配置信息）

2、案例实操

- 查看当前网络 `ip`

```crystal
[root@hadoop100 桌面]# ifconfig
```

### ping 测试主机之间网络连通性

1、基本语法

- `ping` 目的主机 （功能描述：测试当前服务器是否可以连接目的主机）

2、案例实操

- 测试当前服务器是否可以连接百度

```crystal
 [root@hadoop100 桌面]# ping www.baidu.com
```

### 修改 IP 地址

**1、查看 IP 配置文件**

```crystal
[root@hadoop100 桌面]#vim /etc/sysconfig/network-scripts/ifcfg-ens3
```

![image-20220903123026917](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209031230958.png)

以下标红的项必须修改，有值的按照下面的值修改，没有该项的要增加。

```visual
TYPE="Ethernet" #网络类型（通常是 Ethemet）
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="static" #IP 的配置方法[none|static|bootp|dhcp]（引导时不 使用协议|静态分配 IP|BOOTP 协议|DHCP 协议）
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="e83804c1-3257-4584-81bb-660665ac22f6" #随机id
DEVICE="ens33" #接口名（设备,网卡）
ONBOOT="yes" #系统启动的时候网络接口是否有效（yes/no）#IP 地址
#IP地址，这里前三位（192.168.1）要和虚拟机的IP地址一致
IPADDR=192.168.1.100
#网关
GATEWAY=192.168.1.2
#域名解析器
DNS1=192.168.1.2
```

修改后

![image-20220903122820674](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209031228706.png)

编辑完后，按键盘 `esc` ，然后输入 `:wq` 回车即可。

**2、执行 `service network restart` 重启网络**

![image-20220902123712391](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/image-20220902123712391.png)

### 修改 IP 地址后可能会遇到的问题

1. 物理机能 `ping` 通虚拟机，但是虚拟机 `ping` 不通物理机,一般都是因为物理机的防火墙问题,把防火墙关闭就行
2. 虚拟机能 `Ping` 通物理机,但是虚拟机 `Ping` 不通外网,一般都是因为`DNS` 的设置有问题
3. 虚拟机 `Ping www.baidu.com` 显示域名未知等信息,一般查看`GATEWAY` 和`DNS` 设置是否正确
4. 如果以上全部设置完还是不行，需要关闭 `NetworkManager` 服务
   1. `systemctl stop NetworkManager` 关闭
   2. `systemctl disable NetworkManager` 禁用
5. 如果检查发现 `systemctl status network` 有问题 需要检查`ifcfg-ens33`

### 下面是 red hat/CentOs7 关闭防火墙的命令

1:查看防火状态

- systemctl status firewalld
- service iptables status

2:暂时关闭防火墙

- systemctl stop firewalld
- service iptables stop

3:永久关闭防火墙

- systemctl disable firewalld
- chkconfig iptables off

4:重启防火墙

- systemctl enable firewalld
- service iptables restart

5:永久关闭后重启

//暂时还没有试过

- chkconfig iptables on

## 配置主机名

### 修改主机名称

**1、基本语法**

`hostname` （功能描述：查看当前服务器的主机名称）

`Hostnamectl`（查看详细信息）使用`hostnamectl set-hostname [自定义名称]` 可强制更改不需要重启

**2、案例实操**

1. 查看当前服务器主机名称

```crystal
[root@hadoop100 桌面]# hostname
```

2. 如果感觉此主机名不合适，我们可以进行修改。通过编辑/etc/hostname 文件

```crystal
[root@hadoop100 桌面]# vi /etc/hostname
```

修改完成后重启生效。

### 修改 hosts 映射文件

修改 `linux` 的主机映射文件（`hosts` 文件） 后续在 `hadoop` 阶段，虚拟机会比较多，配置时通常会采用主机名的方式配置，比较简单方便。 不用刻意记 `ip` 地址。

1. 打开`/etc/hosts`

```crystal
root@hadoop100 桌面]# vim /etc/hosts
```

添加如下内容

```crystal
192.168.2.100 hadoop100
......
ip地址    =>  主机名/域名
```

2. 重启设备，重启后，查看主机名，已经修改成功

修改 `windows` 的主机映射文件（`hosts` 文件）

1. 进入 `C:\Windows\System32\drivers\etc` 路径
2. 打开 `hosts` 文件并添加如下内容

```crystal
192.168.2.100 hadoop100
......
ip地址    =>  主机名/域名
```

## 远程登录

`Windows`: `Xshell`, `SSH` `Secure` `crystalell`, `SecureCRT`,`FinalShell`

`MacOS` :`iTerm2`，`Royal TSX`

## CentOS Node

[官网 open in new window](https://registry.npmmirror.com/binary.html?path=node/v16.17.0/)

## **第一步 在 CentOS 找好安装位置**

**x86 架构**

![image-20220914105129045](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/image-20220914105129045.png)

**让你一步到位的命令**

```bash
wget https://npm.taobao.org/mirrors/node/v16.17.0/node-v16.17.0-linux-x64.tar.gz
```

**url 拆解**

<https://npm.taobao.org/mirrors/node/v16.17.0> node 版本号

node-v16.17.0-linux-x64.tar.gz 对应架构的文件名

## 第二步 解压压缩文件

**执行一下命令**

```bash
tar -xvf node-v16.17.0-linux-x64.tar.gz
```

进入到 node-v16.17.0-linux-x64.tar.gz，执行一下命令安装 Node.js 的依赖组件

```bash
cd node-v16.17.0-linux-x64.tar.gz
yum install gcc gcc-c++
```

**重命名 node-v12.16.1-linux-x64.tar.gz 文件夹为 Node.js**

```bash
cd .. //先返回上一级目录
mv node-v12.16.1-linux-x64.tar.gz Node.js
```

## 第三步 部署 bin 文件并建立软连接（类似于 Windows 中配置环境变量）

**进入到/usr/local/temp/Node.js/bin 你会看到**

![image-20220914105914750](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/image-20220914105914750.png)

ln 指令用于创建关联

依次**执行以下命令**

```text
ln -s /usr/local/bin/Node.js/bin/node /usr/bin/node
ln -s /usr/local/bin/Node.js/bin/npm /usr/bin/npm
ln -s /usr/local/bin/Node.js/bin/npx /usr/bin/npx
```

最后在终端输入 node -v

![image-20220914110030726](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/image-20220914110030726.png)

出现这个就完成

## 安装 yarn

### 配置[yarnopen in new window](https://so.csdn.net/so/search?q=yarn&spm=1001.2101.3001.7020)官方 yum 存储库

```bash
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo
```

### 安装

### 验证

```bash
[root@Tracy local]# yarn -v
1.22.19
```

## Centos7 Mysql 安装

## 1、下载

<https://downloads.mysql.com/archives/community/>

![image-20220924151733781](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241517826.png)

上传到 Linux

或一键下载

```bash
wget https://downloads.mysql.com/archives/get/p/23/file/mysql-8.0.28-1.el7.x86_64.rpm-bundle.tar
```

## 2、解压

将文件移动到一个目录中

![image-20220924152215578](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241522610.png)

解包文件

```bash
 tar -xvf mysql-8.0.28-1.el7.x86_64.rpm-bundle.tar
```

![image-20220924152302390](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241523418.png)

## 3、安装

`--nodeps --force` 为强制安装

```text
rpm -ivh mysql-community-common-8.0.28-1.el7.x86_64.rpm
```

```text
rpm -ivh mysql-community-client-plugins-8.0.28-1.el7.x86_64.rpm --nodeps --force
```

```text
rpm -ivh mysql-community-libs-8.0.28-1.el7.x86_64.rpm --nodeps --force
```

```text
rpm -ivh mysql-community-client-8.0.28-1.el7.x86_64.rpm  --nodeps --force
```

```text
rpm -ivh mysql-community-icu-data-files-8.0.28-1.el7.x86_64.rpm  --nodeps --force
```

```text
rpm -ivh mysql-community-server-8.0.28-1.el7.x86_64.rpm  --nodeps --force
```

必须安装以上顺序安装

## 4、问题

安装完成后不出意外的话输入初始化命令就成功了

```text
mysqld --initialize --console
```

如果出现以下报错

![image-20220924152648318](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241526354.png)

那可能是缺少 openssl10

在 Linux 中安装 openssl10，进行[OpenSSLopen in new window](https://so.csdn.net/so/search?q=OpenSSL&spm=1001.2101.3001.7020)升级（用 yum 升不上去，用 rpm 包简单有效）

阿里云下载链接

```text
http://mirrors.aliyun.com/centos/8/AppStream/x86_64/os/Packages/compat-openssl10-1.0.2o-3.el8.x86_64.rpm
```

下载后进行安装

```text
rpm -ivh compat-openssl10-1.0.2o-3.el8.x86_64.rpm
```

最终安装过程图

![image-20220924153111079](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241531110.png)

## 5、启动

### 初始化 Nysql

```text
mysqld --initialize --console
```

### 添加权限

```text
chown -R mysql:mysql /var/lib/mysql
```

### 启动服务

### 查看初始密码

```text
cat /var/log/mysqld.log | grep localhost
```

![image-20220924153531953](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241535995.png)

### 登入 Mysql

### 问题

这里我在登录的时候是遇到了两个问题

报错 1

```text
mysql: error while loading shared libraries: libncurses.so.5: cannot open shared object file: No such file or directory
```

没有`libncurses.so.5`，可能有`libncurses.so`不同版本的文件，使用命令全局查找

```text
find / -name 'libncurses*'
```

![image-20220924155547536](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241555581.png)

之后将`/usr/lib64`下找到的`libncurses.so` 版本和`libncurses.so.5`进行链接

```text
lh -s /usr/lib64/libncurses.so.6.1 /usr/lib64/libncurses.so.5
```

报错 2

```text
mysql: error while loading shared libraries: libtinfo.so.5: cannot open shared object file: No such file or directory
```

与上同理，全局查找`libtinfo`将文件与 `libtinfo.so.5` 进行链接

最终登录效果

![image-20220924160043962](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241600997.png)

### 修改密码

```mysql
alter user 'root'@'localhost' identified by '*******';
```

### 查看数据库

![image-20220924161008432](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241610492.png)

## 6、navicat 远程链接

点击新建链接使用 SSH

![image-20220924163623897](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241636943.png)

### 链接失败 1130

**1130 - Host ‘xxx.xxx.xxx.xxx’ is not allowed to connect to this MySQL server**![在这里插入图片描述](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241640679.jpeg)

#### a.问题分析

某某 ip 不被允许连接这个 MySQL 服务，排除服务器防火墙没开放 3306 端口的情况

#### b.解决办法

连接远端服务器，登录进去到 MySQL，查看名为 mysql 的数据库中的一个名字叫 user 的表，一般来讲如果出现 1130 代码问题，大概率是 MySQL 登录用户的 host 权限是 localhost 或其他，把登录用户对应的 host 改成%即可，%意为任意 ip 地址 ![在这里插入图片描述](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241637979.png)

#### c.解决步骤

```powershell
--登录MySQL
mysql -u root -p

--切换名为mysql的数据库
use mysql;

--查看user表的user,host字段
select user,host from user;

--如果对应的登录账号host字段值不是%,改成%
update user set host='%' where user='root';

--修改后刷新一下MySQL自己用到的表,或者退出MySQL,重启一下MySQL服务:systemctl restart mysqld
flush privileges;
```

2.接着说可能会出现的其他问题：失败 2059

### 链接失败 2059

**2059 - Authentication plugin ‘caching_sha2_password’ cannot be loaded: xxxxxxxxxx**

![在这里插入图片描述](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241639127.jpeg)

#### a.问题分析

这个问题存在于 MySQL8.0 及以后的版本，MySQL8.0 对密码的加密方式进行了修改，由原来的 mysql_native_password 方式，改成了 caching_sha2_password 方式，导致了支持 mysql_native_password 方式的[Navicatopen in new window](https://so.csdn.net/so/search?q=Navicat&spm=1001.2101.3001.7020)无法成功连接 MySQL8.0

#### b.问题解决

修改 MySQL 数据库的密码加密方式，并使用加密方式修改覆盖原来的密码，保证相同密码加密后的一致，密码改成 Navicat 支持的 mysql_native_password 方式 ![在这里插入图片描述](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209241639153.png)

#### c.解决步骤

```powershell
--连接MySQL数据库,切换数据库为mysql
use mysql;

--查看加密方式
select user,plugin from user;

--如果为caching_sha2_password,修改成mysql_native_password
update user set plugin ='mysql_native_password' where user='root';

--使用mysql_native_password加密方式重新修改一下密码,要不两种加密方式的密码会不一致,'root'@'%'这百分号指的是上面修改的那个host列的值，如果是其他的就写其他的：'root'@'xxx'
alter user 'root'@'%' identified with mysql_native_password by '满足MySQL8.0密码策略的密码';

--修改后刷新一下MySQL自己用到的表,或者退出MySQL,重启一下MySQL服务:
systemctl restart mysqld flush privileges;
```

## 7、Node 链接 Mysql8 的一些问题

`node.js`连接 mysql 出现错误： `ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client`

目前是因为版本问题

### 解决办法

1、找到 MYSQL 的安装路径下的 bin 目录，这里是：C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin，然后在命令行工具进入，如下图

![在这里插入图片描述](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209242139725.png)

2、登录 mysql 数据库。即继续在命令行工具输入：`mysql -u root -p`。然后输入自己数据库的密码，进入数据库

![在这里插入图片描述](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209242139775.png)

3、接着输入

```text
ALTER USER '' IDENTIFIED WITH mysql_native_password BY '123456';
```

上面`’123456’`是我的数据库密码，将其改为自己的即可。

这里`root'@'localhost'` 对应的是 `mysql`数据库的`user`表的键和值，我这里的`root`的`host`是`%`，所以为`root'@'%'`

![image-20220924214308072](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209242143111.png)

4、最后在输入下面这个命令，然后回车。

第三步第四步的截图：

![在这里插入图片描述](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/linux/202209242139810.png)

然后就可以连上数据库了。
