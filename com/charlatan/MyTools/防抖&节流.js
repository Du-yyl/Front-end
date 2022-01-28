/**
 * Time:2022/1/28 12:54 46
 * Name:防抖&节流.js
 * Path:Web代码/src/com/charlatan/MyTools
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 *  防抖
 * @param func  要指定的回调
 * @param wait  等待时间
 * @param immediate 第一次是否执行
 * @returns {(function(): void)|*}
 */
function debounce (func, wait, immediate) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
 * 节流的方法
 * @param callback 回调函数
 * @param time 多久触发一次
 * @returns {(function(): void)|*} 闭包函数返回
 */
function throttling (callback, time) {
  let flag = true
  return function () {
    let timer = null
    if (flag) {
      flag = false
      callback()
      timer = setTimeout(() => {
        flag = true
        clearTimeout(timer)
      }, time)
    }
  }
}

/**
 * 节流的方法
 *  这个方法使用了 callBack.call(this)
 *  使这个方法的调用指定的回调函数时，依然可以准确得返回i，并使用最原始的调用者进行调用
 * @param callBack 防抖要执行的回调函数
 * @param time 多久执行一次，默认值为1秒
 * @returns {(function(): void)|*} 具体方法使用闭包形式返回
 */
function debounce (callBack, time = 1000) {
  let flag = true
  return function () {
    let timer = null
    if (flag) {
      flag = false
      callBack.call(this)
      timer = setTimeout(() => {
        flag = true
        clearTimeout(timer)
      }, time)
    }
  }
}
