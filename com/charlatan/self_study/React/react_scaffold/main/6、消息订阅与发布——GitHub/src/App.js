import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

class App extends Component {
	
	render () {
		return (
				<div id="app">
					<Search id="Search"/>
					
					<List id="List"/>
				</div>
		)
	}
	
}

export default App
