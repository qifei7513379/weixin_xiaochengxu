//detail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    viewid:"",
    tui:true,
    detailimg:"http://jxckjy.gotoip3.com/public/static/yishiimg/detail1.png",
    title:"艺术生文化课冲刺进度安排",
    time:"22小时前",
    content: "2016届翼视学子，江西省联考前十名中，收获编导全省第3、6名，播音全省第5名，空乘全省第7名；在校考中更是独领风采，收获了266张专业合格证，其中不乏国字号顶尖名校，比如北京电影学院、中央戏剧学院、上海戏剧学院、浙江传媒学院等，也涵盖'211工程'一本的综合型院校，比如武汉大学、华东师范大学、暨南大学、河海大学等，更包括全国六大专业艺术学院，南京艺术学院、山东艺术学院、云南艺术学院等。",
    teachlist: [
      {
        imgsrc: "http://jxckjy.gotoip3.com/public/static/yishiimg/teach-img1.png",
        viewid: "1",
        title: "艺术生文化课冲刺进度安排详情",
        time: "2018-01-10",
        num: "34"
      }, {
        imgsrc: "http://jxckjy.gotoip3.com/public/static/yishiimg/teach-img1.png",
        viewid: "2",
        title: "课程安排",
        time: "2018-01-18",
        num: "18"
      }
    ]

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数 
    this.setData({
      viewid: options.id
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
