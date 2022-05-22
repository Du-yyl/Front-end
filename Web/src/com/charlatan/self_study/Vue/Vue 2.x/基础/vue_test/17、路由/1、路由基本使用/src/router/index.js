/**
 * Time:2022/3/4 17:49 21
 * Name:index.js
 * Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/router
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 这个文件创建整个文件夹的路由器

// 引入路由
import VueRouter from 'vue-router'

import about from '../components/about'
import home from '../components/home'
import user from '../components/user'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: about,
        },
        {
            path: '/home',
            component: home,
        },
        {
            path: '/user',
            component: user,
        },
    ],
})

