/**
 * Time:2022/3/25 12:28 34
 * Name:index.jsx
 * Path:src/components/Add
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import './index.css'

export default class Add extends Component {
    addRef = React.createRef()
    
    render () {
        return (
            <div id="Add">
                <input onKeyDown={this.add} ref={this.addRef} type="text" placeholder="输入要添加的内容" className="input"/>
            </div>
        )
    }
    
    add = (event) => {
        let current = this.addRef.current
        if (event.key === 'Enter') {
            if (current.value.trim() !== '') {
                this.props.addMsg(current.value)
            } else {
                alert('输入违法')
                current.value = ''
            }
        }
    }
}
