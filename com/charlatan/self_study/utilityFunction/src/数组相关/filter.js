/**
 * Time:2022/4/18 18:33 14
 * Name:filter.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * filter
 * - 对数组内容进行过滤
 * - 返回一个新的数组
 * - 通过返回的 true 和 false 进行判断这个元素是否在新的返回数组中添加
 * @param {(item:T,index:number,T[]) => U[]}callback 指定的回调
 * @returns {*[]} 返回的是一个新数组
 */
function filter (callback) {
    let arr = []
    for (let i = 0, len = this.length; i < len; i++) {
        if (callback(this[i], i, this))
            arr.push(this[i])
    }
    return arr
}

Array.prototype.filter = filter
