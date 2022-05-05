<!--
  ~ Time:2022/3/2 19:31 49
  ~ Name:Component1.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h2>{{ title }}列表</h2>

    <!--    定义一个插槽，在插槽中的内容属于默认值【使用者没有传递具体结构时使用值】-->
    <slot>
      <ul class="ul">
        <li v-for="item in items" class="li">测试内容</li>
      </ul>
    </slot>
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
