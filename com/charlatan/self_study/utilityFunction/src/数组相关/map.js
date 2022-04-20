/**
 * Time:2022/4/18 17:40 48
 * Name:map.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * map
 * - Map可以对数组内容进行操作，并且将操作后的数组封装到新数组中进行返回
 * - 一般在数组内容批量操作中使用
 * - 参数分别是：本次操作的元素，这个元素的下标，数组本身
 * @param {(item: T, index: number, array: T[]) => U[]} callback
 * @returns {*[]} 返回数组
 */
function map (callback) {
  let arr = []
  for (let i = 0, len = this.length; i < len; i++) {
    arr.push(callback(this[i], i, this))
  }
  return arr
}

Array.prototype.map = map
