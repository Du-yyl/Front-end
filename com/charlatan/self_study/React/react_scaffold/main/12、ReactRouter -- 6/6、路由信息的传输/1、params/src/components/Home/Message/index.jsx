/**
 * Time:2022/3/27 15:05 49
 * Name:index.jsx
 * Path:src/pages/Home/Message
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Message () {
	const [message] = useState ([
		{ id: 1, title: '消息1', context: '人生若只如初见' },
		{ id: 2, title: '消息2', context: '何事秋风悲画扇' },
		{ id: 3, title: '消息3', context: '等闲变却故人心' },
		{ id: 4, title: '消息4', context: '却道故人心易变' },
	])
	
	return (
			<div>
				<ul>
					{
						message.map ((item) => {
							return <li key={item.id}>
								{/* params 参数 */}
								<NavLink to={`mes/${item.id}/${item.title}/${item.context}`}>{item.title}</NavLink>
							</li>
						})
					}
				</ul>
				<Outlet/>
			</div>
	)
}
