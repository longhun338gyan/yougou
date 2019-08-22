import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', //输入框的值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  //每次输入搜索关键字的时候触发
  handleInput(ev) {
    const {
      value
    } = ev.detail;
    this.setData({
      inputValue: value
    })
    //查询搜索建议
    request({
      url: "goods/qsearch",
      data: {
        query: value
      }
    }).then(res => {
      console.log(res)
    })
  },
  //清空输入的值
  handleCancel() {
    this.setData({
      inputValue: ''
    })
  },
  handleConfirm() {
    wx.navigateTo({
      url: '/pages/search_list/index?keyword=' + this.data.inputValue
    })
  }
})