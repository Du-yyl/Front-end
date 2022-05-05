<!--
  ~ Time:2022/3/16 10:17 51
  ~ Name:Demo.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 3.x/Vue3_test/vue3/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Demo">
    <h3>
      person中的数据：
      <br>
      {{ obj_1 }}
      <br>
      {{ obj_2 }}
      <br>
      <!--      {{ obj_s.obj_s.obj }}-->
      <br>
      <br>
      <button @click="obj_1+='~'">修改第一个信息</button>
      <br>
      <button @click="obj_2+='@'">修改第二个信息</button>
      <br>
      <!--      <button @click="obj_s.obj_s.obj+='_'">修改第三个信息</button>-->
    </h3>

  </div>
</template>

<script>
import { ref, reactive, shallowReactive, shallowRef } from 'vue'
import { toRef } from '@vue/runtime-dom'

const { toRefs } = require ('@vue/runtime-dom')

export default {
  name: 'Demo',
  setup () {
    let num = ref (0)

    /**
     * 这种方式数据也是响应式的，不过只会是浅层次的绑定，并且第二层及以后的内容都没办法获取到【浅响应式】
     * @type {ShallowReactive<{obj_2: string, obj_s: {obj_s: {obj: string}, obj_1: string}, obj_1: string}>}
     */
        // shallowRef 进行数据的处理时，不会转换对象类型的数据，如果赋值为对象类型，直接不进行处理，而普通的 ref 会找到reactive进行处理
        // ref 会将数据通过 proxy 进行转换，得到一个 proxy对象 通过数据劫持进行了处理，所以能够进行监视内容的变化
        // 如果通过 shallowRef 进行处理，那么就会将这个对象直接进行了封装，不会通过 proxy 进行处理，所以也就不能进行响应式的处理了

        // let person = shallowReactive({
    let person = shallowRef ({
          obj_1: '第一个数据',
          obj_2: '第一个数据',
          obj_s: {
            obj_1: '第一层obj_s中的测试数据',
            obj_s: {
              obj: '第二层obj_s中的测试数据',
            },
          },
        })

    return {
      ...toRefs (person),
    }
  },

}
</script>

<style lang="less" scoped></style>
