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
    <h2>{{ msg }}</h2>
    <button @click="msg+='@'">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { computed, watch } from '@vue/runtime-dom'

export default {
  name: 'Demo',
  // watch: {
  //   num (newValue, oldValue) {
  //     console.log(newValue,oldValue);
  //   },
  // },

  // // Vue2中完整写法，通过配置成对象来完成监视，并且这种方式可以添加一些属性
  // watch: {
  //   num: {
  //     // 进入时，立即执行一次
  //     immediate:true,
  //     // 深层监视
  //     deep:true,
  //     handler (newValue, oldValue) {
  //       console.log(newValue,oldValue);
  //     },
  //   },
  // },

  setup () {
    let num = ref (0)
    let msg = ref ('测试信息')

    // 1、监视 ref 所定义的一个数据【常用】
    watch (num, (newValue, oldValue) => {
      console.log (newValue, oldValue)
    })

    // // 2、同时监视多个数据
    // watch([num, msg], (newValue, oldValue) => {
    //   // console.log(newValue, oldValue)
    //   console.log(newValue)
    // })
    //
    // // 3、在监视中添加配置
    // watch(num, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // }, {
    //   immediate: true,
    // })
    return {
      num,
      msg,
    }
  },
}
</script>

<style lang="less" scoped></style>
