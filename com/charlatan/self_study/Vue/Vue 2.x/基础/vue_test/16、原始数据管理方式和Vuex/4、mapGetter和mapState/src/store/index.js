/**
 * Time:2022/3/3 11:01 18
 * Name:index.js
 * Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/store
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 用于创建Vuex中核心的store

import Vue from 'vue'

//引入vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

//  准备actions用于响应组件中的动作
const actions = {
  /**
   * 奇数再加的方法【在这里完成了逻辑的判断】
   * @param context {Object} 上下文对象
   * @param value{Number}传入的数字
   */
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

//  用于操作数据
const mutations = {
  /**
   * 这里进行了直接的操作，直接完成了运算
   * @param state {Object} 一些省略的上下文，包含了state中的内容，包括变量
   * @param value {Number} 传入的数字
   * @constructor
   */
  ADD (state, value) {
    state.sum += value
  }, DEADD (state, value) {
    state.sum -= value
  },
}

// 用于对state中的数据进行加工
const getters = {
  calculate (state) {
    return state.sum * 10
  },
}
//  用于存储数据
const state = {
  sum: 0,
  name: '张三',
  age: 99,
}

// 创建并导出 Store
export default new Vuex.Store({
  actions, mutations, state, getters,
})
