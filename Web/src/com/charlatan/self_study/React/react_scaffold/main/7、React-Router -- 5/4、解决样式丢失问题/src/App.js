import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'

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
                            <MyNavLink to="/hunru/about">About</MyNavLink>
                            <MyNavLink to="/hunru/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/*
										 当路径混入一些其他内容，路径是正确的，但是当重新刷新时，会把这个混入的路径 hunru 也当作根路径进行访问，
										 第一次访问时因为没有这个混入者，所以样式的请求没有问题，但是如果刷新混入这个路径，会导致样式请求的出错，
										 并且如果这个内容没有访问到，或者说路径内容出错，那么就会将主页面的 index.html 进行返回，将这个内容作为路径出错的返回内容
										 因为没有返回样式，所以样式出错
										 */}
                                    <Route path="/hunru/about" component={About}/>
                                    <Route path="/hunru/home" component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default App
