// pages/goods_detail/index.js
import  request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {id} = options;
    
    request({
      url:"/goods/detail",
      data:{
        goods_id:id
      }
    }).then(res=>{
      const  {message} =res.data;
      // console.log(res)
      this.setData({
        detail:message
      })
    })
  },
  handleAddCart(){
    wx.showToast({
      title: '添加购物车成功',
      icon:'success',
      duration:2000
    })

    //获取本地goods列表
    const goods = wx.getStorageSync("goods")||{}

    //把商品添加到本地的goods对象中
    const {detail} =this.data
    goods[detail.goods_id] =detail

    //保存到本地
    wx.setStorageSync("goods", goods)
      }


})