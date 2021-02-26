// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
  base: '/StudyDocs/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'TF', // 标题
  description: 'TF研究院', // 标题下的描述
  
  themeConfig: { // 主题配置
    // logo: '/202.png',
    logo: '',
    nav: [ // 头部导航
      { text: '主页', link: '/' },
      // { text: '关于', link: '/about' },
      { text: '官网', link: 'http://47.100.45.232/' },
      // {
      //   text: '前端',
      //   items: [
      //     { text: 'html', link: '/web/html/start' },
      //     { text: 'css', link: '/web/css/start01' },
      //     { text: 'javascript', link: '/web/javascript/01_start' }
      //   ]
      // },
      { text: 'node', link: '/node/' },
      { text: '前端', link: '/web/' },
      { text: 'C语言', link: '/CLang/' },
      { text: '小程序', link: '/WxMiniapp/' },
      {
        text: '学习路线', 
        items: [
          { text: '前端', link: 'http://www.atguigu.com/web/' },
          { text: 'Java', link: 'http://www.atguigu.com/kecheng.shtml' },
          { text: '大数据', link: 'http://www.atguigu.com/bigdata/' }
        ]
      }
    ],
    // sidebar: 'auto',
    sidebar: {
      '/node/': [
        '',
        '01',
        '02'
      ],

      '/web/': [
        '',
        'html/start',
        'html/start01',
        'css/start01',
        'css/start02',
        'javascript/01_start',
        'javascript/02_开始',
      ],

      // '/web/html/': [
      //   'start',
      //   'start01',
      // ],
      // '/web/css/': [
      //   'start01',
      //   'start02',
      // ],
      // '/web/javascript/': [
      //   '01_start',
      //   '02_开始',
      // ],

      '/CLang/': [
        '',
        '01',
      ],

      '/WxMiniapp/': [
        '',
      ],

      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    },
    sidebarDepth: 3, // 左侧导航的深度默认是2级
    lastUpdated: 'Last Updated', // string | boolean
  },

  head: [ // 指定网页head图标
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 's2jBdszfeWhCidIQ1CIWMp8w-MdYXbMMI',
          appKey: 'dnGJJxXwOu827bo2TwYqLeko'
        }
      }
    ]
  ]
}
