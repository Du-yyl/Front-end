import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  
  render () {
    return (
      <div id="app">
        <button onClick={this.btnClick1}>点击获取数据</button>
      </div>
    )
  }
  
  btnClick1= () => {
    /**
     * 如果 3000 端口下没有，会访问 api1 汇总配置的内容
     */
    axios.get('http://localhost:3000/api1/students').then(
      (response) => {
      console.log(response.data);
    }, (reason) => {
      console.log(reason);
    })
  }
  //   btnClick2 = () => {
  //   /**
  //    * 如果 3000 端口下没有，会访问 api1 汇总配置的内容
  //    */
  //   axios.get('http://localhost:3000/api2/cars').then(
  //     (response) => {
  //     console.log(response.data);
  //   }, (reason) => {
  //     console.log(reason);
  //   })
  // }
  
}

export default App
