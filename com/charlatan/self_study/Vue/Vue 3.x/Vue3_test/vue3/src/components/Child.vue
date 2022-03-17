<!--
  ~ Time:2022/3/17 11:41 47
  ~ Name:Child.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 3.x/Vue3_test/vue3/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Child">
    子组件
    <br>
  </div>
</template>

<script>

export default {
  name: 'Child',
  async setup () {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('成功了')
      }, 5000)
    })
  },
}
</script>

<style>
#Child {
  background: green;
  border: 10px solid bisque;
}
</style>
