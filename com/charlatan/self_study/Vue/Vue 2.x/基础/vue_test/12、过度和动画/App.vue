<!--
  ~ Time:2022/2/26 13:56 32
  ~ Name:App.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <animationEffect></animationEffect>
    <hr>
    <ExcessiveEffect></ExcessiveEffect>
    <hr>
    <AnimationOfMultipleElements></AnimationOfMultipleElements>
    <hr>
    <AnimationLibrary></AnimationLibrary>
  </div>
</template>

<script>
import animationEffect from '@/conpoments/animationEffect'
import ExcessiveEffect from '@/conpoments/ExcessiveEffect'
import AnimationOfMultipleElements from '@/conpoments/AnimationOfMultipleElements'
import AnimationLibrary from '@/conpoments/AnimationLibrary'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    animationEffect,
    ExcessiveEffect,
    AnimationOfMultipleElements
    ,
    AnimationLibrary,
  },
}
</script>

<style scoped>

</style>
