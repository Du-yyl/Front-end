<!--
  ~ Time:2022/2/26 13:56 58
  ~ Name:Component1.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <!--    <transition>-->
    <!--      <div v-show="isShow" class="div show">-->
    <!--        <h2 >我是测试内容</h2>-->
    <!--      </div>-->
    <!--    </transition>-->
    <transition appear="appear" name="me">
      <div v-show="isShow" class="div show">
        <h2>我是测试内容</h2>
      </div>
    </transition>
    <hr>
    <button @click="showHidden">显示/隐藏</button>
  </div>
</template>

<script>
export default {
  name: 'animationEffect',
  data () {
    return {
      isShow: true,
    }
  },
  components: {},
  methods: {
    showHidden () {
      console.log ('我是测试文字')
      this.isShow = !this.isShow
    },
  },
}
</script>

<style scoped>
.div {
  width: 700px;
  height: 100px;
  background: #e8c796;
  display: flex;
  align-items: center;
}

/* .v-enter-active { */
/*   animation: showHidden 1s ease; */
/* } */
/*  */
/* .v-leave-active { */
/*   animation: showHidden 1s ease reverse; */
/* } */

.me-enter-active {
  animation: showHidden 1s ease;
}

.me-leave-active {
  animation: showHidden 1s ease reverse;
}


@keyframes showHidden {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
