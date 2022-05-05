import React, { Component } from 'react'

export default class Parent extends Component {
	
	/**
	 * 当这个组件的子组件发生问题时，会调用父组件的这个函数，并携带错误原因
	 * @param error
	 */
	static getDerivedStateFromError (error) {
		//   发生错误更新 state 状态
		return { hasError: error }
	}
	
	render () {
		return (
				<div className="parent">
					<h3>我是Parent组件</h3>
					{this.state.hasError ? '出错了' : <A/>}
				</div>
		)
	}
	
	state = {
		// 标识错误
		hasError: '',
	}
	
	componentDidCatch (error, errorInfo) {
		console.log ('统计错误，发送给服务器，', error, errorInfo)
	}
}

class A extends Component {
	render () {
		const { name } = this.state
		return (
				<div className="a">
					<h3>我是A组件</h3>
					<ul>
						
						{
							this.state.arr.map ((item, index) => {
								return <li key={index}>
									{item}
								</li>
							})
						}
					</ul>
				</div>
		)
	}
	
	// state = { arr: [1, 2, 3, 4, 5, 6] }
	
	state = { arr: '' }
}
