// pages/search_list/index.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    keyword: '',
    goods: [],
    //当前页数
    pagenum: 1,
    // 每页条数
    pagesize: 10,
    hasMore:true
  },
  handleChange(ev) {
    const {
      index
    } = ev.currentTarget.dataset;
    this.setData({
      current: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      keyword: options.keyword

    })
    this.getData();
  },
  getData() {

    const {
      keyword,
      pagenum,
      pagesize
    } = this.data;
    request({
      url: "/goods/search",
      data: {
        query: keyword,
        pagenum,
        pagesize
      }

    }).then(res => {

      // console.log(res)
      const {
        goods
      } = res.data.message;

      if (goods.length < this.data.pagesize) {
        this.setData({
          hanMore: false
        })

      }
      //循环每个商品修改价格,保留两位小数点
      const newGoods = goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2);
        return v;
      })
      this.setData({
        goods: [...this.data.goods, ...newGoods]
      })
    })
  },
  //加载下一页的数据

  onReachBottom() {
    // 没有更多，直接返回
    if (!this.data.hasMore) {
      return;
    }

    // 页数加1
    this.setData({
      pagenum: this.data.pagenum + 1
    });

    // 请求列表数据
    this.getData();

  }






})