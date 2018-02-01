//teach.js
//获取应用实例
const app = getApp()

Page({
  data: {
    teachlist: [
      {
        imgsrc:"http://jxckjy.gotoip3.com/public/static/yishiimg/teach-img1.png",
        viewid:"1",
        title:"艺术生文化课冲刺进度安排详情",
        time:"2018-01-10",
        num:"34"        
      }, {
        imgsrc: "http://jxckjy.gotoip3.com/public/static/yishiimg/teach-img1.png",
        viewid: "2",
        title: "课程安排",
        time: "2018-01-18",
        num: "18"
      }, {
        imgsrc: "http://jxckjy.gotoip3.com/public/static/yishiimg/teach-img1.png",
        viewid: "3",
        title: "后来看到的各种",
        time: "2018-01-21",
        num: "35"
      }, {
        imgsrc: "http://jxckjy.gotoip3.com/public/static/yishiimg/teach-img1.png",
        viewid: "4",
        title: "最后一届特别厉害",
        time: "2018-01-22",
        num: "26"
      }, {
        imgsrc: "http://jxckjy.gotoip3.com/public/static/yishiimg/teach-img1.png",
        viewid: "5",
        title: "特别安排的对战",
        time: "2018-01-25",
        num: "14"
      }, {
        imgsrc: "http://jxckjy.gotoip3.com/public/static/yishiimg/teach-img1.png",
        viewid: "6",
        title: "于是两份放在一边",
        time: "2018-01-30",
        num: "8"
      }
    ]
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
