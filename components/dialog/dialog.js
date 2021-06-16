Component({
  options:{
    styleIsolation: 'shared',

  },
  properties:{
    show:Boolean,
    title:String
  },
  data: {
  },
methods:{
  onClose() {
    this.setData({ show: false });
  },
}
});