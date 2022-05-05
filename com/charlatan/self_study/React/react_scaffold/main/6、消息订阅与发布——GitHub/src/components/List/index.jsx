/**
 * Time:2022/3/25 22:21 25
 * Name:index.jsx
 * Path:src/components/List
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {
	render () {
		let { showList, reason, going, errMsg } = this.state
		return (
				<div id="List">
					{
						showList.length === 0 ?
								<h1>输入内容，开始搜索</h1>
								:
								reason ?
										going ?
												<h1>搜索中 ... </h1>
												:
												<ul className="ul">
													{
														showList.map ((item) => {
															return <li
																	className="li"
																	key={item.id}>
																<img
																		src={item.avatar_url}
																		className="img"
																		alt=""/>
																<span
																		className="span">
                          {item.login}
                      </span>
															</li>
														})
													}
												</ul>
										:
										<h1>{errMsg}</h1>
					}
				</div>
		)
		
	}
	
	state = {
		showList: [],
		reason: '',
		going: '',
		errMsg: '',
	}
	
	/**
	 * 在组件渲染完毕，订阅消息
	 */
	componentDidMount () {
		/*
		 这个方法会接收2个参数，第一个是指定订阅的名字，第二个是数据，
		 但是通常第一个数据没用，所以使用 _ 进行占位
		 */
		this.token = PubSub.subscribe ('name', (_, data) => {
			console.log (data)
			this.setState ({
				...data,
			})
		})
	}
	
	/**
	 * 在取消组件销毁的时候，将订阅的内容进行取消订阅
	 */
	componentWillUnmount () {
		PubSub.unsubscribe (this.token)
	}
}
