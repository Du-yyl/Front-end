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
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    message: [
      { id: 1, title: 'message1', to: '/message1' },
      { id: 2, title: 'message2', to: '/message2' },
      { id: 3, title: 'message3', to: '/message3' },
      { id: 4, title: 'message4', to: '/message4' },
    ],
  }
  
  render () {
    return (
      <div>
        
        <ul>
          {
            this.state.message.map((item) => {
              return <li key={item.id}>
                {/* 向路由组件传递 params 参数 */}
                {/* <Link to={'/home/message/detail/' + item.id + '/' + item.title}>{item.title}</Link> */}
                
                {/* 向路由组件传递 search 参数 */}
                {/* <Link to={'/home/message/detail?id=' + item.id + '&title=' + item.title}>{item.title}</Link> */}
                
                {/* 向路由传递 state 参数 */}
                <Link to={{
                  pathname: '/home/message/detail',
                  state: {
                    id: item.id,
                    title: item.title,
                  },
                }}>{item.title}</Link>
              </li>
            })
          }
        </ul>
        {/* 接收 params 参数，通过占位符进行替换传输 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
        
        
        {/* Search 无需声明接收*/}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
        
        {/* state 不用声明接收 */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    )
  }
  
}
