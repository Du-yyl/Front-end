/**
 * Time:2022/4/18 21:32 29
 * Name:chunk.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 数组分块
 * - 传入一个参数，将指定的数组拆成指定的组数
 * @param {number}size 分组
 * @return {any[]} 返回一个全新的二维数组
 */
function chunk (size = 0) {
    if (this.length === 0) return []
    let result = []
    let temp = []
    if (size <= 0 || size > this.length) {
        return this
    } else {
        this.forEach((item) => {
            // 先放入空数组
            if (temp.length === 0) {
                result.push(temp)
            }
            // 向空数组中添加内容
            temp.push(item)
            if (temp.length === size) {
                temp = []
            }
        })
    }
    return result
}

Array.prototype.chunk = chunk
