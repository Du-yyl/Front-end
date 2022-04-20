/**
 * Time:2022/4/18 16:58 34
 * Name:debounce.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/**
 * 防抖
 * @param {Function}callback 要执行的回调
 * @param {Number}time 每次间隔时间
 * @param {*}args 要传递的参数
 * @returns {(function(*): void)|*} 函数的形式以闭包形式返回
 */
function debounce (callback, time, ...args) {
  let timer = null
  return (event) => {
    // 如果时间不是 null 那么证明这个不是第一次进入，或者时间还没有结束，那么直接开启一个新的定时器，并将上一个关闭
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.call(this, event, ...args)
      // 如果这个执行了，那么一定是停下来了，定时器走完，所以这里将时间标记重置为 null
      timer = null
    }, time)
  }
}
