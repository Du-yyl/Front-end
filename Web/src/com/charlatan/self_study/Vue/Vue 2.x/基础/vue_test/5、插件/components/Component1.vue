<template>
  <h2>
    测试数据 -> {{ msg }}
    <button @click="test">你好</button>
  </h2>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {
      msg: '我是测试数据',
    }
  },
  methods: {
    test () {
      this.hello()
    },
  },
}
</script>

<style scoped>

</style>
