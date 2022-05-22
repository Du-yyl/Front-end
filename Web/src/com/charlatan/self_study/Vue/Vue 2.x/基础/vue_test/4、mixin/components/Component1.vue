<template>
  <div>
    <h2>
      字段是：{{ msg }}
    </h2>
    <button @click="show">按钮</button>
  </div>
</template>

<script>
// import mixin from '@/mixin'

export default {
  name: 'Component1',
  data () {
    return {
      msg: '我是测试内容',
    }
  },
  // mixins:[mixin]
}
</script>

<style scoped>

</style>
