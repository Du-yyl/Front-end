<!--
  ~ Time:2022/3/3 19:38 03
  ~ Name:person.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h2>第一个人的名字是：{{ $store.getters['personsOptions/getFirstName'] }}</h2>
    <ul>
      <li v-for="person in persons" :key="person.id">
        姓名：{{ person.name }} --- 年龄：{{ person.age }}  --- 性别：{{ person.sex }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'person',
  data () {
    return {}
  },
  components: {},
  computed: {
    ...mapState('persons',['persons']),
  },
}
</script>

<style scoped>

</style>
