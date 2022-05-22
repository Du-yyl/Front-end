<!--
  ~ Time:2022/2/24 15:04 53
  ~ Name:Component2.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/cpmponents
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h2 class="demo">我是第二个插件 ——> {{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  data () {
    return {
      msg: '第二个插件的数据是正确的',
    }
  },
  components: {},
}
</script>

<style scoped>
.demo {
  background: red;
}
</style>
