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
    <count></count>
    <hr>
    <person></person>
    <hr>
    <addTo></addTo>
  </div>
</template>

<script>


import count from '@/components/count'
import person from '@/components/person'
import addTo from '@/components/addTo'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    count,
    person,
    addTo
  },
}
</script>

<style scoped>

</style>
