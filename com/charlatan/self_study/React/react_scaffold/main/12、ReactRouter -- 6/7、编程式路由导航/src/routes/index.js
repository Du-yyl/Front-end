/**
 * Time:2022/3/29 16:17 08
 * Name:index.js
 * Path:src/routes
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
import About from '../components/About'
import Home from '../components/Home'
import { Navigate } from 'react-router-dom'
import React from 'react'
import News from '../components/Home/News'
import Message from '../components/Home/Message'
import Mes from '../components/Home/Message/Mes'

/**
 * 定义一个外部文件，集中管理所有路由规则
 */
export default [
  { path: '/about', element: <About/> },
  {
    path: '/home/*', element: <Home/>, children: [
      
      { path: 'news', element: <News/> },
      {
        path: 'message/*', element: <Message/>, children: [
          // 传递 params 参数
          // { path: 'mes/:id/:title/:context', element: <Mes/> },
          
          { path: 'mes', element: <Mes/> },
        ],
      },
      { path: '', element: <Navigate to="message"/> },
    ],
  },
  { path: '/', element: <Navigate to="/home/"/> },
]
