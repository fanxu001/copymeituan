// pages/s-m-set/s-m-set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图片上传的路径
     fileList: [],
    input_list:[
      {
        label:"门店分类",
        value:"jfajofa"
      },
      {
        label:"经营品类",
        value:"jfajofa"
      },
      {
        label:"营业状态",
        value:"jfajofa"
      },
      {
        label:"门店公告",
        value:"jfajofa"
      },
      {
        label:"店铺电话",
        value:"jfajofa"
      },
      {
        label:"店铺地址",
        value:"jfajofa"
      }

    ]
  },
  afterRead(event) {
    const img_Obj = event.detail.file
    this.data.fileList.push(img_Obj)
    this.setData({
      fileList:this.data.fileList
    })
  },
  deleteImg(){
    this.data.fileList = []
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