<!--
  ~ Time:2022/3/4 17:33 21
  ~ Name:about.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <h1>
    我是about中的内容
  </h1>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  },
  components: {},
  // 通过路由规则，进入该组件时被调用【只有通过路由规则进入才会被调用，不通过路由规则（第一次的默认加载）就不会调用这个，这个规则也就无效）
  beforeRouteEnter (to, from, next) {
    console.log('进入组件')
    next()
  },
  // 通过路由规则，离开这个组件时调用
  beforeRouteLeave (to, from, next) {
    console.log('离开组件')
    next()
  },
}
</script>

<style scoped>

</style>
