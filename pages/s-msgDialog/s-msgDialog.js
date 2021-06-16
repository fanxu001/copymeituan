// pages/s-msgDialog/s-msgDialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg_list:[{
        pic:"../../static/imgs/logo.png",
        content:"loreerhaufiahfihaifiahfihahfiuhi福海u和覅u啊哈ihi福海u废话u和覅回复恢复"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //发送信息
  sendMsg(){
    let add_obj={
      pic:"../../static/imgs/logo.png",
      content:"loreerhaufiahfihaifiahfihahfiuhi福海u和覅u啊哈ihi福海u废话u和覅回复恢复"
    }
    this.data.msg_list.push(add_obj)
    this.setData({
      msg_list:this.data.msg_list
    })
    wx.pageScrollTo({
      scrollTop: 100,
      duration: 300
    })

  },
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