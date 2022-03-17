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
import { ref, reactive } from 'vue'
import { toRef } from '@vue/runtime-dom'

const { toRefs } = require('@vue/runtime-dom')

export default {
  name: 'Demo',
  setup () {
    let num = ref(0)
    let person = reactive({
      obj_1: '第一个数据',
      obj_2: '第一个数据',
      obj_s: {
        obj_1: '第一层obj_s中的测试数据',
        obj_s: {
          obj: '第二层obj_s中的测试数据',
        },
      },
    })

    // 使用 toRef 将指定内容进行转换，将其转换为响应式的数据
    // let obj1 = person.obj_1
    /**
     * 使用 toRef 方法，可以将
     * @type {ToRef<UnwrapNestedRefs<{obj_2: string, obj_s: {obj_s: {obj: string}, obj_1: string}, obj_1: string}>[string]>}
     */
    // let obj2 = toRef(person, 'obj_1')
    // console.log('--', obj1)
    // console.log('++', obj2)

    /**
     * 这里经过了定义，在访问的时候会更加方便，直接访问定义的名称就可以，但是会失去响应式
     * 因为通过定义的时候定义的是一个全新的变量，只不过将这个内容重新赋值而已，如果进行修改那么只会将这个已经赋值的地址进行改变
     * 而不会改变原本的数据，这样也就失去了响应式的效果
     *
     * 如果这里使用的是 ref 而不是 toRef ，那么就会产生一个全新的数据，并且以后访问的内容，就会访问这个全新的 ref 对象
     *
     */
    // return {
    //   obj_1: person.obj_1,
    //   obj_2: person.obj_2,
    //   obj_s: person.obj_s,
    //   obj: person.obj_s.obj_s.obj,
    // }
    //
    // return {
    //   obj_1: toRef(person, 'obj_1'),
    //   obj_2: toRef(person, 'obj_2'),
    //   obj_s: toRef(person, 'obj_s'),
    //   obj: toRef(person.obj_s.obj_s, 'obj'),
    // }

    // 通过结构赋值将所有的内容全部进行解构进行，
    return {
      ...toRefs(person),
    }
  },

}
</script>

<style scoped lang="less"></style>
