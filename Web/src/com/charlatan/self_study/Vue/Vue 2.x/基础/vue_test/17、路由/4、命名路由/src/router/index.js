/**
 * Time:2022/3/4 17:49 21
 * Name:index.js
 * Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/router
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import VueRouter from 'vue-router'

import about from '../pages/about'
import home from '../pages/home'
import user from '../pages/user'
import mag from '@/pages/mag'
import news from '@/pages/news'
import now from '@/pages/now'

export default new VueRouter({
    routes: [
        {
            path: '/about', component: about,
        },
        
        {
            path: '/home', component: home,
            
            children: [
                {
                    path: 'mag', component: mag,
                },
                
                {
                    path: 'news', component: news, children: [
                        {
                            path: 'now', component: now, name: 'now',
                        },
                    ],
                },
            ],
        },
        
        {
            path: '/user', component: user,
        },
    ],
})

