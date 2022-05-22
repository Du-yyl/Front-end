<!--
  ~ Time:2022/2/25 11:49 26
  ~ Name:Component1.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h2>
      {{ msg }}
    </h2>

    <button @click="chang">点击转换文字</button>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {}
  },
  components: {},
  props: {
    msg: String,
    chang: Function,
  },
}
</script>

<style scoped>

</style>
