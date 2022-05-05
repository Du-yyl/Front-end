/**
 * Time:2022/3/27 20:51 29
 * Name:count.js
 * Path:src/redux
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
import { ADD, SUBTRACT } from './constant'

/*
 这个文件专门为 count 生成 action 对象
 */

/*
 通过 action 和 异步 action
 同步：方法返回值是一个一般对象
 异步：返回内容是一个函数
 */
// 同步 action
const createAppAction = data => ({
	type: ADD,
	data,
})

const createSubtractAction = data => ({
	type: SUBTRACT,
	data,
})

// 异步 action
const createAsyncAdd = (data, time) => {
	// 这个函数返回的内容是一个函数，函数中开启了一个异步任务
	return () => {
		setTimeout ((dispatch) => {
			//  返回的内容中，开启一个异步，一旦触发会进行触发的操作
			
			// 在这里能接收一个参数，就是 dispatch
			// 【 因为进行异步操作，一定会在最后落脚点在调用同步的 dispatch ，所以这里直接会传入
			dispatch (createAppAction (data))
		}, time)
	}
}

export {
	createSubtractAction,
	createAppAction,
	createAsyncAdd,
}
