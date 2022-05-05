<!--
  ~ Time:2022/2/26 9:36 20
  ~ Name:Component2.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <button @click="sendData">向组件1发送数据</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'Component2',
  methods: {
    sendData () {
      pubsub.publish ('sends', 900)
      console.log ('向组件1发送数据')
    },
  },
}
</script>

<style scoped>

</style>
