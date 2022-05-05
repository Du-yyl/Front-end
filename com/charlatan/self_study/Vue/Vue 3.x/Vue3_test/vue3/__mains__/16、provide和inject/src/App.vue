<template>
  <div class="div">
    祖组件
    <br>
    {{ name }}
    <br>
    {{ msg }}
    <Child></Child>
  </div>
</template>

<script>

import { customRef, watch, toRefs } from '@vue/runtime-dom'
import Child from '@/components/Child'
import { provide, reactive } from 'vue'

const { ref } = require ('@vue/runtime-dom')

export default {
  name: 'App',
  setup () {
    let data = reactive ({
      name: '父组件数据',
      msg: '用于测试',
    })

    // 使用 provide 将指定的数据进行传输
    provide ('data', data)

    return {
      ...toRefs (data),
    }
  },
  components: {
    Child,
  },
}
</script>

<style>
.div {
  background: yellow;
  border: 10px solid bisque;
}
</style>
