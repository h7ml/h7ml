/*! For license information please see 54147.45b4ff7e.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["54147"],{21179:function(e,n,d){"use strict";d.r(n);var t=d("52676"),o=d("40453");function s(e){let n=Object.assign({h2:"h2",a:"a",ul:"ul",li:"li",p:"p",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"react-hook-\u539F\u7406",children:["react hook \u539F\u7406",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#react-hook-\u539F\u7406",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://7kms.github.io/react-illustration-series/main/hook-summary",target:"_blank",rel:"noopener noreferrer",children:"Hook \u539F\u7406(\u6982\u89C8)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://react.iamkasong.com/hooks/create.html",target:"_blank",rel:"noopener noreferrer",children:"hook \u7684\u5B9E\u73B0"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8BB2 hooks \u4E4B\u524D\u63D0\u51FA\u4E00\u4E2A\u95EE\u9898\uFF1A\u4E3A\u4EC0\u4E48 hooks \u4E0D\u80FD\u5199\u5728\u6761\u4EF6\u8BED\u53E5\u4E4B\u4E2D\uFF1F"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4EEC\u5728\u521D\u59CB\u5316 hooks \u7684\u65F6\u5019\uFF0C",(0,t.jsx)(n.code,{children:"fiber"})," \u7684\u7ED3\u6784\u662F\u957F\u4EC0\u4E48\u6837\u7684\u5462\uFF1F"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function App() {\n  const [num, updateNum] = useState(0);\n  const [name, setName] = useState('alvin');\n  return null\n}\n// fiber \u7ED3\u6784\uFF1A\n{\n  // memoizedState\uFF1Ahooks \u94FE\u8868\u7ED3\u6784\n  memoizedState: {\n    queue: { pending: null },\n    memoizedState: 1,\n    next: { queue: { pending: null}, memoizedState: 'alvin', next: null }\n  },\n  stateNode: [Function: App]\n  // \u5176\u4ED6\u5C5E\u6027...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53\u6211\u4EEC\u6267\u884C ",(0,t.jsx)(n.code,{children:"updateNum"})," \u600E\u4E48\u53BB\u66F4\u65B0\u6211\u4EEC\u7684\u5E94\u7528\u5462\uFF1F"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u4E0A\uFF0C\u521B\u5EFA\u4E00\u4E2A ",(0,t.jsx)(n.code,{children:"hooks"})," \u94FE\u8868\u7ED3\u6784\uFF0C\u5B58\u50A8\u5728 ",(0,t.jsx)(n.code,{children:"fiber"})," \u7684 ",(0,t.jsx)(n.code,{children:"memoizedState"})," \u5C5E\u6027\u4E0A\uFF0Cnext \u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2A ",(0,t.jsx)(n.code,{children:"hooks"})]}),"\n",(0,t.jsxs)(n.h3,{id:"\u521B\u5EFA\u66F4\u65B0\u5BF9\u8C61",children:["\u521B\u5EFA\u66F4\u65B0\u5BF9\u8C61",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u66F4\u65B0\u5BF9\u8C61",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const update = { action, next: null }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5BF9\u4E8E ",(0,t.jsx)(n.code,{children:"App"})," \u6765\u8BF4\uFF0C\u70B9\u51FB ",(0,t.jsx)(n.code,{children:"p"})," \u6807\u7B7E\u4EA7\u751F\u7684 ",(0,t.jsx)(n.code,{children:"update"})," \u7684 ",(0,t.jsx)(n.code,{children:"action"})," \u4E3A ",(0,t.jsx)(n.code,{children:"num => num + 1"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C\u6211\u4EEC\u6539\u5199\u4E0B ",(0,t.jsx)(n.code,{children:"App"})," \u7684 ",(0,t.jsx)(n.code,{children:"onClick"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u4E4B\u524D\nreturn <p onClick={() => updateNum((num) => num + 1)}>{num}</p>;\n\n// \u4E4B\u540E\nreturn (\n  <p\n    onClick={() => {\n      updateNum((num) => num + 1);\n      updateNum((num) => num + 1);\n      updateNum((num) => num + 1);\n    }}\n  >\n    {num}\n  </p>\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u90A3\u4E48\u70B9\u51FB ",(0,t.jsx)(n.code,{children:"p"})," \u6807\u7B7E\u4F1A\u4EA7\u751F\u4E09\u4E2A ",(0,t.jsx)(n.code,{children:"update"}),"\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"\u5408\u5E76\u66F4\u65B0",children:["\u5408\u5E76\u66F4\u65B0",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5408\u5E76\u66F4\u65B0",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u4E9B ",(0,t.jsx)(n.code,{children:"update"})," \u662F\u5982\u4F55\u7EC4\u5408\u5728\u4E00\u8D77\u5462\uFF1F"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7B54\u6848\u662F\uFF1A\u4ED6\u4EEC\u4F1A\u5F62\u6210",(0,t.jsx)(n.strong,{children:"\u73AF\u72B6\u5355\u5411\u94FE\u8868"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function dispatchAction(queue, action) {\n  // \u521B\u5EFAupdate\n  const update = { action, next: null }\n\n  // \u73AF\u72B6\u5355\u5411\u94FE\u8868\u64CD\u4F5C\n  if (queue.pending === null) {\n    update.next = update\n  }\n  else {\n    update.next = queue.pending.next\n    queue.pending.next = update\n  }\n\n  queue.pending = update\n\n  // \u6A21\u62DFReact\u5F00\u59CB\u8C03\u5EA6\u66F4\u65B0\n  schedule()\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u73AF\u72B6\u94FE\u8868\u64CD\u4F5C\u4E0D\u592A\u5BB9\u6613\u7406\u89E3\uFF0C\u8FD9\u91CC\u6211\u4EEC\u8BE6\u7EC6\u8BB2\u89E3\u4E0B\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53\u4EA7\u751F\u7B2C\u4E00\u4E2A",(0,t.jsx)(n.code,{children:"update"}),"\uFF08\u6211\u4EEC\u53EB\u4ED6",(0,t.jsx)(n.code,{children:"u0"}),"\uFF09\uFF0C\u6B64\u65F6",(0,t.jsx)(n.code,{children:"queue.pending === null"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"update.next = update;"}),"\u5373",(0,t.jsx)(n.code,{children:"u0.next = u0"}),"\uFF0C\u4ED6\u4F1A\u548C\u81EA\u5DF1\u9996\u5C3E\u76F8\u8FDE\u5F62\u6210",(0,t.jsx)(n.code,{children:"\u5355\u5411\u73AF\u72B6\u94FE\u8868"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540E",(0,t.jsx)(n.code,{children:"queue.pending = update;"}),"\u5373",(0,t.jsx)(n.code,{children:"queue.pending = u0"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"queue.pending = u0 ---\x3e u0\n                ^       |\n                |       |\n                ---------\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53\u4EA7\u751F\u7B2C\u4E8C\u4E2A",(0,t.jsx)(n.code,{children:"update"}),"\uFF08\u6211\u4EEC\u53EB\u4ED6",(0,t.jsx)(n.code,{children:"u1"}),"\uFF09\uFF0C",(0,t.jsx)(n.code,{children:"update.next = queue.pending.next;"}),"\uFF0C\u6B64\u65F6",(0,t.jsx)(n.code,{children:"queue.pending.next === u0"}),"\uFF0C\u5373",(0,t.jsx)(n.code,{children:"u1.next = u0"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"queue.pending.next = update;"}),"\uFF0C\u5373",(0,t.jsx)(n.code,{children:"u0.next = u1"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540E",(0,t.jsx)(n.code,{children:"queue.pending = update;"}),"\u5373",(0,t.jsx)(n.code,{children:"queue.pending = u1"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"queue.pending = u1 ---\x3e u0\n                ^       |\n                |       |\n                ---------\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u7167\u7740\u8FD9\u4E2A\u4F8B\u5B50\u6A21\u62DF\u63D2\u5165\u591A\u4E2A",(0,t.jsx)(n.code,{children:"update"}),"\u7684\u60C5\u51B5\uFF0C\u4F1A\u53D1\u73B0",(0,t.jsx)(n.code,{children:"queue.pending"}),"\u59CB\u7EC8\u6307\u5411\u6700\u540E\u4E00\u4E2A\u63D2\u5165\u7684",(0,t.jsx)(n.code,{children:"update"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\uFF0C\u5F53\u6211\u4EEC\u8981\u904D\u5386",(0,t.jsx)(n.code,{children:"update"}),"\u65F6\uFF0C",(0,t.jsx)(n.code,{children:"queue.pending.next"}),"\u6307\u5411\u7B2C\u4E00\u4E2A\u63D2\u5165\u7684",(0,t.jsx)(n.code,{children:"update"}),"\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"\u7B80\u5355\u5B9E\u73B0",children:["\u7B80\u5355\u5B9E\u73B0",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7B80\u5355\u5B9E\u73B0",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"\u8BE6\u60C5\u7565..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let workInProgressHook\nlet isMount = true\n\n// App\u7EC4\u4EF6\u5BF9\u5E94\u7684fiber\u5BF9\u8C61\nconst fiber = {\n  // \u4FDD\u5B58\u8BE5FunctionComponent\u5BF9\u5E94\u7684Hooks\u94FE\u8868\n  memoizedState: null,\n  // \u6307\u5411App\u51FD\u6570\n  stateNode: App,\n}\n\nfunction schedule() {\n  workInProgressHook = fiber.memoizedState\n  const app = fiber.stateNode()\n  isMount = false\n  return app\n}\n\nfunction dispatchAction(queue, action) {\n  // \u521B\u5EFAupdate\n  const update = { action, next: null }\n\n  // \u73AF\u72B6\u5355\u5411\u94FE\u8868\u64CD\u4F5C\n  if (queue.pending === null) {\n    update.next = update\n  }\n  else {\n    update.next = queue.pending.next\n    queue.pending.next = update\n  }\n\n  queue.pending = update\n\n  // \u6A21\u62DFReact\u5F00\u59CB\u8C03\u5EA6\u66F4\u65B0\n  schedule()\n}\n\nfunction useState(initialState) {\n  let hook\n\n  if (isMount) {\n    hook = {\n      queue: { pending: null },\n      memoizedState: initialState,\n      next: null,\n    }\n\n    if (!fiber.memoizedState)\n      fiber.memoizedState = hook\n    else\n      workInProgressHook.next = hook\n\n    workInProgressHook = hook\n  }\n  else {\n    hook = workInProgressHook\n    workInProgressHook = workInProgressHook.next\n  }\n\n  let baseState = hook.memoizedState\n  if (hook.queue.pending) {\n    let firstUpdate = hook.queue.pending.next\n\n    do {\n      const action = firstUpdate.action\n      baseState = action(baseState)\n      firstUpdate = firstUpdate.next\n    } while (firstUpdate !== hook.queue.pending)\n\n    hook.queue.pending = null\n  }\n  hook.memoizedState = baseState\n\n  return [baseState, dispatchAction.bind(null, hook.queue)]\n}\n\nfunction App() {\n  const [num, updateNum] = useState(0)\n\n  console.log(`${isMount ? 'mount' : 'update'} num: `, num)\n  return {\n    onClick() {\n      updateNum(num => num + 1)\n    },\n  }\n}\n\nconst app = schedule()\napp.onClick()\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["posts%2Freact%2Fhook.md"]={toc:[{text:"react hook \u539F\u7406",id:"react-hook-\u539F\u7406",depth:2},{text:"\u521B\u5EFA\u66F4\u65B0\u5BF9\u8C61",id:"\u521B\u5EFA\u66F4\u65B0\u5BF9\u8C61",depth:3},{text:"\u5408\u5E76\u66F4\u65B0",id:"\u5408\u5E76\u66F4\u65B0",depth:3},{text:"\u7B80\u5355\u5B9E\u73B0",id:"\u7B80\u5355\u5B9E\u73B0",depth:3}],title:"hook",frontmatter:{icon:"react",order:1,date:"2021-07-12T00:00:00.000Z",author:"h7ml",title:"hook",category:"react",tag:["react","hook"],star:!0,lastUpdated:!1}}}}]);