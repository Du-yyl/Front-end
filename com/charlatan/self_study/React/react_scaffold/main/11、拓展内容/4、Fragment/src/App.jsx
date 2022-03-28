import React, { Component, lazy, Suspense } from 'react'
import { Link, Route } from 'react-router-dom'
import Demo from './components/Demo'
class App extends Component {
  
  render () {
    return (
      <div>
        <Demo/>
      </div>
    )
  }
  
}

export default App
