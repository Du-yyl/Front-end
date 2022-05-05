/**
 * Time:2022/3/27 19:37 25
 * Name:store.js
 * Path:src/redux
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
 这个文件专门用于创建一个 store 对象，并进行暴漏，并且整个 App 只有一个 Store 对象
 */

// 引入 createStore ，专门用于创建 redux 中最为核心的 store 对象
import { createStore } from 'redux'
// 引入为 Count 服务的 reducer
import count_reducer from './count_reducer'

export default createStore (count_reducer)


