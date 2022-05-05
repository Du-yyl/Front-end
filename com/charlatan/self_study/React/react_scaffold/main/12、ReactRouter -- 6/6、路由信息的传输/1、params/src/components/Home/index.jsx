/**
 * Time:2022/3/26 18:49 39
 * Name:index.jsx
 * Path:src/components/Home
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React from 'react'
import { NavLink, Outlet, useRoutes } from 'react-router-dom'
import routes from '../../routes'

export default function Home () {
	const element = useRoutes (routes)
	
	return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						{/*
						 这里可以不用写父级的全部的路径，只用写这个组件中要展示内容的路径就可以
						 因为这个组件展示时会在原本的路由路径上进行追加，所以可以不写，如果怕有问题，可以写全部
						 需要注意，如果使用这种方法，因为是追加，所以不能写 /
						 当然也能只用 ./ 和不写效果一样
						 */}
						
						<li>
							<NavLink to="news">News</NavLink>
						</li>
						<li>
							<NavLink to="./message">Message</NavLink>
						</li>
					</ul>
					{/* 指定路由呈现位置 */}
					<Outlet/>
				</div>
			</div>
	)
}
