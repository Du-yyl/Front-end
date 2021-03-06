/**
 * Time:2022/3/2 20:08 27
 * Name:main.js
 * Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
// 应用插件
Vue.use(VueRouter)

Vue.config.productionTip = false
const vm = new Vue({
    el: '#app',
    render: createElement => createElement(App),
    router: router,
})
