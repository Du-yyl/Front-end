/**
 * Time:2022/2/23 15:47 43
 * Name:main.js
 * Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import App from './App'

Vue.config.productionTip = false
const vm = new Vue({
  el: '#root',
  data: {
    msg: '',
  },
  methods: {},
  computed: {},
  watch: {},
  components: {
    App,
  },
})
