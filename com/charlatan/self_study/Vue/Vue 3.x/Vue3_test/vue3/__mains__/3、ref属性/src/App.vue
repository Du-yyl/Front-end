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
import { ref } from 'vue'

export default {
  name: 'App',
  components: {},
  setup () {
    // 将数据通过ref进行配置，可以使Vue完成响应式的布局，通过这个属性可以让属性变成一个相应式的数据
    let name = ref('李四')
    let age = ref(50)
    let obj = ref({
      obj_1: '测试数据1',
      obj_2: '测试数据2',
    })

    function changInfo () {
      // 这种方式进行了数据的修改，虽然数据进行了修改，但是Vue并不会进行更新，所以要使用一些新的方法
      // name = '李四'
      // age = 40

      // console.log(name.value,age.value);
      // name.value = '张三'
      // age.value = 60

      // 对于Vue3中的对象数据类型，不用使用.value的形式形式进行访问，而是直接使用对象.的形式进行访问
      // Vue3中对对象类的数据进行重写的方式不同
      obj.value.obj_1 = '第一个数据修改测试例子'
      console.log()
    }

    // 这个函数会返回一个对象，通常是常用的配置对象
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
