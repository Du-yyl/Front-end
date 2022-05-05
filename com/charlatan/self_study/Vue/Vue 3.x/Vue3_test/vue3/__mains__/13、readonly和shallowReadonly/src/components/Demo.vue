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
      {{ obj_s.obj_s.obj }}
      <br>
      <br>
      <button @click="obj_1+='~'">修改第一个信息</button>
      <br>
      <button @click="obj_2+='@'">修改第二个信息</button>
      <br>
      <button @click="obj_s.obj_s.obj+='_'">修改第三个信息</button>
    </h3>

  </div>
</template>

<script>
import { ref, reactive, shallowReactive, shallowRef } from 'vue'
import { readonly, shallowReadonly, toRef } from '@vue/runtime-dom'

const { toRefs } = require ('@vue/runtime-dom')

export default {
  name: 'Demo',
  setup () {
    let num = ref (0)

    let person = reactive ({
      obj_1: '第一个数据',
      obj_2: '第一个数据',
      obj_s: {
        obj_1: '第一层obj_s中的测试数据',
        obj_s: {
          obj: '第二层obj_s中的测试数据',
        },
      },
    })

    /**
     * readonly 接收一个响应式参数，可以返回一个新的内容，进行了替换 让这个响应式变成只读的了
     * @type {DeepReadonly<UnwrapNestedRefs<UnwrapNestedRefs<{obj_2: string, obj_s: {obj_s: {obj: string}, obj_1: string}, obj_1: string}>>>}
     */
    // person = readonly(person)

    /**
     * 同样是让指定的内容进行只读，但是值得注意的是，这种方式进行的定义会进行浅层次的只读，对于深层次的内容不会限制
     * @type {Readonly<UnwrapNestedRefs<{obj_2: string, obj_s: {obj_s: {obj: string}, obj_1: string}, obj_1: string}>>}
     */
    person = shallowReadonly (person)

    return {
      ...toRefs (person),
      num,
    }
  },

}
</script>

<style lang="less" scoped></style>
