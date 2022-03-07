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
import form from 'vue-resource/src/http/interceptor/form'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/about', component: about, name: 'about', meta: {
        title: '关于',
      },
    }, {
      path: '/home', component: home, name: 'home', meta: {
        title: '主页',
      },
      
      children: [
        {
          path: 'mag', component: mag, name: 'mag', meta: {
            isAuth: true, title: '信息',
          },
        },
        
        {
          path: 'news', component: news, meta: {
            isAuth: true, title: '新闻',
          }, children: [
            {
              path: '/home/news/now/:id/:title', component: now, name: 'now', props ({ query: { id, title } }) {
                return {
                  id, title,
                }
              },
            }],
        }],
    }, {
      path: '/user', component: user, name: 'user', meta: {
        title: '用户',
      },
    }],
})

export default router
