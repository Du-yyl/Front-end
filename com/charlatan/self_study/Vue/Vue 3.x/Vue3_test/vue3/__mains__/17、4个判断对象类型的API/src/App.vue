<template>
  <div class="div">
    祖组件
  </div>
</template>

<script>

import { customRef, watch, toRefs, readonly, isRef, isProxy } from '@vue/runtime-dom'
import { isReactive, isReadonly, provide, reactive } from 'vue'

const { ref } = require('@vue/runtime-dom')

export default {
  name: 'App',
  setup () {
    let data = reactive({
      name: '父组件数据',
      msg: '用于测试',
    })

    let num1 = ref(0)
    let num2 = readonly(num1)

    /**
     * isRef
     *  判断一个内容是不是 ref 数据
     *
     */
    console.log(isRef(num1))
    console.log(isReactive(data))
    console.log(isReadonly(num2))

    console.log(isProxy(data))
    // 这里的返回会是 true ，因为经过了 readonly 处理，但是返回的也是一个 proxy 对象，所以输出 true
    console.log(isProxy(num2))

    return {
      ...toRefs(data),
    }
  },
}
</script>

<style>
</style>
