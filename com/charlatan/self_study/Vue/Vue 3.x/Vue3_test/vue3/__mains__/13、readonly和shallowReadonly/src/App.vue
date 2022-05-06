<template>
  <button @click="flag = !flag">显示\隐藏</button>
  <Demo v-if="flag"></Demo>

</template>

<script>
import Demo from './components/Demo'

const { ref } = require('@vue/runtime-dom')

export default {
  name: 'App',
  setup () {
    let flag = ref(true)
    return {
      flag,
    }
  },
  components: {
    Demo,
  },
}
</script>

<style>

</style>
