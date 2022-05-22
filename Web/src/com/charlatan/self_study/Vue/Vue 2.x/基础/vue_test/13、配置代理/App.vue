<!--
  ~ Time:2022/2/28 11:52 23
  ~ Name:App.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <button class="btn btn-success" @click="send">按钮</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {},
  methods: {
    send () {
      console.log('发送请求')
      axios.get('http://localhost:8080/ask/students').then((res) => {
        console.log('ok', res.data)
      }, (err) => {
        console.log('err', err.message)
      })
    },
  },
}
</script>

<style scoped>

</style>
