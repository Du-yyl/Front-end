/**
 * Time:2022/3/27 20:51 29
 * Name:count.js
 * Path:src/redux
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
import { ADD, SUBTRACT } from './constant'

/*
 这个文件专门为 count 生成 action 对象
 */

const createAddAction = data => ({
    type: ADD,
    data,
})

const createSubtractAction = data => ({
    type: SUBTRACT,
    data,
})

const createAsyncAdd = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            console.log(dispatch)
            dispatch(createAddAction(data))
        }, time)
    }
}

export {
    createSubtractAction,
    createAddAction,
    createAsyncAdd,
}
