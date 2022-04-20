/**
 * Time:2022/4/19 15:34 46
 * Name:drop.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/**
 * 得到数组中指定位数的元素，不改变原数组
 * @param arg 要获取的长度
 * @return {drop|*[]} 获取结果的新数组
 */
function drop (arg) {
  if (arg <= 0) return []
  if (arg >= this.length) return this
  let result = []
  for (let i = 0, len = arg; i < len; i++) result.push(this[i])
  return result
}

Array.prototype.drop = drop
