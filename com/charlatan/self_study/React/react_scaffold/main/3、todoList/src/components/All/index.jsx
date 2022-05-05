/**
 * Time:2022/3/25 14:52 40
 * Name:index.jsx
 * Path:src/components/All
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import './index.css'

export default class All extends Component {
	
	/**
	 * 删除选中
	 */
	delClick = this.props.delAll
	
	render () {
		let { count, showMsgLen, allDone } = this.props
		return (
				<div id="All">
					<input
							type="checkbox"
							className="check"
							checked={allDone}
							onChange={this.checkChange}
					/>
					<span className="span">
          完成：{count}个；全部：{showMsgLen}个
        </span>
					<button type="button" className="btn" onClick={this.delClick}>
						删除 {count} 个
					</button>
				</div>
		)
	}
	
	checkChange = (event) => {
		this.props.comAllMsg (event.target.checked)
	}
}
