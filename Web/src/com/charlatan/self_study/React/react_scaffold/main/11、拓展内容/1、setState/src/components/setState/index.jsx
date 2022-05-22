/**
 * Time:2022/3/28 18:34 03
 * Name:index.jsx
 * Path:src/components/Demo
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'

export default class Demo extends Component {
    render () {
        return (
            <div id="Demo">
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点击+1</button>
            </div>
        )
    }
    
    state = {
        count: 0,
    }
    
    add = () => {
        // 对象式的 setTate
        // let count = ++ this.state.count
        // // Demo 是异步进行更新的
        // this.Demo({
        //   count
        // },() => {
        //   // 这个方法在更新完状态后，界面更新后调用
        //   console.log("这是 Demo 的回调");
        //   console.log(this.state.count);
        // })
        
        //   函数式的 setTate
        this.setState((state, props) => {
            console.log(state, props)
            return {
                count: ++state.count,
            }
        }, () => {
        
        })
    }
}
