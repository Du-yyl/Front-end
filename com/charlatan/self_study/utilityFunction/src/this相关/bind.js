/**
 * Time:2022/4/18 15:21 53
 * Name:bind.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * bind 函数是返回一个 function ，并且在这个函数调用的时候会将方法中的 this 指定好
 * 当调用的时候在进行参数的传递，函数不会进行接收和处理
 * 如果原始函数需要传参，而第一定义的时候没有传，而在 bind 指定之后传参也可以
 * @param{Object} obj 要指定的对象
 * @param {*}args 参数
 * @returns {function()} 返回的 function
 */
Function.prototype.bind = function (obj, ...args) {
  /**
   * 返回一个函数，这个函数会接收参数，并且在第二次调用时，如果第一次调用方法时没有指定参数，那么这个参数会传入原本参数中
   * @param {*}arg 第二次要传入的参数
   * @returns {*|undefined} 返回运行结果或 undefined
   */
  return (...arg) => {
    // 函数的返回内容和 call 一致
    if (obj === undefined || obj === null) {
      obj = globalThis
    }
    obj.temp = this
    let result = obj.temp(...args, ...arg)
    delete obj.temp
    return result || undefined
  }
}
