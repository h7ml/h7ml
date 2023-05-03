import { hopeTheme } from 'vuepress-theme-hope';

import { blog, author, plugins, pageInfo, navbar, sidebar } from './target';

export default hopeTheme({
  hostname: 'https://www.h7ml.cn',

  navbar: navbar,

  sidebar: sidebar,

  author: author,

  blog: { ...blog },

  plugins: { ...plugins },

  iconAssets: 'iconfont',

  logo: '/logo.svg',

  repo: 'h7ml/h7ml',

  docsDir: 'h7ml',

  docsBranch: 'vitepress',

  pageInfo: pageInfo,

  footer:
    "<a href='https://v6.51.la/s/N6M38h8J5TZZXKh' id=\"LA-DATA-WIDGET\" target='blank'>51.la</a><a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>",

  displayFooter: true,

  markdown: {
    headers: {
      level: [1, 2, 3, 4],
    },
  },
  // encrypt: encrypt,
});
