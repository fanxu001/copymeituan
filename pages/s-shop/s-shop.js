Page({
  data: {
    // 页面数据
    settings_list:[
      {
        title:"门店设置",
        word:"设置店铺头像，塑造品牌形象",
        set_pic:"../../static/imgs/m.png",
        url:"../s-m-set/s-m-set"
      },
      {
        title:"商品管理",
        word:"商品多样更吸引顾客",
        set_pic:"../../static/imgs/s.png",
        url:"../s-g-ad/s-g-ad"
      },
      {
        title:"营销活动",
        word:"设置优惠促进用户下单",
        set_pic:"../../static/imgs/c.png",
        url:"../s-s-control/s-s-control"

      },
    ]

      
  },
  preView(event){
    console.log(event.detail)
  },
  addImg(event){
    const { file } = event.detail;
    let add_obj={
      url:file.url,
      thumb:file.thumb
    }
    this.data.fileList.push(add_obj)
    this.setData({
      fileList:this.data.fileList
    })
  },
  deleteImg(event){
    console.log(event.detail.index);
    this.data.fileList= []
    this.setData({
      fileList:[]
    })
    console.log(this.data.fileList);
  },
  preImg(event){
    console.log(event.detail.file);
  },
  goOption(event){
    console.log(event);
    wx.navigateTo({
      url: event.currentTarget.dataset.url,
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  onLoad(){
  },
  // 进入店铺
  goShop(){
    
  }
});