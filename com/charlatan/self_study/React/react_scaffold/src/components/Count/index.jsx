/**
 * Time:2022/3/27 19:14 50
 * Name:index.jsx
 * Path:src/components/Count
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import store from '../../redux/store'
import { createSubtractAction, createAppAction } from '../../redux/count_action'

export default class Count extends Component {
  selectRef = React.createRef()
  
  render () {
    console.log(store.getState())
    return (
      <div id="Count">
        <h1>当前求和为：{store.getState()}</h1>
        
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
    store.dispatch(createAppAction(num))
    
  }
  subtract = () => {
    let num = parseInt(this.selectRef.current.value)
    store.dispatch(createSubtractAction(num))
  }
  oddAdd = () => {
    let num = parseInt(this.selectRef.current.value)
    if (store.getState() % 2) {
      store.dispatch(createAppAction(num))
      
    }
  }
  waitAdd = () => {
    let num = parseInt(this.selectRef.current.value)
    setTimeout(() => {
      store.dispatch(createAppAction(num))
    }, 1000)
  }
}
