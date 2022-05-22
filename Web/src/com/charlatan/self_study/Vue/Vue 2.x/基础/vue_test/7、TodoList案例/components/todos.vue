<!--
  ~ Time:2022/2/24 16:07 06
  ~ Name:todos.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <ul class="ul">
    <todo v-for="Obj in Obj" :key="Obj.id" :Obj="Obj" :removeObj="removeObj"></todo>
  </ul>
</template>

<script>
import todo from '@/components/todo'

export default {
  name: 'todos',
  data () {
    return {}
  },
  components: {
    todo,
  },
  props: {
    Obj: Array,
    removeObj: Function,
  },
}
</script>

<style scoped>
.ul {
  position: relative;
  top: 30px;
  left: 50px;
  height: 300px;
  overflow-y: auto;
  width: 450px;
}
</style>
