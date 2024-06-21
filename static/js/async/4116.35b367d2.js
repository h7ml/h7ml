/*! For license information please see 4116.35b367d2.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["4116"],{83565:function(n,e,r){"use strict";r.r(e);var i=r("52676"),s=r("40453");function t(n){let e=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"\u8BF4\u8BF4\u4F60\u5BF9\u6808\u961F\u5217\u7684\u7406\u89E3\u5E94\u7528\u573A\u666F",children:["\u8BF4\u8BF4\u4F60\u5BF9\u6808\u3001\u961F\u5217\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BF4\u8BF4\u4F60\u5BF9\u6808\u961F\u5217\u7684\u7406\u89E3\u5E94\u7528\u573A\u666F",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/bc57f530-1b99-11ec-a752-75723a64e8f5.png",alt:""})}),"\n",(0,i.jsxs)(e.h2,{id:"\u4E00\u6808",children:["\u4E00\u3001\u6808",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E00\u6808",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u6808\uFF08stack\uFF09\u53C8\u540D\u5806\u6808\uFF0C\u5B83\u662F\u4E00\u79CD\u8FD0\u7B97\u53D7\u9650\u7684\u7EBF\u6027\u8868\uFF0C\u9650\u5B9A\u4EC5\u5728\u8868\u5C3E\u8FDB\u884C\u63D2\u5165\u548C\u5220\u9664\u64CD\u4F5C\u7684\u7EBF\u6027\u8868"}),"\n",(0,i.jsx)(e.p,{children:"\u8868\u5C3E\u8FD9\u4E00\u7AEF\u88AB\u79F0\u4E3A\u6808\u9876\uFF0C\u76F8\u53CD\u5730\u53E6\u4E00\u7AEF\u88AB\u79F0\u4E3A\u6808\u5E95\uFF0C\u5411\u6808\u9876\u63D2\u5165\u5143\u7D20\u88AB\u79F0\u4E3A\u8FDB\u6808\u3001\u5165\u6808\u3001\u538B\u6808\uFF0C\u4ECE\u6808\u9876\u5220\u9664\u5143\u7D20\u53C8\u79F0\u4F5C\u51FA\u6808"}),"\n",(0,i.jsx)(e.p,{children:"\u6240\u4EE5\u5176\u6309\u7167\u5148\u8FDB\u540E\u51FA\u7684\u539F\u5219\u5B58\u50A8\u6570\u636E\uFF0C\u5148\u8FDB\u5165\u7684\u6570\u636E\u88AB\u538B\u5165\u6808\u5E95\uFF0C\u6700\u540E\u7684\u6570\u636E\u5728\u6808\u9876\uFF0C\u9700\u8981\u8BFB\u6570\u636E\u7684\u65F6\u5019\u4ECE\u6808\u9876\u5F00\u59CB\u5F39\u51FA\u6570\u636E\uFF0C\u5177\u6709\u8BB0\u5FC6\u4F5C\u7528"}),"\n",(0,i.jsx)(e.p,{children:"\u5173\u4E8E\u6808\u7684\u7B80\u5355\u5B9E\u73B0\uFF0C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"class Stack {\n  constructor() {\n    this.items = []\n  }\n\n  /**\n   * \u6DFB\u52A0\u4E00\u4E2A\uFF08\u6216\u51E0\u4E2A\uFF09\u65B0\u5143\u7D20\u5230\u6808\u9876\n   * @param {*} element \u65B0\u5143\u7D20\n   */\n  push(element) {\n    this.items.push(element)\n  }\n\n  /**\n   * \u79FB\u9664\u6808\u9876\u7684\u5143\u7D20\uFF0C\u540C\u65F6\u8FD4\u56DE\u88AB\u79FB\u9664\u7684\u5143\u7D20\n   */\n  pop() {\n    return this.items.pop()\n  }\n\n  /**\n   * \u8FD4\u56DE\u6808\u9876\u7684\u5143\u7D20\uFF0C\u4E0D\u5BF9\u6808\u505A\u4EFB\u4F55\u4FEE\u6539\uFF08\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u79FB\u9664\u6808\u9876\u7684\u5143\u7D20\uFF0C\u4EC5\u4EC5\u8FD4\u56DE\u5B83\uFF09\n   */\n  peek() {\n    return this.items[this.items.length - 1]\n  }\n\n  /**\n   * \u5982\u679C\u6808\u91CC\u6CA1\u6709\u4EFB\u4F55\u5143\u7D20\u5C31\u8FD4\u56DEtrue,\u5426\u5219\u8FD4\u56DEfalse\n   */\n  isEmpty() {\n    return this.items.length === 0\n  }\n\n  /**\n   * \u79FB\u9664\u6808\u91CC\u7684\u6240\u6709\u5143\u7D20\n   */\n  clear() {\n    this.items = []\n  }\n\n  /**\n   * \u8FD4\u56DE\u6808\u91CC\u7684\u5143\u7D20\u4E2A\u6570\u3002\u8FD9\u4E2A\u65B9\u6CD5\u548C\u6570\u7EC4\u7684length\u5C5E\u6027\u5F88\u7C7B\u4F3C\n   */\n  size() {\n    return this.items.length\n  }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5173\u4E8E\u6808\u7684\u64CD\u4F5C\u4E3B\u8981\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"push\uFF1A\u5165\u6808\u64CD\u4F5C"}),"\n",(0,i.jsx)(e.li,{children:"pop\uFF1A\u51FA\u6808\u64CD\u4F5C"}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"\u4E8C\u961F\u5217",children:["\u4E8C\u3001\u961F\u5217",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E8C\u961F\u5217",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u8DDF\u6808\u5341\u5206\u76F8\u4F3C\uFF0C\u961F\u5217\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u7EBF\u6027\u8868\uFF0C\u7279\u6B8A\u4E4B\u5904\u5728\u4E8E\u5B83\u53EA\u5141\u8BB8\u5728\u8868\u7684\u524D\u7AEF\uFF08front\uFF09\u8FDB\u884C\u5220\u9664\u64CD\u4F5C\uFF0C\u800C\u5728\u8868\u7684\u540E\u7AEF\uFF08rear\uFF09\u8FDB\u884C\u63D2\u5165\u64CD\u4F5C"}),"\n",(0,i.jsx)(e.p,{children:"\u8FDB\u884C\u63D2\u5165\u64CD\u4F5C\u7684\u7AEF\u79F0\u4E3A\u961F\u5C3E\uFF0C\u8FDB\u884C\u5220\u9664\u64CD\u4F5C\u7684\u7AEF\u79F0\u4E3A\u961F\u5934\uFF0C\u5F53\u961F\u5217\u4E2D\u6CA1\u6709\u5143\u7D20\u65F6\uFF0C\u79F0\u4E3A\u7A7A\u961F\u5217"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u961F\u5217\u4E2D\u63D2\u5165\u4E00\u4E2A\u961F\u5217\u5143\u7D20\u79F0\u4E3A\u5165\u961F\uFF0C\u4ECE\u961F\u5217\u4E2D\u5220\u9664\u4E00\u4E2A\u961F\u5217\u5143\u7D20\u79F0\u4E3A\u51FA\u961F\u3002\u56E0\u4E3A\u961F\u5217\u53EA\u5141\u8BB8\u5728\u4E00\u7AEF\u63D2\u5165\uFF0C\u5728\u53E6\u4E00\u7AEF\u5220\u9664\uFF0C\u6240\u4EE5\u53EA\u6709\u6700\u65E9\u8FDB\u5165\u961F\u5217\u7684\u5143\u7D20\u624D\u80FD\u6700\u5148\u4ECE\u961F\u5217\u4E2D\u5220\u9664\uFF0C\u6545\u961F\u5217\u53C8\u79F0\u4E3A\u5148\u8FDB\u5148\u51FA"}),"\n",(0,i.jsx)(e.p,{children:"\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217\u7684\u65B9\u5F0F\uFF0C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"class Queue {\n  constructor() {\n    this.list = []\n    this.frontIndex = 0\n    this.tailIndex = 0\n  }\n\n  enqueue(item) {\n    this.list[this.tailIndex++] = item\n  }\n\n  unqueue() {\n    const item = this.list[this.frontIndex]\n    this.frontIndex++\n    return item\n  }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4E0A\u8FF0\u8FD9\u79CD\u5165\u961F\u548C\u51FA\u961F\u64CD\u4F5C\u4E2D\uFF0C\u5934\u5C3E\u6307\u9488\u53EA\u589E\u52A0\u4E0D\u51CF\u5C0F\uFF0C\u81F4\u4F7F\u88AB\u5220\u5143\u7D20\u7684\u7A7A\u95F4\u6C38\u8FDC\u65E0\u6CD5\u91CD\u65B0\u5229\u7528"}),"\n",(0,i.jsx)(e.p,{children:'\u5F53\u961F\u5217\u4E2D\u5B9E\u9645\u7684\u5143\u7D20\u4E2A\u6570\u8FDC\u8FDC\u5C0F\u4E8E\u5411\u91CF\u7A7A\u95F4\u7684\u89C4\u6A21\u65F6\uFF0C\u4E5F\u53EF\u80FD\u7531\u4E8E\u5C3E\u6307\u9488\u5DF2\u8D85\u8D8A\u5411\u91CF\u7A7A\u95F4\u7684\u4E0A\u754C\u800C\u4E0D\u80FD\u505A\u5165\u961F\u64CD\u4F5C\uFF0C\u51FA\u8BE5\u73B0\u8C61\u79F0\u4E3A"\u5047\u6EA2"'}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5B9E\u9645\u4F7F\u7528\u961F\u5217\u65F6\uFF0C\u4E3A\u4E86\u4F7F\u961F\u5217\u7A7A\u95F4\u80FD\u91CD\u590D\u4F7F\u7528\uFF0C\u5F80\u5F80\u5BF9\u961F\u5217\u7684\u4F7F\u7528\u65B9\u6CD5\u7A0D\u52A0\u6539\u8FDB\uFF1A"}),"\n",(0,i.jsxs)(e.p,{children:["\u65E0\u8BBA\u63D2\u5165\u6216\u5220\u9664\uFF0C\u4E00\u65E6",(0,i.jsx)(e.code,{children:"rear"}),"\u6307\u9488\u589E 1 \u6216",(0,i.jsx)(e.code,{children:"front"}),"\u6307\u9488\u589E 1 \u65F6\u8D85\u51FA\u4E86\u6240\u5206\u914D\u7684\u961F\u5217\u7A7A\u95F4\uFF0C\u5C31\u8BA9\u5B83\u6307\u5411\u8FD9\u7247\u8FDE\u7EED\u7A7A\u95F4\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u8FD9\u79CD\u961F\u5217\u4E5F\u5C31\u662F\u5FAA\u73AF\u961F\u5217"]}),"\n",(0,i.jsx)(e.p,{children:"\u4E0B\u9762\u5B9E\u73B0\u4E00\u4E2A\u5FAA\u73AF\u961F\u5217\uFF0C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"class Queue {\n  constructor(size) {\n    this.size = size // \u957F\u5EA6\u9700\u8981\u9650\u5236, \u6765\u8FBE\u5230\u7A7A\u95F4\u7684\u5229\u7528, \u4EE3\u8868\u7A7A\u95F4\u7684\u957F\u5EA6\n    this.list = []\n    this.font = 0 // \u6307\u5411\u9996\u5143\u7D20\n    this.rear = 0 // \u6307\u5411\u51C6\u5907\u63D2\u5165\u5143\u7D20\u7684\u4F4D\u7F6E\n  }\n\n  enQueue() {\n    if (this.isFull() == true)\n      return false\n\n    this.rear = this.rear % this.k\n    this._data[this.rear++] = value\n    return true\n  }\n\n  deQueue() {\n    if (this.isEmpty())\n      return false\n\n    this.font++\n    this.font = this.font % this.k\n    return true\n  }\n\n  isEmpty() {\n    return this.font == this.rear - 1\n  }\n\n  isFull() {\n    return this.rear % this.k == this.font\n  }\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4E0A\u8FF0\u901A\u8FC7\u6C42\u4F59\u7684\u5F62\u5F0F\u4EE3\u8868\u9996\u5C3E\u6307\u9488\u589E 1 \u65F6\u8D85\u51FA\u4E86\u6240\u5206\u914D\u7684\u961F\u5217\u7A7A\u95F4"}),"\n",(0,i.jsxs)(e.h2,{id:"\u4E09\u5E94\u7528\u573A\u666F",children:["\u4E09\u3001\u5E94\u7528\u573A\u666F",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E09\u5E94\u7528\u573A\u666F",children:"#"})]}),"\n",(0,i.jsxs)(e.h3,{id:"\u6808",children:["\u6808",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6808",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u501F\u52A9\u6808\u7684\u5148\u8FDB\u540E\u51FA\u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A\u9006\u5E8F\u6570\u5904\u7684\u529F\u80FD\uFF0C\u9996\u5148\u628A\u6240\u6709\u5143\u7D20\u4F9D\u6B21\u5165\u6808\uFF0C\u7136\u540E\u628A\u6240\u6709\u5143\u7D20\u51FA\u6808\u5E76\u8F93\u51FA"}),"\n",(0,i.jsxs)(e.p,{children:["\u5305\u62EC\u7F16\u8BD1\u5668\u7684\u5728\u5BF9\u8F93\u5165\u7684\u8BED\u6CD5\u8FDB\u884C\u5206\u6790\u7684\u65F6\u5019\uFF0C\u4F8B\u5982",(0,i.jsx)(e.code,{children:'"()"'}),"\u3001",(0,i.jsx)(e.code,{children:'"{}"'}),"\u3001",(0,i.jsx)(e.code,{children:'"[]"'}),"\u8FD9\u4E9B\u6210\u5BF9\u51FA\u73B0\u7684\u7B26\u53F7\uFF0C\u501F\u52A9\u6808\u7684\u7279\u6027\uFF0C\u51E1\u662F\u9047\u5230\u62EC\u53F7\u7684\u524D\u534A\u90E8\u5206\uFF0C\u5373\u628A\u8FD9\u4E2A\u5143\u7D20\u5165\u6808\uFF0C\u51E1\u662F\u9047\u5230\u62EC\u53F7\u7684\u540E\u534A\u90E8\u5206\u5C31\u6BD4\u5BF9\u6808\u9876\u5143\u7D20\u662F\u5426\u8BE5\u5143\u7D20\u76F8\u5339\u914D\uFF0C\u5982\u679C\u5339\u914D\uFF0C\u5219\u524D\u534A\u90E8\u5206\u51FA\u6808\uFF0C\u5426\u5219\u5C31\u662F\u5339\u914D\u51FA\u9519"]}),"\n",(0,i.jsx)(e.p,{children:"\u5305\u62EC\u51FD\u6570\u8C03\u7528\u548C\u9012\u5F52\u7684\u65F6\u5019\uFF0C\u6BCF\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E95\u5C42\u90FD\u4F1A\u8FDB\u884C\u5165\u6808\u64CD\u4F5C\uFF0C\u51FA\u6808\u5219\u8FD4\u56DE\u51FD\u6570\u7684\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(e.p,{children:"\u751F\u6D3B\u4E2D\u7684\u4F8B\u5B50\uFF0C\u53EF\u4EE5\u628A\u4E52\u4E53\u7403\u76D2\u6BD4\u55BB\u6210\u4E00\u4E2A\u5806\u6808\uFF0C\u7403\u4E00\u4E2A\u4E00\u4E2A\u653E\u8FDB\u53BB\uFF08\u5165\u6808\uFF09\uFF0C\u6700\u5148\u653E\u8FDB\u53BB\u7684\u8981\u7B49\u5176\u540E\u9762\u7684\u5168\u90E8\u62FF\u51FA\u6765\u540E\u624D\u80FD\u51FA\u6765\uFF08\u51FA\u6808\uFF09\uFF0C\u8FD9\u79CD\u5C31\u662F\u5178\u578B\u7684\u5148\u8FDB\u540E\u51FA\u6A21\u578B"}),"\n",(0,i.jsxs)(e.h3,{id:"\u961F\u5217",children:["\u961F\u5217",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u961F\u5217",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u5F53\u6211\u4EEC\u9700\u8981\u6309\u7167\u4E00\u5B9A\u7684\u987A\u5E8F\u6765\u5904\u7406\u6570\u636E\uFF0C\u800C\u8BE5\u6570\u636E\u7684\u6570\u636E\u91CF\u5728\u4E0D\u65AD\u5730\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u5219\u9700\u8981\u961F\u5217\u6765\u5E2E\u52A9\u89E3\u9898"}),"\n",(0,i.jsx)(e.p,{children:"\u961F\u5217\u7684\u4F7F\u7528\u5E7F\u6CDB\u5E94\u7528\u5728\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\u79CD\uFF0C\u4F8B\u5982\u5C42\u6B21\u904D\u5386\u4E00\u4E2A\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u503C\uFF08\u540E\u7EED\u5C06\u5230\uFF09"}),"\n",(0,i.jsx)(e.p,{children:"\u751F\u6D3B\u4E2D\u7684\u4F8B\u5B50\uFF0C\u6392\u961F\u4E70\u7968\uFF0C\u6392\u5728\u961F\u5934\u7684\u6C38\u8FDC\u5148\u5904\u7406\uFF0C\u540E\u9762\u7684\u5FC5\u987B\u7B49\u5230\u524D\u9762\u7684\u5168\u90E8\u5904\u7406\u5B8C\u6BD5\u518D\u8FDB\u884C\u5904\u7406\uFF0C\u8FD9\u4E5F\u662F\u5178\u578B\u7684\u5148\u8FDB\u5148\u51FA\u6A21\u578B"}),"\n",(0,i.jsxs)(e.h2,{id:"\u53C2\u8003\u6587\u732E",children:["\u53C2\u8003\u6587\u732E",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u8003\u6587\u732E",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://baike.baidu.com/item/%E6%A0%88/12808149",target:"_blank",rel:"noopener noreferrer",children:"https://baike.baidu.com/item/%E6%A0%88/12808149"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://baike.baidu.com/item/%E9%98%9F%E5%88%97/14580481",target:"_blank",rel:"noopener noreferrer",children:"https://baike.baidu.com/item/%E9%98%9F%E5%88%97/14580481"})}),"\n"]})]})}function h(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}e.default=h,h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["interview%2Falgorithm%2Fstack_queue.md"]={toc:[{text:"\u4E00\u3001\u6808",id:"\u4E00\u6808",depth:2},{text:"\u4E8C\u3001\u961F\u5217",id:"\u4E8C\u961F\u5217",depth:2},{text:"\u4E09\u3001\u5E94\u7528\u573A\u666F",id:"\u4E09\u5E94\u7528\u573A\u666F",depth:2},{text:"\u6808",id:"\u6808",depth:3},{text:"\u961F\u5217",id:"\u961F\u5217",depth:3},{text:"\u53C2\u8003\u6587\u732E",id:"\u53C2\u8003\u6587\u732E",depth:2}],title:"\u8BF4\u8BF4\u4F60\u5BF9\u6808\u3001\u961F\u5217\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F",frontmatter:{icon:"question",description:"\u524D\u7AEF\u7269\u8BED|\u9762\u8BD5\u7269\u8BED-\u8BF4\u8BF4\u4F60\u5BF9\u6808\u3001\u961F\u5217\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F",footer:"\u8BF4\u8BF4\u4F60\u5BF9\u6808\u3001\u961F\u5217\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F",order:15,star:15,date:"2023-04-07T00:00:00.000Z",author:"h7ml",image:"https://www.h7ml.cn/logo.png",banner:"https://www.h7ml.cn/logo.png",category:["interview","algorithm"],tag:["interview","algorithm"],shortTitle:"\u524D\u7AEF\u7269\u8BED|\u9762\u8BD5\u7269\u8BED-\u8BF4\u8BF4\u4F60\u5BF9\u6808\u3001\u961F\u5217\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F",isOriginal:!1,head:[["meta",{name:"keywords",content:"\u8BF4\u8BF4\u4F60\u5BF9\u6808\u3001\u961F\u5217\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F"}]]}}}}]);