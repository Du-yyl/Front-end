<template>
  <Component1 :num="20" msg="测试内容"/>
</template>
<!--
当要为指定的模块传递指定数据，并且要传递数字时，为了保留key-value的形式，只能写字符串，但是为了保证数据的正确的传递
可以使用 v-bind 确保这个属性会按照一段代码进行执行
-->
<script>
import Component1 from '@/components/Component1'

export default {
  name: 'App',
  components: {
    Component1,
  },
}
</script>

<style scoped>

</style>
