/**
 * Time:2022/4/18 19:10 41
 * Name:some.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * every
 * 如果数组有一个元素满足条件返回 true 反之返回 false
 * @param {(item:T,index:number,T[]) => void}callback 指定的回调
 * @returns {boolean} 返回匹配结果
 */
function some (callback) {
    let result = 0
    for (let i = 0, len = this.length; i < len; i++) {
        if (callback(this[i], i, this))
            return true
    }
    return false
}

Array.prototype.some = some
