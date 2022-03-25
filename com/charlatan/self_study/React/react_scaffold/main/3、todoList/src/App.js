import React, { Component } from 'react'
import './App.css'
import Add from './components/Add'
import Lists from './components/Lists'
import All from './components/All'

class App extends Component {
  state = {
    showMsg: [
      { msg: '吃饭', id: 1, done: true },
      { msg: '睡觉', id: 2, done: true },
      { msg: '打豆豆', id: 3, done: true },
    ],
    count: 0,
    showMsgLen: 0,
    allDone: false,
  }
  
  /**
   * 组件渲染完毕，维护一下内容
   */
  componentDidMount () {
    let { showMsg } = this.state
    let count = 0, showMsgLen = 0
    
    showMsg.forEach((item) => {
      if (item.done) {
        count++
      }
      showMsgLen++
    })
    
    this.setState({
      count,
      showMsgLen,
    })
    
    this.setState(count === showMsgLen ? { allDone: true } : { allDone: false })
    
  }
  
  render () {
    let {
      showMsg,
      count,
      showMsgLen,
      allDone,
    } = this.state
    return (
      <div id="app">
        <Add addMsg={this.addMsg}/>
        <Lists delMsg={this.delMsg} showMsg={showMsg} comMsg={this.comMsg}/>
        <All
          className="All"
          count={count}
          allDone={allDone}
          showMsgLen={showMsgLen}
          delAll={this.delAll}
          comAllMsg={this.comAllMsg}
        />
      </div>
    )
  }
  
  /**
   * 计算选中的数量
   */
  comMsg = (element, value) => {
    let count = 0
    let { showMsg, showMsgLen } = this.state
    showMsg = showMsg.map(item => item.id === element ? { ...item, done: value } : { ...item })
    
    this.setState({
      showMsg,
    })
    showMsg.forEach((item) => {
      if (item.done)
        count++
    })
    
    this.setState({
      count,
    })
    
    this.setState(count === showMsgLen ? { allDone: true } : { allDone: false })
    
  }
  
  /**
   * 选中全部，或取消选中全部
   */
  comAllMsg = (condition) => {
    let {showMsg,showMsgLen,count} = this.state
    showMsg = showMsg.map((item) => {
      return {...item,done:condition}
    })
    this.setState({
      showMsg
    })
    count = 0
    showMsg.forEach((item) => {
      if (item.done)
        count++
    })
    this.setState({
      count
    })
    this.setState(count === showMsgLen && showMsg.length !== 0 ? { allDone: true } : { allDone: false })
  
  }
  
  /**
   * 讲这个方法交给子组件，实现添加内容的操作
   * @param msg
   */
  addMsg = (msg) => {
    let { showMsg, count } = this.state
    let index = showMsg.length
    let id = index === 0 ? 0 : showMsg[index - 1].id
    showMsg.push({
      msg: msg,
      id: id + 1,
      done: false,
    })
    this.setState({
      showMsg,
      showMsgLen: index + 1,
    })
    this.setState(
      (count === showMsg.length) && (showMsg.length !== 0)
        ?
        { allDone: true } : { allDone: false })
    
  }
  
  /**
   * 删除事件，找到ID并删除
   * @param id
   */
  delMsg = (id) => {
    let { showMsg, count, showMsgLen } = this.state
    showMsg = showMsg.filter((item) => {
      return item.id !== id
    })
    this.setState({
      showMsg,
    })
    this.setState({
      showMsgLen: showMsg.length,
      count: --this.state.count,
    })
    
    this.setState(count === showMsgLen && showMsg.length !== 0 ? { allDone: true } : { allDone: false })
    
  }
  
  /**
   * 删除选中内容
   */
  delAll = () => {
    let { showMsg, showMsgLen, count } = this.state
    
    showMsg = showMsg.filter(item => !item.done)
    count = 0
    showMsg.forEach((item) => {
      if (item.done)
        count++
    })
    this.setState({
      showMsg,
      showMsgLen: showMsg.length,
      count,
    })
    this.setState(count === showMsg.length && showMsg.length !== 0 ? { allDone: true } : { allDone: false })
  }
}

export default App
