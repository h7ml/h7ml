/*! For license information please see 13967.c4d6cd69.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["13967"],{7826:function(e,n,d){"use strict";d.r(n);var i=d("52676"),s=d("40453");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"\u8BF4\u8BF4-react-diff-\u7684\u539F\u7406\u662F\u4EC0\u4E48",children:["\u8BF4\u8BF4 React diff \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BF4\u8BF4-react-diff-\u7684\u539F\u7406\u662F\u4EC0\u4E48",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/967e6150-ec91-11eb-85f6-6fac77c0c9b3.png",alt:""})}),"\n",(0,i.jsxs)(n.h2,{id:"\u4E00\u662F\u4EC0\u4E48",children:["\u4E00\u3001\u662F\u4EC0\u4E48",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E00\u662F\u4EC0\u4E48",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8DDF",(0,i.jsx)(n.code,{children:"Vue"}),"\u4E00\u81F4\uFF0C",(0,i.jsx)(n.code,{children:"React"}),"\u901A\u8FC7\u5F15\u5165",(0,i.jsx)(n.code,{children:"Virtual DOM"}),"\u7684\u6982\u5FF5\uFF0C\u6781\u5927\u5730\u907F\u514D\u65E0\u6548\u7684",(0,i.jsx)(n.code,{children:"Dom"}),"\u64CD\u4F5C\uFF0C\u4F7F\u6211\u4EEC\u7684\u9875\u9762\u7684\u6784\u5EFA\u6548\u7387\u63D0\u5230\u4E86\u6781\u5927\u7684\u63D0\u5347"]}),"\n",(0,i.jsxs)(n.p,{children:["\u800C",(0,i.jsx)(n.code,{children:"diff"}),"\u7B97\u6CD5\u5C31\u662F\u66F4\u9AD8\u6548\u5730\u901A\u8FC7\u5BF9\u6BD4\u65B0\u65E7",(0,i.jsx)(n.code,{children:"Virtual DOM"}),"\u6765\u627E\u51FA\u771F\u6B63\u7684",(0,i.jsx)(n.code,{children:"Dom"}),"\u53D8\u5316\u4E4B\u5904"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4F20\u7EDF diff \u7B97\u6CD5\u901A\u8FC7\u5FAA\u73AF\u9012\u5F52\u5BF9\u8282\u70B9\u8FDB\u884C\u4F9D\u6B21\u5BF9\u6BD4\uFF0C\u6548\u7387\u4F4E\u4E0B\uFF0C\u7B97\u6CD5\u590D\u6742\u5EA6\u8FBE\u5230 O(n^3)\uFF0C",(0,i.jsx)(n.code,{children:"react"}),"\u5C06\u7B97\u6CD5\u8FDB\u884C\u4E00\u4E2A\u4F18\u5316\uFF0C\u590D\u6742\u5EA6\u59DC\u7EF4",(0,i.jsx)(n.code,{children:"O(n)"}),"\uFF0C\u4E24\u8005\u6548\u7387\u5DEE\u8DDD\u5982\u4E0B\u56FE\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/a43c9960-ec91-11eb-ab90-d9ae814b240d.png",alt:""})}),"\n",(0,i.jsxs)(n.h2,{id:"\u4E8C\u539F\u7406",children:["\u4E8C\u3001\u539F\u7406",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E8C\u539F\u7406",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"react"}),"\u4E2D",(0,i.jsx)(n.code,{children:"diff"}),"\u7B97\u6CD5\u4E3B\u8981\u9075\u5FAA\u4E09\u4E2A\u5C42\u7EA7\u7684\u7B56\u7565\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"tree \u5C42\u7EA7"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"conponent \u5C42\u7EA7"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"element \u5C42\u7EA7"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"tree-\u5C42\u7EA7",children:["tree \u5C42\u7EA7",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-\u5C42\u7EA7",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DOM"}),"\u8282\u70B9\u8DE8\u5C42\u7EA7\u7684\u64CD\u4F5C\u4E0D\u505A\u4F18\u5316\uFF0C\u53EA\u4F1A\u5BF9\u76F8\u540C\u5C42\u7EA7\u7684\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/ae71d1c0-ec91-11eb-85f6-6fac77c0c9b3.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"\u53EA\u6709\u5220\u9664\u3001\u521B\u5EFA\u64CD\u4F5C\uFF0C\u6CA1\u6709\u79FB\u52A8\u64CD\u4F5C\uFF0C\u5982\u4E0B\u56FE\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/b85f2bb0-ec91-11eb-ab90-d9ae814b240d.png",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"react"}),"\u53D1\u73B0\u65B0\u6811\u4E2D\uFF0CR \u8282\u70B9\u4E0B\u6CA1\u6709\u4E86 A\uFF0C\u90A3\u4E48\u76F4\u63A5\u5220\u9664 A\uFF0C\u5728 D \u8282\u70B9\u4E0B\u521B\u5EFA A \u4EE5\u53CA\u4E0B\u5C5E\u8282\u70B9"]}),"\n",(0,i.jsx)(n.p,{children:"\u4E0A\u8FF0\u64CD\u4F5C\u4E2D\uFF0C\u53EA\u6709\u5220\u9664\u548C\u521B\u5EFA\u64CD\u4F5C"}),"\n",(0,i.jsxs)(n.h3,{id:"conponent-\u5C42\u7EA7",children:["conponent \u5C42\u7EA7",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conponent-\u5C42\u7EA7",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u662F\u540C\u4E00\u4E2A\u7C7B\u7684\u7EC4\u4EF6\uFF0C\u5219\u4F1A\u7EE7\u7EED\u5F80\u4E0B",(0,i.jsx)(n.code,{children:"diff"}),"\u8FD0\u7B97\uFF0C\u5982\u679C\u4E0D\u662F\u4E00\u4E2A\u7C7B\u7684\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u76F4\u63A5\u5220\u9664\u8FD9\u4E2A\u7EC4\u4EF6\u4E0B\u7684\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u521B\u5EFA\u65B0\u7684"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/c1fcdf00-ec91-11eb-ab90-d9ae814b240d.png",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53",(0,i.jsx)(n.code,{children:"component D"}),"\u6362\u6210\u4E86",(0,i.jsx)(n.code,{children:"component G"})," \u540E\uFF0C\u5373\u4F7F\u4E24\u8005\u7684\u7ED3\u6784\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4E5F\u4F1A\u5C06",(0,i.jsx)(n.code,{children:"D"}),"\u5220\u9664\u518D\u91CD\u65B0\u521B\u5EFA",(0,i.jsx)(n.code,{children:"G"})]}),"\n",(0,i.jsxs)(n.h3,{id:"element-\u5C42\u7EA7",children:["element \u5C42\u7EA7",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#element-\u5C42\u7EA7",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5BF9\u4E8E\u6BD4\u8F83\u540C\u4E00\u5C42\u7EA7\u7684\u8282\u70B9\u4EEC\uFF0C\u6BCF\u4E2A\u8282\u70B9\u5728\u5BF9\u5E94\u7684\u5C42\u7EA7\u7528\u552F\u4E00\u7684",(0,i.jsx)(n.code,{children:"key"}),"\u4F5C\u4E3A\u6807\u8BC6"]}),"\n",(0,i.jsxs)(n.p,{children:["\u63D0\u4F9B\u4E86 3 \u79CD\u8282\u70B9\u64CD\u4F5C\uFF0C\u5206\u522B\u4E3A ",(0,i.jsx)(n.code,{children:"INSERT_MARKUP"}),"(\u63D2\u5165)\u3001",(0,i.jsx)(n.code,{children:"MOVE_EXISTING"})," (\u79FB\u52A8)\u548C ",(0,i.jsx)(n.code,{children:"REMOVE_NODE"})," (\u5220\u9664)"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4E0B\u573A\u666F\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/cae1c9a0-ec91-11eb-ab90-d9ae814b240d.png",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7",(0,i.jsx)(n.code,{children:"key"}),"\u53EF\u4EE5\u51C6\u786E\u5730\u53D1\u73B0\u65B0\u65E7\u96C6\u5408\u4E2D\u7684\u8282\u70B9\u90FD\u662F\u76F8\u540C\u7684\u8282\u70B9\uFF0C\u56E0\u6B64\u65E0\u9700\u8FDB\u884C\u8282\u70B9\u5220\u9664\u548C\u521B\u5EFA\uFF0C\u53EA\u9700\u8981\u5C06\u65E7\u96C6\u5408\u4E2D\u8282\u70B9\u7684\u4F4D\u7F6E\u8FDB\u884C\u79FB\u52A8\uFF0C\u66F4\u65B0\u4E3A\u65B0\u96C6\u5408\u4E2D\u8282\u70B9\u7684\u4F4D\u7F6E"]}),"\n",(0,i.jsx)(n.p,{children:"\u6D41\u7A0B\u5982\u4E0B\u8868\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/interview/d34c5420-ec91-11eb-85f6-6fac77c0c9b3.png",alt:""})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"index\uFF1A \u65B0\u96C6\u5408\u7684\u904D\u5386\u4E0B\u6807\u3002"}),"\n",(0,i.jsx)(n.li,{children:"oldIndex\uFF1A\u5F53\u524D\u8282\u70B9\u5728\u8001\u96C6\u5408\u4E2D\u7684\u4E0B\u6807"}),"\n",(0,i.jsx)(n.li,{children:"maxIndex\uFF1A\u5728\u65B0\u96C6\u5408\u8BBF\u95EE\u8FC7\u7684\u8282\u70B9\u4E2D\uFF0C\u5176\u5728\u8001\u96C6\u5408\u7684\u6700\u5927\u4E0B\u6807"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u5F53\u524D\u8282\u70B9\u5728\u65B0\u96C6\u5408\u4E2D\u7684\u4F4D\u7F6E\u6BD4\u8001\u96C6\u5408\u4E2D\u7684\u4F4D\u7F6E\u9760\u524D\u7684\u8BDD\uFF0C\u662F\u4E0D\u4F1A\u5F71\u54CD\u540E\u7EED\u8282\u70B9\u64CD\u4F5C\u7684\uFF0C\u8FD9\u91CC\u8FD9\u65F6\u5019\u88AB\u52A8\u5B57\u8282\u4E0D\u7528\u52A8"}),"\n",(0,i.jsx)(n.p,{children:"\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u53EA\u6BD4\u8F83 oldIndex \u548C maxIndex\uFF0C\u89C4\u5219\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5F53 oldIndex>maxIndex \u65F6\uFF0C\u5C06 oldIndex \u7684\u503C\u8D4B\u503C\u7ED9 maxIndex"}),"\n",(0,i.jsx)(n.li,{children:"\u5F53 oldIndex=maxIndex \u65F6\uFF0C\u4E0D\u64CD\u4F5C"}),"\n",(0,i.jsx)(n.li,{children:"\u5F53 oldIndex<maxIndex \u65F6\uFF0C\u5C06\u5F53\u524D\u8282\u70B9\u79FB\u52A8\u5230 index \u7684\u4F4D\u7F6E"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"diff"}),"\u8FC7\u7A0B\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8282\u70B9 B\uFF1A\u6B64\u65F6 maxIndex=0\uFF0ColdIndex=1\uFF1B\u6EE1\u8DB3 maxIndex< oldIndex\uFF0C\u56E0\u6B64 B \u8282\u70B9\u4E0D\u52A8\uFF0C\u6B64\u65F6 maxIndex= Math.max(oldIndex, maxIndex)\uFF0C\u5C31\u662F 1"}),"\n",(0,i.jsx)(n.li,{children:"\u8282\u70B9 A\uFF1A\u6B64\u65F6 maxIndex=1\uFF0ColdIndex=0\uFF1B\u4E0D\u6EE1\u8DB3 maxIndex< oldIndex\uFF0C\u56E0\u6B64 A \u8282\u70B9\u8FDB\u884C\u79FB\u52A8\u64CD\u4F5C\uFF0C\u6B64\u65F6 maxIndex= Math.max(oldIndex, maxIndex)\uFF0C\u8FD8\u662F 1"}),"\n",(0,i.jsx)(n.li,{children:"\u8282\u70B9 D\uFF1A\u6B64\u65F6 maxIndex=1, oldIndex=3\uFF1B\u6EE1\u8DB3 maxIndex< oldIndex\uFF0C\u56E0\u6B64 D \u8282\u70B9\u4E0D\u52A8\uFF0C\u6B64\u65F6 maxIndex= Math.max(oldIndex, maxIndex)\uFF0C\u5C31\u662F 3"}),"\n",(0,i.jsx)(n.li,{children:"\u8282\u70B9 C\uFF1A\u6B64\u65F6 maxIndex=3\uFF0ColdIndex=2\uFF1B\u4E0D\u6EE1\u8DB3 maxIndex< oldIndex\uFF0C\u56E0\u6B64 C \u8282\u70B9\u8FDB\u884C\u79FB\u52A8\u64CD\u4F5C\uFF0C\u5F53\u524D\u5DF2\u7ECF\u6BD4\u8F83\u5B8C\u4E86"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53 ABCD \u8282\u70B9\u6BD4\u8F83\u5B8C\u6210\u540E\uFF0C",(0,i.jsx)(n.code,{children:"diff"}),"\u8FC7\u7A0B\u8FD8\u6CA1\u5B8C\uFF0C\u8FD8\u4F1A\u6574\u4F53\u904D\u5386\u8001\u96C6\u5408\u4E2D\u8282\u70B9\uFF0C\u770B\u6709\u6CA1\u6709\u6CA1\u7528\u5230\u7684\u8282\u70B9\uFF0C\u6709\u7684\u8BDD\uFF0C\u5C31\u5220\u9664"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u4E09\u6CE8\u610F\u4E8B\u9879",children:["\u4E09\u3001\u6CE8\u610F\u4E8B\u9879",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E09\u6CE8\u610F\u4E8B\u9879",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5BF9\u4E8E\u7B80\u5355\u5217\u8868\u6E32\u67D3\u800C\u8A00\uFF0C\u4E0D\u4F7F\u7528",(0,i.jsx)(n.code,{children:"key"}),"\u6BD4\u4F7F\u7528",(0,i.jsx)(n.code,{children:"key"}),"\u7684\u6027\u80FD\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:"\u5C06\u4E00\u4E2A[1,2,3,4,5]\uFF0C\u6E32\u67D3\u6210\u5982\u4E0B\u7684\u6837\u5B50\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<div>1</div>\n<div>2</div>\n<div>3</div>\n<div>4</div>\n<div>5</div>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u540E\u7EED\u66F4\u6539\u6210[1,3,2,5,4]\uFF0C\u4F7F\u7528",(0,i.jsx)(n.code,{children:"key"}),"\u4E0E\u4E0D\u4F7F\u7528",(0,i.jsx)(n.code,{children:"key"}),"\u4F5C\u7528\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'1.\u52A0key\n<div key="1">1</div>\n<div key="1">1</div>\n<div key="2">2</div>\n<div key="3">3</div>\n<div key="3">3</div>\n========>\n<div key="2">2</div>\n<div key="4">4</div>\n<div key="5">5</div>\n<div key="5">5</div>\n<div key="4">4</div>\n\u64CD\u4F5C\uFF1A\u8282\u70B92\u79FB\u52A8\u81F3\u4E0B\u6807\u4E3A2\u7684\u4F4D\u7F6E\uFF0C\u8282\u70B94\u79FB\u52A8\u81F3\u4E0B\u6807\u4E3A4\u7684\u4F4D\u7F6E\u3002 2.\u4E0D\u52A0key\n<div>1</div>\n<div>1</div>\n<div>2</div>\n<div>3</div>\n<div>3</div>\n========>\n<div>2</div>\n<div>4</div>\n<div>5</div>\n<div>5</div>\n<div>4</div>\n\u64CD\u4F5C\uFF1A\u4FEE\u6539\u7B2C1\u4E2A\u5230\u7B2C5\u4E2A\u8282\u70B9\u7684innerText\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u6211\u4EEC\u5BF9\u8FD9\u4E2A\u96C6\u5408\u8FDB\u884C\u589E\u5220\u7684\u64CD\u4F5C\u6539\u6210[1,3,2,5,6]"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'1.\u52A0key\n<div key="1">1</div>\n<div key="1">1</div>\n<div key="2">2</div>\n<div key="3">3</div>\n<div key="3">3</div>\n========>\n<div key="2">2</div>\n<div key="4">4</div>\n<div key="5">5</div>\n<div key="5">5</div>\n<div key="6">6</div>\n\u64CD\u4F5C\uFF1A\u8282\u70B92\u79FB\u52A8\u81F3\u4E0B\u6807\u4E3A2\u7684\u4F4D\u7F6E\uFF0C\u65B0\u589E\u8282\u70B96\u81F3\u4E0B\u6807\u4E3A4\u7684\u4F4D\u7F6E\uFF0C\u5220\u9664\u8282\u70B94\u3002 2.\u4E0D\u52A0key\n<div>1</div>\n<div>1</div>\n<div>2</div>\n<div>3</div>\n<div>3</div>\n========>\n<div>2</div>\n<div>4</div>\n<div>5</div>\n<div>5</div>\n<div>6</div>\n\u64CD\u4F5C\uFF1A\u4FEE\u6539\u7B2C1\u4E2A\u5230\u7B2C5\u4E2A\u8282\u70B9\u7684innerText\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4E8E",(0,i.jsx)(n.code,{children:"dom"}),"\u8282\u70B9\u7684\u79FB\u52A8\u64CD\u4F5C\u5F00\u9500\u662F\u6BD4\u8F83\u6602\u8D35\u7684\uFF0C\u6CA1\u6709",(0,i.jsx)(n.code,{children:"key"}),"\u7684\u60C5\u51B5\u4E0B\u8981\u6BD4\u6709",(0,i.jsx)(n.code,{children:"key"}),"\u7684\u6027\u80FD\u66F4\u597D"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u53C2\u8003\u6587\u732E",children:["\u53C2\u8003\u6587\u732E",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u8003\u6587\u732E",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/140489744",target:"_blank",rel:"noopener noreferrer",children:"https://zhuanlan.zhihu.com/p/140489744"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/20346379",target:"_blank",rel:"noopener noreferrer",children:"https://zhuanlan.zhihu.com/p/20346379"})}),"\n"]}),"\n"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["interview%2FReact%2Fdiff.md"]={toc:[{text:"\u4E00\u3001\u662F\u4EC0\u4E48",id:"\u4E00\u662F\u4EC0\u4E48",depth:2},{text:"\u4E8C\u3001\u539F\u7406",id:"\u4E8C\u539F\u7406",depth:2},{text:"tree \u5C42\u7EA7",id:"tree-\u5C42\u7EA7",depth:3},{text:"conponent \u5C42\u7EA7",id:"conponent-\u5C42\u7EA7",depth:3},{text:"element \u5C42\u7EA7",id:"element-\u5C42\u7EA7",depth:3},{text:"\u4E09\u3001\u6CE8\u610F\u4E8B\u9879",id:"\u4E09\u6CE8\u610F\u4E8B\u9879",depth:2},{text:"\u53C2\u8003\u6587\u732E",id:"\u53C2\u8003\u6587\u732E",depth:2}],title:"\u8BF4\u8BF4 React diff \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F",frontmatter:{icon:"question",description:"\u524D\u7AEF\u7269\u8BED|\u9762\u8BD5\u7269\u8BED-\u8BF4\u8BF4 React diff \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F",footer:"<a href='https://beian.mit.gov.cn/' target='blank'>\u6D59ICP\u59072021037683\u53F7-2</a>\u8BF4\u8BF4 React diff \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F",order:5,star:5,date:"2023-03-09T00:00:00.000Z",author:"h7ml",image:"https://www.h7ml.cn/logo.png",banner:"https://www.h7ml.cn/logo.png",category:["interview","React"],tag:["interview","React"],shortTitle:"\u524D\u7AEF\u7269\u8BED|\u9762\u8BD5\u7269\u8BED-\u8BF4\u8BF4 React diff \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F",isOriginal:!1,head:[["meta",{name:"keywords",content:"\u8BF4\u8BF4 React diff \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F"}]]}}}}]);