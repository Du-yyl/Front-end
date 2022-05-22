<!--
  ~ Time:2022/3/4 21:27 00
  ~ Name:now.vue
  ~ Path:Vue 2.x/基础/vue_test/src/pages
  ~ ProjectName:Vue
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <ul>
      <li>消息ID：{{ $route.query.id }}</li>
      <li>消息内容：{{ $route.query.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'now',
}
</script>

<style scoped>

</style>
