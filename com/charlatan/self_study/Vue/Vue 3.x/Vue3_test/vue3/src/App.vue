<template>
  <div class="div">
    祖组件
    <Suspense>

      <template v-slot:default>
        <Child></Child>
      </template>

      <template v-slot:fallback>
        等着
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

import Child from '@/components/Child'

let Child = defineAsyncComponent(() => import('./components/Child'))
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
