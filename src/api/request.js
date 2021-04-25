import axios from "axios";
import qs from "qs";
 
/**
 * 封装请求方式
 */
const request = {
    /**
     * @name: 封装axios get方法
     * @desc: 描述
     * @param url { string } 请求连接
     * @param params { any }请求参数
     * @param callback { any } 回调方法
     */
    get(url, params, callback) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params: params
                })
                .then(res => {
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
 
    /**
     * @name: 封装axios post方法
     * @desc: 描述
     * @param url { string } 请求连接
     * @param params { any }请求参数
     * @param callback { any } 回调方法
     */
    post(url, params, callback) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, qs.stringify(params))
                .then(res => {
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
 
    /**
     * @name: put请求封装
     * @param url { string } 请求连接
     * @param params { any }请求参数
     * @param callback { any } 回调方法
     */
    put(url, params, callback) {
        return new Promise((resolve, reject) => {
            axios
                .put(url, params)
                .then(res => {
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                }, err => {
                    reject(err)
                })
        })
    },
    /**
     * @name: 请求失败后的错误统一处理
     * @param {Number} status 请求失败的状态码
     */
    errorHandle(status, other) {
        // 状态码判断
        switch (status) {
            // 401: 未登录状态，跳转登录页
            case 401:
                // toLogin();
                break;
            // 403 token过期
            // 清除token并跳转登录页
            case 403:
                // tip('登录过期，请重新登录');
                // localStorage.removeItem('token');
                // store.commit('loginSuccess', null);
                setTimeout(() => {
                    // toLogin();
                }, 1000);
                break;
            // 404请求不存在
            case 404:
                // tip('请求的资源不存在');
                break;
            default:
                console.log(other);
        }
    }
    
}
export default request;