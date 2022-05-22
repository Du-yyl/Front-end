<!--
  ~ Time:2022/2/28 11:08 36
  ~ Name:AnimationOfMultipleElements.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/conpoments
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <transition-group>
      <h2 v-show="!isShow" key="1">我是多个内容列表-1</h2>
      <hr key="4">
      <h2 v-show="isShow" key="2">我是多个内容列表-2</h2>
      <hr key="5">
      <h2 v-show="!isShow" key="3">我是多个内容列表-3</h2>
    </transition-group>
    <hr>
    <button @click="isShow = !isShow">显示/隐藏</button>
  </div>
</template>

<script>
export default {
  name: 'AnimationOfMultipleElements',
  data () {
    return {
      isShow: true,
    }
  },
  components: {},
}
</script>

<style scoped>
h2 {
  background: #faebcc;
  margin: 10px 10px;
}

.v-enter, .v-leave-to {
  transform: translateX(-100%);
}

.v-enter-active, .v-leave-active {
  transition: all .6s ease;
}

.v-enter-to, .hello-leave {
  transform: translateX(0);
}
</style>
