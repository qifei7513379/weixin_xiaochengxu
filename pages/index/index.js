//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://jxckjy.gotoip3.com/public/static/yishiimg/swiper01.png',
      'http://jxckjy.gotoip3.com/public/static/yishiimg/swiper01.png',
      'http://jxckjy.gotoip3.com/public/static/yishiimg/swiper01.png'
    ],
    cont1:"http://jxckjy.gotoip3.com/public/static/yishiimg/cont1.png",
    cont2: "http://jxckjy.gotoip3.com/public/static/yishiimg/cont2.png",
    cont3: "http://jxckjy.gotoip3.com/public/static/yishiimg/cont3.png",
    cont4: "http://jxckjy.gotoip3.com/public/static/yishiimg/cont4.png",
    cont5: "http://jxckjy.gotoip3.com/public/static/yishiimg/cont5.png",
    cont6: "http://jxckjy.gotoip3.com/public/static/yishiimg/cont6.png",
    hobby:[
      "我的家族：江西教育电视台传媒培训中心",
      "出生日期：2013年3月",
      "我的籍贯：江西省（南昌）",
      "我的职业：传媒艺考教育专家",
      "我的特点：细心，耐心，责任心",
      "我的爱好：研究传媒艺考细则，培养传媒艺考精英",
      "我的成就：陪伴700多位小椅子成功录取到传媒名校",
      "我的目标：只为羽翼渐丰的你",
      "我的座右铭：以梦为马，不负韶华"
    ],
    indexbg:"http://jxckjy.gotoip3.com/public/static/yishiimg/swiper-bg.png",
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    con02: "http://jxckjy.gotoip3.com/public/static/yishiimg/content02.png",
    nav01: "http://jxckjy.gotoip3.com/public/static/yishiimg/nav01.png",
    nav02: "http://jxckjy.gotoip3.com/public/static/yishiimg/nav02.png",
    nav03: "http://jxckjy.gotoip3.com/public/static/yishiimg/nav03.png",
    nav04: "http://jxckjy.gotoip3.com/public/static/yishiimg/nav04.png",
    src:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
