/**
 * Time:2022/4/5 18:24 16
 * Name:request.js
 * Path:utils
 * ProjectName:music.163
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
import server_config from './server_config'

/**
 * 对发送请求的封装，通过参数的不同进行不同的配置
 * @param {string} url 发送的 url ，通过和基础 url 拼接进行使用
 * @param {string|object|ArrayBuffer} data 要传输的数据
 * @param {"GET"|"OPTIONS"|"HEAD"|"POST"|"PUT"|"DELETE"|"TRACE"|"CONNECT"} method 发送请求的方式
 * @returns {Promise<unknown>} 返回一个 promise 实例，通过这个实例的成功和失败决定是否继续
 */
export default (url, data, method = 'GET') =>
  new Promise((resolve, reject) => {
    wx.request({
      url: server_config.baseUrl + url,
      data,
      method,
      header: {
        // cookie: wx.getStorageSync('cookie')[0],
        cookie: wx.getStorageSync('cookie') ? wx.getStorageSync('cookie').find(item => item.indexOf('MUSIC_U=') !== -1) : '',
      },
      success (res) {
        if (data.isLogin) {
          wx.setStorage({
            key: 'cookie',
            data: res.cookies,
          })
        }
        resolve(res.data)
      },
      fail (err) {
        reject(err)
      },
    })
  })
