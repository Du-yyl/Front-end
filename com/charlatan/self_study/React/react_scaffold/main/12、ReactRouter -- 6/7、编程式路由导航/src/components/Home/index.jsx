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
  const element = useRoutes(routes)
  
  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <ul className="nav nav-tabs">
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
