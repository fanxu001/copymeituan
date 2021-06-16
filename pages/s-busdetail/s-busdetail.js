// pages/s-busdetail/s-busdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    // 图标列表
    icons: [{
      normal:"../../static/imgs/indexn.png",
      active:"../../static/imgs/indexa.png",
      name:"首页"
    },
    {
      normal:"../../static/imgs/ordern.png",
      active:"../../static/imgs/ordera.png",
      name:"订单"
    },
    {
      normal:"../../static/imgs/shopn.png",
      active:"../../static/imgs/shopn.png",
      name:"店铺"

    },
    {
      normal:"../../static/imgs/msgn.png",
      active:"../../static/imgs/msga.png",
      name:"消息"

    }],
  },
// 切换底部导航
onChange(event){
    this.setData({ active: event.detail });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})