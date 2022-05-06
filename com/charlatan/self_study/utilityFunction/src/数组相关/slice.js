/**
 * Time:2022/4/18 20:44 12
 * Name:slice.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * slice
 * 数组切片
 * @param {number}start 开始截取的下标
 * @param {number}end 结束截取的下标
 * @returns {array} 返回新形成的数组
 */
function slice (start = 0, end = this.length) {
    let result = []
    end = end > this.length ? this.length : end
    // 如果开始下标比结束还大，如果 end 是 0 或更小，如果是空数组
    if (end <= start || end <= 0 || this.length === 0) return []
    for (let i = start, len = end - start; i < len + start; i++) {
        result.push(this[i])
    }
    return result
}

Array.prototype.slice = slice
