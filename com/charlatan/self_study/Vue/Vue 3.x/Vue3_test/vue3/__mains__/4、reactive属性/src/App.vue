<template>
  <h3>
    名字：{{ name }}
    年龄:{{ age }}
    对象中的信息：
    <br>
    第一个数据：{{ obj.obj_1 }}
    <br>
    第二个数据：{{ obj.obj_2 }}
  </h3>
  <button @click="changInfo">changInfo</button>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  components: {},
  setup () {
    let name = ref ('李四')
    let age = ref (50)
    let obj = ref ({
      obj_1: '测试数据1',
      obj_2: '测试数据2',
    })
    let num = reactive ({
      rea_1: 'reactive第一个测试数据',
      rea_2: 'reactive第二个测试数据',
    })

    function changInfo () {
      obj.value.obj_1 = '第一个数据修改测试例子'

      console.log (num.rea_1)
      console.log (num)
    }

    return {
      name,
      age,
      changInfo,
      obj,
    }
  },
}
</script>

<style>

</style>
