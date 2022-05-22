/**
 * Time:2022/3/28 13:52 57
 * Name:index.jsx
 * Path:src/containers/Count
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 创建 Count 特定的容器组件【这个组件不能自己创建，要使用 react-redux】

// 引入要指定的组件
import CountUI from '../../components/Count'

import { createAddAction, createAsyncAdd, createSubtractAction } from '../../redux/count_action'

// 引入 connect 用于连接UI组件和 redux
import { connect } from 'react-redux'

/**
 * 第一个函数的返回值会作为状态传递给UI组件，通过 props 进行传递，这个方法传递状态
 * @param {Number}state 这个方法运行时会传入一个变量，这个变量就是在 redux 中保存的内容
 * @returns {{count: Number}} 返回一个对象，这个对象中保存了要在指定组件中使用的变量
 */

function mapStateToProps (state) {
    return {
        count: state,
    }
}

/**
 * 第二个函函数的返回值是一个对象，这个对象中保存了操作数据的方法
 * @param {Function} dispatch 调用的时候会传入用于操作 dispatch 的方法
 * @returns {{
 * add: (function(*): *),
 * subtract: (function(*): *),
 * asyncAdd: (function(*, *): *)
 * }} 返回值是一个个方法，并且提供给组件调用，多个方法组成对象
 */
function mapDispatchToProps (dispatch) {
    return {
        add: num => dispatch(createAddAction(num)),
        subtract: num => dispatch(createSubtractAction(num)),
        asyncAdd: (num, time) => dispatch(createAsyncAdd(num, time)),
    }
}

// 创建暴漏一个 Count 容器组件怕【第一次调用的时候需要传入两个参数，两个参数都是函数】
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)


