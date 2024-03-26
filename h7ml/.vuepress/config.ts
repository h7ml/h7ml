import { defineUserConfig } from 'vuepress';
import {  path } from 'vuepress/utils';
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console';
// import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'



import theme from './theme.js';
import headConfig from './headConfig.js';
// @ts-ignore
const config = defineUserConfig({
  lang: 'zh-CN',
  title: 'h7ml-前端物语',
  description:
      'h7ml是一个专注于前端物语的VuePress博客，致力于分享前端开发的技术和经验。我们涵盖了JavaScript、CSS、HTML5、MySQL等多个方面的编程实践和学习笔记，旨在帮助前端开发者提高技能水平和解决实际问题。此外，我们也开源了多个项目，欢迎加入我们的社区，一起探索前端开发的世界！',
  shouldPrefetch: false,
  base: '/',
  plugins: [
    // registerComponentsPlugin({
    //   components: {
    //     HardScript: path.resolve(__dirname, "./components/HardScript.vue"),
    //   },
    // }),
    // docsearchPlugin({
    //   appId: 'EJF2G3P7Q5',
    //   apiKey: '670a4b10d2076ac6ba4054de6ce38410',
    //   indexName: 'h7ml',
    // }),
    // searchConsolePlugin({
    //   baiduId: '35afc12d4ac49f5dd49db387044b8cd0',
    //   toutiaoAutoPushId:
    //       '2aefb5bd3b99dd43cea1d18c57f31c71c9c7fcb5b0f7cc19838651853541c70e19d1c501ebd3301f5e2290626f5b53d078c8250527fa0dfd9783a026ff3cf719',
    //   autoPushBaiduSwitch: true,
    //   autoPush360Switch: true,
    // }),
    // googleAnalyticsPlugin({
    //   id: 'G-5XMFB5WH9N',
    // }),
  ],
  theme,
  // @ts-ignore
  head: headConfig,
  alias: {
    '@theme-hope/components/MarkdownContent': path.resolve(__dirname, './components/theme/MarkdownContent/index.vue'),
    '@theme-hope/components/NotFound': path.resolve(__dirname, './components/theme/NotFound/index.vue'),
    '@theme-hope/components/PageFooter': path.resolve(__dirname, './components/theme//PageFooter/index.vue'),
  },
});
export default config;
