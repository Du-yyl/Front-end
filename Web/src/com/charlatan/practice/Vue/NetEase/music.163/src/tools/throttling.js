/**
 * Time:2022/3/9 10:34 57
 * Name:throttling.js
 * Path:src/tools
 * ProjectName:music.163
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 防抖
 * @param callback{function()}要执行的回调
 * @param time{number}间隔时间
 * @returns {(function(): void)|*}返回的是一个闭包
 */
function throttling (callback, time) {
    let whether = true
    return function () {
        let timer = null
        if (whether) {
            whether = false
            callback.call(this, this)
            timer = setTimeout(() => {
                whether = true
                clearTimeout(timer)
            }, time)
        }
    }
}

export default throttling
