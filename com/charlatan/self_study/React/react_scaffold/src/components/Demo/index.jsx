import React, { Component, Fragment } from 'react'

export default class Demo extends Component {
  
  render () {
    // 使用这个标签包裹，渲染时会忽视这个内容，不影响布局
    // return (
    //   <Fragment>
    //     123123
    //   </Fragment>
    // )
    
    return (
      <>
        123123
      </>
    )
    
  }
  
}
