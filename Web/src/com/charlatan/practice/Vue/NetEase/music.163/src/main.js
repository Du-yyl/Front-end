import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import router from '@/router'
import VueLazyLoad from 'vue-lazyload'
import store from '@/store'

Vue.use(VueRouter)
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: require('./dist/error.png'),
    loading: require('./dist/loading.png'),
    attempt: 1,
    listenEvents: ['scroll'],
})

Vue.config.productionTip = false
const vm = new Vue({
    el: '#app',
    store,
    router: router,
    render: createElement => createElement(App),
    beforeCreate () {
        Vue.prototype.$bus = this
    },
})
