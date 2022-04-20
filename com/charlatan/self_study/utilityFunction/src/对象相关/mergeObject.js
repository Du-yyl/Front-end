/**
 * Time:2022/4/19 16:34 25
 * Name:mergeObject.js
 * Path:src/对象相关
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 将两个对象进行合并，如果没有内容就进行添加，如果一个属性两个对象都有，那么将这两个元素都保存在数组中
 * @param objs 要合并的对象
 * @return {{}} 返回一个新对象
 */
// function mergeObject (obj) {
//   let keys = [...new Set([...Object.keys(this), ...Object.keys(obj)])]
//   let object = {}
//   for (let key of keys) {
//     object[key] = this[key] && obj[key] ? [this[key], obj[key]] : this[key] || obj[key]
//   }
//   return object
// }
function mergeObject (...objs) {
  let result = {}
  // 直接遍历多个对象
  objs.forEach((obj) => {
    // 对对象的每个属性进行遍历
    Object.keys(obj).forEach((item) => {
      // 如果对象中存在这个属性，那么进行数组的拼接
      if (result.hasOwnProperty(item)) {
        result[item] = [].concat(result[item], obj[item])
      } else {
        // 如果不存在这个属性，直接进行赋值操作
        result[item] = obj[item]
      }
    })
  })
  return result
}

Object.prototype.mergeObject = mergeObject
