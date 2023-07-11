// @ts-ignore
import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '前端博文',
    icon: 'edit',
    prefix: '/posts/',
    children: [
      'interview',
      'designPattern',
      { text: 'mysql', icon: 'mysql', link: 'mysql' },
      { text: 'PostgreSQL', icon: 'PostgreSQL', link: 'PostgreSQL' },
      { text: 'docker', icon: 'box', link: 'docker' },
      { text: 'rxjava', icon: 'java', link: 'rxjava' },
      { text: 'redis', icon: 'app', link: 'redis' },
      { text: 'javascript', icon: 'javascript', link: 'javascript' },
      { text: 'ecmascript6', icon: 'workingDirectory', link: 'ecmascript/' },
      { text: '图形学', icon: 'card', link: 'graphics' },
      'git.html',
      'es6.html',
      { text: 'github', icon: 'github', link: 'github' },
      { text: '工程化', icon: 'proposal', link: 'engineering' },
      { text: 'vue', icon: 'vue', link: 'vue' },
      { text: 'vite', icon: 'vue', link: 'vite' },
      { text: 'react', icon: 'react', link: 'react' },
      { text: 'linux', icon: 'linux', link: 'linux' },
      { text: 'nginx', icon: 'nginx', link: 'nginx' },
      { text: 'navicat', icon: 'navigate', link: 'navicat' },
      { text: 'python', icon: 'python', link: 'python' },
      // { text: 'segmentfault', icon: 'hot', link: 'segmentfault' },
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
