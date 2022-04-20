/**
 * Time:2022/4/18 16:41 25
 * Name:throttle.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 节流
 * - 因为要接收 events 参数，要在调用的时候传递，而参数的指定时不能直接进行接收，所以放在闭包中接收
 * - 使用时在函数后正常传递参数，如果要使用 events 那么要将 events 变量放在第一个
 * @param {Function}callback 要执行的回调
 * @param {Number}time 每次间隔时间
 * @param args 回调执行的参数
 * @returns {(function(*): (*|undefined))|*} 要指定的函数以闭包形式返回
 */
function throttle (callback, time, ...args) {
  let flag = true
  return (event) => {
    if (flag) {
      flag = false
      setTimeout(() => {
        flag = true
      }, time)
      return callback.call(this, event, ...args)
    }
  }
}
