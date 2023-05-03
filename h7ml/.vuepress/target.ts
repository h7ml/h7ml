import navbar from './navbar';
import sidebar from './sidebar';

const headConfig = require('./headConfig');
const blog = {
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
    Evernote: 'https://www.yuque.com/h7ml/h7ml',
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
    QQ: 'http://wpa.qq.com/msgrd?v=3&uin=76539446&site=qq&menu=yes',
    Qzone: 'https://user.qzone.qq.com/76539446/infocenter',
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
};
const author = {
  name: 'h7ml',
  url: 'https://www.h7ml.cn',
};

const plugins = {
  blog: true,
  seo: {
    canonical: 'https://www.h7ml.cn',
  },
  components: {
    // 你想使用的组件
    components: [
      'AudioPlayer',
      'Badge',
      'BiliBili',
      'CodePen',
      'PDF',
      'Replit',
      'StackBlitz',
      'VideoPlayer',
      'YouTube',
    ],
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
  // 如果你不需要评论，可以直接删除 comment 配置，
  // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
  // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
  // comment: {
  //   // @ts-ignore
  //   provider: 'Waline',
  //   serverURL: 'https://waline.h7ml.cn',
  // },
  // pwa: {
  //   showInstall: true,
  //   favicon: '/favicon.ico',
  //   themeColor: '#46bd87',
  //   // @ts-ignore
  //   maxSize: '2048',
  //   cachePic: true,
  //   cacheHTML: true,
  //   // @ts-ignore
  //   maxPicSize: '1024',
  //   apple: {
  //     icon: 'https://static.h7ml.cn/vitepress/assets/icon/apple-icon-152.png',
  //     statusBarColor: 'black',
  //   },
  //   msTile: {
  //     image: 'https://static.h7ml.cn/vitepress/assets/icon/ms-icon-144.png',
  //     color: '#ffffff',
  //   },
  //   manifest: {
  //     icons: [
  //       {
  //         src: 'https://static.h7ml.cn/vitepress/assets/icon/chrome-mask-512.png',
  //         sizes: '512x512',
  //         purpose: 'maskable',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'https://static.h7ml.cn/vitepress/assets/icon/chrome-mask-192.png',
  //         sizes: '192x192',
  //         purpose: 'maskable',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'https://static.h7ml.cn/vitepress/assets/icon/chrome-512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'https://static.h7ml.cn/vitepress/assets/icon/chrome-192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //     ],
  //     shortcuts: [
  //       {
  //         name: 'Guide',
  //         short_name: 'Guide',
  //         url: '/guide/',
  //         icons: [
  //           {
  //             src: 'https://static.h7ml.cn/vitepress/assets/icon/guide-maskable.png',
  //             sizes: '192x192',
  //             purpose: 'maskable',
  //             type: 'image/png',
  //           },
  //           {
  //             src: 'https://static.h7ml.cn/vitepress/assets/icon/guide-monochrome.png',
  //             sizes: '192x192',
  //             purpose: 'monochrome',
  //             type: 'image/png',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
  // Disable features you don’t want here
  mdEnhance: {
    align: true,
    attrs: true,
    chart: true,
    codetabs: true,
    container: true,
    demo: true,
    echarts: true,
    figure: true,
    flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    katex: false,
    mark: true,
    mermaid: true,
    playground: {
      presets: ['ts', 'vue', 'jsx', 'tsx', 'js', 'json', 'css', 'less', 'scss', 'html'],
    },
    presentation: {
      plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
    },
    stylize: [
      {
        matcher: 'Recommended',
        replacer: ({ tag }) => {
          if (tag === 'em')
            return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommended',
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
    vuePlayground: true,
    imgMark: true,
    linkCheck: true,
  },
};

const pageInfo = ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime', 'Word', 'PageView'];
export { blog, author, plugins, pageInfo, navbar, sidebar, headConfig };
