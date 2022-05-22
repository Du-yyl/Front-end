/**
 * Time:2022/4/18 14:57 11
 * Name:apply.js
 * Path:
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
apply：
  apply 函数和 call 方法类似，都是进行调用方法 this 的更改
  不过这个方法传参的时候是使用的数组进行的
 */

/**
 * 基本内容和 call 一样
 * @param {Object}obj 要指定的对象昂
 * @param {Array}argArray 传入的参数的数组
 * @returns {*|undefined} 返回执行结果，没有结果返回 undefined
 */
Function.prototype.apply = function (obj, argArray) {
    if (obj === undefined || obj === null) {
        obj = globalThis
    }
    obj.temp = this
    let result = obj.temp(...argArray)
    delete obj.temp
    return result || undefined
}
