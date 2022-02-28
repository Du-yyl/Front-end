<!--
  ~ Time:2022/2/26 9:35 42
  ~ Name:App.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <Component1></Component1>
    <hr>
    <Component2></Component2>
  </div>
</template>

<script>
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    Component1,
    Component2,
  },
}
</script>

<style scoped>

</style>
