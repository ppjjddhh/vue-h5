import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
const config = require("../config.js");

/**
 * 前后端code约定（以及通用约定code）
 * 数据结构
 * 前端所有报错信息统一使用 message（Msg）
 * @params result {
 *   @params data { object }  数据
 *   @params code { string }  状态码  //TODO 后续可联合后端制定专属code状态集合
 *   @params msg  { string }  接口描述信息
 * }
 */

const $axios = axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL:  process.env.NODE_ENV === 'production' ? config.baseUrl.test : config.baseUrl.dev,
})

// axios 请求头
$axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
$axios.defaults.headers['token'] = localStorage.getItem('token') || ''
$axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截
axios.interceptors.request.use(
  (config) => { 
    // 可在这里做一些数据的校验。
    // session的校验等。
    return config 
  },
  (error) => { 
    return error 
  }
)

// 响应拦截
axios.interceptors.response.use((result) => {
  // ===========================================================
  // 返回方式一
  console.log(result);
  if (`${result.status}` === '200') {
    if (result.data && result.data.code > 0) {
      return Promise.resolve(result);
    } else {
      Toast.fail(result.data.msg || "操作失败");
      return Promise.reject(result);
    }
  } else {
    Toast.fail('网络异常');
    return Promise.reject(result);
  }
 
  // ==========================================================
  // 返回方式二
//   if (result.data.code < -100)  {
//     if (result.data.msg) {
//       // 调用自定义alert
//       utils.alert(result.data.msg, function () {
//         window.location.assign('/pc/index');
//       });
//     }
//     return Promise.reject(result.data.data)
//   }
//   return result;
// }, (err) => {
//   utils.alertLoadExec(false);
//   // 返回数据前做了什么
//   return Promise.reject(err)
})