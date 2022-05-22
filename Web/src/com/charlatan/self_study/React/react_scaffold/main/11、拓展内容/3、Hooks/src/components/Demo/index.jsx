/**
 * Time:2022/3/28 19:28 03
 * Name:index.jsx
 * Path:src/components/Demo
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React from 'react'
import ReactDOM from 'react-dom'

//类式组件
// class Demo extends React.Component {
//
//   state = { count: 0 }
//
//   myRef = React.createRef()
//
//   add = () => {
//     this.setState(state => ({ count: state.count + 1 }))
//   }
//
//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//
//   show = () => {
//     alert(this.myRef.current.value)
//   }
//
//   componentDidMount () {
//     this.timer = setInterval(() => {
//       this.setState(state => ({ count: state.count + 1 }))
//     }, 1000)
//   }
//
//   componentWillUnmount () {
//     clearInterval(this.timer)
//   }
//
//   render () {
//     return (
//       <div>
//         <input type="text" ref={this.myRef}/>
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

function Demo () {
    //console.log('Demo');
    
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()
    
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    
    //加的回调
    function add () {
        //setCount(count+1) //第一种写法
        setCount(count => count + 1)
    }
    
    //提示输入的回调
    function show () {
        alert(myRef.current.value)
    }
    
    //卸载组件的回调
    function unmount () {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    
    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo
