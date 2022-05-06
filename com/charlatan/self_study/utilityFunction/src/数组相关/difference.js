/**
 * Time:2022/4/18 22:01 11
 * Name:difference.js
 * Path:src
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
/**
 * 通过两个数组对比，返回不同的不同的内容
 * @param array
 * @return {any[]}
 */
function difference (array) {
    let result = []
    if (this.length === 0)
        return []
    
    if (array.length === 0)
        return this
    return this.filter((item) => {
        return !array.includes(item)
    })
    
}

Array.prototype.difference = difference
