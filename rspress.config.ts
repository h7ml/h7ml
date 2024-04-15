import * as path from 'path'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  // title: 'h7ml',
  description:
    'h7ml是一个专注于前端物语的VuePress博客，致力于分享前端开发的技术和经验。我们涵盖了JavaScript、CSS、HTML5、MySQL等多个方面的编程实践和学习笔记，旨在帮助前端开发者提高技能水平和解决实际问题。此外，我们也开源了多个项目，欢迎加入我们的社区，一起探索前端开发的世界！',
  icon: 'https://www.h7ml.cn/logo.png',
  // logo: {
  //   light: 'https://www.h7ml.cn/logo.png',
  //   dark: 'https://www.h7ml.cn/logo.png'
  // },
  route: {
    exclude: ['**/fragments/**']
  },
  themeConfig: {
    enableContentAnimation: true,
    footer: {
      message: '© 2024 Bytedance Inc. All Rights Reserved.'
    },
    hideNavbar: 'auto',
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/h7ml/h7ml' }
    ],
    outlineTitle: '本文目录',
    prevPageText: '上一页',
    nextPageText: '下一页'
  }
})
