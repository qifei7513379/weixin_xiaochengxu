//score.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selected: true,
    selected1: false,
    scorebanner:"http://jxckjy.gotoip3.com/public/static/yishiimg/score-banner.png",
    score1: "http://jxckjy.gotoip3.com/public/static/yishiimg/score1.png",
    score2: "http://jxckjy.gotoip3.com/public/static/yishiimg/score2.png",
    score3: "http://jxckjy.gotoip3.com/public/static/yishiimg/score3.png",
    score4: "http://jxckjy.gotoip3.com/public/static/yishiimg/score4.png",
    score5: "http://jxckjy.gotoip3.com/public/static/yishiimg/score5.png",
    score6: "http://jxckjy.gotoip3.com/public/static/yishiimg/score6.png",
    score7: "http://jxckjy.gotoip3.com/public/static/yishiimg/score7.png",
    score8: "http://jxckjy.gotoip3.com/public/static/yishiimg/score8.png",
    score9: "http://jxckjy.gotoip3.com/public/static/yishiimg/score9.png",
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  //事件处理函数
  bindViewTap: function () {
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
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
