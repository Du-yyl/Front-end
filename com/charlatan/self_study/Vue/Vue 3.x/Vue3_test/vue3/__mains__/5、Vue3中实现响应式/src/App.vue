<template>
  <h3>
    数据：
    <br>
    <br>
    {{ obj.arr }}
    <br>
    {{ obj.obj_1 }}
    <br>
    {{ obj.obj_2 }}
  </h3>
  <button @click="changInfo">changInfo</button>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  components: {},
  setup () {
    let obj = reactive ({
      obj_1: '第一个数据',
      obj_2: '第二个数据',
      arr: [
        0, 1, 2, 3, 4,
      ],
    })

    function changInfo () {
      delete obj.obj_1
      obj.arr[0] = 999
      delete obj.arr[3]
    }

    return {
      obj,
      changInfo,
    }
  },
}
</script>

<style>

</style>
