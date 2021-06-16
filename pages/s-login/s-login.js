// pages/s-register/s-register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面高度
    bodyHeight: 0,
    // 输入数据
    sms: "",
    toast_msg: {
      text_f: "还没有账号？",
      text_a: "去注册一个吧😀 "
    },
   url:"../s-register/s-register",
   btn_text:"登录",
   password:""

  },
  checkboxChange(e){
    console.log(e.detail);
  },
  onMyEvent: function(e){
    e.detail // 自定义组件触发事件时提供的detail对象
  console.log(33);
  },
  goNav(){
      wx.navigateTo({
        url: '../s-record/s-record',
      })
  },
  method: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取设备高度
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          bodyHeight: result.windowHeight
        })
      },
    })

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