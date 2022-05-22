<!--
  ~ Time:2022/3/4 17:33 37
  ~ Name:home.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h1>
      我是home中的内容
    </h1>

    <ul>
      <li
          v-for="home in homes"
          :key="home.id"
          class="list-group-item li"
      >
        <router-link :to="'/home/' + home.value" active-class="action">
          {{ home.value }}
        </router-link>
      </li>

    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import mag from '@/pages/mag'
import news from '@/pages/news'

export default {
  name: 'home',
  data () {
    return {
      homes: [
        { id: '001', value: 'mag' },
        { id: '002', value: 'news' },
      ],
    }
  },
  components: {
    mag,
    news,
  },
}
</script>

<style scoped>
.li {
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  margin: 30px;
  background: #ffa600;
}
</style>
