// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      userName: '', //收件人
      telNumber: '', //收件人号码
      detailInfo: '', //详细收货地址
    }

  },
  //获取收货地址
  handleGetAddress() {
    wx.chooseAddress({
      success(res){
        console.log(res)
      },

      success: res => {
        this.setData({
          address: {
            userName: res.userName,
            telNumber: res.telNumber,
            detailInfo: res.provinceName + res.cityName + res.countyName + res.detailInfo
          }
        })
      }
    })
  }

})