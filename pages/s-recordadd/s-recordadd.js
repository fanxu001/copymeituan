import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({
  options:{
    styleIsolation: 'shared',
  },
  data: {
    // 页面数据
    page_lists:[
      {info1:"店名:",value:""},
      {info1:"联系人",value:""},
      {info1:"联系电话",value:""},
      {info1:"经营品类",value:""},
      {info1:"身份证",isUpload:true,id:0},
      {info1:"营业执照",isUpload:true,id:1},
      {info1:"许可证",isUpload:true},
      {info1:"店铺实体图",isUpload:true},
    ],
    show: true,
    isPass:false,
    fileLists:[
      [],[],[],[]
    ],
    add_index:0
      
  },
  preView(event){
    console.log(event.detail)
  },
  addImg(event){
    console.log(event);
    let add_obj=event.detail.file
    let add_index = Number(event.detail.name)
    this.data.fileLists[add_index].push(add_obj)
    this.setData({
      fileLists:this.data.fileLists
    })
  },
  deleteImg(event){
    let delete_index = Number(event.detail.name)
    this.data.fileLists[delete_index] =[]
    this.setData({
      fileList:this.data.fileLists
    })
    console.log(this.data.fileList);
  },
  // 提交信息
  goSubmit(){
    Notify({ type: 'danger', message: '报告！报告！错误了❌' });
  //  
  setTimeout(
    ()=>{
      wx.navigateTo({
        url: '../s-record/s-record',
      })
  
  }
    ,3000)
  },
  onClose() {
    this.setData({ show: false });
  },
  onLoad(){
    
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
  },
});