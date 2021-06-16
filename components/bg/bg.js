Component({
  options: {
    // 样式覆盖
    styleIsolation: 'shared',
  },
  properties: {
    // 页面高度
    bodyHeight: Number,
    // 输入数据
    sms: String,
    toast_msg: Object,
    input_plas: Array,
    array: Object,
    url:String,
    btn_text:String,
    nav_url:{
      default:null,
      type:String}
  },
  data:{
    radio:""
  },
  methods:{
    goLogin() {
       wx.navigateTo({
      url: this.data.url,
    })
    },
   goNav() {
    // var myEventDetail = {} // detail对象，提供给事件监听函数
    // var myEventOption = {} // 触发事件的选项
    this.triggerEvent('goNav')
  }



  },
  mouted:{
  }
  
})