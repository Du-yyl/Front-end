<!--
  ~ Time:2022/2/25 17:29 06
  ~ Name:Component2.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h2>
      {{ msg }}
      <br>
      {{ num }}
    </h2>
    <button @click="chang">绑定的事件</button>
    <hr>
    <button @click="chang1">自定义事件</button>
    <hr>
    <button @click="chang2">解绑自定义事件</button>
    <hr>
    <button @click="chang3">销毁vc</button>
  </div>

</template>

<script>
export default {
  name: 'Component2',
  data () {
    return {
      msg: '我是第二个组件',
      num: 10,
    }
  },
  components: {},
  methods: {
    chang () {
      console.log ('加法调用')
      this.num++
    },
    chang1 () {
      // 触发事件
      this.$emit ('self')
      this.$emit ('self2')
    },
    chang2 () {
      // 解绑一个事件
      // this.$off('self')
      //  解绑多个事件
      // this.$off(['self', 'self2'])
      // 解绑所有事件
      this.$off ()
    },
    chang3 () {
      // 当vc销毁后，自定义的组件事件都会被销毁【因为这些事件是绑定在vc上的】
      // 【当vm被销毁时，自定义的组件和自定义事件都会失效，但是原生绑定的事件不受影响】
      this.$destroy ()
    },
  },

}
</script>

<style scoped>

</style>
