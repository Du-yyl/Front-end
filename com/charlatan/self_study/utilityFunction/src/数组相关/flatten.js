/**
 * Time:2022/4/18 21:08 55
 * Name:flatten.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 让多维数组扁平化
 * @returns {any[]}
 */
// function flatten (array = this) {
//   let result = []
//   array.forEach((item) => { Array.isArray(item) ? result.push(...flatten(item)) : result.push(item)})
//   return result
// }

function flatten (array = this) {
  let result = [...array]
  // 先判断数组中是否存在数组
  while (result.some((item) => Array.isArray(item))) {
    // console.log([].concat(...result))
    console.log(result)
    result = [].concat(...result)
  }
  return result
}

Array.prototype.flatten = flatten
