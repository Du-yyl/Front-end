<template>
  <Demo @go="get" msg="测试传送内容" news="第二个传输内容">
    <template v-slot:qwe>
      <span>测试</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: 'App',
  components: {
    Demo,
  },
  setup () {
    function get (num) {
      alert('get方法执行了')
      console.log('获取到的数据', num)
    }

    return {
      get,
    }
  },
}
</script>

<style>

</style>
