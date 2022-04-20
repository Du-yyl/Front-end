/**
 * Time:2022/4/18 18:57 11
 * Name:find.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * find
 * 返回第一个匹配条件的值，不匹配返回 undefined
 * @param {(item:T,index:number,T[]) => U[]|undefined}callback 指定的回调
 * @returns {*[]} 返回第一个匹配的值
 */
function find (callback) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (callback(this[i], i, this))
      return this[i]
  }
  return undefined
}

Array.prototype.find = find
