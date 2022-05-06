// 创建的不再是Vue的构造函数了，而是一个名为 createApp 的工厂工程
import { createApp } from 'vue'
import App from './App.vue'

/**
 * 在Vue3中，在vm上减少了更多的方法，并对一些方法进行了重写，整体结构和Vue2类似，
 * 这句话中使用mount进行了挂载，在Vue3中还提供了unmount（卸载），这个就是在Vue2
 * 中的{$mount}
 *
 */
const app = createApp(App)

app.mount('#app')

// 等待一秒钟后卸载这个组件
setTimeout(() => {
    app.unmount('#app')
}, 1000)
