// pages/s-s-control/s-s-control.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      active_list:[
        {
          pic:"../../static/imgs/yh.png",
          info1:66,info2:33
        },
        {
          pic:"../../static/imgs/yh.png",
          info1:66,info2:33
        },
        {
          pic:"../../static/imgs/yh.png",
          info1:66,info2:33
        },
        {
          pic:"../../static/imgs/yh.png",
          info1:66,info2:33
        },
        {
          pic:"../../static/imgs/yh.png",
          info1:66,info2:33
        },
        {
          pic:"../../static/imgs/yh.png",
          info1:66,info2:33
        },
        {
          pic:"../../static/imgs/yh.png",
          info1:66,info2:33
        },
      ],
      show:false,
        on_money:"",
        cut_money:""
  },
  showAdd(){
    this.setData({
      show:true
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  getInput_1(event){
    this.setData({
      on_money:event.detail
    })
  },
  getInput_2(event){
    this.setData({
      cut_money:event.detail
    })
  },
  // 添加优惠券
  addActive(event){
    if(this.data.on_money && this.data.cut_money){
      let add_obj = {
        pic:"../../static/imgs/yh.png",
        info1:this.data.on_money,
        info2:this.data.cut_money
      }
      console.log(add_obj);
      this.data.active_list.push(add_obj)
      this.setData({
          active_list:this.data.active_list
      })
    }
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