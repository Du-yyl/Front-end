/**
 * Time:2022/3/25 12:57 32
 * Name:index.jsx
 * Path:src/components/Lists
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import List from '../List'
import './index.css'

export default class Lists extends Component {
  
  render () {
    let { showMsg,delMsg,comMsg }  = this.props
    return (
      <div className="div">
        <ul className="lists">
          {showMsg.map(item => {
            return <List
              className="list"
              {...item}
              delMsg={delMsg}
              comMsg={comMsg}
              key={item.id}/>
          })}
        </ul>
      </div>
    )
  }
}
