import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>, document.getElementById('root'))
/**
 * 通过 store 中的API进行内容的检测，只要一改变，就渲染全部组件
 */
store.subscribe(() => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})
