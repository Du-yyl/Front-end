/**
 * Time:2022/3/27 19:14 50
 * Name:index.jsx
 * Path:src/components/Count
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
	selectRef = React.createRef ()
	
	render () {
		// 获取 store 中的状态
		console.log (store.getState ())
		return (
				<div id="Count">
					<h1>当前求和为：{store.getState ()}</h1>
					
					<select ref={this.selectRef}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					
					<button onClick={this.add}>+</button>
					<button onClick={this.subtract}>-</button>
					<button onClick={this.oddAdd}>奇数再加</button>
					<button onClick={this.waitAdd}>等等再加</button>
				
				</div>
		)
		
	}
	
	/**
	 * 因为 redux 只能维护数据，而不能进行组件的重新渲染，所以
	 * 挂载完毕检测 redux 中的数据是否更改，如果更改，那么重新渲染
	 * 也可以直接将这个方法写在 index.js 中
	 */
			// componentDidMount () {
			// //  监视 store 状态的改变，这个回调再 store 中的任何一个内容的改变都会调用这个方法
			//   store.subscribe(() => {
			//     // 只要调用这个，就会自动调用 render ，这里自己手动调用无效
			//     this.Demo({})
			//   })
			//
			// }
	
	add = () => {
		let num = parseInt (this.selectRef.current.value)
		// 当符合条件，就调用指定的方法进行数据的更改，使用 store 中的 dispatch 进行传入对象进行内容的调用
		store.dispatch ({
			type: 'add',
			data: num,
		})
	}
	subtract = () => {
		let num = parseInt (this.selectRef.current.value)
		store.dispatch ({
			type: 'subtract',
			data: num,
		})
	}
	oddAdd = () => {
		let num = parseInt (this.selectRef.current.value)
		if ( store.getState () % 2 ) {
			store.dispatch ({
				type: 'add',
				data: num,
			})
		}
	}
	waitAdd = () => {
		let num = parseInt (this.selectRef.current.value)
		setTimeout (() => {
			store.dispatch ({
				type: 'add',
				data: num,
			})
		}, 1000)
	}
}
