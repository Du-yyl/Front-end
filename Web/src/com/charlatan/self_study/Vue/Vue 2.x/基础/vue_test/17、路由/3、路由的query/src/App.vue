<!--
  ~ Time:2022/3/2 20:08 30
  ~ Name:App.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>

    <h2 id="h2">
      使用路由进行不同组件之间的切换
    </h2>
    <hr>
    <tab id="tab"></tab>
    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import tab from './components/tab'
import about from './pages/about'
import user from './pages/user'
import home from './pages/home'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    tab,
    about,
    home,
    user,
  },
}
</script>

<style scoped>
#h2 {
  position: relative;
  top: 20px;
  left: 200px;
  width: 500px;
}

#tab {
  position: relative;
  left: 200px;
  top: 40px;
}

.container {
  background: #e3d9d9;
  position: absolute;
  left: 350px;
  top: 180px;
}
</style>
