/**
 * Time:2022/4/19 17:16 46
 * Name:hallowCopy.js
 * Path:src/拷贝/S
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 *
 * @param {*} target
 */
export function clone1 (target) {
	//类型判断  {}  []  null
	if ( typeof target === 'object' && target !== null ) {
		//判断数据是否为数组
		if ( Array.isArray (target) ) {
			return [...target]
		} else {
			return { ...target }
		}
	} else {
		return target
	}
}

/**
 *
 * @param {*} target
 */
export function clone2 (target) {
	//判断
	if ( typeof target === 'object' && target !== null ) {
		//创建一个容器
		const result = Array.isArray (target) ? [] : {}
		//遍历 target 数据
		for ( let key in target ) {
			//判断当前对象身上是否包含该属性
			if ( target.hasOwnProperty (key) ) {
				//将属性设置到 result 结果数据中
				result[key] = target[key]
			}
		}
		return result
	} else {
		return target
	}
}
