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

import persons from '@/store/persons'
import count from '@/store/count'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    persons,
    count,
  },
})
