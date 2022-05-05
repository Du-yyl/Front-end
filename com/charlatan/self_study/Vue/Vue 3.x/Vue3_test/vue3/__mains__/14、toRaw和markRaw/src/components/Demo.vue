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
      {{ person.attr }}
      <br>
      <button @click="obj_1+='~'">修改第一个信息</button>
      <br>
      <button @click="obj_2+='@'">修改第二个信息</button>
      <br>
      <button @click="obj_s.obj_s.obj+='_'">修改第三个信息</button>
      <br>
      <button @click="showRow">输出最原始的对象</button>
      <br>
      <button @click="addAttr">添加一个属性</button>
      <br>
      <button @click="person.attr.name += '!!'">修改新增属性中的数据</button>
    </h3>

  </div>
</template>

<script>
import { ref, reactive, shallowReactive, shallowRef } from 'vue'
import { markRaw, readonly, shallowReadonly, toRaw, toRef } from '@vue/runtime-dom'

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
     * 这种方式只能转换reactive定义的数据，不能转换ref定义的数据
     */
    function showRow () {
      console.log ('123')
      console.log (toRaw (person))
    }

    /**
     * 使用这个方法可以向原来的对象中添加内容，并且这个内容就是响应式的，如果不希望这个是响应式的，可以使用
     * markRaw 将数据变成不是响应式的
     */
    function addAttr () {
      person.attr = markRaw ({
        name: '第一个属性',
        attr: '配置这个属性的基本测试数据',
      })
    }

    return {
      ...toRefs (person),
      num,
      showRow,
      addAttr,
      person,
    }
  },

}
</script>

<style lang="less" scoped></style>
