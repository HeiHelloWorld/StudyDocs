# 小程序
## 自定义的好物集发券组件 v1.0
#### 1. 在小程序app.json加入插件配置(引入插件包)
```
{
  "plugins": {
    "sendCoupon": {
      "version": "1.1.5", // 插件版本号
      "provider": "wxf3f436ba9bd4be7b"
    }
  }
}
```

#### 2. 在小程序页面引入发券插件(仅用于发起请求, 样式可定制)
+ 页面json文件(xxx.json)中
  ```
  {
    "usingComponents": {
      "send-coupon": "plugin://sendaCoupon/send-coupon"
    }
  }
  ```
+ 页面wxml文件(xxx.wxml)中
  ```
  <send-coupon
    bindcustomevent="_getcoupon" 
    send_coupon_params="{{send_coupon_params}}"
    sign="{{sign}}"
    send_coupon_merchant="{{send_coupon_merchant}}"
  >
    <view>此处可自定义代码</view>
  </send-coupon>
  ```
##### 参数说明
+ bindcustomevent : 组件的自定义事件, 领券后调用 ==> Function
+ send_coupon_params : 发券参数 ==> Array[Object]
  ```
  [
    {
      stock_id: "string",
      out_request_no: "string",
      coupon_code: "string"
    }
  ]
  ```
  |  参数名  |  变量    |  类型  | 必填? | 说明 |
  | :----- | :----- | :-----:  | :-----: | :----- |
  | 批次号 |  stock_id  | string  | Y | 券的批次id |
  | 发券凭证 |  out_request_no  | string  | Y | 发券凭证 |
  | 券code |  coupon_code  | string  | N | 券code, 如果批次是发放时指定code的类型，则发券时必填coupon_code |

+ sign : 签名(**必需**)(需在服务端使用加密算法获得, 详见文档) ==> String
+ send_coupon_merchant : 发券商户号(**必需**) ==> String

##### 页面js文件(xxx.js)中 [查看参数详情][插件文档]
  ```
  _getcoupon(params) {
    console.log('发券插件参数', params);
    if (params.detail.errcode === "OK") {
      const result = params.detail.send_coupon_result;
    }
  }
  ```

------
------
------

## H5打开小程序 [^注]
#### 1. 开放标签详情 [查看文档][开放标签]
  + 在微信公众平台添加"JS接口安全域名"(云开发不需要)
  + 在需要调js接口的文件中引入js文件 [开放标签js][开放标签js]
  + 签名需在服务端进行, 将config中配置项返回前端 [签名算法(附录1)][签名算法]

    - index.html
    ```
    <wx-open-launch-weapp
      id="launch-btn"
      username="gh_xxxxxxxx"
      path="pages/home/index.html?user=123&action=abc"
    >
      <template>
        <button class="btn">打开小程序</button>
      </template>
    </wx-open-launch-weapp>

    参数: username 必填, 小程序的原始id, 即gh_开头的id
          path    非必填, 所需跳转的小程序内页面路径及参数
    ```
    - index.js
    ```
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
      appId: '', // 必填，公众号的唯一标识
      timestamp: , // 必填，生成签名的时间戳
      nonceStr: '', // 必填，生成签名的随机串
      signature: '',// 必填，签名
      jsApiList: [], // 必填，需要使用的JS接口列表
      openTagList: [] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
    });

    wx.ready(() => console.log('config信息验证完成, 可进行非用户触发的接口调用'))
    wx.error(err => console.log('config信息验证失败(可在此处更新签名)'))
    ```
#### 2. 在Vue中使用开放标签
  + 标签需在配置成功后动态渲染, 否则失效
    - html中
    ```
    <div v-html="wxBtnDom"></div>
    ```
    - js
    ```
    wx.ready(function() {
      this.wxBtnDom = `
        <wx-open-launch-weapp username="xxx">
          <script type="text/wxtag-template">
            <div 
              style="display: block; 
                width: ${screen.availWidth - 40}px; 
                height: 280px; 
                border-radius: 10px;
                background: pink;"
            >
            script标签里的内容与外界完全隔离, 样式需写行内
            </div>
          <script>
        </wx-open-launch-weapp>
      `
    })
    ```

------
------
------

## H5获取用户open_id[^注]
#### 1. open_id是用户在当前公众号下唯一标识
#### 2. 获取open_id需获得用户授权
  + 静默授权 无需用户手动, 会刷新原页面, 仅得到open_id
  + 非静默授权 用户手动授权, 可获得更多用户信息(如头像...)
#### 3. 获取方法(静默授权)
  + 微信公众号后台设置网页授权域名(不带http://和https://)
  + 访问微信url, 配置授权方式及回调url(url需转码)
  + 获取code的微信url ([文档说明][url参数]):
  ```
  https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=URL&response_type=code&scope=snsapi_base&state=123#wechat_redirect

  注: 该url会自动重定向到转码后的url地址, 并在地址中携带code参数
  ```

  + url转码
    - 转码方法
    ```
    function urlencode(str) {
      str = (str + '').toString(); 
      return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A')
        .replace(/%20/g, '+');
    }
    ```
    - 转码地址: http://tool.chinaz.com/tools/urlencode.aspx
#### 4. 将code传输给服务端以获取open_id
  ```
  服务端调用该接口获得用户信息
  https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code

  返回参数
  {
    "access_token":"ACCESS_TOKEN",
    "expires_in":7200,
    "refresh_token":"REFRESH_TOKEN",
    "openid":"OPENID",
    "scope":"SCOPE" 
  }
  ```
#### 5. 注意事项
  + 必须在微信环境中(微信内置浏览器)
  + 检测url中是否存在code, 有则下一步, 否则页面将一直重复刷新获取code
  + code是一次性的, 通过该code获得open_id后, code失效
#### 6. 附
  - 判断是否为微信环境
  ```
  if (isWeiXin()) {
    console.log('当前是微信环境');
    if (url.indexOf('code') > 0) {
      // 从url中提取code
      const code = getQueryString('code');
      // 获取open_id的方法
      getOpenId(code);
    } else {
      // 没有获取到code, 重新获取
      getBaseInfo();
    }
  } else {
    console.log('当前非微信环境');
  }

  // 是否为微信环境
  function isWeiXin() {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    }
  }

  // 获取code
  function getBaseInfo() {
    const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${URL}&response_type=code&scope=snsapi_base&state=${url_params}#wechat_redirect`;

    window.location.href = url;
  }

  // 从url中获取参数
  function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  ```

------
------
------

## H5发券
#### 一. URL重定向到指定的微信支付H5页面
+ 重定向地址(每一个H5领券域名后，都需添加#wechat_redirect，否则会报错)
```
url: `https://action.weixin.qq.com/busifavor/getcouponinfo?stock_id=${stock_id}&out_request_no=${out_request_no}&send_coupon_merchant=${send_coupon_merchant}&open_id=${open_id}#wechat_redirect`

method: GET
params: 见下表
```

#### 二. 参数
| 参数名 | 变量名 | 类型 | 必须? | 说明 |
| :---- | :---- | :-----: | :----: | :---- |
| 批次号 | stock_id | string | Y | 券的唯一id |
| 发券凭证 | out_request_no | string | Y | 发券凭证 |
| 发券商户号 | send_coupon_merchant | string | Y | 	调用发券接口的商户号 |
| 用户openid | open_id | string | Y | 	目标发券的用户openid |

#### 三. 签名计算规则
+ 签名方式 : HMAC-SHA256
+ V2 [签名规则][V2签名规则]
+ 签名原串示例
```
coupon_code=12345678&open_id=a1B2c3D4&out_request_no=202011181058&send_coupon_merchant=12345678&stock_id=12111100000001&key=1a2B3c4D5e6F
```
#### 四. 结果
+ 1.服务端调用[接口][查询n张券]根据条件查询用户持有的n(n>=1)张券
+ 2.服务端调用[接口][查询单张券]查询用户持有的某一张券信息

------
------
------

## 查看微信卡包中的券详情
#### JsApi接口
1. JS-SDK使用 [查看文档][JS-SDK文档]
2. 打开券详情API
```
wx.openCard({
  cardId: result.stock_id ==> "string",
  code: result.coupon_code ==> "string",
  openCardParams: "string"
})
```
| 参数名 | 变量名 | 必填? | 说明 | 映射此Api |
|:----|:----|:----:|:----:|:----|:----|
| 批次号 | stock_id| Y | 券的批次号 | cardId |
| 券code | coupon_code | Y | 券唯一标识id | code |
| 打开参数 | open_params | Y | 按如下规则生成 | openCardParams |

#### openCardParams生成方法
1. openCardParams参数格式: mch_id=商户号&sign=将要生成的签名key
2. 签名方式: 对单张券信息进行签名, 即单张券信息参数平铺后, coupon_code, open_params, stock_id 按照参数名 ASCII 码从小到大排序(字典序), 使用 URL 键值对的格式(即key1=value1&key2=value2…)拼接成字符串
3. 拼接秘钥 key, 用 api 秘钥进行 HMAC-SHA256 签名, 映射后得到最终的请求参数card_id, code 和 open_params, 详见[签名算法][签名算法]

4. 举例: 
```
[
  {
    coupon_code: '123456',
    stock_id: '654321',
    mch_id: '888888'
  },
  {
    coupon_code: '3456789',
    stock_id: '9876543',
    mch_id: '999999'
  }
]
```
  + 第一步 对参数按照 key=value 的格式, 并按照参数名 ASCII 字典序排序如下:
  ```
  第一张券: stringA=coupon_code=123456&mch_id=888888&stock_id=654321
  第二张券: stringB=coupon_code=3456789&mch_id=999999&stock_id=9876543
  ```
  + 第二步 拼接API密钥 (**注: HMAC-SHA256 签名方式**)
  ```
  第一张券: 
    stringtempA: stringA+'&key=xxx' (key为 商户平台设置的密钥key)
    sign = hash_hmac('sha256', stringtempA, key).toUpperCase() = "xxxxx"
  第二张券: 
    stringtempB: stringB+'&key=xxx' (key为 商户平台设置的密钥key)
    sign = hash_hmac('sha256', stringtempB, key).toUpperCase() = "xxxxx"
  ```
  + 第三步 得到最终数据
    - stock_id 映射为 card_id
    - coupon_code 映射为 code
    - mch_id 和 sign 拼接在 openCardParams 中
    ```
    [
      {
        cardId: stock_id,
        code: coupon_code,
        openCardParams: `mch_id=${发券商户号}&sign=${sign}`
      }
    ]
    ```



[^注]: 必须在微信环境中(微信内置浏览器)
[插件文档]: https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/miniprogram/chapter3_1.shtml#top
[JS-SDK文档]: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
[签名算法]: https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=4_3
[开放标签]: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html
[开放标签js]: http://res2.wx.qq.com/open/js/jweixin-1.6.0.js
[签名算法]: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62
[url参数]: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
[V2签名规则]: https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=4_3
[查询n张券]: https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/busifavor/chapter3_4.shtml
[查询单张券]: https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/busifavor/chapter3_5.shtml
