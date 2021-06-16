Component({
  /**
   * 页面的初始数据
   */
  options: {
    // 样式覆盖
    styleIsolation: 'shared',
  },
  properties:{
    active:Number,
    isTabbar:{
      type:Boolean,
      default:true
    }
  },
  data: {
    // 图标列表
    icons: [{
      normal:"../../static/imgs/indexn.png",
      active:"../../static/imgs/indexa.png",
      name:"首页",
      url:"../../pages/s-busdetail/s-busdetail"
    },
    {
      normal:"../../static/imgs/ordern.png",
      active:"../../static/imgs/ordera.png",
      name:"订单",
      url:"../../pages/s-order/s-order"
    },
    {
      normal:"../../static/imgs/shopn.png",
      active:"../../static/imgs/shopn.png",
      name:"店铺",
      url:"../../pages/s-shop/s-shop"

    },
    {
      normal:"../../static/imgs/msgn.png",
      active:"../../static/imgs/msga.png",
      name:"消息",
      url:"../../pages/s-msg/s-msg"

    }],
    showShare: false,
    options: [
        { name: '微信', icon: 'wechat' },
        { name: 'QQ', icon: 'qq' },
        { name: '复制链接', icon: 'link' },
        { name: '二维码', icon: 'qrcode' },

    ],
  },

  onLoad(event){
    this.setData({
      active:event.detail
    })
    console.log(this.data.active);
  },
  methods:{
// 切换底部导航
onChange(event){
    if(this.data.active == event.detail) {
      return
    }
    else{
      this.setData({ active: event.detail });
      wx.navigateTo({
        url: this.data.icons[event.detail].url,
      })
    }
},
shareTap(){
  this.setData({
    showShare:!this.data.showShare
  })
},
onClick(event) {
  this.setData({ showShare: true });
},

onClose() {
  this.setData({ showShare: false });
},

onSelect(event) {
  this.onClose();
},
  }
})