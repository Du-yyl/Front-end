import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

/**
 * 因为要让所有的路由都由一个路由器进行管理，所以将整个 App 组件包上路由，由此完成
 */
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'))

