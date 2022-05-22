import React, { Component, lazy, Suspense } from 'react'
import { Link, Route } from 'react-router-dom'
// 不能使用这种方式引入
// import About from './components/About'
// import Home from './components/Home'

// 使用 lazy 的方式引入
let About = lazy(() => import('./components/About'))
let Home = lazy(() => import('./components/Home'))

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
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/home">Home</Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<h1>网络出错</h1>}>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default App
