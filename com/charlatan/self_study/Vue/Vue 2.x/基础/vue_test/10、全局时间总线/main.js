/**
 * Time:2022/2/25 20:49 54
 * Name:main.js
 * Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import Vue from 'vue'
import App from './App'

Vue.prototype.x = { a: 1, b: 2 }
Vue.config.productionTip = false
const vm = new Vue ({
	el: '#app',
	render: createElement => createElement (App),
	// 在数据加载前，为 VM 的原型上绑定添加一个属性，这里的this就是vm，所以能通过this进行vm的传入
	
	// 这里使用vm是因为要使用vm中的$on和$item方法，所以借助了vm对象
	// 安装全局时间总线
	beforeCreate () {
		Vue.prototype.$bus = this
	},
})
