/**
 * Time:2022/3/27 15:24 53
 * Name:index.jsx
 * Path:src/pages/Home/Message/Detail
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'

export default class Dez1tail extends Component {
	
	render () {
		let { id, title } = this.props.location.state || {}
		return (
				<div id="Detail">
					<ul>
						<li>
							ID:{id}
						</li>
						<li>
							TITLE:{title}
						</li>
						<li>
							信息传输成功
						</li>
					</ul>
				</div>
		)
	}
	
}
