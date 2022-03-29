/**
 * Time:2022/3/26 20:28 19
 * Name:MyNavLink.jsx
 * Path:src/components
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render () {
    return <NavLink activeClassName="active" className="list-group-item" {...this.props} />
    
  }
  
}
