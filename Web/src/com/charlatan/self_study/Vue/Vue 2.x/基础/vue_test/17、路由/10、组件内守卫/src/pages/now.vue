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
      <!--      这里使用了两种信息收集形式，所以通过 || 进行判断，保证都能获取到数据-->
      <li class="li1">消息ID：{{ $route.params.id }}</li>
      <li class="li1">消息内容：{{ $route.params.title }}</li>

      <li class="li2"> {{ $route.params.id }}</li>
      <li class="li2"> {{ $route.params.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'now',
  props: {
    id: String,
    title: String,
  },
  mounted () {
    console.log(this.$route)
  },
}
</script>

<style scoped>
.li1 {
  color: #4a07f3;
  font-size: 20px;
}

.li2 {
  color: #a21eee;
  font-size: 20px;
}
</style>
