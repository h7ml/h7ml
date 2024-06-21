/*! For license information please see 31983.28413002.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["31983"],{43838:function(e,n,t){"use strict";t.r(n);var i=t("52676"),r=t("40453");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",img:"img",blockquote:"blockquote",strong:"strong",pre:"pre"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"\u573A\u666F",children:["\u573A\u666F",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u573A\u666F",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u7684 ",(0,i.jsx)(n.code,{children:"loading"})," \u906E\u7F69\u5C42\uFF0C\u6B63\u5E38\u5C55\u793A\u662F\u8FD9\u6837\u7684\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220206173318902.png",alt:"image-20220206173318902"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F46\u5982\u679C\u7528\u6237\u8FDE\u7EED\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"loaing"})," \u4E24\u6B21\uFF0C\u7B2C\u4E8C\u4E2A\u906E\u7F69\u5C42\u5C31\u4F1A\u8986\u76D6\u6389\u7B2C\u4E00\u4E2A\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220206173534676.png",alt:"image-20220206173534676"})}),"\n",(0,i.jsxs)(n.p,{children:["\u770B\u8D77\u6765\u5C31\u50CF\u51FA\u4E86 ",(0,i.jsx)(n.code,{children:"bug"})," \u4E00\u6837\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u9650\u5236\u7528\u6237\u540C\u4E00\u65F6\u523B\u53EA\u80FD\u8C03\u7528\u4E00\u4E2A\u5168\u5C40 ",(0,i.jsx)(n.code,{children:"loading"})," \u3002"]}),"\n",(0,i.jsxs)(n.h1,{id:"\u5355\u4F8B\u6A21\u5F0F",children:["\u5355\u4F8B\u6A21\u5F0F",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5355\u4F8B\u6A21\u5F0F",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u770B\u4E0B ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Singleton_pattern",target:"_blank",rel:"noopener noreferrer",children:"\u7EF4\u57FA\u767E\u79D1"})," \u7ED9\u7684\u5B9A\u4E49\uFF1A"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Software_engineering",target:"_blank",rel:"noopener noreferrer",children:"software engineering"}),", the ",(0,i.jsx)(n.strong,{children:"singleton pattern"})," is a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Software_design_pattern",target:"_blank",rel:"noopener noreferrer",children:"software design pattern"})," that restricts the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Instantiation_(computer_science)",target:"_blank",rel:"noopener noreferrer",children:"instantiation"})," of a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Class_(computer_programming)",target:"_blank",rel:"noopener noreferrer",children:"class"}),' to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u4EE5\u8BF4\u662F\u6700\u7B80\u5355\u7684\u8BBE\u8BA1\u6A21\u5F0F\u4E86\uFF0C\u5C31\u662F\u4FDD\u8BC1\u7C7B\u7684\u5B9E\u4F8B\u53EA\u6709\u4E00\u4E2A\u5373\u53EF\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220206181649135.png",alt:"image-20220206181649135"})}),"\n",(0,i.jsxs)(n.p,{children:["\u770B\u4E00\u4E0B ",(0,i.jsx)(n.code,{children:"java"})," \u7684\u793A\u4F8B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class Singleton {\n\n    private static final Singleton INSTANCE = new Singleton();\n\n    private Singleton() {}\n\n    public static Singleton getInstance() {\n        return INSTANCE;\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4E0A\u8FB9\u5728\u521D\u59CB\u5316\u7C7B\u7684\u65F6\u5019\u5C31\u8FDB\u884C\u4E86\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5E76\u4E14\u5C06\u6784\u9020\u51FD\u6570\u8BBE\u7F6E\u4E3A ",(0,i.jsx)(n.code,{children:"private"})," \u4E0D\u5141\u8BB8\u5916\u754C\u8C03\u7528\uFF0C\u63D0\u4F9B ",(0,i.jsx)(n.code,{children:"getInstance"})," \u65B9\u6CD5\u83B7\u53D6\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD8\u6709\u4E00\u79CD ",(0,i.jsx)(n.code,{children:"Lazy initialization"})," \u7684\u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662F\u5EF6\u8FDF\u5230\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"getInstance"})," \u7684\u65F6\u5019\u624D\u53BB\u521B\u5EFA\u5BF9\u8C61\u3002\u4F46\u5982\u679C\u591A\u4E2A\u7EBF\u7A0B\u4E2D\u540C\u65F6\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"getInstance"})," \u53EF\u80FD\u4F1A\u5BFC\u81F4\u521B\u5EFA\u591A\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u8FD8\u9700\u8981\u8FDB\u884C\u52A0\u9501\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class Singleton {\n    private static volatile Singleton instance = null;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) {\n            synchronized(Singleton.class) {\n                if (instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F46\u5355\u4F8B\u6A21\u5F0F\u5B58\u5728\u5F88\u591A\u4E89\u8BAE\uFF0C\u6BD4\u5982\u53EF\u6D4B\u8BD5\u6027\u4E0D\u5F3A\u3001\u5BF9\u62BD\u8C61\u3001\u7EE7\u627F\u3001\u591A\u6001\u90FD\u652F\u6301\u5F97\u4E0D\u53CB\u597D\u7B49\u7B49\uFF0C\u4F46\u6211\u611F\u89C9\u4E3B\u8981\u662F\u57FA\u4E8E ",(0,i.jsx)(n.code,{children:"class"})," \u8FD9\u7C7B\u8BED\u8A00\u5F15\u8D77\u7684\u95EE\u9898\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8BA8\u8BBA\u4E86\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u56DE\u5230 ",(0,i.jsx)(n.code,{children:"js"})," \uFF0C\u6A21\u62DF\u4E0A\u8FB9\u5B9E\u73B0\u4E00\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const Singleton = function () {\n  this.instance = null\n}\nSingleton.getInstance = function (name) {\n  if (!this.instance)\n    this.instance = new Singleton()\n\n  return this.instance\n}\nconst a = Singleton.getInstance()\nconst b = Singleton.getInstance()\nconsole.log(a === b) // true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F46\u4E0A\u8FB9\u5C31\u771F\u7684\u662F\u90AF\u90F8\u5B66\u6B65\u4E00\u6837\u7684\u6A21\u4EFF\u4E86 ",(0,i.jsx)(n.code,{children:"java"})," \u7684\u5B9E\u73B0\uFF0C\u4E8B\u5B9E\u4E0A\uFF0C",(0,i.jsx)(n.code,{children:"js"})," \u521B\u5EFA\u5BF9\u8C61\u5E76\u4E0D\u4E00\u5B9A\u9700\u8981\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"new"})," \u7684\u65B9\u5F0F\uFF0C\u4E0B\u8FB9\u6211\u4EEC\u8BE6\u7EC6\u8BA8\u8BBA\u4E0B\u3002"]}),"\n",(0,i.jsxs)(n.h1,{id:"js-\u7684\u5355\u4F8B\u6A21\u5F0F",children:["js \u7684\u5355\u4F8B\u6A21\u5F0F",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#js-\u7684\u5355\u4F8B\u6A21\u5F0F",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\u5355\u4F8B\u6A21\u5F0F\u4EA7\u751F\u7684\u5BF9\u8C61\u4E00\u822C\u90FD\u662F\u5DE5\u5177\u5BF9\u8C61\u7B49\uFF0C\u6BD4\u5982 ",(0,i.jsx)(n.code,{children:"jQuery"})," \u3002\u5B83\u4E0D\u9700\u8981\u6211\u4EEC\u901A\u8FC7\u6784\u9020\u51FD\u6570\u53BB\u4F20\u53C2\u6570\uFF0C\u6240\u4EE5\u5C31\u4E0D\u9700\u8981\u53BB ",(0,i.jsx)(n.code,{children:"new"})," \u4E00\u4E2A\u6784\u9020\u51FD\u6570\u53BB\u751F\u6210\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u53EA\u9700\u8981\u901A\u8FC7\u5B57\u9762\u91CF\u5BF9\u8C61\uFF0C ",(0,i.jsx)(n.code,{children:"var a = {}"})," \uFF0C",(0,i.jsx)(n.code,{children:"a"})," \u5C31\u53EF\u4EE5\u770B\u6210\u4E00\u4E2A\u5355\u4F8B\u5BF9\u8C61\u4E86\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u5E38\u7684\u5355\u4F8B\u5BF9\u8C61\u53EF\u80FD\u4F1A\u662F\u4E0B\u8FB9\u7684\u6837\u5B50\uFF0C\u66B4\u9732\u51E0\u4E2A\u65B9\u6CD5\u4F9B\u5916\u754C\u4F7F\u7528\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const Singleton = {\n  method1() {\n    // ...\n  },\n  method2() {\n    // ...\n  },\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F46\u5982\u679C",(0,i.jsx)(n.code,{children:"Singleton"})," \u6709\u79C1\u6709\u5C5E\u6027\uFF0C\u53EF\u4EE5\u5199\u6210\u4E0B\u8FB9\u7684\u6837\u5B50\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const Singleton = {\n  privateVar: '\u6211\u662F\u79C1\u6709\u5C5E\u6027',\n  method1() {\n    // ...\n  },\n  method2() {\n    // ...\n  },\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F46\u6B64\u65F6\u5916\u754C\u5C31\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Singleton"})," \u968F\u610F\u4FEE\u6539 ",(0,i.jsx)(n.code,{children:"privateVar"})," \u7684\u503C\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9\u95ED\u5305\uFF0C\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"IIFE (Immediately Invoked Function Expression)"})," \u5C06\u4E00\u4E9B\u5C5E\u6027\u548C\u65B9\u6CD5\u79C1\u6709\u5316\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const myInstance = (function () {\n  const privateVar = ''\n\n  function privateMethod() {\n    // ...\n  }\n\n  return {\n    method1() {},\n    method2() {},\n  }\n})()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F46\u968F\u7740 ",(0,i.jsx)(n.code,{children:"ES6"})," \u3001",(0,i.jsx)(n.code,{children:"Webpack"})," \u7684\u51FA\u73B0\uFF0C\u6211\u4EEC\u5F88\u5C11\u50CF\u4E0A\u8FB9\u90A3\u6837\u53BB\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757\u4E86\uFF0C\u800C\u662F\u901A\u8FC7\u5355\u6587\u4EF6\uFF0C\u4E00\u4E2A\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u770B\u6210\u4E00\u4E2A",(0,i.jsx)(n.strong,{children:"\u5355\u4F8B\u5BF9\u8C61"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// singleton.js\nconst somePrivateState = []\n\nfunction privateMethod() {\n  // ...\n}\n\nexport default {\n  method1() {\n    // ...\n  },\n  method2() {\n    // ...\n  },\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540E\u4F7F\u7528\u7684\u65F6\u5019 ",(0,i.jsx)(n.code,{children:"import"})," \u5373\u53EF\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// main.js\nimport Singleton from './singleton.js'\n// ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5373\u4F7F\u6709\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E5F ",(0,i.jsx)(n.code,{children:"import"})," \u4E86\u540C\u4E00\u4E2A\u6587\u4EF6\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// main2.js\nimport Singleton from './singleton.js'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4F46\u8FD9\u4E24\u4E2A\u4E0D\u540C\u6587\u4EF6\u7684 ",(0,i.jsx)(n.code,{children:"Singleton"})," \u4ECD\u65E7\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u662F ",(0,i.jsx)(n.code,{children:"ES Moudule"})," \u7684\u7279\u6027\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u90A3\u5982\u679C\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Webpack"})," \u5C06 ",(0,i.jsx)(n.code,{children:"ES6"})," \u8F6C\u6210 ",(0,i.jsx)(n.code,{children:"ES5"})," \u4EE5\u540E\u5462\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u8FD8\u4F1A\u662F\u5355\u4F8B\u5BF9\u8C61\u5417\uFF1F"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7B54\u6848\u5F53\u7136\u662F\u80AF\u5B9A\u7684\uFF0C\u53EF\u4EE5\u770B\u4E00\u4E0B ",(0,i.jsx)(n.code,{children:"Webpack"})," \u6253\u5305\u7684\u4EA7\u7269\uFF0C\u5176\u5B9E\u5C31\u662F\u4F7F\u7528\u4E86 ",(0,i.jsx)(n.code,{children:"IIFE"})," \uFF0C\u540C\u65F6\u5C06\u7B2C\u4E00\u6B21 ",(0,i.jsx)(n.code,{children:"import"})," \u7684\u6A21\u5757\u8FDB\u884C\u4E86\u7F13\u5B58\uFF0C\u7B2C\u4E8C\u6B21 ",(0,i.jsx)(n.code,{children:"import"})," \u7684\u65F6\u5019\u4F1A\u4F7F\u7528\u4E4B\u524D\u7684\u7F13\u5B58\u3002\u53EF\u4EE5\u770B\u4E0B ",(0,i.jsx)(n.code,{children:"__webpack_require__"})," \u7684\u5B9E\u73B0\uFF0C\u548C\u5355\u4F8B\u6A21\u5F0F\u7684\u903B\u8F91\u662F\u4E00\u6837\u7684\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function __webpack_require__(moduleId) {\n  const cachedModule = __webpack_module_cache__[moduleId]\n\n  // \u5355\u4F8B\u6A21\u5F0F\u7684\u5E94\u7528\n  if (cachedModule !== undefined)\n    return cachedModule.exports\n\n  const module = (__webpack_module_cache__[moduleId] = {\n    exports: {},\n  })\n  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)\n  return module.exports\n}\n"})}),"\n",(0,i.jsxs)(n.h1,{id:"\u4EE3\u7801\u5B9E\u73B0",children:["\u4EE3\u7801\u5B9E\u73B0",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4EE3\u7801\u5B9E\u73B0",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u56DE\u5934\u5F00\u5934\u6211\u4EEC\u8BF4\u7684\u5168\u5C40 ",(0,i.jsx)(n.code,{children:"loading"})," \u7684\u95EE\u9898\uFF0C\u89E3\u51B3\u8D77\u6765\u4E5F\u5F88\u7B80\u5355\uFF0C\u540C\u6837\u7684\uFF0C\u5982\u679C\u5DF2\u7ECF\u6709\u4E86 ",(0,i.jsx)(n.code,{children:"loading"})," \u7684\u5B9E\u4F8B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u76F4\u63A5\u8FD4\u56DE\u5373\u53EF\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u91CC\u76F4\u63A5\u770B\u4E00\u4E0B ",(0,i.jsx)(n.code,{children:"ElementUI"})," \u5BF9\u4E8E\u5168\u5C40 ",(0,i.jsx)(n.code,{children:"loading"})," \u7684\u5904\u7406\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// ~/packages/loading/src/index.js\n\nlet fullscreenLoading;\n\nconst Loading = (options = {}) => {\n  ...\n  // options \u4E0D\u4F20\u7684\u8BDD\u9ED8\u8BA4\u662F fullscreen\n  options = merge({}, defaults, options);\n  if (options.fullscreen && fullscreenLoading) {\n    return fullscreenLoading; // \u5B58\u5728\u76F4\u63A5 return\n  }\n\n  let parent = options.body ? document.body : options.target;\n  let instance = new LoadingConstructor({\n    el: document.createElement('div'),\n    data: options\n  });\n\n  ...\n  if (options.fullscreen) {\n    fullscreenLoading = instance;\n  }\n  return instance;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u6837\u5728\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Element"})," \u7684 ",(0,i.jsx)(n.code,{children:"loading"})," \u7684\u65F6\u5019\uFF0C\u5982\u679C\u540C\u65F6\u8C03\u7528\u4E24\u6B21\uFF0C\u5176\u5B9E\u53EA\u4F1A\u6709\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"loading"})," \u7684\u906E\u7F69\u5C42\uFF0C\u7B2C\u4E8C\u4E2A\u5E76\u4E0D\u4F1A\u663E\u793A\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"mounted() {\n  const first = this.$loading({\n    text: '\u6211\u662F\u7B2C\u4E00\u4E2A\u5168\u5C4Floading',\n  })\n\n  const second = this.$loading({\n    text: '\u6211\u662F\u7B2C\u4E8C\u4E2A'\n  })\n\n  console.log(first === second); // true\n}\n"})}),"\n",(0,i.jsxs)(n.h1,{id:"\u66F4\u591A\u573A\u666F",children:["\u66F4\u591A\u573A\u666F",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u66F4\u591A\u573A\u666F",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u4F7F\u7528\u4E86 ",(0,i.jsx)(n.code,{children:"ES6"})," \u7684\u6A21\u5757\uFF0C\u5176\u5B9E\u5C31\u4E0D\u7528\u8003\u8651\u5355\u4E0D\u5355\u4F8B\u7684\u95EE\u9898\u4E86\uFF0C\u4F46\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5B83\u6CA1\u6709 ",(0,i.jsx)(n.code,{children:"export"})," \u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u800C\u662F ",(0,i.jsx)(n.code,{children:"export"})," \u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"function/class"})," \u5462\uFF1F"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6BD4\u5982\u4E4B\u524D\u4ECB\u7ECD\u7684 ",(0,i.jsx)(n.a,{href:"https://www.h7ml.cn/posts/designPattern/publishSubscribe.html",target:"_blank",rel:"noopener noreferrer",children:"\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F"})," \u7684 ",(0,i.jsx)(n.code,{children:"Event"})," \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u80AF\u5B9A\u9700\u8981\u662F\u5168\u5C40\u5355\u4F8B\u7684\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"eventemitter3"})," \u8FD9\u4E2A ",(0,i.jsx)(n.code,{children:"node"})," \u5305\uFF0C\u770B\u4E00\u4E0B\u5B83\u7684\u5BFC\u51FA\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"'use strict';\n\nvar has = Object.prototype.hasOwnProperty\n  , prefix = '~';\n\n/**\n * Constructor to create a storage for our `EE` objects.\n * An `Events` instance is a plain object whose properties are event names.\n *\n * @constructor\n * @private\n */\nfunction Events() {}\n\n//\n// We try to not inherit from `Object.prototype`. In some engines creating an\n// instance in this way is faster than calling `Object.create(null)` directly.\n// If `Object.create(null)` is not supported we prefix the event names with a\n// character to make sure that the built-in object properties are not\n// overridden or used as an attack vector.\n//\nif (Object.create) {\n  Events.prototype = Object.create(null);\n\n  //\n  // This hack is needed because the `__proto__` property is still inherited in\n  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.\n  //\n  if (!new Events().__proto__) prefix = false;\n}\n\n/**\n * Representation of a single event listener.\n *\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} [once=false] Specify if the listener is a one-time listener.\n * @constructor\n * @private\n */\nfunction EE(fn, context, once) {\n  this.fn = fn;\n  this.context = context;\n  this.once = once || false;\n}\n\n/**\n * Add a listener for a given event.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} once Specify if the listener is a one-time listener.\n * @returns {EventEmitter}\n * @private\n */\nfunction addListener(emitter, event, fn, context, once) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('The listener must be a function');\n  }\n\n  var listener = new EE(fn, context || emitter, once)\n    , evt = prefix ? prefix + event : event;\n\n  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;\n  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);\n  else emitter._events[evt] = [emitter._events[evt], listener];\n\n  return emitter;\n}\n\n/**\n * Clear event by name.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} evt The Event name.\n * @private\n */\nfunction clearEvent(emitter, evt) {\n  if (--emitter._eventsCount === 0) emitter._events = new Events();\n  else delete emitter._events[evt];\n}\n\n/**\n * Minimal `EventEmitter` interface that is molded against the Node.js\n * `EventEmitter` interface.\n *\n * @constructor\n * @public\n */\nfunction EventEmitter() {\n  this._events = new Events();\n  this._eventsCount = 0;\n}\n\n...\n\n/**\n * Add a listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.on = function on(event, fn, context) {\n  return addListener(this, event, fn, context, false);\n};\n\n...\n\n...\n// Alias methods names because people roll like that.\n//\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n//\n// Expose the prefix.\n//\nEventEmitter.prefixed = prefix;\n\n//\n// Allow `EventEmitter` to be imported as module namespace.\n//\nEventEmitter.EventEmitter = EventEmitter;\n\n//\n// Expose the module.\n//\nif ('undefined' !== typeof module) {\n  module.exports = EventEmitter;\n}\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u5B83\u76F4\u63A5\u5C06 ",(0,i.jsx)(n.code,{children:"EventEmitter"})," \u8FD9\u4E2A\u51FD\u6570\u5BFC\u51FA\u4E86\uFF0C\u5982\u679C\u6BCF\u4E2A\u9875\u9762\u90FD\u5404\u81EA ",(0,i.jsx)(n.code,{children:"import"})," \u5B83\uFF0C\u7136\u540E\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"new EventEmitter()"})," \u6765\u751F\u6210\u5BF9\u8C61\uFF0C\u90A3\u53D1\u5E03\u8BA2\u9605\u5C31\u4E71\u5957\u4E86\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4E0D\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u4E86\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6B64\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u65B0\u5EFA\u4E00\u4E2A\u6A21\u5757\uFF0C\u7136\u540E ",(0,i.jsx)(n.code,{children:"export"})," \u4E00\u4E2A\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF0C\u5176\u4ED6\u9875\u9762\u53BB\u4F7F\u7528\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u4E86\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import EventEmitter from 'eventemitter3'\n// \u5168\u5C40\u552F\u4E00\u7684\u4E8B\u4EF6\u603B\u7EBF\nconst event = new EventEmitter()\nexport default event\n"})}),"\n",(0,i.jsxs)(n.h1,{id:"\u603B",children:["\u603B",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u603B",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5355\u4F8B\u6A21\u5F0F\u6BD4\u8F83\u7B80\u5355\uFF0C\u4E3B\u8981\u662F\u4FDD\u8BC1\u5168\u5C40\u5BF9\u8C61\u552F\u4E00\uFF0C\u4F46\u76F8\u5BF9\u4E8E\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"class"})," \u751F\u6210\u5BF9\u8C61\u7684\u5355\u4F8B\u6A21\u5F0F\uFF0C",(0,i.jsx)(n.code,{children:"js"})," \u5C31\u5F88\u7279\u6B8A\u4E86\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u56E0\u4E3A\u5728 ",(0,i.jsx)(n.code,{children:"js"})," \u4E2D\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u751F\u6210\u5BF9\u8C61\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u662F\u5168\u5C40\u552F\u4E00\uFF0C\u6240\u4EE5\u5728 ",(0,i.jsx)(n.code,{children:"js"})," \u4E2D\uFF0C\u5355\u4F8B\u6A21\u5F0F\u662F\u6D51\u7136\u5929\u6210\u7684\uFF0C\u6211\u4EEC\u5E73\u5E38\u5E76\u4E0D\u4F1A\u611F\u77E5\u5230\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5C24\u5176\u662F\u73B0\u5728\u5F00\u53D1\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"ES6"})," \u6A21\u5757\uFF0C\u6BCF\u4E2A\u6A21\u5757\u4E5F\u540C\u6837\u662F\u4E00\u4E2A\u5355\u4F8B\u5BF9\u8C61\uFF0C\u5E73\u5E38\u4E1A\u52A1\u5F00\u53D1\u4E2D\u4E5F\u5F88\u5C11\u53BB\u5E94\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4E3A\u4E86\u4E3E\u51FA\u4E0A\u8FB9\u7684\u4F8B\u5B50\u771F\u7684\u662F\u8111\u7EC6\u80DE\u8017\u5C3D\u4E86\uFF0C\u54C8\u54C8\u3002"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["posts%2FdesignPattern%2Fsingleton.md"]={toc:[],title:"\u5355\u4F8B\u6A21\u5F0F",frontmatter:{title:"\u5355\u4F8B\u6A21\u5F0F",category:["\u8BBE\u8BA1\u6A21\u5F0F","frontend"],tag:["\u8BBE\u8BA1\u6A21\u5F0F","frontend"],author:"h7ml",image:"https://www.h7ml.cn/logo.png",banner:"https://www.h7ml.cn/logo.png",date:"2022-02-06T17:31:00.000Z"}}}}]);