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
import { ref, reactive } from 'vue'
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

    // 如果使用watch监视对象，那么获取的 newValue 和 oldValue 就无法正确获取原先的值，两个值是相同的
    // 强制开始深度监视，无法关闭
    watch(obj, (newValue, oldValue) => {
      console.log(newValue, oldValue)
      console.log(newValue === oldValue)
    }, { deep: false })  // 如果监视 reactive 返回的对象，那么无论如何定义深度，都是无效的

    // 监视函数中某个属性，不监视全部
    // 通过一个函数的返回值进行控制，这种方式只会监视指定的一个属性，并且这种方式中，通过监视的 newValue和oldValue是可以正常工作的
    watch(() => obj.obj_2.obj.obj_2, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    // 监视reactive对象中的一些属性
    // 将这些要监视的通过返回值一个个返回出来，并且把返回的内容封装到一个数组中
    watch([() => obj.obj_2.obj.obj_2, () => obj.obj_1],
        (newValue, oldValue) => {
          console.log(newValue, oldValue)
        },
    )

    // 如果要监视对象中的一个对象
    // 这种方式监视是监视的对象，不能监视对象中的内容，如果要监视对象中的内容，要使用深度监视
    watch(() => obj.obj_2, (newValue, oldValue) => {
      console.log(newValue.obj, oldValue.obj)
    }, { deep: true })

    return {
      num,
      msg,
      obj,
    }
  },
}
</script>

<style scoped lang="less"></style>
