/**
 * Time:2022/4/18 19:15 09
 * Name:ArrayDeduplication.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * ArrayDeduplication
 * 数组去重
 * @returns {[]} 返回全新去重的数组
 */
// function ArrayDeduplication () {
//   let result = []
//   this.forEach((item) => {
//     if (result.indexOf(item) === -1)
//       result.push(item)
//   })
//   return result
// }

// function ArrayDeduplication () {
//   let result = []
//   let obj = {}
//   this.forEach((item, index) => {
//     if (!obj[item]) {
//       obj[item] = true
//       result.push(item)
//     }
//   })
//   return result
// }

function ArrayDeduplication () {
    // 使用 es6 的新特性进行实现
    return [...new Set(this)]
}

Array.prototype.ArrayDeduplication = ArrayDeduplication
