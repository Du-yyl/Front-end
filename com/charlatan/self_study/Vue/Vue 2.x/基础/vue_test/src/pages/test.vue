<!--
  ~ Time:2022/3/13 15:02 56
  ~ Name:test.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/pages
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="test">

    <ul>
      <li
          v-for="home in homes"
          :key="home.id"
          class="list-group-item li"
      >
        <router-link
            active-class="action"
            :to="{
          path:'/home/' + home.value,
      }"
        >
          {{ home.value }}
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      homes: [
        { id: '001', value: 'mag' },
        { id: '002', value: 'news' },
      ],
    }
  },
  components: {},
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
