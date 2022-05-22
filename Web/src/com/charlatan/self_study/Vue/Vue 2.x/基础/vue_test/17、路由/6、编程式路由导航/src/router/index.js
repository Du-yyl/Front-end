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
                            path: 'now/:id/:title', component: now, name: 'now',
                            
                            // props 的第一种写法，值为对象，该对象中的所有的key-value都会以props的形式传给now组件【用的少】
                            // props: {
                            //   a: 1,
                            //   b: '测试',
                            // },
                            
                            //  props 的第二种写法，值为布尔值，如果为真，那么就会将路由收到的所有数据全部给props，并返回给now组件
                            // 但是不会传递 query 参数
                            // props: true,
                            
                            //  第三种写法：值为函数，通过返回值将要的内容扔出去，并且这个函数由路由调用，传入的参数是 route
                            props ({ query: { id, title } }) {
                                return {
                                    id: id,
                                    title: title,
                                }
                            },
                            
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

