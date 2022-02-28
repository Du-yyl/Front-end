<!--
  ~ Time:2022/2/28 11:28 44
  ~ Name:AnimationLibrary.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/conpoments
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <button @click="isShow = !isShow">动画库切换</button>
    <transition
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">
        我是动画库切换
      </h1>
    </transition>

  </div>
</template>

<script>
// 引入第三方库
import 'animate.css'

export default {
  name: 'AnimationLibrary',
  data () {
    return {
      isShow: true,
    }
  },
  components: {},
}
</script>

<style scoped>

h1 {
  background: #c8e5bc;
}
</style>
