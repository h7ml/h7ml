/*! For license information please see 22421.6b60d6bb.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["22421"],{82184:function(e,n,s){"use strict";s.r(n);var r=s("52676"),o=s("40453");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",code:"code",strong:"strong",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u4F60\u4E86\u89E3-axios-\u7684\u539F\u7406\u5417\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417",children:["\u4F60\u4E86\u89E3 axios \u7684\u539F\u7406\u5417\uFF1F\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417\uFF1F",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F60\u4E86\u89E3-axios-\u7684\u539F\u7406\u5417\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/1564f7d0-4662-11eb-ab90-d9ae814b240d.png",alt:""})}),"\n",(0,r.jsxs)(n.h2,{id:"\u4E00axios-\u7684\u4F7F\u7528",children:["\u4E00\u3001axios \u7684\u4F7F\u7528",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E00axios-\u7684\u4F7F\u7528",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4E8E",(0,r.jsx)(n.code,{children:"axios"}),"\u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u4E0A\u7BC7\u6587\u7AE0\u5DF2\u7ECF\u6709\u6240\u6D89\u53CA\uFF0C\u8FD9\u91CC\u518D\u7A0D\u5FAE\u56DE\u987E\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u53D1\u9001\u8BF7\u6C42"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import axios from 'axios';\n\naxios(config) // \u76F4\u63A5\u4F20\u5165\u914D\u7F6E\naxios(url[, config]) // \u4F20\u5165url\u548C\u914D\u7F6E\naxios[method](url[, option]) // \u76F4\u63A5\u8C03\u7528\u8BF7\u6C42\u65B9\u5F0F\u65B9\u6CD5\uFF0C\u4F20\u5165url\u548C\u914D\u7F6E\naxios[method](url[, data[, option]]) // \u76F4\u63A5\u8C03\u7528\u8BF7\u6C42\u65B9\u5F0F\u65B9\u6CD5\uFF0C\u4F20\u5165data\u3001url\u548C\u914D\u7F6E\naxios.request(option) // \u8C03\u7528 request \u65B9\u6CD5\n\nconst axiosInstance = axios.create(config)\n// axiosInstance \u4E5F\u5177\u6709\u4EE5\u4E0A axios \u7684\u80FD\u529B\n\naxios.all([axiosInstance1, axiosInstance2]).then(axios.spread(response1, response2))\n// \u8C03\u7528 all \u548C\u4F20\u5165 spread \u56DE\u8C03\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8BF7\u6C42\u62E6\u622A\u5668"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"axios.interceptors.request.use(\n  (config) => {\n    // \u8FD9\u91CC\u5199\u53D1\u9001\u8BF7\u6C42\u524D\u5904\u7406\u7684\u4EE3\u7801\n    return config\n  },\n  (error) => {\n    // \u8FD9\u91CC\u5199\u53D1\u9001\u8BF7\u6C42\u9519\u8BEF\u76F8\u5173\u7684\u4EE3\u7801\n    return Promise.reject(error)\n  }\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u54CD\u5E94\u62E6\u622A\u5668"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"axios.interceptors.response.use(\n  (response) => {\n    // \u8FD9\u91CC\u5199\u5F97\u5230\u54CD\u5E94\u6570\u636E\u540E\u5904\u7406\u7684\u4EE3\u7801\n    return response\n  },\n  (error) => {\n    // \u8FD9\u91CC\u5199\u5F97\u5230\u9519\u8BEF\u54CD\u5E94\u5904\u7406\u7684\u4EE3\u7801\n    return Promise.reject(error)\n  }\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u53D6\u6D88\u8BF7\u6C42"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u65B9\u5F0F\u4E00\nconst CancelToken = axios.CancelToken;\nconst source = CancelToken.source();\n\naxios.get('xxxx', {\n  cancelToken: source.token,\n});\n// \u53D6\u6D88\u8BF7\u6C42 (\u8BF7\u6C42\u539F\u56E0\u662F\u53EF\u9009\u7684)\nsource.cancel('\u4E3B\u52A8\u53D6\u6D88\u8BF7\u6C42');\n\n// \u65B9\u5F0F\u4E8C\nconst CancelToken = axios.CancelToken;\nlet cancel;\n\naxios.get('xxxx', {\n  cancelToken: new CancelToken(function executor(c) {\n    cancel = c;\n  }),\n});\ncancel('\u4E3B\u52A8\u53D6\u6D88\u8BF7\u6C42');\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u4E8C\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248-axios",children:["\u4E8C\u3001\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248 axios",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E8C\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248-axios",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6784\u5EFA\u4E00\u4E2A",(0,r.jsx)(n.code,{children:"Axios"}),"\u6784\u9020\u51FD\u6570\uFF0C\u6838\u5FC3\u4EE3\u7801\u4E3A",(0,r.jsx)(n.code,{children:"request"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class Axios {\n  constructor() {}\n\n  request(config) {\n    return new Promise((resolve) => {\n      const { url = '', method = 'get', data = {} } = config\n      // \u53D1\u9001ajax\u8BF7\u6C42\n      const xhr = new XMLHttpRequest()\n      xhr.open(method, url, true)\n      xhr.onload = function () {\n        console.log(xhr.responseText)\n        resolve(xhr.responseText)\n      }\n      xhr.send(data)\n    })\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5BFC\u51FA",(0,r.jsx)(n.code,{children:"axios"}),"\u5B9E\u4F8B"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u6700\u7EC8\u5BFC\u51FAaxios\u7684\u65B9\u6CD5\uFF0C\u5373\u5B9E\u4F8B\u7684request\u65B9\u6CD5\nfunction CreateAxiosFn() {\n  const axios = new Axios()\n  const req = axios.request.bind(axios)\n  return req\n}\n\n// \u5F97\u5230\u6700\u540E\u7684\u5168\u5C40\u53D8\u91CFaxios\nconst axios = CreateAxiosFn()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4E0A\u8FF0\u5C31\u5DF2\u7ECF\u80FD\u591F\u5B9E\u73B0",(0,r.jsx)(n.code,{children:"axios({ })"}),"\u8FD9\u79CD\u65B9\u5F0F\u7684\u8BF7\u6C42"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E0B\u9762\u662F\u6765\u5B9E\u73B0\u4E0B",(0,r.jsx)(n.code,{children:"axios.method()"}),"\u8FD9\u79CD\u5F62\u5F0F\u7684\u8BF7\u6C42"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u5B9A\u4E49get,post...\u65B9\u6CD5\uFF0C\u6302\u5728\u5230Axios\u539F\u578B\u4E0A\nconst methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post']\nmethodsArr.forEach((met) => {\n  Axios.prototype[met] = function () {\n    console.log(`\u6267\u884C${met}\u65B9\u6CD5`)\n    // \u5904\u7406\u5355\u4E2A\u65B9\u6CD5\n    if (['get', 'delete', 'head', 'options'].includes(met)) {\n      // 2\u4E2A\u53C2\u6570(url[, config])\n      return this.request({\n        method: met,\n        url: arguments[0],\n        ...(arguments[1] || {}),\n      })\n    }\n    else {\n      // 3\u4E2A\u53C2\u6570(url[,data[,config]])\n      return this.request({\n        method: met,\n        url: arguments[0],\n        data: arguments[1] || {},\n        ...(arguments[2] || {}),\n      })\n    }\n  }\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5C06",(0,r.jsx)(n.code,{children:"Axios.prototype"}),"\u4E0A\u7684\u65B9\u6CD5\u642C\u8FD0\u5230",(0,r.jsx)(n.code,{children:"request"}),"\u4E0A"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u5B9E\u73B0\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u5B9E\u73B0\u5C06",(0,r.jsx)(n.code,{children:"b"}),"\u65B9\u6CD5\u6DF7\u5165\u5230",(0,r.jsx)(n.code,{children:"a"}),"\uFF0C\u5E76\u4E14\u4FEE\u6539",(0,r.jsx)(n.code,{children:"this"}),"\u6307\u5411"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const utils = {\n  extend(a, b, context) {\n    for (const key in b) {\n      if (b.hasOwnProperty(key)) {\n        if (typeof b[key] === 'function')\n          a[key] = b[key].bind(context)\n        else\n          a[key] = b[key]\n      }\n    }\n  },\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4FEE\u6539\u5BFC\u51FA\u7684\u65B9\u6CD5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function CreateAxiosFn() {\n  const axios = new Axios()\n\n  const req = axios.request.bind(axios)\n  // \u589E\u52A0\u4EE3\u7801\n  utils.extend(req, Axios.prototype, axios)\n\n  return req\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6784\u5EFA\u62E6\u622A\u5668\u7684\u6784\u9020\u51FD\u6570"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class InterceptorsManage {\n  constructor() {\n    this.handlers = []\n  }\n\n  use(fullfield, rejected) {\n    this.handlers.push({\n      fullfield,\n      rejected,\n    })\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5B9E\u73B0",(0,r.jsx)(n.code,{children:"axios.interceptors.response.use"}),"\u548C",(0,r.jsx)(n.code,{children:"axios.interceptors.request.use"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class Axios {\n    constructor() {\n        // \u65B0\u589E\u4EE3\u7801\n        this.interceptors = {\n            request: new InterceptorsManage,\n            response: new InterceptorsManage\n        }\n    }\n\n    request(config) {\n   ...\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884C\u8BED\u53E5",(0,r.jsx)(n.code,{children:"axios.interceptors.response.use"}),"\u548C",(0,r.jsx)(n.code,{children:"axios.interceptors.request.use"}),"\u7684\u65F6\u5019\uFF0C\u5B9E\u73B0\u83B7\u53D6",(0,r.jsx)(n.code,{children:"axios"}),"\u5B9E\u4F8B\u4E0A\u7684",(0,r.jsx)(n.code,{children:"interceptors"}),"\u5BF9\u8C61\uFF0C\u7136\u540E\u518D\u83B7\u53D6",(0,r.jsx)(n.code,{children:"response"}),"\u6216",(0,r.jsx)(n.code,{children:"request"}),"\u62E6\u622A\u5668\uFF0C\u518D\u6267\u884C\u5BF9\u5E94\u7684\u62E6\u622A\u5668\u7684",(0,r.jsx)(n.code,{children:"use"}),"\u65B9\u6CD5"]}),"\n",(0,r.jsxs)(n.p,{children:["\u628A",(0,r.jsx)(n.code,{children:"Axios"}),"\u4E0A\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u642C\u5230",(0,r.jsx)(n.code,{children:"request"}),"\u8FC7\u53BB"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function CreateAxiosFn() {\n  const axios = new Axios()\n\n  const req = axios.request.bind(axios)\n  // \u6DF7\u5165\u65B9\u6CD5\uFF0C \u5904\u7406axios\u7684request\u65B9\u6CD5\uFF0C\u4F7F\u4E4B\u62E5\u6709get,post...\u65B9\u6CD5\n  utils.extend(req, Axios.prototype, axios)\n  // \u65B0\u589E\u4EE3\u7801\n  utils.extend(req, axios)\n  return req\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u73B0\u5728",(0,r.jsx)(n.code,{children:"request"}),"\u4E5F\u6709\u4E86",(0,r.jsx)(n.code,{children:"interceptors"}),"\u5BF9\u8C61\uFF0C\u5728\u53D1\u9001\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u4F1A\u5148\u83B7\u53D6",(0,r.jsx)(n.code,{children:"request"}),"\u62E6\u622A\u5668\u7684",(0,r.jsx)(n.code,{children:"handlers"}),"\u7684\u65B9\u6CD5\u6765\u6267\u884C"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u5C06\u6267\u884C",(0,r.jsx)(n.code,{children:"ajax"}),"\u7684\u8BF7\u6C42\u5C01\u88C5\u6210\u4E00\u4E2A\u65B9\u6CD5"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"request(config) {\n    this.sendAjax(config)\n}\nsendAjax(config){\n    return new Promise(resolve => {\n        const {url = '', method = 'get', data = {}} = config;\n        // \u53D1\u9001ajax\u8BF7\u6C42\n        console.log(config);\n        const xhr = new XMLHttpRequest();\n        xhr.open(method, url, true);\n        xhr.onload = function() {\n            console.log(xhr.responseText)\n            resolve(xhr.responseText);\n        };\n        xhr.send(data);\n    })\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u83B7\u5F97",(0,r.jsx)(n.code,{children:"handlers"}),"\u4E2D\u7684\u56DE\u8C03"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"request(config) {\n    // \u62E6\u622A\u5668\u548C\u8BF7\u6C42\u7EC4\u88C5\u961F\u5217\n    let chain = [this.sendAjax.bind(this), undefined] // \u6210\u5BF9\u51FA\u73B0\u7684\uFF0C\u5931\u8D25\u56DE\u8C03\u6682\u65F6\u4E0D\u5904\u7406\n\n    // \u8BF7\u6C42\u62E6\u622A\n    this.interceptors.request.handlers.forEach(interceptor => {\n        chain.unshift(interceptor.fullfield, interceptor.rejected)\n    })\n\n    // \u54CD\u5E94\u62E6\u622A\n    this.interceptors.response.handlers.forEach(interceptor => {\n        chain.push(interceptor.fullfield, interceptor.rejected)\n    })\n\n    // \u6267\u884C\u961F\u5217\uFF0C\u6BCF\u6B21\u6267\u884C\u4E00\u5BF9\uFF0C\u5E76\u7ED9promise\u8D4B\u6700\u65B0\u7684\u503C\n    let promise = Promise.resolve(config);\n    while(chain.length > 0) {\n        promise = promise.then(chain.shift(), chain.shift())\n    }\n    return promise;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"chains"}),"\u5927\u6982\u662F",(0,r.jsx)(n.code,{children:"['fulfilled1','reject1','fulfilled2','reject2','this.sendAjax','undefined','fulfilled2','reject2','fulfilled1','reject1']"}),"\u8FD9\u79CD\u5F62\u5F0F"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u6837\u5C31\u80FD\u591F\u6210\u529F\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248",(0,r.jsx)(n.code,{children:"axios"})]}),"\n",(0,r.jsxs)(n.h2,{id:"\u4E09\u6E90\u7801\u5206\u6790",children:["\u4E09\u3001\u6E90\u7801\u5206\u6790",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E09\u6E90\u7801\u5206\u6790",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\u770B\u770B\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/9d90eaa0-48b6-11eb-85f6-6fac77c0c9b3.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"axios"}),"\u53D1\u9001\u8BF7\u6C42\u6709\u5F88\u591A\u5B9E\u73B0\u7684\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u5165\u53E3\u6587\u4EF6\u4E3A",(0,r.jsx)(n.code,{children:"axios.js"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function createInstance(defaultConfig) {\n  const context = new Axios(defaultConfig)\n\n  // instance\u6307\u5411\u4E86request\u65B9\u6CD5\uFF0C\u4E14\u4E0A\u4E0B\u6587\u6307\u5411context\uFF0C\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u4EE5 instance(option) \u65B9\u5F0F\u8C03\u7528\n  // Axios.prototype.request \u5185\u5BF9\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B\u5224\u65AD\uFF0C\u4F7F\u6211\u4EEC\u80FD\u591F\u4EE5 instance(url, option) \u65B9\u5F0F\u8C03\u7528\n  const instance = bind(Axios.prototype.request, context)\n\n  // \u628AAxios.prototype\u4E0A\u7684\u65B9\u6CD5\u6269\u5C55\u5230instance\u5BF9\u8C61\u4E0A\uFF0C\n  // \u5E76\u6307\u5B9A\u4E0A\u4E0B\u6587\u4E3Acontext\uFF0C\u8FD9\u6837\u6267\u884CAxios\u539F\u578B\u94FE\u4E0A\u7684\u65B9\u6CD5\u65F6\uFF0Cthis\u4F1A\u6307\u5411context\n  utils.extend(instance, Axios.prototype, context)\n\n  // Copy context to instance\n  // \u628Acontext\u5BF9\u8C61\u4E0A\u7684\u81EA\u8EAB\u5C5E\u6027\u548C\u65B9\u6CD5\u6269\u5C55\u5230instance\u4E0A\n  // \u6CE8\uFF1A\u56E0\u4E3Aextend\u5185\u90E8\u4F7F\u7528\u7684forEach\u65B9\u6CD5\u5BF9\u5BF9\u8C61\u505Afor in \u904D\u5386\u65F6\uFF0C\u53EA\u904D\u5386\u5BF9\u8C61\u672C\u8EAB\u7684\u5C5E\u6027\uFF0C\u800C\u4E0D\u4F1A\u904D\u5386\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\n  // \u8FD9\u6837\uFF0Cinstance \u5C31\u6709\u4E86  defaults\u3001interceptors \u5C5E\u6027\u3002\n  utils.extend(instance, context)\n  return instance\n}\n\n// Create the default instance to be exported \u521B\u5EFA\u4E00\u4E2A\u7531\u9ED8\u8BA4\u914D\u7F6E\u751F\u6210\u7684axios\u5B9E\u4F8B\nconst axios = createInstance(defaults)\n\n// Factory for creating new instances \u6269\u5C55axios.create\u5DE5\u5382\u51FD\u6570\uFF0C\u5185\u90E8\u4E5F\u662F createInstance\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig))\n}\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises)\n}\n\naxios.spread = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr)\n  }\n}\nmodule.exports = axios\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4E3B\u8981\u6838\u5FC3\u662F ",(0,r.jsx)(n.code,{children:"Axios.prototype.request"}),"\uFF0C\u5404\u79CD\u8BF7\u6C42\u65B9\u5F0F\u7684\u8C03\u7528\u5B9E\u73B0\u90FD\u662F\u5728 ",(0,r.jsx)(n.code,{children:"request"})," \u5185\u90E8\u5B9E\u73B0\u7684\uFF0C \u7B80\u5355\u770B\u4E0B ",(0,r.jsx)(n.code,{children:"request"})," \u7684\u903B\u8F91"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"Axios.prototype.request = function request(config) {\n  // Allow for axios('example/url'[, config]) a la fetch API\n  // \u5224\u65AD config \u53C2\u6570\u662F\u5426\u662F \u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u662F\u5219\u8BA4\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F URL\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u771F\u6B63\u7684config\n  if (typeof config === 'string') {\n    config = arguments[1] || {}\n    // \u628A url \u653E\u7F6E\u5230 config \u5BF9\u8C61\u4E2D\uFF0C\u4FBF\u4E8E\u4E4B\u540E\u7684 mergeConfig\n    config.url = arguments[0]\n  }\n  else {\n    // \u5982\u679C config \u53C2\u6570\u662F\u5426\u662F \u5B57\u7B26\u4E32\uFF0C\u5219\u6574\u4F53\u90FD\u5F53\u505Aconfig\n    config = config || {}\n  }\n  // \u5408\u5E76\u9ED8\u8BA4\u914D\u7F6E\u548C\u4F20\u5165\u7684\u914D\u7F6E\n  config = mergeConfig(this.defaults, config)\n  // \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u6CD5\n  config.method = config.method ? config.method.toLowerCase() : 'get'\n  /*\n    something... \u6B64\u90E8\u5206\u4F1A\u5728\u540E\u7EED\u62E6\u622A\u5668\u5355\u72EC\u8BB2\u8FF0\n  */\n}\n\n// \u5728 Axios \u539F\u578B\u4E0A\u6302\u8F7D 'delete', 'get', 'head', 'options' \u4E14\u4E0D\u4F20\u53C2\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u5185\u90E8\u4E5F\u662F request\nutils.forEach(['delete', 'get', 'head', 'options'], (method) => {\n  Axios.prototype[method] = function (url, config) {\n    return this.request(\n      utils.merge(config || {}, {\n        method,\n        url,\n      })\n    )\n  }\n})\n\n// \u5728 Axios \u539F\u578B\u4E0A\u6302\u8F7D 'post', 'put', 'patch' \u4E14\u4F20\u53C2\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u5185\u90E8\u540C\u6837\u4E5F\u662F request\nutils.forEach(['post', 'put', 'patch'], (method) => {\n  Axios.prototype[method] = function (url, data, config) {\n    return this.request(\n      utils.merge(config || {}, {\n        method,\n        url,\n        data,\n      })\n    )\n  }\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"request"}),"\u5165\u53E3\u53C2\u6570\u4E3A",(0,r.jsx)(n.code,{children:"config"}),"\uFF0C\u53EF\u4EE5\u8BF4",(0,r.jsx)(n.code,{children:"config"}),"\u8D2F\u5F7B\u4E86",(0,r.jsx)(n.code,{children:"axios"}),"\u7684\u4E00\u751F"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"axios"})," \u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"config"}),"\u4E3B\u8981\u5206\u5E03\u5728\u8FD9\u51E0\u4E2A\u5730\u65B9\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9ED8\u8BA4\u914D\u7F6E ",(0,r.jsx)(n.code,{children:"defaults.js"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config.method"}),"\u9ED8\u8BA4\u4E3A ",(0,r.jsx)(n.code,{children:"get"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u8C03\u7528 ",(0,r.jsx)(n.code,{children:"createInstance"})," \u65B9\u6CD5\u521B\u5EFA ",(0,r.jsx)(n.code,{children:"axios"}),"\u5B9E\u4F8B\uFF0C\u4F20\u5165\u7684",(0,r.jsx)(n.code,{children:"config"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u76F4\u63A5\u6216\u95F4\u63A5\u8C03\u7528 ",(0,r.jsx)(n.code,{children:"request"})," \u65B9\u6CD5\uFF0C\u4F20\u5165\u7684 ",(0,r.jsx)(n.code,{children:"config"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// axios.js\n// \u521B\u5EFA\u4E00\u4E2A\u7531\u9ED8\u8BA4\u914D\u7F6E\u751F\u6210\u7684axios\u5B9E\u4F8B\nconst axios = createInstance(defaults)\n\n// \u6269\u5C55axios.create\u5DE5\u5382\u51FD\u6570\uFF0C\u5185\u90E8\u4E5F\u662F createInstance\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig))\n}\n\n// Axios.js\n// \u5408\u5E76\u9ED8\u8BA4\u914D\u7F6E\u548C\u4F20\u5165\u7684\u914D\u7F6E\nconfig = mergeConfig(this.defaults, config)\n// \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u6CD5\nconfig.method = config.method ? config.method.toLowerCase() : 'get'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ECE\u6E90\u7801\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u4F18\u5148\u7EA7\uFF1A\u9ED8\u8BA4\u914D\u7F6E\u5BF9\u8C61",(0,r.jsx)(n.code,{children:"default"})," < ",(0,r.jsx)(n.code,{children:"method:get"})," < ",(0,r.jsx)(n.code,{children:"Axios"}),"\u7684\u5B9E\u4F8B\u5C5E\u6027",(0,r.jsx)(n.code,{children:"this.default"})," < ",(0,r.jsx)(n.code,{children:"request"}),"\u53C2\u6570"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E0B\u9762\u91CD\u70B9\u770B\u770B",(0,r.jsx)(n.code,{children:"request"}),"\u65B9\u6CD5"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"Axios.prototype.request = function request(config) {\n  /*\n    \u5148\u662F mergeConfig ... \u7B49\uFF0C\u4E0D\u518D\u9610\u8FF0\n  */\n  // Hook up interceptors middleware \u521B\u5EFA\u62E6\u622A\u5668\u94FE. dispatchRequest \u662F\u91CD\u4E2D\u4E4B\u91CD\uFF0C\u540E\u7EED\u91CD\u70B9\n  const chain = [dispatchRequest, undefined]\n\n  // push\u5404\u4E2A\u62E6\u622A\u5668\u65B9\u6CD5 \u6CE8\u610F\uFF1Ainterceptor.fulfilled \u6216 interceptor.rejected \u662F\u53EF\u80FD\u4E3Aundefined\n  this.interceptors.request.forEach((interceptor) => {\n    // \u8BF7\u6C42\u62E6\u622A\u5668\u9006\u5E8F \u6CE8\u610F\u6B64\u5904\u7684 forEach \u662F\u81EA\u5B9A\u4E49\u7684\u62E6\u622A\u5668\u7684forEach\u65B9\u6CD5\n    chain.unshift(interceptor.fulfilled, interceptor.rejected)\n  })\n\n  this.interceptors.response.forEach((interceptor) => {\n    // \u54CD\u5E94\u62E6\u622A\u5668\u987A\u5E8F \u6CE8\u610F\u6B64\u5904\u7684 forEach \u662F\u81EA\u5B9A\u4E49\u7684\u62E6\u622A\u5668\u7684forEach\u65B9\u6CD5\n    chain.push(interceptor.fulfilled, interceptor.rejected)\n  })\n\n  // \u521D\u59CB\u5316\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u72B6\u6001\u4E3Aresolved\uFF0C\u63A5\u6536\u5230\u7684\u53C2\u6570\u4E3A\u5DF2\u7ECF\u5904\u7406\u5408\u5E76\u8FC7\u7684config\u5BF9\u8C61\n  let promise = Promise.resolve(config)\n\n  // \u5FAA\u73AF\u62E6\u622A\u5668\u7684\u94FE\n  while (chain.length)\n    promise = promise.then(chain.shift(), chain.shift()) // \u6BCF\u4E00\u6B21\u5411\u5916\u5F39\u51FA\u62E6\u622A\u5668\n\n  // \u8FD4\u56DE promise\n  return promise\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u62E6\u622A\u5668",(0,r.jsx)(n.code,{children:"interceptors"}),"\u662F\u5728\u6784\u5EFA",(0,r.jsx)(n.code,{children:"axios"}),"\u5B9E\u4F8B\u5316\u7684\u5C5E\u6027"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function Axios(instanceConfig) {\n  this.defaults = instanceConfig\n  this.interceptors = {\n    request: new InterceptorManager(), // \u8BF7\u6C42\u62E6\u622A\n    response: new InterceptorManager(), // \u54CD\u5E94\u62E6\u622A\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"InterceptorManager"}),"\u6784\u9020\u51FD\u6570"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u62E6\u622A\u5668\u7684\u521D\u59CB\u5316 \u5176\u5B9E\u5C31\u662F\u4E00\u7EC4\u94A9\u5B50\u51FD\u6570\nfunction InterceptorManager() {\n  this.handlers = []\n}\n\n// \u8C03\u7528\u62E6\u622A\u5668\u5B9E\u4F8B\u7684use\u65F6\u5C31\u662F\u5F80\u94A9\u5B50\u51FD\u6570\u4E2Dpush\u65B9\u6CD5\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled,\n    rejected,\n  })\n  return this.handlers.length - 1\n}\n\n// \u62E6\u622A\u5668\u662F\u53EF\u4EE5\u53D6\u6D88\u7684\uFF0C\u6839\u636Euse\u7684\u65F6\u5019\u8FD4\u56DE\u7684ID\uFF0C\u628A\u67D0\u4E00\u4E2A\u62E6\u622A\u5668\u65B9\u6CD5\u7F6E\u4E3Anull\n// \u4E0D\u80FD\u7528 splice \u6216\u8005 slice \u7684\u539F\u56E0\u662F \u5220\u9664\u4E4B\u540E id \u5C31\u4F1A\u53D8\u5316\uFF0C\u5BFC\u81F4\u4E4B\u540E\u7684\u987A\u5E8F\u6216\u8005\u662F\u64CD\u4F5C\u4E0D\u53EF\u63A7\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id])\n    this.handlers[id] = null\n}\n\n// \u8FD9\u5C31\u662F\u5728 Axios\u7684request\u65B9\u6CD5\u4E2D \u4E2D\u5FAA\u73AF\u62E6\u622A\u5668\u7684\u65B9\u6CD5 forEach \u5FAA\u73AF\u6267\u884C\u94A9\u5B50\u51FD\u6570\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, (h) => {\n    if (h !== null)\n      fn(h)\n  })\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8BF7\u6C42\u62E6\u622A\u5668\u65B9\u6CD5\u662F\u88AB ",(0,r.jsx)(n.code,{children:"unshift"}),"\u5230\u62E6\u622A\u5668\u4E2D\uFF0C\u54CD\u5E94\u62E6\u622A\u5668\u662F\u88AB",(0,r.jsx)(n.code,{children:"push"}),"\u5230\u62E6\u622A\u5668\u4E2D\u7684\u3002\u6700\u7EC8\u5B83\u4EEC\u4F1A\u62FC\u63A5\u4E0A\u4E00\u4E2A\u53EB",(0,r.jsx)(n.code,{children:"dispatchRequest"}),"\u7684\u65B9\u6CD5\u88AB\u540E\u7EED\u7684 ",(0,r.jsx)(n.code,{children:"promise"})," \u987A\u5E8F\u6267\u884C"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const isCancel = require('../cancel/isCancel')\nconst defaults = require('../defaults')\nconst utils = require('./../utils')\nconst transformData = require('./transformData')\nconst isAbsoluteURL = require('./../helpers/isAbsoluteURL')\nconst combineURLs = require('./../helpers/combineURLs')\n\n// \u5224\u65AD\u8BF7\u6C42\u662F\u5426\u5DF2\u88AB\u53D6\u6D88\uFF0C\u5982\u679C\u5DF2\u7ECF\u88AB\u53D6\u6D88\uFF0C\u629B\u51FA\u5DF2\u53D6\u6D88\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken)\n    config.cancelToken.throwIfRequested()\n}\n\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config)\n\n  // \u5982\u679C\u5305\u542BbaseUrl, \u5E76\u4E14\u4E0D\u662Fconfig.url\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u7EC4\u5408baseUrl\u4EE5\u53CAconfig.url\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\n    // \u7EC4\u5408baseURL\u4E0Eurl\u5F62\u6210\u5B8C\u6574\u7684\u8BF7\u6C42\u8DEF\u5F84\n    config.url = combineURLs(config.baseURL, config.url)\n  }\n\n  config.headers = config.headers || {}\n\n  // \u4F7F\u7528/lib/defaults.js\u4E2D\u7684transformRequest\u65B9\u6CD5\uFF0C\u5BF9config.headers\u548Cconfig.data\u8FDB\u884C\u683C\u5F0F\u5316\n  // \u6BD4\u5982\u5C06headers\u4E2D\u7684Accept\uFF0CContent-Type\u7EDF\u4E00\u5904\u7406\u6210\u5927\u5199\n  // \u6BD4\u5982\u5982\u679C\u8BF7\u6C42\u6B63\u6587\u662F\u4E00\u4E2AObject\u4F1A\u683C\u5F0F\u5316\u4E3AJSON\u5B57\u7B26\u4E32\uFF0C\u5E76\u6DFB\u52A0application/json;charset=utf-8\u7684Content-Type\n  // \u7B49\u4E00\u7CFB\u5217\u64CD\u4F5C\n  config.data = transformData(config.data, config.headers, config.transformRequest)\n\n  // \u5408\u5E76\u4E0D\u540C\u914D\u7F6E\u7684headers\uFF0Cconfig.headers\u7684\u914D\u7F6E\u4F18\u5148\u7EA7\u66F4\u9AD8\n  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {})\n\n  // \u5220\u9664headers\u4E2D\u7684method\u5C5E\u6027\n  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (method) => {\n    delete config.headers[method]\n  })\n\n  // \u5982\u679Cconfig\u914D\u7F6E\u4E86adapter\uFF0C\u4F7F\u7528config\u4E2D\u914D\u7F6Eadapter\u7684\u66FF\u4EE3\u9ED8\u8BA4\u7684\u8BF7\u6C42\u65B9\u6CD5\n  const adapter = config.adapter || defaults.adapter\n\n  // \u4F7F\u7528adapter\u65B9\u6CD5\u53D1\u8D77\u8BF7\u6C42\uFF08adapter\u6839\u636E\u6D4F\u89C8\u5668\u73AF\u5883\u6216\u8005Node\u73AF\u5883\u4F1A\u6709\u4E0D\u540C\uFF09\n  return adapter(config).then(\n    // \u8BF7\u6C42\u6B63\u786E\u8FD4\u56DE\u7684\u56DE\u8C03\n    (response) => {\n      // \u5224\u65AD\u662F\u5426\u4EE5\u53CA\u53D6\u6D88\u4E86\u8BF7\u6C42\uFF0C\u5982\u679C\u53D6\u6D88\u4E86\u8BF7\u6C42\u629B\u51FA\u4EE5\u53D6\u6D88\n      throwIfCancellationRequested(config)\n\n      // \u4F7F\u7528/lib/defaults.js\u4E2D\u7684transformResponse\u65B9\u6CD5\uFF0C\u5BF9\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u636E\u8FDB\u884C\u683C\u5F0F\u5316\n      // \u4F8B\u5982\uFF0C\u4F7F\u7528JSON.parse\u5BF9\u54CD\u5E94\u6B63\u6587\u8FDB\u884C\u89E3\u6790\n      response.data = transformData(response.data, response.headers, config.transformResponse)\n\n      return response\n    },\n    // \u8BF7\u6C42\u5931\u8D25\u7684\u56DE\u8C03\n    (reason) => {\n      if (!isCancel(reason)) {\n        throwIfCancellationRequested(config)\n\n        if (reason && reason.response)\n          reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse)\n      }\n      return Promise.reject(reason)\n    }\n  )\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u518D\u6765\u770B\u770B",(0,r.jsx)(n.code,{children:"axios"}),"\u662F\u5982\u4F55\u5B9E\u73B0\u53D6\u6D88\u8BF7\u6C42\u7684\uFF0C\u5B9E\u73B0\u6587\u4EF6\u5728",(0,r.jsx)(n.code,{children:"CancelToken.js"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function CancelToken(executor) {\n  if (typeof executor !== 'function')\n    throw new TypeError('executor must be a function.')\n\n  // \u5728 CancelToken \u4E0A\u5B9A\u4E49\u4E00\u4E2A pending \u72B6\u6001\u7684 promise \uFF0C\u5C06 resolve \u56DE\u8C03\u8D4B\u503C\u7ED9\u5916\u90E8\u53D8\u91CF resolvePromise\n  let resolvePromise\n  this.promise = new Promise((resolve) => {\n    resolvePromise = resolve\n  })\n\n  const token = this\n  // \u7ACB\u5373\u6267\u884C \u4F20\u5165\u7684 executor\u51FD\u6570\uFF0C\u5C06\u771F\u5B9E\u7684 cancel \u65B9\u6CD5\u901A\u8FC7\u53C2\u6570\u4F20\u9012\u51FA\u53BB\u3002\n  // \u4E00\u65E6\u8C03\u7528\u5C31\u6267\u884C resolvePromise \u5373\u524D\u9762\u7684 promise \u7684 resolve\uFF0C\u5C31\u66F4\u6539promise\u7684\u72B6\u6001\u4E3A resolve\u3002\n  // \u90A3\u4E48xhr\u4E2D\u5B9A\u4E49\u7684 CancelToken.promise.then\u65B9\u6CD5\u5C31\u4F1A\u6267\u884C, \u4ECE\u800Cxhr\u5185\u90E8\u4F1A\u53D6\u6D88\u8BF7\u6C42\n  executor((message) => {\n    // \u5224\u65AD\u8BF7\u6C42\u662F\u5426\u5DF2\u7ECF\u53D6\u6D88\u8FC7\uFF0C\u907F\u514D\u591A\u6B21\u6267\u884C\n    if (token.reason)\n      return\n\n    token.reason = new Cancel(message)\n    resolvePromise(token.reason)\n  })\n}\n\nCancelToken.source = function source() {\n  // source \u65B9\u6CD5\u5C31\u662F\u8FD4\u56DE\u4E86\u4E00\u4E2A CancelToken \u5B9E\u4F8B\uFF0C\u4E0E\u76F4\u63A5\u4F7F\u7528 new CancelToken \u662F\u4E00\u6837\u7684\u64CD\u4F5C\n  let cancel\n  const token = new CancelToken((c) => {\n    cancel = c\n  })\n  // \u8FD4\u56DE\u521B\u5EFA\u7684 CancelToken \u5B9E\u4F8B\u4EE5\u53CA\u53D6\u6D88\u65B9\u6CD5\n  return {\n    token,\n    cancel,\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5B9E\u9645\u4E0A\u53D6\u6D88\u8BF7\u6C42\u7684\u64CD\u4F5C\u662F\u5728 ",(0,r.jsx)(n.code,{children:"xhr.js"})," \u4E2D\u4E5F\u6709\u54CD\u5E94\u7684\u914D\u5408\u7684"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"if (config.cancelToken) {\n  config.cancelToken.promise.then((cancel) => {\n    if (!request)\n      return\n\n    // \u53D6\u6D88\u8BF7\u6C42\n    request.abort()\n    reject(cancel)\n  })\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5DE7\u5999\u7684\u5730\u65B9\u5728 ",(0,r.jsx)(n.code,{children:"CancelToken"}),"\u4E2D ",(0,r.jsx)(n.code,{children:"executor"})," \u51FD\u6570\uFF0C\u901A\u8FC7",(0,r.jsx)(n.code,{children:"resolve"}),"\u51FD\u6570\u7684\u4F20\u9012\u4E0E\u6267\u884C\uFF0C\u63A7\u5236",(0,r.jsx)(n.code,{children:"promise"}),"\u7684\u72B6\u6001"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u5C0F\u7ED3",children:["\u5C0F\u7ED3",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5C0F\u7ED3",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/b1d2ebd0-48b6-11eb-ab90-d9ae814b240d.png",alt:""})}),"\n",(0,r.jsxs)(n.h2,{id:"\u53C2\u8003\u6587\u732E",children:["\u53C2\u8003\u6587\u732E",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u8003\u6587\u732E",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://juejin.cn/post/6856706569263677447#heading-4",target:"_blank",rel:"noopener noreferrer",children:"https://juejin.cn/post/6856706569263677447#heading-4"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://juejin.cn/post/6844903907500490766",target:"_blank",rel:"noopener noreferrer",children:"https://juejin.cn/post/6844903907500490766"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/axios/axios"})}),"\n"]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["interview%2Fvue%2FaxiosCode.md"]={toc:[{text:"\u4E00\u3001axios \u7684\u4F7F\u7528",id:"\u4E00axios-\u7684\u4F7F\u7528",depth:2},{text:"\u4E8C\u3001\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248 axios",id:"\u4E8C\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248-axios",depth:2},{text:"\u4E09\u3001\u6E90\u7801\u5206\u6790",id:"\u4E09\u6E90\u7801\u5206\u6790",depth:2},{text:"\u5C0F\u7ED3",id:"\u5C0F\u7ED3",depth:3},{text:"\u53C2\u8003\u6587\u732E",id:"\u53C2\u8003\u6587\u732E",depth:2}],title:"\u4F60\u4E86\u89E3 axios \u7684\u539F\u7406\u5417\uFF1F\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417\uFF1F",frontmatter:{icon:"question",description:"\u524D\u7AEF\u7269\u8BED|\u9762\u8BD5\u7269\u8BED-\u4F60\u4E86\u89E3 axios \u7684\u539F\u7406\u5417\uFF1F\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417\uFF1F",footer:"\u4F60\u4E86\u89E3 axios \u7684\u539F\u7406\u5417\uFF1F\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417\uFF1F",order:11,star:11,date:"2023-03-14T00:00:00.000Z",author:"h7ml",image:"https://www.h7ml.cn/logo.png",banner:"https://www.h7ml.cn/logo.png",category:["interview","vue"],tag:["interview","vue"],shortTitle:"\u524D\u7AEF\u7269\u8BED|\u9762\u8BD5\u7269\u8BED-\u4F60\u4E86\u89E3 axios \u7684\u539F\u7406\u5417\uFF1F\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417\uFF1F",isOriginal:!1,head:[["meta",{name:"keywords",content:"\u4F60\u4E86\u89E3 axios \u7684\u539F\u7406\u5417\uFF1F\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417\uFF1F"}]]}}}}]);