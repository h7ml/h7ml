import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'
import { MR_HOPE_AVATAR } from './logo.js'

export default hopeTheme({
  hostname: 'https://www.h7ml.cn',

  author: {
    name: 'h7ml',
    url: 'https://www.h7ml.cn',
  },

  iconAssets: 'iconfont',

  logo: '/logo.svg',

  repo: 'h7ml/h7ml',

  docsDir: 'h7ml',

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer:
      "<a href='https://v6.51.la/s/N6M38h8J5TZZXKh' id=\"LA-DATA-WIDGET\" target='blank'>51.la</a><a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>",

  displayFooter: true,

  // 博客相关
  blog: {
    name: 'h7ml',
    avatar: '/logo.png',
    roundAvatar: true,
    sidebarDisplay: 'mobile',
    description:
        'h7ml是一个专注于前端物语的VuePress博客，致力于分享前端开发的技术和经验。我们涵盖了JavaScript、CSS、HTML5、MySQL等多个方面的编程实践和学习笔记，旨在帮助前端开发者提高技能水平和解决实际问题。此外，我们也开源了多个项目，欢迎加入我们的社区，一起探索前端开发的世界！',
    intro: '/',
    timeline: '每一个不曾起舞的日子,都是对生命的辜负!',
    articlePerPage: 20,
    articleInfo: ['Author', 'Original', 'Date', 'PageView', 'Category', 'Tag', 'ReadingTime'],
    medias: {
      // Baidu: 'https://Baidu.com',
      // Bitbucket: 'https://bitbucket.org/h7ml/',
      // Dingding: 'https://dingtalk.com',
      // Discord: 'https://discord.onl/',
      // Dribbble: 'https://www.bigbigwork.com/',
      Email: 'mailto:h7ml@qq.com',
      // Evernote: 'https://www.yuque.com/h7ml/h7ml',
      // Facebook: 'http://www.flipboard.com/',
      // Flipboard: 'https://example.com',
      Gitee: 'https://Gitee.com/h7ml',
      GitHub: 'https://GitHub.com/h7ml',
      Gitlab: 'https://Gitlab.com/h7ml',
      // Instagram: 'https://instagram.com',
      // Lines: 'https://lines.ac/',
      // Linkedin: 'https://linkedin.com',
      // Pinterest: 'https://Pinterest.com',
      // Pocket: 'https://getpocket.com/',
      // QQ: 'http://wpa.qq.com/msgrd?v=3&uin=76539446&site=qq&menu=yes',
      // Qzone: 'https://user.qzone.qq.com/76539446/infocenter',
      // Reddit: 'https://Reddit.com',
      // Rss: '/rss.xml',
      // Steam: 'https://store.steampowered.com/',
      // Twitter: 'https://Twitter.com',
      Wechat: '/wechat.jpg',
      // Weibo: 'https://weibo.com',
      // Whatsapp: 'https://whatsapp.com',
      // Youtube: 'https://Youtube.com',
      // Zhihu: 'https://Zhihu.com',
    },
  },

  // 加密配置
  encrypt: {
    config: {
      '/demo/encrypt.html': ['1234']
    }
  },

  // 多语言配置
  // metaLocales: {
  //   editLink: '在 GitHub 上编辑此页'
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    seo: {
      canonical: 'https://www.h7ml.cn',
    },
    searchPro: true,
    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: [
        'Badge',
        'VPCard',
        'BiliBili',
        'CodePen',
        'PDF',
        'Replit',
        'StackBlitz',
        'ArtPlayer',
        'Share',
        'SiteInfo'
      ]
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      image: '/logo.png',
      icon: '/logo.png',
      count: 1000,
      atomOutputFilename: 'atom.xml',
      jsonOutputFilename: 'feed.json',
      rssOutputFilename: 'rss.xml',
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      chart: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      katex: false,
      revealJs: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
        themes: [
          'auto',
          'beige',
          'black',
          'blood',
          'league',
          'moon',
          'night',
          'serif',
          'simple',
          'sky',
          'solarized',
          'white',
        ],
      },
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended'
              }
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
      imgMark: true,
      // demo: {
      //   react: 'https://unpkg.com/react@18.2.0/umd/react.development.js',
      //   reactDOM: 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js',
      // },
      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    // pageInfo:['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime', 'Word', 'PageView']
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
})
