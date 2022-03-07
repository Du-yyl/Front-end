<!--
  ~ Time:2022/3/5 14:21 35
  ~ Name:btns.vue
  ~ Path:Vue 2.x/基础/vue_test/src/pages
  ~ ProjectName:Vue
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <button @click="back" class="btn btn-warning">后退</button>
    <button @click="go" class="btn btn-success">前进</button>
  </div>
</template>

<script>
export default {
  name: 'btns',
  data () {
    return {}
  },
  components: {},
  methods: {
    back () {
      this.$router.back()
    },
    go () {
      this.$router.forward()
    },
  },
}
</script>

<style scoped>
.btn {
  user-select: none !important;
}
</style>
