/**
 * Time:2022/2/24 11:38 19
 * Name:main.js
 * Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import Vue from 'vue'
import App from './App'
import mixin from '@/mixin'

// 全局混合配置
// 这种方式配置的混合，会为整个VM进行配置，并且所有的组件都会使用这个混合
Vue.mixin(mixin)

Vue.config.productionTip = false
const vm = new Vue({
    el: '#app',
    render: createElement => createElement(App),
})
