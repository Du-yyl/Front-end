import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

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
								{{/*
									 使用 Link 不能传入触发时的样式，要使用更加强大的 NavLink
									 NavLink 会自动匹配触发的类名，并添加上 active 这个类名，如果需要，可以通过 activeClassName 进行指定
									 */
								}}
								<NavLink activeClassName="active" className="list-group-item"
								         to="/about">About</NavLink>
								<NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink>
							</div>
						</div>
						<div className="col-xs-6">
							<div className="panel">
								<div className="panel-body">
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
								</div>
							</div>
						</div>
					</div>
				</div>
		)
	}
	
}

export default App
