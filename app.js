//app.js
import request from "./utils/request.js"
App({
 //项目运行时触发,只会执行一次
 onLaunch:function(){
   //初始化request基准路劲
   request.defaults.baseURL ="https://api.zbztb.cn/api/public/v1"
   //拦截错误
 }
})