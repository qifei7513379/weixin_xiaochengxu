//about.js
//获取应用实例
const app = getApp()

Page({
  data: {
    markers: [{
      iconPath: "/utils/map-img.png",
      id: 0,
      latitude: 28.678190,
      longitude: 115.931730,
      width: 15,
      height: 20,
      callout:{
        content:"江西教育电视台翼视传媒教育",
        bgColor:"white",
        display:"ALWAYS",
        padding:10
      }
    }],
    polyline: [{
      points: [{
        longitude: 115.931730,
        latitude: 28.678190
      }, {
          longitude: 115.931730,
          latitude: 28.678190
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    selected: true,
    selected1: false,
    aboutbanner1: "http://jxckjy.gotoip3.com/public/static/yishiimg/about-banner1.png",
    aboutbanner2: "http://jxckjy.gotoip3.com/public/static/yishiimg/about-banner2.png",
    aboutimg1: "http://jxckjy.gotoip3.com/public/static/yishiimg/about-img1.png",
    bus: "公交：乘坐3路，4路，13路，16路，28路，231路外线，旅游1线到江西广播电视大学站下车即可",
    aboutcon1:[
      {
        con:"江西省教育电视台江西教育传媒培训中心，2011年起承担全省播音、广播电视编导等传媒专业考前培训工作，2013年经江西省教育厅授牌。翼视艺术人才培养基地隶属于本中心，是专注于高中生传媒艺考，也是江西省内唯一一家省级媒体正规官方授牌机构。",
        unic:0
      },
      {
        con: " 近年来，翼视艺术人才培养基地已向中国传媒大学、北京电影学院、浙江传媒学院等知名学府，输送大量优质生源。",
        unic:1
      }
    ],
    aboutcon2: [
      {
        con: "实训地址：江西省南昌市洪都北大道96号江西教育电视台",
        unic: 0
      },
      {
        con: "报名地址：江西省南昌市洪都北大道高能•首座（教育电视台对面）",
        unic: 1
      },
      {
        con: "1、拨打小椅子咨询服务热线：",
        unic: 2
      },
      {
        con: "18172808010或0791-88115252咨询报名",
        unic: 3
      },
      {
        con: "2、在官方微信公众号",
        unic: 4
      },
      {
        con: "'翼视传媒教育'留言咨询报名和预约测评",
        unic: 5
      },
      {
        con: "3、登录翼视传媒官网www.yishijy.com",
        unic: 6
      },
      {
        con: "网站右侧悬浮栏找到“在线报名”板块点击立即报名。",
        unic: 7
      },
      {
        con: "4、添加翼视官方QQ号 2057332145（翼视传媒），",
        unic: 8
      },
      {
        con: "与在线客服老师咨询报名和预约测评。",
        unic: 9
      },
    ],
    aboutli1: [
      {
        li: "2015届学员刘岚荣获编导专业",
        text:"省联考第1名",
        unic: 0
      },
      {
        li: "2016届会昌一中李露获得编导专业",
        text: "省联考第3名",
        unic: 1
      },
      {
        li: "南昌十中邓汇文获得播音专业",
        text: "省联考第5名",
        unic: 2
      },
      {
        li: "上高二中卢奕成获得编导专业",
        text: "省联考第6名",
        unic: 3
      },
      {
        li: "莲塘一中施泽浩获得空乘专业",
        text: "省联考第7名",
        unic: 4
      },
      {
        li: "2017届莲塘二中章颖获得编导专业",
        text: "省联考第7名",
        unic: 5
      },
      {
        li: "宜春中学孔煜杰获得播音专业",
        text: "省联考第1名",
        unic: 6
      },
      {
        li: "樟树中学邹紫昕获得播音专业",
        text: "省联考第2名",
        unic: 7
      },
      {
        li: "南昌十五中余明羽获得播音专业",
        text: "省联考第8名",
        unic: 8
      },
      {
        li: "南大附中潜泽昊获得播音专业",
        text: "省联考第9名",
        unic: 9
      },
      {
        li: "九江一中吕思潼获得表演专业",
        text: "省联考第3名",
        unic: 10
      },
      {
        li: "2018届莲塘一种孙涵清获得播音专业",
        text: "省联考第2名",
        unic: 11
      },
      {
        li: "南昌十五中邓菲菲获得播音专业",
        text: "省联考第7名",
        unic: 12
      },
      {
        li: "南昌三中胡静怡获得编导专业",
        text: "省联考第7名",
        unic: 13
      }
    ], 
    abouticon1: [
      {
        title: "正规办学",
        unic: 0,
        con:"省内唯一一家省级媒体授牌中心，官方、正规、有保障。",
        url:"http://jxckjy.gotoip3.com/public/static/yishiimg/about-icon1.png"
      },
      {
        title: "道德基准",
        unic: 1,
        con: "凭借口碑及社会信誉立足于江西，秉承良心教育、拒绝商业逐利良好。",
        url: "http://jxckjy.gotoip3.com/public/static/yishiimg/about-icon2.png"
      },
      {
        title: "测评机制",
        unic: 2,
        con: "率先启动专业测评机制，对不适合的学员坚决说不，坚持生源'严进优出'",
        url: "http://jxckjy.gotoip3.com/public/static/yishiimg/about-icon3.png"
      },
      {
        title: "名师团队",
        unic: 3,
        con: "电视台、电台、高校名师及考官真实任教；一手内部真题，因材施教制定专属学习计划。",
        url: "http://jxckjy.gotoip3.com/public/static/yishiimg/about-icon4.png"
      },
      {
        title: "无忧升学",
        unic: 4,
        con: "考前测评、专业培训、报考指导、全程带考、志愿辅导一站式培训，无忧升学。",
        url: "http://jxckjy.gotoip3.com/public/static/yishiimg/about-icon5.png"
      },
      {
        title: "往届成绩",
        unic: 5,
        con: "教育的根本是升学，成绩才是硬道理。",
        url: "http://jxckjy.gotoip3.com/public/static/yishiimg/about-icon6.png"
      },
    ]

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
