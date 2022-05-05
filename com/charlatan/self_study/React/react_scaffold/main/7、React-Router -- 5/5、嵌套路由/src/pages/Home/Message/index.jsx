/**
 * Time:2022/3/27 15:05 49
 * Name:index.jsx
 * Path:src/pages/Home/Message
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'

export default class Message extends Component {
	
	render () {
		return (
				<div>
					<ul>
						<li>
							<a href="/message1">message001</a>&nbsp;&nbsp;
						</li>
						<li>
							<a href="/message2">message002</a>&nbsp;&nbsp;
						</li>
						<li>
							<a href="/message/3">message003</a>&nbsp;&nbsp;
						</li>
					</ul>
				</div>
		)
	}
	
}
