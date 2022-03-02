<!--
  ~ Time:2022/3/2 20:12 19
  ~ Name:Category.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h3>{{ title }} 列表</h3>
    <slot name="slot1">
      <ul class="ul">
        <li class="li" v-for="item in items">测试内容</li>
      </ul>
    </slot>
    <slot name="slot2"></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {}
  },
  components: {}, props: {
    title: String,
    items: Array,
  },
}
</script>

<style scoped>
.ul {
  font-size: 90px !important;
}

.li {
  font-size: 20px;
}
</style>
