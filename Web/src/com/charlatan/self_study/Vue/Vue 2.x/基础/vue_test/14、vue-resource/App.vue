<!--
  ~ Time:2022/3/2 17:59 44
  ~ Name:App.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <Component1></Component1>
  </div>
</template>

<script>
import Component1 from '@/components/Component1'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    Component1,
  },
}
</script>

<style scoped>

</style>
