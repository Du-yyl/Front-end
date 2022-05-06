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
// 这个库能将 urlencoded 转换为一个对象，将一个对象转换为 urlencoded

export default class Dez1tail extends Component {
    
    render () {
        // 通过 params 进行参数的传递，在 props 中的 match 中保存
        // let {id,title} = this.props.match.params
        
        // 接收 search 参数
        // let search = this.props.location.search
        
        // 接收 state 参数
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
