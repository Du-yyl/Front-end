<!--
  ~ Time:2022/3/2 20:08 30
  ~ Name:App.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div class="div">
    <Category title="第一个" :items="arr1" class="item">
      <img slot="slot1"
           src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wE9W?ver=bc8e" alt=""
           class="img">
      <h2 slot="slot2">我要征用第二个插件</h2>
    </Category>
    <Category title="第二个" :items="arr2" class="item">
      <template v-slot:slot1>
        <h2>我要征用多个插槽</h2>
        <h2>我们几个是在同一个框架中</h2>
        <h2>我们使用的是template</h2>
        <h2>v-slot只能使用在template中</h2>
      </template>
    </Category>
    <Category title="第三个" :items="arr3" class="item"></Category>
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
