/**
 * Time:2022/4/18 20:34 41
 * Name:concat.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * concat
 * 合并数组
 * @param {any[]}array 接收新的数组
 * @returns {array} 返回合并结果
 */
function concat (...array) {
    let result = [...this]
    array.forEach((item) => {Array.isArray(item) ? result.push(...item) : result.push(item)})
    return result
}

Array.prototype.concat = concat
