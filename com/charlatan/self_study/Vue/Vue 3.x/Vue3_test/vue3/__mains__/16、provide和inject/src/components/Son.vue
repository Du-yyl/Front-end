<!--
  ~ Time:2022/3/17 11:41 55
  ~ Name:Son.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 3.x/Vue3_test/vue3/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Son">
    孙组件
    <br>
    {{ data.msg }}
  </div>
</template>

<script>
const { inject } = require('@vue/runtime-dom')
export default {
  name: 'Son',
  data () {
    return {}
  },
  setup () {
    let data = inject('data')
    return {
      data,
    }
  },
  components: {},
}
</script>

<style>
#Son {
  background: red;
  border: 10px solid bisque;
}
</style>
