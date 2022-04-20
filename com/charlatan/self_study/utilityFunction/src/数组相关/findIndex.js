/**
 * Time:2022/4/18 19:01 33
 * Name:findIndex.js
 * Path:test
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * findIndex
 * 返回第一个匹配条件的值下标，不匹配返回 -1
 * @param {(item:T,index:number,T[]) => U[]|number}callback 指定的回调
 * @returns {*[]} 返回第一个匹配的下标
 */
function findIndex (callback) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (callback(this[i], i, this))
      return i
  }
  return -1
}

Array.prototype.findIndex = findIndex
