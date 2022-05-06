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
    render () {
        return (
            <div>
                
                <ul>
                    {
                        this.state.message.map((item) => {
                            return <li key={item.id}>
                                
                                
                                <Link to={{
                                    pathname: '/home/message/detail',
                                    state: {
                                        id: item.id,
                                        title: item.title,
                                    },
                                }}>{item.title}</Link>
                                
                                
                                &nbsp;&nbsp;
                                <button onClick={() => {
                                    this.pushShow(item.id, item.title)
                                }}>push查看
                                </button>
                                
                                &nbsp;&nbsp;
                                <button
                                    onClick={
                                        () => {
                                            this.showReplace(item.id, item.title)
                                        }
                                    }>
                                    replace查看
                                </button>
                            
                            </li>
                        })
                    }
                </ul>
                <button onClick={() => {
                    this.props.history.goForward()
                }}>前进
                </button>
                <button onClick={() => {
                    this.props.history.goBack()
                }}>后退
                </button>
                <button onClick={() => {
                    this.props.history.go(1)
                }}>go
                </button>
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
    
    state = {
        message: [
            { id: 1, title: 'message1', to: '/message1' },
            { id: 2, title: 'message2', to: '/message2' },
            { id: 3, title: 'message3', to: '/message3' },
            { id: 4, title: 'message4', to: '/message4' },
        ],
    }
    
    showReplace = (id, title) => {
        // 传递 params 参数
        // this.props.history.replace('/home/message/detail/' + id + '/' + title)
        
        //  传递 state 参数
        this.props.history.replace('/home/message/detail', { id, title })
        
    }
    
    pushShow = (id, title) => {
        this.props.history.push('/home/message/detail', { id, title })
        
    }
    
}
