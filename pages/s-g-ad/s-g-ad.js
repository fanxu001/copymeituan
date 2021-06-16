// pages/s-g-ad/s-g-ad.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    showShare: false,
    active:0,
    isShowGoods:false,
    isAddGood:false,
    isShowAdd:false,
    isShowEditor:false,
    isShowDelete:false,
    isShowChange:false,
    fileList:[],
    active_list:[
      {
        info1:"暖暖热饮"
      },
      {
     
        info1:"暖暖热饮"
      },
      {
     
        info1:"暖暖热饮"
      },
      {
     
        info1:"暖暖热饮"
      },
      {
     
        info1:"暖暖热饮"
      },
      
    ],
    slider_height:0
  },
  onChange(event){
    this.setData({
      active:event.detail
    })

  }
  ,
  // 展示添加弹框
  showAdd(){
    this.setData({
      isShowAdd:true
    })
  },
  onConfirm(event){
    console.log(event);
  },
  showEditor(){
    this.setData({
      isShowEditor:true
    })
  },
  showDelete(){
    this.setData({
      isShowDelete:true
    })
  },
  showChange(){
    this.setData({
      isShowChange:true
    })
  },
  addImg(event){
    let add_obj=event.detail.file
    this.data.fileList.push(add_obj)
    this.setData({
      fileList:this.data.fileList
    })
  },
  deleteImg(event){
    this.data.fileList =[]
    this.setData({
      fileList:this.data.fileList
    })
  },
  showGood(){
    this.setData({
      isShowGoods:true
    })
  },
  showAddGood(){
    this.setData({
      isAddGood:true
    })
  },
  // 添加优惠券
  addActive(event){
    if(this.data.on_money && this.data.cut_money){
      let add_obj = {
     
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
      // 获取设备高度
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          slider_height: result.windowHeight
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