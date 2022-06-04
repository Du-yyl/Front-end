/**
 * Time:2022/2/17 10:09 43
 * Name:algorithm.js
 * Path:留言板
 * ProjectName:Node
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 尽可能产生一个真随机数集合【在密码学上符合真随机】
 * @param min 最小的数
 * @param max 最大的数
 * @param len 要产生几个数
 * @returns {any} 将产生的数放在一个数组中
 */
function randomNum (min, max, len = 1) {
    if (max - min < len) {
        return '指定字段内，无法产生指定长度的不同字符'
    }
    let arr = []
    while (arr.length <= 2) {
        let num = Math.floor(min + max * Math.random())
        if (arr.indexOf(num) === -1) {
            arr.push(num)
        }
    }
    return arr
}

module.exports = randomNum
