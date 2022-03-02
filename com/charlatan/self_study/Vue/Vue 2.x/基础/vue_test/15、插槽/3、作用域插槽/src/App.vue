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
    <Category title="数据" class="item">
      <template scope="arr">
        <ul class="ul">
          <li class="li" v-for="item in arr.arr1">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category title="数据" class="item">
      <template scope="arr">
        <ol style="color: red" class="ul">
          <li class="li" v-for="item in arr.arr1">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category title="数据" class="item">
      <template slot-scope="arr">
        <ul class="ul">
          <li class="li" v-for="item in arr.arr1">{{ item }}</li>
        </ul>
      </template>
    </Category>

  </div>
</template>

<script>

import Category from '@/components/Category'

export default {
  name: 'App',
  data () {
    return {}
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
