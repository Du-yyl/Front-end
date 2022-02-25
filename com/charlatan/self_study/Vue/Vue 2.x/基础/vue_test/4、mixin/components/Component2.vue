<template>
  <div>
    <h2>
      字段2是：{{ msg }}
    </h2>
    <button @click="show">按钮2</button>
  </div>
</template>

<script>
// import mixin from '@/mixin'

export default {
  name: 'Component2',
  data () {
    return {
      msg: '我是测试内容2',
    }
  },
  // mixins:[mixin]
}
</script>

<style scoped>

</style>
