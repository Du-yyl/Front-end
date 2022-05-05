<!--
  ~ Time:2022/3/16 10:17 51
  ~ Name:Demo.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 3.x/Vue3_test/vue3/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Demo">
    <h1> {{ num }}</h1>
    <button @click="num++">点击++</button>
    <hr>
    <h2>当前点击位置的坐标 ：x-> {{ point.x }};y->{{ point.y }}</h2>
  </div>
</template>

<script>
import { ref, reactive, watchEffect, onBeforeMount, onUpdated, onBeforeUnmount } from 'vue'
import { computed, onBeforeUpdate, onMounted, onUnmounted, watch } from '@vue/runtime-dom'

import usePoint from '@/hooks/usePoint'

export default {
  name: 'Demo',
  setup () {
    let num = ref (0)
    let point = usePoint ()
    return {
      num,
      point,
    }
  },
}
</script>

<style lang="less" scoped></style>
