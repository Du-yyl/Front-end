// 这里的不是进行解构赋值，而是进行了直接的引入
import React, { Component } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

class App extends Component {
	
	render () {
		return (
				<div>
					<Hello/>
					<Welcome/>
				</div>)
	}
}

export default App
/*
 因为多个组件之间可能使用样式时可能使用同一个命名，但是最后都会同一引入，
 所以，为了方法变量之间冲突，可以使用 XXX.module.css 进行区分
 使用的时候使用的时 使用模块化进行引入 ： import XXX from './index.module.css'
 使用的时候使用  <div className={XXX.title}>
 */
