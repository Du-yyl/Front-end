<!--
  ~ Time:2022/2/25 20:50 30
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
      数据 -> {{ msg }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {
      msg: '我是数据1',
    }
  },
  components: {},
  mounted () {
    this.$bus.$on('sends', (data) => {
      console.log('这里是组件1', data)
    })
  },
  beforeDestroy () {
    this.$bus.$off('sends')
  },
}
</script>

<style scoped>

</style>
