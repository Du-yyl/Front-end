<template>
  <div class="div">
    祖组件
    <Child></Child>
  </div>
</template>

<script>

import { customRef, watch, toRefs } from '@vue/runtime-dom'
import Child from '@/components/Child'
import Dialog from '@/components/Dialog'
import { provide, reactive } from 'vue'

const { ref } = require('@vue/runtime-dom')

export default {
  name: 'App',
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
