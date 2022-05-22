<!--
  ~ Time:2022/3/2 15:16 57
  ~ Name:App.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="div">
    <search></search>
    <users class="user"></users>
  </div>
</template>

<script>
import search from '@/components/search'
import users from '@/components/users'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    search,
    users,
  },
}
</script>

<style scoped>
#div {
  width: 1300px;
  height: 900px;
  background: #dce0e5;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

.user {
  width: 1100px;
  height: auto;
  position: absolute;
  left: 0;
  right: 0;
  margin: 40px auto auto;
  background: #e7d29f;
  border-radius: 10px;
}
</style>
