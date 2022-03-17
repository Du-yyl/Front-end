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

    <hr>
    <h2>
      {{ obj.obj_1 }}
      <br>
      <button @click=" obj.obj_1 +='&'">操作对象中的数据</button>
    </h2>
    <hr>
    <h2>
      {{ obj.obj_2.obj.obj_2 }}
      <br>
      <button @click=" obj.obj_2.obj.obj_2 +='%'">操作对象中的数据</button>
    </h2>

  </div>
</template>

<script>
import { ref, reactive, watchEffect } from 'vue'
import { computed, watch } from '@vue/runtime-dom'

export default {
  name: 'Demo',
  setup () {
    let num = ref(0)
    let msg = ref('测试信息')
    let obj = reactive({
      obj_1: '第一个信息',
      obj_2: {
        obj: {
          obj_2: '第二个信息',
        },
      },
    })

    // watch(num, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    watchEffect(() => {
      let x = num.value
      console.log('watchEffect')
    })

    return {
      num,
      msg,
      obj,
    }
  },
}
</script>

<style scoped lang="less"></style>
