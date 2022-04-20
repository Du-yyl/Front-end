/**
 * Time:2022/4/19 16:05 55
 * Name:instanceof.js
 * Path:src/对象相关
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 如果 obj 的显式原型对象在 调用者 的原型链上,返回true,否则返回false
 * @param obj 实例
 * @return {boolean} 返回结果
 */
function rewriteInstanceof (obj) {
  // 要对比的原型对象
  let prototype = obj.prototype
  // 要判断的对象的隐式原型
  let proto = this.__proto__
  // 如果不为空，那么就进入下一级进行比较
  while (proto) {
    // 如果原型对象和隐式原型相同，返回 true
    // 通过原型链的判断，判断指定元素的显式原型是否在调用者的原型链上
    if (prototype === proto) return true
    // 如果没有匹配，就找这个元素的下一级，直到 null
    proto = proto.__proto__
  }
  // 如果能运行到这里，那么一定是找到了 null ，并且还没有匹配，返回 false
  return false
}

Object.prototype.rewriteInstanceof = rewriteInstanceof
