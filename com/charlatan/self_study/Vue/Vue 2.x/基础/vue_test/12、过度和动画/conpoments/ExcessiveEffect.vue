<!--
  ~ Time:2022/2/28 10:17 21
  ~ Name:Component2.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/conpoments
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <button @click=" isShow = !isShow">显示\隐藏</button>
    <hr>
    <transition>
      <h2 v-show="isShow">
        我是过度效果的例子
      </h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ExcessiveEffect',
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
  background: #c8e5bc;
}

/*  进入的起点 */
/* 进入的起点和离开的终点，用相同的代码 */
.v-enter, .v-leave-to {
  transform: translateX(-100%);
}

/*  进入的过程中 */
/* 定义进入动画和移出动画要配置的属性 */
.v-enter-active, .v-leave-active {
  transition: all .6s ease;
}

/*  进入的终点 */
/* 进入的重点和结束的起点，使用同一个代码 */
.v-enter-to, .hello-leave {
  transform: translateX(0);
}


</style>
