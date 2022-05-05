/**
 * Time:2022/3/26 20:28 19
 * Name:MyNavLink.jsx
 * Path:src/components
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
	render () {
		// return <NavLink activeClassName="active" className="list-group-item" {...this.props}>{this.props.children}</NavLink>
		/**
		 * 第一个是通过结构赋值，在非自闭和标签中，通过标签体中传递的内容，可以在接收者的 props 中进行保存，并且在 children 中保存
		 * 并且在自闭和标签中，也可以通过 children 进行标签中内容指定，所以简化只用一个结构赋值完成
		 */
		return <NavLink activeClassName="active" className="list-group-item" {...this.props} />
		
	}
	
}
