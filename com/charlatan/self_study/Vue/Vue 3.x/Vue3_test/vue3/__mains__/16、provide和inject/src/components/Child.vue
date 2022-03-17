<!--
  ~ Time:2022/3/17 11:41 47
  ~ Name:Child.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 3.x/Vue3_test/vue3/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Child">
    子组件
    <br>
    {{ data.name }}
    <Son></Son>
  </div>
</template>

<script>
import Son from '../components/Son'

const { inject } = require('@vue/runtime-dom')
export default {
  name: 'Child',
  data () {
    return {}
  },
  setup () {
    let data = inject('data')
    console.log(data)
    return {
      data,
    }
  },

  components: {
    Son,
  },
}
</script>

<style>
#Child {
  background: green;
  border: 10px solid bisque;
}
</style>
