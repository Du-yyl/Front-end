<!--
  ~ Time:2022/3/2 19:05 56
  ~ Name:Component1.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <button class="btn btn-danger" @click="send">发送请求</button>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {}
  },
  components: {},
  methods: {
    send () {
      //  使用 vue-resource 发送请求
      this.$http.get ('https://api.github.com/search/users?q=test').then ((res) => {
        console.log (res.body.items)
      }, (err) => {
        console.log (err)
      })
    },
  },
}
</script>

<style scoped>

</style>
