/**
 * Time:2022/4/18 17:26 30
 * Name:debounce&throttle.js
 * Path:useDirectly
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 防抖
 * @param {Function}callback 要执行的回调
 * @param {Number}time 每次间隔时间
 * @param {*}args 要传递的参数
 * @returns {(function(*): void)|*} 函数的形式以闭包形式返回
 */
function debounce (callback, time, ...args) {
    let timer = null
    return (event) => {
        if (timer !== null) clearTimeout(timer)
        timer = setTimeout(() => {
            callback.call(this, event, ...args)
            timer = null
        }, time)
    }
}

/**
 * 节流
 * - 使用时在函数后正常传递参数，如果要使用 events 那么要将 events 变量放在第一个
 * @param {Function}callback 要执行的回调
 * @param {Number}time 每次间隔时间
 * @param args 回调执行的参数
 * @returns {(function(*): (*|undefined))|*} 要指定的函数以闭包形式返回
 */
function throttle (callback, time, ...args) {
    let flag = true
    return (event) => {
        if (flag) {
            flag = false
            setTimeout(() => {flag = true}, time)
            return callback.call(this, event, ...args)
        }
    }
}
