import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

// 使用 react-redux 不用手动渲染
// 使用 Provider 将整个内容，整个 App 只能由一个 store ，而 Provider 会进行匹配，将这个 store 分发给需要的组件
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
)
