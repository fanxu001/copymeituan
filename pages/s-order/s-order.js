
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    current:0,
    swiper_height:0,
    indicatorDots: true,
    vertical: false,
    // autoplay:true,
    autoplay:false,
    interval: 2000,
    duration: 500

  },


changeIndex(event){
  const change_obj = event.detail
  if(change_obj.source == "touch"){
    this.setData({
      current:change_obj.current
    })
  }
},
onChange(event){
this.setData({
  current:event.detail.index
})
},
// 获取屏幕高度
onLoad(){
      wx.getSystemInfo({
          success: (res) => {
            this.setData({
              swiper_height:res.windowHeight
            })
          },
      })
}
})
