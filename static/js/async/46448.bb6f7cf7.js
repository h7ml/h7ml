/*! For license information please see 46448.bb6f7cf7.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["46448"],{83904:function(e,n,a){"use strict";a.r(n);var r=a("52676"),s=a("40453");function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"javascript-es6-map-\u5BF9\u8C61",children:["JavaScript ES6 Map \u5BF9\u8C61",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#javascript-es6-map-\u5BF9\u8C61",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65B9\u6CD5"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"set()\u3001get()\u3001delete()\u3001has()\u3001clear()\u3001size"}),"\n",(0,r.jsxs)(n.h2,{id:"setget-\u952E\u503C\u5BF9",children:["set\uFF0Cget \u952E\u503C\u5BF9",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setget-\u952E\u503C\u5BF9",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"key \u662F\u5B57\u7B26\u4E32"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const myMap = new Map()\nmyMap.set('\u952E', '\u548C\u952E\u5173\u8054\u7684\u503C') // \u8BBE\u7F6E \u952E\u503C\u5BF9\nmyMap.get('\u952E') // \"\u548C\u952E\u5173\u8054\u7684\u503C\" \u83B7\u53D6\u503C\n"})}),"\n",(0,r.jsx)(n.p,{children:"key \u662F\u5BF9\u8C61"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const myMap = new Map()\nconst keyObj = {}\nmyMap.set(keyObj, '\u548C\u952E keyObj \u5173\u8054\u7684\u503C')\nmyMap.get(keyObj) // \"\u548C\u952E keyObj \u5173\u8054\u7684\u503C\"\nmyMap.get({}) // undefined, \u56E0\u4E3A keyObj !== {}\n"})}),"\n",(0,r.jsx)(n.p,{children:"key \u662F\u51FD\u6570\u65F6\u4E5F\u4E0E key \u662F\u5BF9\u8C61\u540C\u7406\u3002"}),"\n",(0,r.jsx)(n.p,{children:"key \u662F NaN \uFF0CNaN \u4F5C\u4E3A Map \u7684\u952E\u6CA1\u6709\u533A\u522B\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const myMap = new Map()\nmyMap.set(Number.NaN, 'not a number')\nmyMap.get(Number.NaN) // \"not a number\"\nmyMap.get(Number('\u65E0\u6CD5\u8F6C\u6362')) // \"not a number\"\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"map-\u7684\u8FED\u4EE3-\u904D\u5386",children:["Map \u7684\u8FED\u4EE3 \u904D\u5386",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#map-\u7684\u8FED\u4EE3-\u904D\u5386",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const myMap = new Map()\nmyMap.set(0, 'zero')\nmyMap.set(1, 'one')\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"forof",children:["for...of",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#forof",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'for (var [key, value] of myMap)\n  console.log(`${key} = ${value}`)\n\n/* \u6253\u5370\u4E24\u6B21\n  "0 = zero"\n  "1 = one"\n*/\n\nmyMap.entries() // MapIterator {0 => "zero", 1 => "one"}\nfor (var [key, value] of myMap.entries())\n  console.log(`${key} = ${value}`)\n\n// entries() \u65B9\u6CD5\u8FD4\u56DE Iterator \u5BF9\u8C61\uFF0C\u5B83\u6309set\u63D2\u5165\u952E\u503C\u5BF9\u987A\u5E8F\u5305\u542B Map \u5BF9\u8C61\u4E2D\u6BCF\u4E2A\u5143\u7D20\u7684 [key, value] \u6570\u7EC4\u3002\n\nmyMap.keys() // MapIterator {0, 1} \u8FD4\u56DE\u952E\nfor (var key of myMap.keys())\n  console.log(key) // \u6253\u5370 0 \u548C 1\n\n// keys()\u8FD4\u56DE Iterator \u5BF9\u8C61\uFF0C\u6309\u63D2\u5165\u987A\u5E8F\u5305\u542B Map \u5BF9\u8C61\u6BCF\u4E2A\u5143\u7D20\u7684\u952E\n\nmyMap.values() // MapIterator {"zero", "one"}\nfor (var value of myMap.values())\n  console.log(value) // \u4E00\u4E2A\u662F "zero" \u53E6\u4E00\u4E2A\u662F "one"\n\n/* values() \u8FD4\u56DE Iterator \u5BF9\u8C61\uFF0C\u6309\u63D2\u5165\u987A\u5E8F\u5305\u542B Map \u5BF9\u8C61\u6BCF\u4E2A\u5143\u7D20\u7684\u503C\u3002 */\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"foreach",children:["forEach",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#foreach",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'myMap.forEach(function(value, key) {\n console.log(key + " = " + value);\n // \u4E00\u4E2A\u662F "0 = zero" \u53E6\u4E00\u4E2A\u662F "1 = one"\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"\u5BF9\u8C61\u64CD\u4F5C",children:["\u5BF9\u8C61\u64CD\u4F5C",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5BF9\u8C61\u64CD\u4F5C",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u8F6C\u6362",children:["\u8F6C\u6362",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8F6C\u6362",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const kvArray = [\n  [\'key1\', \'value1\'],\n  [\'key2\', \'value2\'],\n]\n// \u53EF\u4EE5\u5C06 \u4E8C\u7EF4 \u952E\u503C\u5BF9\u6570\u7EC4\u8F6C\u6362 Map \u5BF9\u8C61\n\nconst myMap = new Map(kvArray) // {"key1" => "value1", "key2" => "value2"}\n// Array.from \u51FD\u6570\u5C06 Map \u5BF9\u8C61\u8F6C\u56DE\u53BB\n\nconst outArray = Array.from(myMap) // [["key1", "value1"], ["key2", "value2"]]\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"\u514B\u9686",children:["\u514B\u9686",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u514B\u9686",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const myMap1 = new Map([\n  ['key1', 'value1'],\n  ['key2', 'value2'],\n])\nconst myMap2 = new Map(myMap1)\n/* {\"key1\" => \"value1\", \"key2\" => \"value2\"} */\n\nconsole.log(myMap1 === myMap2) // false \u65B0\u5730\u5740\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u5408\u5E76",children:["\u5408\u5E76",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5408\u5E76",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const first = new Map([\n  [1, 'one'],\n  [2, 'two'],\n  [3, 'three'],\n])\nconst second = new Map([\n  [1, 'uno'],\n  [2, 'dos'],\n])\n// \u5408\u5E76\u4E24\u4E2A Map \u5BF9\u8C61\u65F6\uFF0C\u6709\u91CD\u590D\u7684\u952E\u503C\uFF0C\u5219\u540E\u9762\u7684\u4F1A\u8986\u76D6\u524D\u9762\u7684\uFF0C\u5BF9\u5E94\u503C\u5373 uno\uFF0Cdos\uFF0C three\n\nconst merged = new Map([...first, ...second]) // \u89E3\u6784\u4F20\u53C2\nconsole.log(merged) // {1 => \"uno\", 2 => \"dos\", 3 => \"three\"}\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["posts%2Fecmascript%2FMap.md"]={toc:[{text:"set\uFF0Cget \u952E\u503C\u5BF9",id:"setget-\u952E\u503C\u5BF9",depth:2},{text:"Map \u7684\u8FED\u4EE3 \u904D\u5386",id:"map-\u7684\u8FED\u4EE3-\u904D\u5386",depth:2},{text:"for...of",id:"forof",depth:3},{text:"forEach",id:"foreach",depth:3},{text:"\u5BF9\u8C61\u64CD\u4F5C",id:"\u5BF9\u8C61\u64CD\u4F5C",depth:2},{text:"\u8F6C\u6362",id:"\u8F6C\u6362",depth:3},{text:"\u514B\u9686",id:"\u514B\u9686",depth:3},{text:"\u5408\u5E76",id:"\u5408\u5E76",depth:3}],title:"JavaScript ES6 Map \u5BF9\u8C61",frontmatter:{}}}}]);