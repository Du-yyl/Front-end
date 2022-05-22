/**
 * Time:2022/3/10 20:45 05
 * Name:index.js
 * Path:src/router
 * ProjectName:music.163
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import VueRouter from 'vue-router'

import Toplist from '../pages/Toplist/Toplist'
import Discover from '@/components/Discover'
import song from '@/pages/song/song'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Discover,
        },
        {
            path: '/Toplist',
            component: Toplist,
        },
        {
            path: '/song',
            component: song,
        },
    ],
})
