/**
 * Time:2022/2/24 14:38 24
 * Name:plugins.js
 * Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

export default {
  install (Vue) {
    Vue.prototype.hello = () => {
      console.log('你好 啊')
    }
    Vue.mixin({
      num1: 100,
      num2: 200,
    })
  },
}
