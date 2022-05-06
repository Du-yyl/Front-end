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
  </div>
</template>

<script>
import { ref, reactive, watchEffect, onBeforeMount, onUpdated, onBeforeUnmount } from 'vue'
import { computed, onBeforeUpdate, onMounted, onUnmounted, watch } from '@vue/runtime-dom'

export default {
  name: 'Demo',
  setup () {
    let num = ref(0)

    // 使用组合API形式进行配置
    onBeforeMount(() => {
      console.log('onBeforeMount')

    })
    onMounted(() => {
      console.log('onMounted')

    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')

    })
    onUpdated(() => {
      console.log('onUpdated')

    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')

    })
    onUnmounted(() => {
      console.log('onUnmounted')

    })

    return {
      num,
    }
  },
  // 使用配置项的形式碱性配置
  // beforeCreate () {
  //   console.log('创建开始')
  // },
  // created () {
  //   console.log('创建')
  // },
  // beforeMount () {
  //   console.log('挂载之前')
  // },
  // mounted () {
  //   console.log('挂载')
  // },
  // beforeUnmount () {
  //   console.log('卸载之前')
  // },
  // unmounted () {
  //   console.log('卸载')
  // },
  //
}
</script>

<style lang="less" scoped></style>
