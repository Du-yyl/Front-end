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

// combineReducers 用于多个 reducer 组合到一起
import { applyMiddleware, combineReducers, createStore } from 'redux'
// 引入为 Count 服务的 reducer
import count from './reducers/count'
import person from './reducers/person'
import thunk from 'redux-thunk'

// 汇总全部的 reducer
const allReducers = combineReducers({
    count,
    person,
})
export default createStore(allReducers, applyMiddleware(thunk))


