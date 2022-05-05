<!--
  ~ Time:2022/2/25 20:57 38
  ~ Name:Component2.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h2>
      数据2 -> {{ msg }}
      <br>
      <button @click="sendData">为兄弟组件发送数据</button>

    </h2>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  data () {
    return {
      msg: '我是数据2',
    }
  },
  components: {},
  methods: {
    sendData () {
      this.$bus.$emit ('sends', 999)
    },
  },

}
</script>

<style scoped>

</style>
