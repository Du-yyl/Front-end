/**
 * Time:2022/3/25 12:58 12
 * Name:index.jsx
 * Path:src/components/List
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    spanDelete = React.createRef()
    
    render () {
        let { msg, done } = this.props
        return (
            <li id="list">
                {/*
					 defaultChecked 能默认选中勾选，checked如果设置，那么这个选中变成只读的了，并不能进行更改
					 这个属性只在第一次有作用，其他时机不起作用
					 */}
                <input type="checkbox" className="check" checked={done} onChange={this.checkChange}/>
                <span className={this.props.done ? 'span spanDelete' : 'span'} ref={this.spanDelete}>
        {msg}
        </span>
                <button className="btn" onClick={this.deleteList}>删除</button>
            </li>
        )
    }
    
    /**
     * 当组件都渲染完毕的时候调用，让指定的内容添加class
     */
    componentDidMount () {
        // if (this.props.done) {
        //   this.spanDelete.current.classList.add('spanDelete')
        // }else {
        //   this.spanDelete.current.classList.remove('spanDelete')
        // }
    }
    
    /**
     * 点击删除的时候触发
     */
    deleteList = () => {
        this.props.delMsg(this.props.id)
    }
    
    /**
     * 选中按钮发生改变的时候触发
     * @param event
     */
    checkChange = (event) => {
        this.props.comMsg(this.props.id, event.target.checked)
    }
}
