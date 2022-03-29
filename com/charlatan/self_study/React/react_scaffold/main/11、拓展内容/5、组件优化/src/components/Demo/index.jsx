import React, { PureComponent } from 'react'

// 创建一个哪里都能访问到的 context
const UserContext = React.createContext()
export default class Demo extends PureComponent {
  state = {
    name: 'tom',
  }
  
  render () {
    console.log('Demo组件')
    return (
      <div id="Demo">
        <h1>Demo组件</h1>
        数据：{this.state.name}
        <button onClick={this.btnClick}>按钮</button>
        <B name={this.state.name}/>
      </div>
    )
  }
  
  // shouldComponentUpdate (nextProps, nextState, nextContext) {
  //   console.log(nextProps, nextState,nextContext)
  //   return nextState.name !== this.state.name;
  // }
  
  btnClick = () => {
    this.setState({})
  }
  
}

class B extends PureComponent {
  render () {
    console.log('子组件渲染')
    return (
      <div>
        <hr/>
        <h1>B组件</h1>
      </div>
    )
  }
  
  // shouldComponentUpdate (nextProps, nextState, nextContext) {
  //   console.log(nextProps, nextState, nextContext)
  //   return nextState.name !== this.state.name || this.props.name === nextProps.name
  // }
}
