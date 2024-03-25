// @ts-ignore
import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '前端博文',
    icon: 'edit',
    prefix: '/posts/',
    children: [
      "/posts/interview/",
      "/posts/designPattern/",
      { text: 'mysql', icon: 'mysql', link: '/posts/mysql/' },
      { text: 'PostgreSQL', icon: 'workingDirectory', link: '/posts/PostgreSQL/' },
      { text: 'Nestjs', icon: 'generic', link: '/posts/Nestjs/' },
      { text: 'docker', icon: 'box', link: '/posts/docker/' },
      { text: 'rxjava', icon: 'java', link: '/posts/rxjava/' },
      { text: 'redis', icon: 'app', link: '/posts/redis/' },
      { text: 'javascript', icon: 'javascript', link: '/posts/javascript/' },
      { text: 'ecmascript6', icon: 'workingDirectory', link: '/posts/ecmascript/' },
      { text: '图形学', icon: 'card', link: '/posts/graphics/' },
      '/posts/git.html',
      '/posts/es6.html',
      { text: 'github', icon: 'github', link: '/posts/github/' },
      { text: '工程化', icon: 'proposal', link: '/posts/engineering/' },
      { text: 'vue', icon: 'vue', link: '/posts/vue/' },
      { text: 'vite', icon: 'vue', link: '/posts/vite/' },
      { text: 'react', icon: 'react', link: '/posts/react/' },
      { text: 'linux', icon: 'linux', link: '/posts/linux/' },
      { text: 'nginx', icon: 'nginx', link: '/posts/nginx/' },
      { text: 'navicat', icon: 'navigate', link: '/posts/navicat/' },
      { text: 'python', icon: 'python', link: '/posts/python/' },
      { text: 'PDF', icon: 'PDF', link: '/posts/Pdf/' },
      // { text: 'jianshu', icon: 'study', link: 'jianshu' },
      // { text: 'csdn', icon: 'creative', link: 'csdn' },
    ],
  },
  {
    text: '前端工具',
    icon: 'tool',
    prefix: '/',
    children: [
      {
        text: 'ChatGpt',
        icon: 'module',
        link: 'https://ChatGpt.h7ml.cn?q=h7ml.cn',
      },
      {
        text: 'Web Ide',
        icon: 'light',
        link: 'https://ide.h7ml.cn?q=h7ml',
      },
      {
        text: 'Web Nav',
        icon: 'navbar',
        link: 'https://www.h7ml.cn/nav.html',
      },
    ],
  },
  // {
  //   text: 'github',
  //   link: 'https://github.com/h7ml',
  //   icon: 'github',
  // },
  // {
  //   text: 'gitee',
  //   link: 'https://gitee.com/h7ml',
  //   icon: 'gitee',
  // },
]);
