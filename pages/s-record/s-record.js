// pages/s-record/s-record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:["全部","已通过","未通过","审核中",],
    options_value:"",
    options_text:"全部",
    isShowPicker:false,
    // 是否显示弹出框
    isShowPop:false,
    isShowAdd:false
  },
  // 选择器切换
  onChange(event) {
    const { picker, value, index } = event.detail;
    console.log(`当前值：${value}, 当前索引：${index}`);
   
  },
  onConfirm(event){
    const {  value } = event.detail;
    this.setData({
      options_text:value,
      isShowPicker:false
  })
  },
  onCancel(event){
    const {  value } = event.detail;
    this.setData({
      isShowPicker:false
  })
  },
  // 是否显示切换器
  showPicker(){
    this.setData({
        isShowPicker:!this.data.isShowPicker
    })
    
    console.log(this.data.isShowPicker);
  },
  // 进入商家详情页
  showBus(){
      this.setData({
        isShowPop:!this.data.isShowPop
      })
  },
  // 添加弹窗
  showAdd(){
    wx.navigateTo({
      url: '../s-recordadd/s-recordadd',
    })
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