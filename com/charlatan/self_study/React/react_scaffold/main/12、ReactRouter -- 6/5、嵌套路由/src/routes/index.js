import About from '../components/About'
import Home from '../components/Home'
import { Navigate } from 'react-router-dom'
import React from 'react'
import News from '../components/Home/News'
import Message from '../components/Home/Message'

/**
 * Time:2022/3/29 16:17 08
 * Name:index.js
 * Path:src/routes
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 定义一个外部文件，集中管理所有路由规则
 */
export default [
  { path: '/about', element: <About/> },
  { path: '/home/*', element: <Home/> ,children:[
      { path: 'news', element: <News/> },
      { path: 'message', element: <Message/> },
      // { path: 'home', element: <Navigate to='/home/message'/> },
    ]},
  { path: '/', element: <Navigate to="/home/"/> },
  

]
