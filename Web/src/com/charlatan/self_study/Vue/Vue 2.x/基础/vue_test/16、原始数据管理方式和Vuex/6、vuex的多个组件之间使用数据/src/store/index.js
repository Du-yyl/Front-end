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
    addTo (context, obj) {
        if (!!(obj.name && obj.sex && obj.age)) {
            obj.id = parseInt(state.persons[state.persons.length - 1].id) + 1
            context.commit('ADDTO', obj)
            return Promise.resolve('成功')
        }
        return Promise.reject('失败')
    },
}

const mutations = {
    ADD (state, value) {
        state.sum += value
    }, DEADD (state, value) {
        state.sum -= value
    },
    ADDTO (state, obj) {
        state.persons.push(obj)
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
    persons: [
        { name: '郑一', age: 20, sex: 'man', id: '001' },
        { name: '刘二', age: 22, sex: 'man', id: '002' },
        { name: '张三', age: 24, sex: 'man', id: '003' },
        { name: '赵四', age: 26, sex: 'man', id: '004' },
        { name: '王五', age: 26, sex: 'man', id: '005' },
        { name: '宋六', age: 27, sex: 'man', id: '006' },
        { name: '张七', age: 24, sex: 'man', id: '007' },
    ],
}

export default new Vuex.Store({
    actions, mutations, state, getters,
})
