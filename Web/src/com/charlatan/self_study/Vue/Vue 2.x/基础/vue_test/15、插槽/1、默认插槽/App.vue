<!--
  ~ Time:2022/3/2 19:31 26
  ~ Name:App.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div class="div">
    <Category :items="arr1" class="item" title="列表1">
      <img alt="" class="img"
           src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wE9W?ver=bc8e">
    </Category>
    <Category :items="arr2" class="item" title="列表2"></Category>
    <Category :items="arr3" class="item" title="列表3"></Category>
  </div>
</template>

<script>
import Category from '@/components/Category'

export default {
  name: 'App',
  data () {
    return {
      arr1: [1, 1, 1, 1, 1, 1, 1],
      arr2: [2, 2, 2, 2, 2, 2, 2],
      arr3: [3, 3, 3, 3, 3, 3, 3],
    }
  },
  components: {
    Category,
  },
}
</script>

<style scoped>
.div {
  display: flex;
}

.item {
  background: #faebcc;
  margin: 20px;
  font-size: 50px;
}

.img {
  width: 500px;
}
</style>
