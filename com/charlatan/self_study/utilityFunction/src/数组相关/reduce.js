/**
 * Time:2022/4/18 18:11 57
 * Name:result.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 累加器
 * @param {(item:T,index:number,T[]) => U[]}callback 要执行的回调
 * @param {number|string}initialValue 累加器初始值
 * @returns {number|string} 返回累加结果
 */
function reduce (callback, initialValue = 0) {
  for (let i = 0, len = this.length; i < len; i++) {
    initialValue = callback(initialValue, this[i])
  }
  return initialValue
}

Array.prototype.reduce = reduce
