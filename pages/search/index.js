// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',//输入框的值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //每次输入搜索关键字的时候触发
  handleInput(ev){
    const {value} = ev.detail;
    this.setData({
     inputValue:value
    })
  },
  //清空输入的值
  handleCancel(){
    this.setData({
      inputValue:''
    })
  }
})