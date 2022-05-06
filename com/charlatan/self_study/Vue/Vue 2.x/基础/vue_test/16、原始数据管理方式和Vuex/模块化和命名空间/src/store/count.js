/**
 * Time:2022/3/4 11:14 34
 * Name:count.js
 * Path:Vue 2.x/基础/vue_test/src/store
 * ProjectName:Vue
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


// 运算相关配置

export default {
    namespaced: true,
    actions: {
        addOdd (context, value) {
            
            console.log(this.state.count.sum)
            console.log(context.state.sum)
            console.log(this.state.count.sum)
            console.log(this.state.count === context.state)
            
            if (this.state.count.sum % 2 !== 0)
                context.commit('ADD', value)
        },
        addWait (context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 2000)
        },
    },
    
    mutations: {
        ADD (state, value) {
            state.sum += value
        },
        DEADD (state, value) {
            state.sum -= value
        },
    },
    
    getters: {
        calculate (state) {
            return state.sum * 10
        },
    },
    
    state: {
        sum: 0,
        name: '张三',
        age: 99,
    },
}
