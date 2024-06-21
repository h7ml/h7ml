/*! For license information please see 5087.de66fea7.js.LICENSE.txt */
(self.webpackChunkh7ml=self.webpackChunkh7ml||[]).push([["5087"],{78876:function(e,n,r){"use strict";r.r(n);var o=r("52676"),t=r("40453");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",img:"img"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"new-vue-\u53D1\u751F\u4E86\u4EC0\u4E48",children:["new Vue \u53D1\u751F\u4E86\u4EC0\u4E48",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#new-vue-\u53D1\u751F\u4E86\u4EC0\u4E48",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5199\u5728\u524D\u9762\uFF1A\u672C\u6587\u57FA\u4E8E",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/tree/2.6",target:"_blank",rel:"noopener noreferrer",children:"vue2.6"}),"\u8FDB\u884C\u6E90\u7801\u5206\u6790"]}),"\n",(0,o.jsxs)(n.h2,{id:"\u521D\u59CB\u5316-vue",children:["\u521D\u59CB\u5316 vue",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521D\u59CB\u5316-vue",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4EEC\u5728\u5B9E\u4F8B\u5316\u4E00\u4E2A ",(0,o.jsx)(n.code,{children:"vue"})," \u5B9E\u4F8B\uFF0C\u4E5F\u5373 ",(0,o.jsx)(n.code,{children:"new Vue()"})," \u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u6267\u884C ",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6/src/core/instance/index.js#L8",target:"_blank",rel:"noopener noreferrer",children:"src/core/instance/index.js"})," \u4E2D\u5B9A\u4E49\u7684 ",(0,o.jsx)(n.code,{children:"Function"})," \u51FD\u6570\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function Vue(options) {\n  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue))\n    warn('Vue is a constructor and should be called with the `new` keyword')\n\n  this._init(options)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u901A\u8FC7\u67E5\u770B ",(0,o.jsx)(n.code,{children:"Vue"})," \u7684 ",(0,o.jsx)(n.code,{children:"function"}),"\uFF0C\u6211\u4EEC\u77E5\u9053 ",(0,o.jsx)(n.code,{children:"Vue"})," \u53EA\u80FD\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"new"})," \u5173\u952E\u5B57\u521D\u59CB\u5316\uFF0C\u7136\u540E\u8C03\u7528 ",(0,o.jsx)(n.code,{children:"this._init"})," \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u5728 ",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6/src/core/instance/init.js#L16",target:"_blank",rel:"noopener noreferrer",children:"src/core/instance/init.js"})," \u4E2D\u5B9A\u4E49\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"Vue.prototype._init = function (options?: Object) {\n  const vm: Component = this;\n\n  // \u7701\u7565\u4E00\u7CFB\u5217\u5176\u5B83\u521D\u59CB\u5316\u7684\u4EE3\u7801\n\n  if (vm.$options.el) {\n    console.log('vm.$options.el:', vm.$options.el);\n    vm.$mount(vm.$options.el);\n  }\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Vue \u521D\u59CB\u5316\u4E3B\u8981\u5C31\u5E72\u4E86\u51E0\u4EF6\u4E8B\u60C5\uFF0C\u5408\u5E76\u914D\u7F6E\uFF0C\u521D\u59CB\u5316\u751F\u547D\u5468\u671F\uFF0C\u521D\u59CB\u5316\u4E8B\u4EF6\u4E2D\u5FC3\uFF0C\u521D\u59CB\u5316\u6E32\u67D3\uFF0C\u521D\u59CB\u5316 ",(0,o.jsx)(n.code,{children:"data\u3001props\u3001computed\u3001watcher"})," \u7B49\u7B49\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"vue-\u5B9E\u4F8B\u6302\u8F7D",children:["Vue \u5B9E\u4F8B\u6302\u8F7D",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-\u5B9E\u4F8B\u6302\u8F7D",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Vue \u4E2D\u662F\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"$mount"})," \u5B9E\u4F8B\u65B9\u6CD5\u53BB\u6302\u8F7D ",(0,o.jsx)(n.code,{children:"dom"})," \u7684\uFF0C\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u5206\u6790 ",(0,o.jsx)(n.code,{children:"compiler"})," \u7248\u672C\u7684 ",(0,o.jsx)(n.code,{children:"mount"})," \u5B9E\u73B0\uFF0C\u76F8\u5173\u6E90\u7801\u5728\u76EE\u5F55 ",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6/src/platforms/web/entry-runtime-with-compiler.js#L17",target:"_blank",rel:"noopener noreferrer",children:"src/platforms/web/entry-runtime-with-compiler.js"})," \u6587\u4EF6\u4E2D\u5B9A\u4E49\uFF1A\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const mount = Vue.prototype.$mount;\nVue.prototype.$mount = function (el?: string | Element, hydrating?: boolean): Component {\n  el = el && query(el);\n\n  // \u7701\u7565\u4E00\u7CFB\u5217\u521D\u59CB\u5316\u4EE5\u53CA\u903B\u8F91\u5224\u65AD\u4EE3\u7801\n\n  return mount.call(this, el, hydrating);\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4EEC\u53D1\u73B0\u6700\u7EC8\u8FD8\u662F\u8C03\u7528\u7528\u539F\u5148\u539F\u578B\u4E0A\u7684 ",(0,o.jsx)(n.code,{children:"$mount"})," \u65B9\u6CD5\u6302\u8F7D \uFF0C\u539F\u5148\u539F\u578B\u4E0A\u7684 ",(0,o.jsx)(n.code,{children:"$mount"})," \u65B9\u6CD5\u5728 ",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6/src/platforms/web/runtime/index.js#L37",target:"_blank",rel:"noopener noreferrer",children:"src/platforms/web/runtime/index.js"})," \u4E2D\u5B9A\u4E49 \u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"Vue.prototype.$mount = function (el?: string | Element, hydrating?: boolean): Component {\n  el = el && inBrowser ? query(el) : undefined;\n  return mountComponent(this, el, hydrating);\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4EEC\u53D1\u73B0",(0,o.jsx)(n.code,{children:"$mount"})," \u65B9\u6CD5\u5B9E\u9645\u4E0A\u4F1A\u53BB\u8C03\u7528 ",(0,o.jsx)(n.code,{children:"mountComponent"})," \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5B9A\u4E49\u5728 ",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6/src/core/instance/lifecycle.js#L141",target:"_blank",rel:"noopener noreferrer",children:"src/core/instance/lifecycle.js"})," \u6587\u4EF6\u4E2D"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export function mountComponent(vm: Component, el: ?Element, hydrating?: boolean): Component {\n  vm.$el = el;\n  // \u7701\u7565\u4E00\u7CFB\u5217\u5176\u5B83\u4EE3\u7801\n  let updateComponent;\n  /* istanbul ignore if */\n  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {\n    updateComponent = () => {\n      // \u751F\u6210\u865A\u62DF vnode\n      const vnode = vm._render();\n      // \u66F4\u65B0 DOM\n      vm._update(vnode, hydrating);\n    };\n  } else {\n    updateComponent = () => {\n      vm._update(vm._render(), hydrating);\n    };\n  }\n\n  // \u5B9E\u4F8B\u5316\u4E00\u4E2A\u6E32\u67D3Watcher\uFF0C\u5728\u5B83\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u4F1A\u8C03\u7528 updateComponent \u65B9\u6CD5\n  new Watcher(\n    vm,\n    updateComponent,\n    noop,\n    {\n      before() {\n        if (vm._isMounted && !vm._isDestroyed) {\n          callHook(vm, 'beforeUpdate');\n        }\n      },\n    },\n    true /* isRenderWatcher */\n  );\n  hydrating = false;\n\n  return vm;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C",(0,o.jsx)(n.code,{children:"mountComponent"}),"\u6838\u5FC3\u5C31\u662F\u5148\u5B9E\u4F8B\u5316\u4E00\u4E2A\u6E32\u67D3",(0,o.jsx)(n.code,{children:"Watcher"}),"\uFF0C\u5728\u5B83\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u4F1A\u8C03\u7528 ",(0,o.jsx)(n.code,{children:"updateComponent"}),"\u65B9\u6CD5\uFF0C\u5728\u6B64\u65B9\u6CD5\u4E2D\u8C03\u7528 ",(0,o.jsx)(n.code,{children:"vm._render"}),"\u65B9\u6CD5\u5148\u751F\u6210\u865A\u62DF ",(0,o.jsx)(n.code,{children:"Node"}),"\uFF0C\u6700\u7EC8\u8C03\u7528 ",(0,o.jsx)(n.code,{children:"vm._update"}),"\u66F4\u65B0 DOM\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"\u521B\u5EFA\u865A\u62DF-node",children:["\u521B\u5EFA\u865A\u62DF Node",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u865A\u62DF-node",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Vue \u7684 ",(0,o.jsx)(n.code,{children:"_render"})," \u65B9\u6CD5\u662F\u5B9E\u4F8B\u7684\u4E00\u4E2A\u79C1\u6709\u65B9\u6CD5\uFF0C\u5B83\u7528\u6765\u628A\u5B9E\u4F8B\u6E32\u67D3\u6210\u4E00\u4E2A\u865A\u62DF",(0,o.jsx)(n.code,{children:"Node"}),"\u3002\u5B83\u7684\u5B9A\u4E49\u5728 ",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6/src/core/instance/render.js#L69",target:"_blank",rel:"noopener noreferrer",children:"src/core/instance/render.js"})," \u6587\u4EF6\u4E2D\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:' Vue.prototype._render = function (): VNode {\n    const vm: Component = this\n    const { render, _parentVnode } = vm.$options\n    let vnode\n    try {\n      // \u7701\u7565\u4E00\u7CFB\u5217\u4EE3\u7801\n      currentRenderingInstance = vm\n      // \u8C03\u7528 createElement \u65B9\u6CD5\u6765\u8FD4\u56DE vnode\n      vnode = render.call(vm._renderProxy, vm.$createElement)\n    } catch (e) {\n      handleError(e, vm, `render`){}\n    }\n    // set parent\n    vnode.parent = _parentVnode\n    console.log("vnode...:",vnode);\n    return vnode\n  }\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"vm._render"})," \u6700\u7EC8\u662F\u901A\u8FC7\u6267\u884C ",(0,o.jsx)(n.code,{children:"createElement"})," \u65B9\u6CD5\u5E76\u8FD4\u56DE\u7684\u662F ",(0,o.jsx)(n.code,{children:"vnode"}),"\uFF0C\u5B83\u662F\u4E00\u4E2A\u865A\u62DF Node"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6",target:"_blank",rel:"noopener noreferrer",children:"Vue.js"})," \u5229\u7528 ",(0,o.jsx)(n.code,{children:"_createElement"})," \u65B9\u6CD5\u521B\u5EFA ",(0,o.jsx)(n.code,{children:"VNode"}),"\uFF0C\u5B83\u5B9A\u4E49\u5728 ",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6/src/core/vdom/create-element.js#L47",target:"_blank",rel:"noopener noreferrer",children:"src/core/vdom/create-elemenet.js"})," \u4E2D\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export function _createElement(\n  context: Component,\n  tag?: string | Class<Component> | Function | Object,\n  data?: VNodeData,\n  children?: any,\n  normalizationType?: number\n): VNode | Array<VNode> {\n  // \u7701\u7565\u4E00\u7CFB\u5217\u975E\u4E3B\u7EBF\u4EE3\u7801\n\n  if (normalizationType === ALWAYS_NORMALIZE) {\n    // \u573A\u666F\u662F render \u51FD\u6570\u4E0D\u662F\u7F16\u8BD1\u751F\u6210\u7684\n    children = normalizeChildren(children);\n  } else if (normalizationType === SIMPLE_NORMALIZE) {\n    // \u573A\u666F\u662F render \u51FD\u6570\u662F\u7F16\u8BD1\u751F\u6210\u7684\n    children = simpleNormalizeChildren(children);\n  }\n  let vnode, ns;\n  if (typeof tag === 'string') {\n    let Ctor;\n    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);\n    if (config.isReservedTag(tag)) {\n      // \u521B\u5EFA\u865A\u62DF vnode\n      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);\n    } else if ((!data || !data.pre) && isDef((Ctor = resolveAsset(context.$options, 'components', tag)))) {\n      // component\n      vnode = createComponent(Ctor, data, context, children, tag);\n    } else {\n      vnode = new VNode(tag, data, children, undefined, undefined, context);\n    }\n  } else {\n    vnode = createComponent(tag, data, context, children);\n  }\n  if (Array.isArray(vnode)) {\n    return vnode;\n  } else if (isDef(vnode)) {\n    if (isDef(ns)) applyNS(vnode, ns);\n    if (isDef(data)) registerDeepBindings(data);\n    return vnode;\n  } else {\n    return createEmptyVNode();\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"_createElement \u65B9\u6CD5\u6709"})," 5 \u4E2A\u53C2\u6570\uFF0C",(0,o.jsx)(n.code,{children:"context"}),"\u8868\u793A ",(0,o.jsx)(n.code,{children:"VNode"})," \u7684\u4E0A\u4E0B\u6587\u73AF\u5883\uFF0C\u5B83\u662F ",(0,o.jsx)(n.code,{children:"Component"}),"\u7C7B\u578B\uFF1B",(0,o.jsx)(n.code,{children:"tag"}),"\u8868\u793A\u6807\u7B7E\uFF0C\u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A ",(0,o.jsx)(n.code,{children:"Component"}),"\uFF1B",(0,o.jsx)(n.code,{children:"data"}),"\u8868\u793A ",(0,o.jsx)(n.code,{children:"VNode"})," \u7684\u6570\u636E\uFF0C\u5B83\u662F\u4E00\u4E2A ",(0,o.jsx)(n.code,{children:"VNodeData"}),"\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5728 flow/vnode.js \u4E2D\u627E\u5230\u5B83\u7684\u5B9A\u4E49\uFF1B",(0,o.jsx)(n.code,{children:"children"}),"\u8868\u793A\u5F53\u524D ",(0,o.jsx)(n.code,{children:"VNode"})," \u7684\u5B50\u8282\u70B9\uFF0C\u5B83\u662F\u4EFB\u610F\u7C7B\u578B\u7684\uFF0C\u9700\u8981\u88AB\u89C4\u8303\u4E3A\u6807\u51C6\u7684 ",(0,o.jsx)(n.code,{children:"VNode"})," \u6570\u7EC4\uFF1B"]}),"\n",(0,o.jsxs)(n.h2,{id:"\u66F4\u65B0\u89C6\u56FE",children:["\u66F4\u65B0\u89C6\u56FE",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u66F4\u65B0\u89C6\u56FE",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5B8C\u6210\u89C6\u56FE\u7684\u66F4\u65B0\u5DE5\u4F5C\u4E8B\u5B9E\u4E0A\u5C31\u662F\u8C03\u7528\u4E86",(0,o.jsx)(n.code,{children:"vm._update"}),"\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u63A5\u6536\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u521A\u751F\u6210\u7684",(0,o.jsx)(n.code,{children:"Vnode"}),"\uFF0C\u8C03\u7528\u7684",(0,o.jsx)(n.code,{children:"vm._update"}),"\u65B9\u6CD5\u5B9A\u4E49\u5728 ",(0,o.jsx)(n.a,{href:"https://github.com/vuejs/vue/blob/2.6/src/core/instance/lifecycle.js#L59",target:"_blank",rel:"noopener noreferrer",children:"src/core/instance/lifecycle.js"})," \u4E2D\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {\n  const vm: Component = this;\n  const prevEl = vm.$el;\n  const prevVnode = vm._vnode;\n  const restoreActiveInstance = setActiveInstance(vm);\n  vm._vnode = vnode;\n  if (!prevVnode) {\n    // \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u771F\u5B9E\u7684node\u8282\u70B9\uFF0C\u5219\u4E3A\u521D\u59CB\u5316\n    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);\n  } else {\n    // \u5982\u679C\u9700\u8981diff\u7684prevVnode\u5B58\u5728\uFF0C\u90A3\u4E48\u5BF9prevVnode\u548Cvnode\u8FDB\u884Cdiff\n    vm.$el = vm.__patch__(prevVnode, vnode);\n  }\n  restoreActiveInstance();\n  // update __vue__ reference\n  if (prevEl) {\n    prevEl.__vue__ = null;\n  }\n  if (vm.$el) {\n    vm.$el.__vue__ = vm;\n  }\n  // if parent is an HOC, update its $el as well\n  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {\n    vm.$parent.$el = vm.$el;\n  }\n};\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"\u603B\u7ED3",children:["\u603B\u7ED3",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u603B\u7ED3",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"\u4E0B\u56FE\u66F4\u76F4\u89C2\u5730\u770B\u5230\u4ECE\u521D\u59CB\u5316 Vue \u5230\u6700\u7EC8\u6E32\u67D3\u7684\u6574\u4E2A\u8FC7\u7A0B\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/vue.png",alt:"img"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["posts%2Fvue%2Fwhat_happened_to_new_Vue.md"]={toc:[{text:"\u521D\u59CB\u5316 vue",id:"\u521D\u59CB\u5316-vue",depth:2},{text:"Vue \u5B9E\u4F8B\u6302\u8F7D",id:"vue-\u5B9E\u4F8B\u6302\u8F7D",depth:2},{text:"\u521B\u5EFA\u865A\u62DF Node",id:"\u521B\u5EFA\u865A\u62DF-node",depth:2},{text:"\u66F4\u65B0\u89C6\u56FE",id:"\u66F4\u65B0\u89C6\u56FE",depth:2},{text:"\u603B\u7ED3",id:"\u603B\u7ED3",depth:2}],title:"new Vue \u53D1\u751F\u4E86\u4EC0\u4E48",frontmatter:{icon:"vue",order:4,date:"2021-07-12T00:00:00.000Z",author:"h7ml",title:"new Vue \u53D1\u751F\u4E86\u4EC0\u4E48",category:"vue",tag:"vue",star:!0,lastUpdated:!1}}}}]);