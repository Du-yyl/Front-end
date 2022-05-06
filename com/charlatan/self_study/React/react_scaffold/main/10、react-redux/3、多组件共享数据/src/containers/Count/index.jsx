/**
 * Time:2022/3/28 13:52 57
 * Name:index.jsx
 * Path:src/containers/Count
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import { createAddAction, createAsyncAdd, createSubtractAction } from '../../redux/actions/count'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class Count extends Component {
    selectRef = React.createRef()
    
    render () {
        return (
            <div id="Count">
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={this.selectRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.oddAdd}>奇数再加</button>
                <button onClick={this.waitAdd}>等等再加</button>
            </div>
        )
    }
    
    add = () => {
        let num = parseInt(this.selectRef.current.value)
        this.props.add(num)
    }
    subtract = () => {
        let num = parseInt(this.selectRef.current.value)
        this.props.subtract(num)
    }
    oddAdd = () => {
        let num = parseInt(this.selectRef.current.value)
        if (this.props.count % 2) {
            this.props.add(num)
        }
    }
    waitAdd = () => {
        let num = parseInt(this.selectRef.current.value)
        this.props.asyncAdd(num, 1000)
    }
}

export default connect(
    state => ({ count: state.count }),
    {
        add: createAddAction,
        subtract: createSubtractAction,
        asyncAdd: createAsyncAdd,
    },
)(Count)
