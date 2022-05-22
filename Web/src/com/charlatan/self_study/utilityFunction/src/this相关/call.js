/**
 * Time:2022/4/18 14:09 31
 * Name:iCall.js
 * Path:
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
  Call方法：
    间接使函数进行调用，通过不同的调用来指定不同的 this
    当通过 Call 方法调用参数时，可以直接在调用者后面依次跟着要传入的变量
    this 也可能不是实际值，如果这个函数在 非严格模式下 ，当 this 将被指定为 null 或 undefined 时会自动替换为全局对象，原始值会被覆盖
 */

/**
 * 自己封装的的call方法
 * @param func 要进行 this 转换的方法
 * @param obj 要指定的对象
 * @param args 调用时要传入的参数
 */
function call (func, obj, ...args) {
//  当 this 将被指定为 null 或 undefined 时会自动替换为全局对象，原始值会被覆盖
    if (obj === null || obj === undefined) {
        // globalThis es11退出的新特性，指定全局对象，在 node 环境下全局是 global
        obj = globalThis
    }
//  为指定的对象实例新添加一个对象参数
    obj.temp = func
//  调用 obj 中的方法
    let result = obj.temp(...args)
//  删除 obj 中的对象参数
    delete obj.temp
//  返回运行结果
    return result || undefined
}

/**
 * 定义在原型中
 * @param {Object}obj 要指定的对象
 * @param {*}args 调用方法传递的参数
 * @returns {*|undefined} 将函数的调用的返回值进行返回，如果没有返回值，返回的是 undefined
 */
Function.prototype.call = function (obj, ...args) {
    if (obj === null || obj === undefined) {
        obj = globalThis
    }
    // 和上面的逻辑类似，不过通过实例定义时，调用的方法会在传入的 this 中进行保存
    obj.temp = this
    let result = obj.temp(...args)
    delete obj.temp
    return result || undefined
}
