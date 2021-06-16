Page({
  options:{
    styleIsolation: 'shared',
  },
  data: {
    // 页面数据
    page_lists:[
      {info1:"店名:xxxx",info2:"经营品类：xxxx"},
      {info1:"联系人:xxxxx",info2:"联系电话:xxxxxxx"},
      {info1:"身份证",info3:"/static/imgs/logo.png"},
      {info1:"营业执照",info3:"/static/imgs/logo.png"},
      {info1:"许可证",info3:"/static/imgs/logo.png"},
      {info1:"店铺实体图",info3:"/static/imgs/logo.png"},
    ],
    show: true,
    isPass:false
      
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

  onClose() {
    this.setData({ show: false });
  },
  onLoad(){
    console.log(this.data.fileList);
  },
  // 进入店铺
  goShop(){
    
    if(!this.data.isPass){
      wx.navigateTo({
        url: '../s-busdetail/s-busdetail',
      })
    }
    this.setData({
      isPass:!this.data.isPass
    })
  }
});