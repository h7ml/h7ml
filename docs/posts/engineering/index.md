---
icon: proposal
fullscreen: false
title: 工程化
breadcrumb: true
contributors: true
editLink: true
lastUpdated: true
prev: true
next: true
comment: true
copyright: true
article: true
heroImage: /logo.svg
heroText: h7ml
tagline: 前端物语
link: /intro.html#代码演示
date: 2021-05-27
author: h7ml
index: false
dir:
  order: 2
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>MIT Licensed | Copyright © 2022-present h7ml
---

### [editorconfig](./editorconfig.md)

### [gitattributes](./gitattributes.md)

### [gitignore](./gitignore.md)

### [prettierrc](./prettierrc.md)

### [license](./license.md)

### [package.json](./package-json.md)

### [tsconfig_json](./tsconfig_json.md)

### [eslintrc](./eslintrc.md)

## 使用 `husky`、`lint-staged`、`commitlint` 构建前端工作流

### 作用

可以帮助我们在 `commit` 前，对代码和 `commit messages` 进行 `lint`

### 介绍

[husky](https://github.com/typicode/husky) 是一个 `Git Hooks` 工具，让你操作 `Git Hooks` 变得更容易

[lint-staged](https://github.com/okonet/lint-staged) 可以只对 `git` 暂存文件运行 `lint` 从而提高速度

[commitlint](https://github.com/conventional-changelog/commitlint) 检查 `git commit messages` 是否符合规范

[commitizen](https://github.com/commitizen/cz-cli) 获得有关提交消息格式的即时反馈，并提示您输入必填字段。

### 安装

```shell
yarn add -D husky lint-staged @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog
```

### 使用 commitlint

修改`package.json`

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.{js,ts,tsx}": ["eslint --fix", "prettier --write", "git add"]
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```

- 根目录创建 `commitlint.config.js`

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
```

### `@commitlint/config-conventional` type 说明

type 含义 feat 新功能 fix 修复 bug docs 修改文档 style 代码格式修改 refactor 重构（即不是新增功能，也不是修复 bug） perf 更改代码以提高性能 test 增加测试 build 构建过程或辅助工具的变动 ci 修改项目持续集成流程 chore 其他类型的提交 revert 恢复上一次提交

## 在项目中使用 ESLint 和 Prettier

### 全局安装依赖

```shell
pnpm add -g eslint
```

```shell
eslint --init
```

它会问你一些问题，你可以按照你的喜好进行配置，我选的是 popular 下面的 standard，生成的文件是 js 格式，那么就会创建出 eslintrc.js 文件

```javascript
module.exports = {
  extends: 'standard',
};
```

### 配置文件 `.eslintrc.js` 介绍

根目录新建 `.eslintrc.js` 文件 [dgiot-dashboard .eslintrc.js](https://gitee.com/dgiiot/dgiot-dashboard/blob/master/.eslintrc.js)

```js
module.exports = {
  root: true,
  globals: {
    moment: true,
    Vue: true,
    axios: true,
    $: true,
    Cookies: true,
    downLink: true,
    downloadFile: true,
    downloadByLink: true,
    _: true,
    options: true,
    Konva: true,
    bcrypt: true,
    BeFull: true,
    JSONEditor: true,
    VueAMap: true,
    topology: true,
    konva: true,
    VCharts: true,
    CountTo: true,
    VueKonva: true,
    Mock: true,
    md5: true,
    Base64: true,
    ace: true,
    mqtt: true,
    COS: true,
    paho: true,
    Sortable: true,
    vuex: true,
    VueRouter: true,
    clipboard: true,
    lodash: true,
    VueI18n: true,
    XLSX: true,
    colors: true,
    FileSaver: true,
    VueBaiduMap: true,
    echarts: true,
    screenfull: true,
    qs: true,
    Qs: true,
    jsplumb: true,
    JSEncrypt: true,
    CodeMirror: true,
    nprogress: true,
    vueCodemirror: true,
    vuedraggable: true,
    elementChinaAreaData: true,
    vueFlvPlayer: true,
    EZUIKit: true,
    fuzzy: true,
    VueAliplayerV2: true,
  },
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-labels': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-unreachable': 'off',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
    'no-dupe-else-if': 'off',
    'no-irregular-whitespace': 'off',
    'no-prototype-builtins': 'off',
    'no-empty': 'off',
    'no-dupe-keys': 'off',
    'no-self-assign': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-useless-template-attributes': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // Vue.js风格指南(https://cn.vuejs.org/v2/style-guide/)
    // Vue组件排序
    'vue/order-in-components': [
      'warn',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'fetch',
          'asyncData',
          'data',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    // Vue属性排序
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true, // 字母顺序
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
```

[.eslintrc.js 配置项说明](https://cn.eslint.org/docs/user-guide/configuring)

### 添加脚本命令

在 `package.json` 的 `scripts` 配置项中写入

```json
"lint": "vue-cli-service lint",
"lint:fix": "vue-cli-service lint --fix",
"lint:style": "stylelint **/*.{vue,scss} --fix",
```

## 使用 Prettier

Prettier 是一个代码格式化工具，它通过解析代码并使用自己的规则（考虑最大行长）重新格式化代码，从而实现一致的编码风格

### 安装

```shell
yarn add -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
```

- [`prettier`](https://github.com/prettier/prettier)代码格式化程序
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier): 关闭 `ESLint` 中不必要的或可能与 `Prettier` 冲突的规则。
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier): 将 `Prettier` 作为 `ESLint` 规则运行，并将差异报告为单个 `ESLint` 问题。

### 修改 `.eslintrc.js`

#### `eslint-config-prettier` 8.0.0 之后版本

在 `extends` 配置项中增加 `prettier` 和 `plugin:prettier/recommended`

#### `eslint-config-prettier` 8.0.0 之前版本

在 `extends` 配置项中增加 `prettier/@typescript-eslint` 和 `plugin:prettier/recommended`

[相关 CHANGELOG](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21)

### 自定义 `Prettier` 风格规则

在根目录创建 `prettier.config.js` 文件和 `.prettierignore`

`.prettierrc` [dgiot-dashboard prettier](https://gitee.com/dgiiot/dgiot-dashboard/blob/master/prettier.config.js)

自定义 `Prettier` 风格规则

```javascript
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
};
```

### 添加脚本命令

在 `package.json` 的 `scripts` 配置项中写入 `"prettier": "prettier --write ./src"`

[ESLint Rules](https://cn.eslint.org/docs/rules/) [Prettier Options](https://prettier.io/docs/en/options.html)

## 语义化版本控制

### 语义化版本说明

- 标准版本号表示: X.Y.Z

       * X: 表示主版本号，在有任何不兼容的修改时递增

  - Y: 表示次版本号，在有向下兼容的新功能出现时递增
  - Z: 表示修订版本号，在只做了向下兼容的修正时才递增

- 先行版本号，在修订版本号使用连接号加上一连串以句点分隔的标识符来修饰。

       * 先行版本号则表示这个版本并非稳定而且可能无法满足预期的兼容性需求

  - 例子: 1.0.0-alpha 1.0.0-beta

- 版本号优先级

       * 主版本号、次版本号及修订版本号以数值比较

  - 当主版本号、次版本号及修订版本号都相同时

#### 版本号优先级排序

1. 要将版本号拆分为主版本号、次版本号、修订版本号及先行版本号
2. 由左到右依序比较每个标识符(主版本号、次版本号及修订版本号直接以数值比较)
3. 当主版本号、次版本号及修订版本号都相同时，以先行版本号来判断
4. 先行版本号判断通过由左到右的每个被句点分隔的标识符来比较，直到找到一个差异值后决定：只有数字的标识符以数值高低比较，有字母或连接号时则逐字以 ASCII 的排序来比较

> 🌰 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0

## 使用 standard-version

[standard-version](https://github.com/conventional-changelog/standard-version) 可以进行语义化版本发布和 CHANGELOG 生成

### 安装

```shell
npm install -g standard-version
# OR
npm install --save-dev standard-version
```

### 使用

在 `package.json` 的 `scripts` 配置 `"release": "standard-version"`

```shell
# 发布第一版
npm run release -- --first-release

# Pre-Release
npm run release -- --prerelease

# alpha / beta / rc
npm run release -- --prerelease alpha

# major minor patch
npm run release -- --release-as major

# 指定版本
npm run release -- --release-as x.y.z
```

- [语义化版本 2.0.0](https://semver.org/lang/zh-CN/)
- [语义版本控制程序 semver](https://github.com/npm/node-semver)
