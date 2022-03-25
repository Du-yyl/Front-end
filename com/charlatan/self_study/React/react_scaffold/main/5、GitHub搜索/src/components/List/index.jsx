/**
 * Time:2022/3/25 22:21 25
 * Name:index.jsx
 * Path:src/components/List
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  
  render () {
    let { showList, reason, going,errMsg } = this.props
    return (
      <div id="List">
        {
          showList.length === 0 ?
            <h1>输入内容，开始搜索</h1>
            :
            reason ?
              going ?
                <h1>搜索中 ... </h1>
                :
                <ul className="ul">
                  {
                    showList.map((item) => {
                      return <li
                        className="li"
                        key={item.id}>
                        <img
                          src={item.avatar_url}
                          className="img"
                          alt=""/>
                        <span
                          className="span">
                          {item.login}
                      </span>
                      </li>
                    })
                  }
                </ul>
              :
              <h1>{errMsg}</h1>
        }
  
        {
          // 三元运算符的连写形式：
          // isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
          //   isLoading ? <h2>Loading......</h2> :
          //     err ? <h2 style={{color:'red'}}>{err}</h2> :
          //       users.map((userObj)=>{
          //         return (
          //           <div key={userObj.id} className="card">
          //             <a rel="noreferrer" href={userObj.html_url} target="_blank">
          //               <img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
          //             </a>
          //             <p className="card-text">{userObj.login}</p>
          //           </div>
          //         )
          //       })
        }
      
      </div>
    )
  }
  
}
