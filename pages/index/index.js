//index.js
import request from "../../utils/request.js"

Page({
  data: {
    autoplay: true,
    imgUrls: [
      //  'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      //  'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      //  'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    //菜单数据
    menus: [],
    //楼层数据
    floors: []
  },
  onLoad() {
    //请求轮播图
    request({
      url: '/home/swiperdata'
    }).then(res => {
      //  console.log(res)
      //返回的数组
      const {
        message
      } = res.data;
      //  console.log(message)
      //修改imgUrls
      this.setData({
        imgUrls: message
      })

    })
    //  请求楼层
    request({
      url: "/home/floordata"
    }).then(res => {
      console.log(res)
      const {
        message
      } = res.data
      this.setData({
        floors: message
      })
    })
    //请求菜单
    request({
      url: '/home/catitems'
    }).then(res => {
      const {
        message
      } = res.data
      //  console.log(res)
      this.setData({
        menus: message
      })
    })
  }
})