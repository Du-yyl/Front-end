/**
 * Time:2022/4/19 15:16 31
 * Name:pull.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 将原数组中一部分内容进行删除
 * @param args 要删除的元素
 * @return {*[]} 返回删除的元素
 */
function pull (...args) {
  if (args.length === 0 || this.length === 0) return []
  let result = []
  for (let i = 0, len = this.length; i < len; i++) {
    // 如果数组中存在元素，那么就进入判断
    if (args.includes(this[i])) {
      // 将 i 指定的内容截取一位，并且进行递减，交给下一次使用，
      // 将返回的结果进行解构，并进行推入，完成删除数组的操作
      result.push(...this.splice(i--, 1))
    }
  }
  return result
}

Array.prototype.pull = pull
