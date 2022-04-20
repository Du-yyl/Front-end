/**
 * Time:2022/4/18 15:44 58
 * Name:call&bind&apply.js
 * Path:useDirectly
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 定义在原型中
 * @param {Object}obj 要指定的对象
 * @param {*}args 调用方法传递的参数
 * @returns {*|undefined} 将函数的调用的返回值进行返回，如果没有返回值，返回的是 undefined
 */
Function.prototype.call = function (obj, ...args) {
  obj = obj === null || obj === undefined ? globalThis : obj
  obj.temp = this
  let result = obj.temp(...args)
  delete obj.temp
  return result || undefined
}

/**
 * bind 函数是返回一个 function
 * @param {Object} obj 要指定的对象
 * @param {*}args 参数
 * @returns {function()} 返回的 function
 */
Function.prototype.bind = function (obj, ...args) {
  return (...arg) => {
    obj = obj === null || obj === undefined ? globalThis : obj
    obj.temp = this
    let result = obj.temp(...args, ...arg)
    delete obj.temp
    return result || undefined
  }
}
/**
 * 基本内容和 call 一样
 * @param {Object}obj 要指定的对象昂
 * @param {Array}argArray 传入的参数的数组
 * @returns {*|undefined} 返回执行结果，没有结果返回 undefined
 */
Function.prototype.apply = function (obj, argArray) {
  obj = obj === null || obj === undefined ? globalThis : obj
  obj.temp = this
  let result = obj.temp(...argArray)
  delete obj.temp
  return result || undefined
}
