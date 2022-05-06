/**
 * Time:2022/4/19 15:45 23
 * Name:newInstance.js
 * Path:src/对象相关
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 实现 New 功能
 * @param args 要传入的参数
 * @return {*} 将新创建的对象进行返回
 */
function newInstance (...args) {
    // 创建一个新对象
    let obj = {}
    // 修改函数内部的 this 指向新对象 并执行
    let result = this.call(obj, ...args)
    // 修改原型指向
    obj.__proto__ = this.prototype
    // 返回新对象
    // 对返回值类型进行判断，如果返回值是 对象，数组，函数 等类型，将这个内容返回
    return result instanceof Object ? result : obj
    // return new this(...args)
}

Object.prototype.newInstance = newInstance
