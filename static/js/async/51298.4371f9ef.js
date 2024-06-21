/*! For license information please see 51298.4371f9ef.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["51298"],{24565:function(e,n,s){"use strict";s.r(n);var a=s("52676"),r=s("40453");function c(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",div:"div",ul:"ul",li:"li",p:"p"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"javascript-es6-object-\u5BF9\u8C61",children:["JavaScript ES6 Object \u5BF9\u8C61",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#javascript-es6-object-\u5BF9\u8C61",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"\u7B80\u5199",children:["\u7B80\u5199",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7B80\u5199",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"\u5BF9\u8C61\u7B80\u5199",children:["\u5BF9\u8C61\u7B80\u5199",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5BF9\u8C61\u7B80\u5199",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const age = 12\nconst name = 'Amy'\nconst person = { age, name } // {age: 12, name: \"Amy\"}\n// \u7B49\u540C\u4E8E person = {age: age, name: name}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"\u65B9\u6CD5\u7B80\u5199",children:["\u65B9\u6CD5\u7B80\u5199",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u65B9\u6CD5\u7B80\u5199",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const person = {\n  sayHi() {\n    console.log('Hi')\n  },\n}\n"})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"Generator \u51FD\u6570\uFF0C\u8981\u5728\u524D\u9762\u52A0\u661F\u53F7"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const obj = {\n  *myGenerator() {\n    yield 'hello world'\n  },\n}\n"})}),"\n"]})]}),"\n",(0,a.jsxs)(n.h3,{id:"\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F",children:["\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"[\u53D8\u91CF]"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let a = 'aaa';\nlet obj = {\n  [a]: 'bbb',\n};\n\nconst obj = {\n  ['he' + 'llo']() {\n    return 'Hi';\n  },\n};\nobj.hello(); // \"Hi\"\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"\u5408\u5E76\u5BF9\u8C61",children:["\u5408\u5E76\u5BF9\u8C61",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5408\u5E76\u5BF9\u8C61",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const age = { age: 15 }\nconst name = { name: 'Amy' }\nconst person = { ...age, ...name } // {age: 15, name: \"Amy\"}\n"})}),"\n",(0,a.jsx)(n.p,{children:":::tip \u6CE8\u610F\u5982\u679C\u4E24\u4E2A\u5BF9\u8C61\u6709\u540C\u540D\u7684\u5C5E\u6027\u4F1A\u88AB\u8986\u76D6\uFF08\u6570\u7EC4\u4E5F\u662F\u540C\u7406\uFF09 :::"}),"\n",(0,a.jsxs)(n.h3,{id:"objectassign",children:["Object.assign()",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#objectassign",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Object.assign(target, source_1, \xb7\xb7\xb7)\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5C06\u540E\u9762\u6240\u6709\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u8D4B\u503C\u5230 target \u5BF9\u8C61\u4E2D\u3002\u91CD\u590D\u7684\u503C\u4F1A\u8986\u76D6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const target = { a: 1 }\nconst object2 = { b: 2 }\nconst object3 = { c: 3 }\nObject.assign(target, object2, object3) // {a: 1, b: 2, c: 3}\n// \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5BF9\u8C61\uFF0C\u540E\u9762\u7684\u53C2\u6570\u662F\u6E90\u5BF9\u8C61\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\uFF0C\u4E5F\u4F1A\u8F6C\u6362\u4E3A\u5BF9\u8C61\u8FD4\u56DE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Object.assign(3) // Number {3}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7B2C\u4E00\u4E2A\u53C2\u6570\u65F6 null \u6216 undefined \u4F1A\u62A5\u9519"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Object.assign(null) // TypeError: Cannot ...\n"})}),"\n",(0,a.jsx)(n.p,{children:"null \u548C undefined \u653E\u7B2C\u4E8C\u4E2A\u4E4B\u540E\u4F1A\u8DF3\u8FC7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Object.assign(1, undefined) // Number {1}\n// \u6CE8\u610F\uFF1A assign \u7684\u5C5E\u6027\u62F7\u8D1D\u662F\u6D45\u62F7\u8D1D\nconst sourceObj = { a: { b: 1 } }\nconst targetObj = { c: 3 }\nObject.assign(targetObj, sourceObj)\ntargetObj.a.b = 2 // \u539F\u59CB\u503C\u4FEE\u6539\nsourceObj.a.b // 2 \u5DF2\u7ECF\u62F7\u8D1D\u7684\u503C\u4E5F\u4F1A\u8DDF\u7740\u53D8\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u540C\u540D\u5C5E\u6027\u4F1A\u88AB\u66FF\u6362"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"targetObj = { a: { b: 1, c: 2 } }\nsourceObj = { a: { b: 'hh' } }\nObject.assign(targetObj, sourceObj) // {a: {b: \"hh\"}}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6570\u7EC4\u7684\u5904\u7406"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Object.assign([2, 3], [5]) // [5,3] \u4E0B\u68070\u88AB\u8986\u76D6\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"\u94FE\u5224\u65AD\u8FD0\u7B97\u7B26",children:["\u94FE\u5224\u65AD\u8FD0\u7B97\u7B26",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u94FE\u5224\u65AD\u8FD0\u7B97\u7B26",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const firstName = message?.body?.user?.firstName || 'default'\nconst fooValue = myForm.querySelector('input[name=foo]')?.value\n// \u5982\u679C\u5DE6\u4FA7\u7684\u503C\u4E3A null\u6216undefined \u5219\u4E0D\u518D\u5F80\u4E0B\u8FD0\u7B97\niterator.return?.() // \u5224\u65AD\u65B9\u6CD5\u662F\u5426\u5B58\u5728\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"\u4E09\u79CD\u7528\u6CD5",children:["\u4E09\u79CD\u7528\u6CD5",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E09\u79CD\u7528\u6CD5",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"a?.b\n// \u7B49\u540C\u4E8E\na == null ? undefined : a.b\n\na?.[x]\n// \u7B49\u540C\u4E8E\na == null ? undefined : a[x]\n\na?.b()\n// \u7B49\u540C\u4E8E\na == null ? undefined : a.b()\n\na?.()\n// \u7B49\u540C\u4E8E\na == null ? undefined : a()\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["posts%2Fecmascript%2FObject.md"]={toc:[{text:"\u7B80\u5199",id:"\u7B80\u5199",depth:2},{text:"\u5BF9\u8C61\u7B80\u5199",id:"\u5BF9\u8C61\u7B80\u5199",depth:3},{text:"\u65B9\u6CD5\u7B80\u5199",id:"\u65B9\u6CD5\u7B80\u5199",depth:3},{text:"\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F",id:"\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F",depth:3},{text:"\u5408\u5E76\u5BF9\u8C61",id:"\u5408\u5E76\u5BF9\u8C61",depth:2},{text:"Object.assign()",id:"objectassign",depth:3},{text:"\u94FE\u5224\u65AD\u8FD0\u7B97\u7B26",id:"\u94FE\u5224\u65AD\u8FD0\u7B97\u7B26",depth:2},{text:"\u4E09\u79CD\u7528\u6CD5",id:"\u4E09\u79CD\u7528\u6CD5",depth:3}],title:"JavaScript ES6 Object \u5BF9\u8C61",frontmatter:{}}}}]);