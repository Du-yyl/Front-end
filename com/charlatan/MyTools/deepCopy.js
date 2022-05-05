/**
 * Time:2022/4/19 17:18 30
 * Name:deepCopy.js
 * Path:src/拷贝
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 克隆
 * @param arg 要克隆的内容
 * @param map
 * @return {any} 将克隆内容进行返回
 */
// function deepCopy (arg) {
//   // JSON 方式不能克隆 函数类型
//   // JSON 方式不能克隆 循环引用
//   return JSON.parse(JSON.stringify(arg))
// }

// function deepCopy (arg) {
//   // 这种递归调用无法解决循环调用的问题
//   if (typeof arg === 'object' && arg !== null) {
//     let result = Array.isArray(arg) ? [] : {}
//     for (const argKey in arg) {
//       if (arg.hasOwnProperty(argKey)) {
//         //  到这里那么这个属性一定不是原型上的
//         result[argKey] = deepCopy(arg[argKey])
//       }
//     }
//     return result
//   } else {
//     return arg
//   }
// }

// function deepCopy (arg,map=new Map()) {
//   // 这种递归调用无法解决循环调用的问题
//   if (typeof arg === 'object' && arg !== null) {
//     // 先进行判断，原来是否克隆过
//     let flag = map.get(arg)
//     if (flag) {
//       // 如果克隆过，直接将原来的克隆结果进行返回
//       return flag
//     }
//     let result = Array.isArray(arg) ? [] : {}
//     // 将新的结果存储在容器中
//     map.set(arg, result)
//     for (const argKey in arg) {
//       if (arg.hasOwnProperty(argKey)) {
//         //  到这里那么这个属性一定不是原型上的
//         result[argKey] = deepCopy(arg[argKey],map)
//       }
//     }
//     return result
//   } else {
//     return arg
//   }
// }

function deepCopy (arg, map = new Map ()) {
	// 性能优化版本，终极版
	if ( typeof arg === 'object' && arg !== null ) {
		// 先进行判断，原来是否克隆过
		let flag = map.get (arg)
		if ( flag ) {
			// 如果克隆过，直接将原来的克隆结果进行返回
			return flag
		}
		let isArray = Array.isArray (arg)
		let result = isArray ? [] : {}
		// 将新的结果存储在容器中
		map.set (arg, result)
		// 数组 和 对象 进入不同的代码
		if ( isArray ) {
			arg.forEach ((item, index) => {
				result[index] = deepCopy (item, map)
			})
		} else {
			Object.keys (arg).forEach ((item) => {
				result[item] = deepCopy (arg[item], map)
			})
		}
		
		return result
	} else {
		return arg
	}
}

Object.prototype.deepCopy = deepCopy
