import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

class App extends Component {
    
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 新版本中使用 Routes 替换了 Switch 并且多个路由必须由 Routes 进行包裹 */}
                                {/* 如果匹配路径，那么要展示指定的组件，不再使用 component 属性，使用的是 element 代替*/}
                                <Routes>
                                    <Route path="/about" element={<About/>}/>
                                    <Route path="/home" element={<Home/>}/>
                                </Routes>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default App
