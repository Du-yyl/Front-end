/**
 * Time:2022/3/15 20:22 24
 * Name:index.js
 * Path:music.163/src/store
 * ProjectName:NetEase
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 完成方法的创建
 * @type {{}}
 */
const actions = {}

/**
 * 用于操作数据
 * @type {{}}
 */
const mutations = {}

/**
 * 用于存储数据
 * @type {{}}
 */
const state = {
    topListNum: 0,
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})
