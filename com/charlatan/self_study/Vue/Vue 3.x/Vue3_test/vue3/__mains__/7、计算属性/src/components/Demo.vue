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
    姓：<input v-model="person.firstName" name="" type="text">
    <br>
    名：<input v-model="person.subName" name="" type="text">
    <br>
    全名：<input v-model="person.name" name="" type="text">
    <br>
    <h2>
      全名：{{ person.name }}
    </h2>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { computed } from '@vue/runtime-dom'

export default {
  name: 'Demo',
  setup () {
    let person = reactive({
      firstName: '',
      subName: '',
    })

    // // Vue3中计算计算属性（简写）【这种方式是只读的】
    // person.name = computed(() => {
    //   return person.firstName + person.subName
    // })

    // 完整写法
    person.name = computed({
      get () {
        return person.firstName + '-' + person.subName
      },
      set (value) {
        let arr = value.split('-')
        person.firstName = arr[0]
        person.subName = arr[1]
      },
    })

    return {
      person,
    }
  },
  // // Vue2中写法，Vue3依然兼容，不过在Vue3中不推荐
  // computed: {
  //   name () {
  //     return this.person.firstName + this.person.subName
  //   },
  // },
}
</script>

<style lang="less" scoped></style>
