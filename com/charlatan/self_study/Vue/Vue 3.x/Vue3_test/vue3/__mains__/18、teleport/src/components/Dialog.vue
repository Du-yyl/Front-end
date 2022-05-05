<!--
  ~ Time:2022/3/17 14:45 01
  ~ Name:Dialog.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 3.x/Vue3_test/vue3/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Dialog">
    <button @click="isShow = true">点击弹窗</button>

    <!--    这里除了使用本来有的内容，也能通过自定义的ID进行定位-->
    <teleport to="body">

      <div v-show="isShow" class="dialog">
        <h3>
          弹窗内容
        </h3>
        <button @click="isShow = false">关闭弹窗</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Dialog',
  setup () {
    let isShow = ref (false)

    return {
      isShow,
    }
  },
  components: {},
}
</script>

<style lang="less" scoped>
div {
  background: bisque;
}
</style>
