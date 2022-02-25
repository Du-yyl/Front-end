<!--
  ~ Time:2022/2/24 15:01 43
  ~ Name:Component1.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/cpmponents
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div class="title">
    <h2 class="demo">
      我是测试数据 -> {{ msg }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {
      msg: '测试数据是正确的',
    }
  },
  components: {},
}
</script>

<style scoped>
.demo {
  background: #ebcccc;
}
</style>
