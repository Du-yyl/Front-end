<!--
  ~ Time:2022/3/4 19:41 03
  ~ Name:news.vue
  ~ Path:Vue 2.x/基础/vue_test/src/pages
  ~ ProjectName:Vue
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <ul>
      <li v-for="now in news" :key="now.id" class="li">
        {{ now.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      news: [
        { id: '001', value: '第一个news信息' },
        { id: '002', value: '第二个news信息' },
        { id: '003', value: '第三个news信息' },
      ],
    }
  },
  components: {},
}
</script>

<style scoped>
.li {
  color: red;
}
</style>
