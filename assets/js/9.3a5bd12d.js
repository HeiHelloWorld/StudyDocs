(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(t,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序"}},[t._v("#")]),t._v(" 小程序")]),t._v(" "),a("h2",{attrs:{id:"自定义的好物集发券组件-v1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义的好物集发券组件-v1-0"}},[t._v("#")]),t._v(" 自定义的好物集发券组件 v1.0")]),t._v(" "),a("h4",{attrs:{id:"_1-在小程序app-json加入插件配置-引入插件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在小程序app-json加入插件配置-引入插件包"}},[t._v("#")]),t._v(" 1. 在小程序app.json加入插件配置(引入插件包)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "plugins": {\n    "sendCoupon": {\n      "version": "1.1.5", // 插件版本号\n      "provider": "wxf3f436ba9bd4be7b"\n    }\n  }\n}\n')])])]),a("h4",{attrs:{id:"_2-在小程序页面引入发券插件-仅用于发起请求-样式可定制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在小程序页面引入发券插件-仅用于发起请求-样式可定制"}},[t._v("#")]),t._v(" 2. 在小程序页面引入发券插件(仅用于发起请求, 样式可定制)")]),t._v(" "),a("ul",[a("li",[t._v("页面json文件(xxx.json)中"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "usingComponents": {\n    "send-coupon": "plugin://sendaCoupon/send-coupon"\n  }\n}\n')])])])]),t._v(" "),a("li",[t._v("页面wxml文件(xxx.wxml)中"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<send-coupon\n  bindcustomevent="_getcoupon" \n  send_coupon_params="{{send_coupon_params}}"\n  sign="{{sign}}"\n  send_coupon_merchant="{{send_coupon_merchant}}"\n>\n  <view>此处可自定义代码</view>\n</send-coupon>\n')])])])])]),t._v(" "),a("h5",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("bindcustomevent : 组件的自定义事件, 领券后调用 ==> Function")])]),t._v(" "),a("li",[a("p",[t._v("send_coupon_params : 发券参数 ==> Array[Object]")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n  {\n    stock_id: "string",\n    out_request_no: "string",\n    coupon_code: "string"\n  }\n]\n')])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("变量")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必填?")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("批次号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("stock_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("券的批次id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("发券凭证")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("out_request_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("发券凭证")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("券code")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("coupon_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("券code, 如果批次是发放时指定code的类型，则发券时必填coupon_code")])])])])]),t._v(" "),a("li",[a("p",[t._v("sign : 签名("),a("strong",[t._v("必需")]),t._v(")(需在服务端使用加密算法获得, 详见文档) ==> String")])]),t._v(" "),a("li",[a("p",[t._v("send_coupon_merchant : 发券商户号("),a("strong",[t._v("必需")]),t._v(") ==> String")])])]),t._v(" "),a("h5",{attrs:{id:"页面js文件-xxx-js-中-查看参数详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面js文件-xxx-js-中-查看参数详情"}},[t._v("#")]),t._v(" 页面js文件(xxx.js)中 "),a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/miniprogram/chapter3_1.shtml#top",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看参数详情"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("_getcoupon(params) {\n  console.log('发券插件参数', params);\n  if (params.detail.errcode === \"OK\") {\n    const result = params.detail.send_coupon_result;\n  }\n}\n")])])]),a("hr"),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"h5打开小程序-注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5打开小程序-注"}},[t._v("#")]),t._v(" H5打开小程序 "),a("a",{attrs:{href:"%E5%BF%85%E9%A1%BB%E5%9C%A8%E5%BE%AE%E4%BF%A1%E7%8E%AF%E5%A2%83%E4%B8%AD(%E5%BE%AE%E4%BF%A1%E5%86%85%E7%BD%AE%E6%B5%8F%E8%A7%88%E5%99%A8)"}},[t._v("^注")])]),t._v(" "),a("h4",{attrs:{id:"_1-开放标签详情-查看文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-开放标签详情-查看文档"}},[t._v("#")]),t._v(" 1. 开放标签详情 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看文档"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("p",[t._v('在微信公众平台添加"JS接口安全域名"(云开发不需要)')])]),t._v(" "),a("li",[a("p",[t._v("在需要调js接口的文件中引入js文件 "),a("a",{attrs:{href:"http://res2.wx.qq.com/open/js/jweixin-1.6.0.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("开放标签js"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("签名需在服务端进行, 将config中配置项返回前端 "),a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=4_3",target:"_blank",rel:"noopener noreferrer"}},[t._v("签名算法(附录1)"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("index.html")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<wx-open-launch-weapp\n  id="launch-btn"\n  username="gh_xxxxxxxx"\n  path="pages/home/index.html?user=123&action=abc"\n>\n  <template>\n    <button class="btn">打开小程序</button>\n  </template>\n</wx-open-launch-weapp>\n\n参数: username 必填, 小程序的原始id, 即gh_开头的id\n      path    非必填, 所需跳转的小程序内页面路径及参数\n')])])]),a("ul",[a("li",[t._v("index.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wx.config({\n  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印\n  appId: '', // 必填，公众号的唯一标识\n  timestamp: , // 必填，生成签名的时间戳\n  nonceStr: '', // 必填，生成签名的随机串\n  signature: '',// 必填，签名\n  jsApiList: [], // 必填，需要使用的JS接口列表\n  openTagList: [] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']\n});\n\nwx.ready(() => console.log('config信息验证完成, 可进行非用户触发的接口调用'))\nwx.error(err => console.log('config信息验证失败(可在此处更新签名)'))\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"_2-在vue中使用开放标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在vue中使用开放标签"}},[t._v("#")]),t._v(" 2. 在Vue中使用开放标签")]),t._v(" "),a("ul",[a("li",[t._v("标签需在配置成功后动态渲染, 否则失效\n"),a("ul",[a("li",[t._v("html中")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div v-html="wxBtnDom"></div>\n')])])]),a("ul",[a("li",[t._v("js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('wx.ready(function() {\n  this.wxBtnDom = `\n    <wx-open-launch-weapp username="xxx">\n      <script type="text/wxtag-template">\n        <div \n          style="display: block; \n            width: ${screen.availWidth - 40}px; \n            height: 280px; \n            border-radius: 10px;\n            background: pink;"\n        >\n        script标签里的内容与外界完全隔离, 样式需写行内\n        </div>\n      <script>\n    </wx-open-launch-weapp>\n  `\n})\n')])])])])]),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"h5获取用户open-id-注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5获取用户open-id-注"}},[t._v("#")]),t._v(" H5获取用户open_id"),a("a",{attrs:{href:"%E5%BF%85%E9%A1%BB%E5%9C%A8%E5%BE%AE%E4%BF%A1%E7%8E%AF%E5%A2%83%E4%B8%AD(%E5%BE%AE%E4%BF%A1%E5%86%85%E7%BD%AE%E6%B5%8F%E8%A7%88%E5%99%A8)"}},[t._v("^注")])]),t._v(" "),a("h4",{attrs:{id:"_1-open-id是用户在当前公众号下唯一标识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-open-id是用户在当前公众号下唯一标识"}},[t._v("#")]),t._v(" 1. open_id是用户在当前公众号下唯一标识")]),t._v(" "),a("h4",{attrs:{id:"_2-获取open-id需获得用户授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取open-id需获得用户授权"}},[t._v("#")]),t._v(" 2. 获取open_id需获得用户授权")]),t._v(" "),a("ul",[a("li",[t._v("静默授权 无需用户手动, 会刷新原页面, 仅得到open_id")]),t._v(" "),a("li",[t._v("非静默授权 用户手动授权, 可获得更多用户信息(如头像...)")])]),t._v(" "),a("h4",{attrs:{id:"_3-获取方法-静默授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-获取方法-静默授权"}},[t._v("#")]),t._v(" 3. 获取方法(静默授权)")]),t._v(" "),a("ul",[a("li",[t._v("微信公众号后台设置网页授权域名(不带http://和https://)")]),t._v(" "),a("li",[t._v("访问微信url, 配置授权方式及回调url(url需转码)")]),t._v(" "),a("li",[t._v("获取code的微信url ("),a("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档说明"),a("OutboundLink")],1),t._v("):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=URL&response_type=code&scope=snsapi_base&state=123#wechat_redirect\n\n注: 该url会自动重定向到转码后的url地址, 并在地址中携带code参数\n")])])]),a("ul",[a("li",[t._v("url转码\n"),a("ul",[a("li",[t._v("转码方法")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function urlencode(str) {\n  str = (str + '').toString(); \n  return encodeURIComponent(str)\n    .replace(/!/g, '%21')\n    .replace(/'/g, '%27')\n    .replace(/\\(/g, '%28')\n    .replace(/\\)/g, '%29')\n    .replace(/\\*/g, '%2A')\n    .replace(/%20/g, '+');\n}\n")])])]),a("ul",[a("li",[t._v("转码地址: http://tool.chinaz.com/tools/urlencode.aspx")])])])]),t._v(" "),a("h4",{attrs:{id:"_4-将code传输给服务端以获取open-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-将code传输给服务端以获取open-id"}},[t._v("#")]),t._v(" 4. 将code传输给服务端以获取open_id")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('服务端调用该接口获得用户信息\nhttps://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code\n\n返回参数\n{\n  "access_token":"ACCESS_TOKEN",\n  "expires_in":7200,\n  "refresh_token":"REFRESH_TOKEN",\n  "openid":"OPENID",\n  "scope":"SCOPE" \n}\n')])])]),a("h4",{attrs:{id:"_5-注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-注意事项"}},[t._v("#")]),t._v(" 5. 注意事项")]),t._v(" "),a("ul",[a("li",[t._v("必须在微信环境中(微信内置浏览器)")]),t._v(" "),a("li",[t._v("检测url中是否存在code, 有则下一步, 否则页面将一直重复刷新获取code")]),t._v(" "),a("li",[t._v("code是一次性的, 通过该code获得open_id后, code失效")])]),t._v(" "),a("h4",{attrs:{id:"_6-附"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-附"}},[t._v("#")]),t._v(" 6. 附")]),t._v(" "),a("ul",[a("li",[t._v("判断是否为微信环境")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("if (isWeiXin()) {\n  console.log('当前是微信环境');\n  if (url.indexOf('code') > 0) {\n    // 从url中提取code\n    const code = getQueryString('code');\n    // 获取open_id的方法\n    getOpenId(code);\n  } else {\n    // 没有获取到code, 重新获取\n    getBaseInfo();\n  }\n} else {\n  console.log('当前非微信环境');\n}\n\n// 是否为微信环境\nfunction isWeiXin() {\n  let ua = window.navigator.userAgent.toLowerCase();\n  if (ua.match(/MicroMessenger/i) == 'micromessenger') {\n    return true\n  }\n}\n\n// 获取code\nfunction getBaseInfo() {\n  const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${URL}&response_type=code&scope=snsapi_base&state=${url_params}#wechat_redirect`;\n\n  window.location.href = url;\n}\n\n// 从url中获取参数\nfunction getQueryString(name) {\n  let reg = new RegExp(\"(^|&)\" + name + \"=([^&]*)(&|$)\", \"i\");\n  let r = window.location.search.substr(1).match(reg);\n  if (r != null) return unescape(r[2]);\n  return null;\n}\n")])])]),a("hr"),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"h5发券"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5发券"}},[t._v("#")]),t._v(" H5发券")]),t._v(" "),a("h4",{attrs:{id:"一-url重定向到指定的微信支付h5页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-url重定向到指定的微信支付h5页面"}},[t._v("#")]),t._v(" 一. URL重定向到指定的微信支付H5页面")]),t._v(" "),a("ul",[a("li",[t._v("重定向地址(每一个H5领券域名后，都需添加#wechat_redirect，否则会报错)")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("url: `https://action.weixin.qq.com/busifavor/getcouponinfo?stock_id=${stock_id}&out_request_no=${out_request_no}&send_coupon_merchant=${send_coupon_merchant}&open_id=${open_id}#wechat_redirect`\n\nmethod: GET\nparams: 见下表\n")])])]),a("h4",{attrs:{id:"二-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-参数"}},[t._v("#")]),t._v(" 二. 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("变量名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须?")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("批次号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("stock_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("券的唯一id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("发券凭证")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("out_request_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("发券凭证")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("发券商户号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("send_coupon_merchant")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("调用发券接口的商户号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("用户openid")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("open_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("目标发券的用户openid")])])])]),t._v(" "),a("h4",{attrs:{id:"三-签名计算规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-签名计算规则"}},[t._v("#")]),t._v(" 三. 签名计算规则")]),t._v(" "),a("ul",[a("li",[t._v("签名方式 : HMAC-SHA256")]),t._v(" "),a("li",[t._v("V2 "),a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=4_3",target:"_blank",rel:"noopener noreferrer"}},[t._v("签名规则"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("签名原串示例")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("coupon_code=12345678&open_id=a1B2c3D4&out_request_no=202011181058&send_coupon_merchant=12345678&stock_id=12111100000001&key=1a2B3c4D5e6F\n")])])]),a("h4",{attrs:{id:"四-结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-结果"}},[t._v("#")]),t._v(" 四. 结果")]),t._v(" "),a("ul",[a("li",[t._v("1.服务端调用"),a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/busifavor/chapter3_4.shtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("接口"),a("OutboundLink")],1),t._v("根据条件查询用户持有的n(n>=1)张券")]),t._v(" "),a("li",[t._v("2.服务端调用"),a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/busifavor/chapter3_5.shtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("接口"),a("OutboundLink")],1),t._v("查询用户持有的某一张券信息")])]),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"查看微信卡包中的券详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看微信卡包中的券详情"}},[t._v("#")]),t._v(" 查看微信卡包中的券详情")]),t._v(" "),a("h4",{attrs:{id:"jsapi接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsapi接口"}},[t._v("#")]),t._v(" JsApi接口")]),t._v(" "),a("ol",[a("li",[t._v("JS-SDK使用 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("打开券详情API")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('wx.openCard({\n  cardId: result.stock_id ==> "string",\n  code: result.coupon_code ==> "string",\n  openCardParams: "string"\n})\n')])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("变量名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必填?")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("映射此Api")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("批次号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("stock_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("券的批次号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("cardId")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("券code")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("coupon_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("券唯一标识id")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("code")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("打开参数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("open_params")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按如下规则生成")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("openCardParams")])])])]),t._v(" "),a("h4",{attrs:{id:"opencardparams生成方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opencardparams生成方法"}},[t._v("#")]),t._v(" openCardParams生成方法")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("openCardParams参数格式: mch_id=商户号&sign=将要生成的签名key")])]),t._v(" "),a("li",[a("p",[t._v("签名方式: 对单张券信息进行签名, 即单张券信息参数平铺后, coupon_code, open_params, stock_id 按照参数名 ASCII 码从小到大排序(字典序), 使用 URL 键值对的格式(即key1=value1&key2=value2…)拼接成字符串")])]),t._v(" "),a("li",[a("p",[t._v("拼接秘钥 key, 用 api 秘钥进行 HMAC-SHA256 签名, 映射后得到最终的请求参数card_id, code 和 open_params, 详见"),a("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=4_3",target:"_blank",rel:"noopener noreferrer"}},[t._v("签名算法"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("举例:")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[\n  {\n    coupon_code: '123456',\n    stock_id: '654321',\n    mch_id: '888888'\n  },\n  {\n    coupon_code: '3456789',\n    stock_id: '9876543',\n    mch_id: '999999'\n  }\n]\n")])])]),a("ul",[a("li",[t._v("第一步 对参数按照 key=value 的格式, 并按照参数名 ASCII 字典序排序如下:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("第一张券: stringA=coupon_code=123456&mch_id=888888&stock_id=654321\n第二张券: stringB=coupon_code=3456789&mch_id=999999&stock_id=9876543\n")])])]),a("ul",[a("li",[t._v("第二步 拼接API密钥 ("),a("strong",[t._v("注: HMAC-SHA256 签名方式")]),t._v(")")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("第一张券: \n  stringtempA: stringA+'&key=xxx' (key为 商户平台设置的密钥key)\n  sign = hash_hmac('sha256', stringtempA, key).toUpperCase() = \"xxxxx\"\n第二张券: \n  stringtempB: stringB+'&key=xxx' (key为 商户平台设置的密钥key)\n  sign = hash_hmac('sha256', stringtempB, key).toUpperCase() = \"xxxxx\"\n")])])]),a("ul",[a("li",[t._v("第三步 得到最终数据\n"),a("ul",[a("li",[t._v("stock_id 映射为 card_id")]),t._v(" "),a("li",[t._v("coupon_code 映射为 code")]),t._v(" "),a("li",[t._v("mch_id 和 sign 拼接在 openCardParams 中")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[\n  {\n    cardId: stock_id,\n    code: coupon_code,\n    openCardParams: `mch_id=${发券商户号}&sign=${sign}`\n  }\n]\n")])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);