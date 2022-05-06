/**
 * Time:2022/4/18 19:05 13
 * Name:every.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * every
 * 如果数组每个元素都满足条件返回 true 反之返回 false
 * @param {(item:T,index:number,T[]) => void}callback 指定的回调
 * @returns {boolean} 返回第一个匹配的下标
 */
function every (callback) {
    let result = 0
    for (let i = 0, len = this.length; i < len; i++) {
        if (!callback(this[i], i, this))
            return false
    }
    return true
}

Array.prototype.every = every
