// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
  base: '/StudyDocs/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'TFTFTFTFTF', // 标题
  description: 'TF研究院', // 标题下的描述
  
  themeConfig: { // 主题配置
    logo: '',
    nav: [ // 头部导航
      { text: '官网', link: 'http://www.atguigu.com' },
      { text: '谷粒学院', link: 'http://www.gulixueyuan.com/' },
      {
        text: '学习路线', 
        items: [
          { text: '前端', link: 'http://www.atguigu.com/web/' },
          { text: 'Java', link: 'http://www.atguigu.com/kecheng.shtml' },
          { text: '大数据', link: 'http://www.atguigu.com/bigdata/' }
        ]
      },
    ],
    sidebar: [ // 左侧导航
      {
        title: 'JavaScript', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'javascript/01_创建工具包项目',
          'javascript/02_开始',
        ]
      },
      {
        title: 'node',
        collapsable: false,
        children: [
          'node/01_函数相关',
        ]
      },
      {
        title: 'C语言',
        collapsable: false,
        children: [
          'CLang/01_开始',
        ]
      },
      {
        title: '微信小程序',
        collapsable: false,
        children: [
          'WxMiniapp/01',
        ]
      },
    ],
    // sidebarDepth: 3 // 左侧导航的深度默认是2级
  },

  head: [ // 指定网页head图标
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ]
}
