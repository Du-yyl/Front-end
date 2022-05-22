import App from './App'
import store from './store'

// #ifndef VUE3
// #ifdef VUE3
import Vue, { createSSRApp } from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = '1111111111'
Vue.prototype.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: '00:00:00',
}
App.mpType = 'app'
const app = new Vue({
    store,
    ...App,
})
app.$mount()

// #endif

export function createApp () {
    const app = createSSRApp(App)
    app.use(store)
    app.config.globalProperties.$adpid = '1111111111'
    app.config.globalProperties.$backgroundAudioData = {
        playing: false,
        playTime: 0,
        formatedPlayTime: '00:00:00',
    }
    return {
        app,
    }
}

// #endif
