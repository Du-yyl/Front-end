<!--
  ~ Time:2022/2/25 11:49 01
  ~ Name:App.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <Component1 :msg="msg" :chang="chang"></Component1>
    <hr>
    <Component2 @self="self" @self2="self2" @unbind="unbind" @click.native="show"></Component2>
  </div>
</template>

<script>
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'

export default {
  name: 'App',
  data () {
    return {
      msg: '我是第一个测试内容',
    }
  },
  methods: {
    chang () {
      this.msg = '我是替换的内容'
    },
    self () {
      console.log('我是self方法')
    },
    self2 () {
      console.log('这时self2方法')
    },
    unbind () {
      console.log('解绑方法')
    },
    show () {
      console.log('原生点击事件')
    },
  },
  components: {
    Component1,
    Component2,
  },
}
</script>

<style scoped>

</style>
