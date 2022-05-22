// 引入完整版的Vue
// import Vue from 'vue/dist/vue'
// 这个版本的Vue是残缺版的，缺少了模板解析器
import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

function ceshi () {

}

new Vue({
    el: '#app',
    // render: h => h(App),
    // template:`<h1>我是测试内容</h1>`
    render: createElement => createElement('h1', '你好啊'),
    
})
// .$mount('#app')
