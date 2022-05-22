/**
 * Time:2022/3/3 11:01 18
 * Name:index.js
 * Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/store
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const actions = {
    addOdd (context, value) {
        if (state.sum % 2 !== 0)
            context.commit('ADD', value)
    },
    addWait (context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 2000)
    },
}
const mutations = {
    ADD (state, value) {
        state.sum += value
    }, DEADD (state, value) {
        state.sum -= value
    },
}
const getters = {
    calculate (state) {
        return state.sum * 10
    },
}
const state = {
    sum: 0,
    name: '张三',
    age: 99,
}
export default new Vuex.Store({
    actions, mutations, state, getters,
})
