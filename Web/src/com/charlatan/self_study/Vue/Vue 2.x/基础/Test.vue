<template>
  <div>
    <h2 class="h2">{{ msg }}</h2>
    <button @click="show">我是按钮</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: '我是测试文本',
    }
  },
  methods: {
    show () {
      console.log('我是点击按钮的结果')
    },
  },
}
</script>

<style scoped>
.h2 {
  background: red;
}
</style>
