/**
 * 封装一个类似于axios的请求工具库
 * axios例子:
 * 1.设置基准路劲的
 * axios.defaults.baseURL=""
 * 
 * 2.发起请求(promise)
 * axios({参数}).then().cath()
 * 
 * 3.监听错误
 * axios.onError(回调函数)
 * 
 * 封装思路:
 * 才用单例的封装模式(全局只有一个对象)
 */

/**发起请求 */
const request = function(config = {}) {
  //url为空
  if (!config.url) {
    throw new Error("请输入url地址")
    return;
  }
  //拼接baseURL
  //判断config.url开头是否包含http或者https

  if(config.url.search(/^http/)===-1){
    config.url = request.defaults.baseURL + config.url
  }
 
   //返回一个promise,resolve是成功的回调函数,reject是失败的回调函数
  return new Promise((resolve, reject) => {
    //发起小程序的请求
    wx.request({
      //把传入的对象解构
      ...config,
      success(res) {
        //成功之后触发的then回调函数
        resolve(res)
      },
      fail(){},
      //后台接口可能自定义错误,错误的函数放到complete来执行
      complete(res){
        //循环调用错误的函数
        request.errors.forEach(fn=>{
          fn(res);
        })
      }
    })
  })

}

/**request的默认属性 */
request.defaults = {
  //基准路劲
  baseURL: ""
}
//保存错误的函数
request.errors = [];
/**接收错误的触发函数 
 * @参数:callback | 传入的错误函数
 * 
 */
request.onError = function(callback) {
  //先保存到错误数组中,请求错误的时候统一调用
  request.errors.push(callback)
}

// 暴露request
export default request;