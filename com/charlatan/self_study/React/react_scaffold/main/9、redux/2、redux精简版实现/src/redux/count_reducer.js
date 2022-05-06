/**
 * Time:2022/3/27 19:37 42
 * Name:count.js
 * Path:src/redux
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
 这个文件用于创建一个为 Count 组件服务的 reducer ，reducer 本质是一个函数
 reducer 函数会接收两个参数，第一个是上一个状态，第二个是动作对象
 */

const initState = 0

/**
 * reduce 核心函数
 * @param preSate 上一个状态
 * @param action 动作对象【这个动作对象中会有两个参数，一个是 type 一个是 data
 */
function count_reducer (preSate = initState, action) {
    // 如果走到这句，那么一定是初始化状态
    if (preSate === undefined) preSate = 0
    const { type, data } = action
    // 根据 type 决定如何使用数据【使用哪个方法】
    switch (type) {
        case 'add' :
            // 执行加法逻辑
            return preSate + data
        
        case 'subtract':
            // 执行减法逻辑
            return preSate - data
        
        default:
            // 初始化，将这个内容返回
            return preSate
    }
    
}

export default count_reducer
