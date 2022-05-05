/**
 * Time:2022/3/25 22:04 42
 * Name:index.jsx
 * Path:src/components/Search
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
	inputValue = React.createRef ()
	
	render () {
		return (
				<div id="Search">
					<h1 className="span">输入内容开始搜索</h1>
					<input
							type="text"
							ref={this.inputValue}
							className="input"
							placeholder=" 输入关键字"/>
					<button className="btn" onClick={this.sendAsk}>搜索</button>
				</div>
		)
	}
	
	sendAsk = () => {
		let value = this.inputValue.current.value
		
		if ( value.trim () === '' ) {
			alert ('输入不能为空')
			this.inputValue.current.value = ''
		} else {
			PubSub.publish ('name', {
				showList: [1],
				reason: true,
				going: true,
			})
			axios.get ('https://api.github.com/search/users?q=' + this.inputValue.current.value).then (
					(res) => {
						PubSub.publish ('name', {
							showList: res.data.items,
							reason: true,
							going: false,
						})
					},
					(reason) => {
						PubSub.publish ('name', {
							showList: [1],
							reason: false,
							going: true,
							errMsg: reason.message,
						})
					},
			)
		}
	}
}
