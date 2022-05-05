<!--
  ~ Time:2022/3/2 21:46 34
  ~ Name:count.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <h2>当前的和是：{{ sum }}</h2>
    &nbsp;<h2> 当前这个数字乘10的结果时：{{ calculate }}</h2>
    <h1>我是 {{ name }} ,我是{{ age }}</h1>
    <select v-model.number="num">
      <option :value=1 class="js-options-table">1</option>
      <option :value=2 class="js-options-table">2</option>
      <option :value=3 class="js-options-table">3</option>
    </select>
    &nbsp;
    <button class="btn btn-warning" @click="add(num)">+</button>
    &nbsp;
    <button class="btn btn-warning" @click="deadd(num)">-</button>
    &nbsp;
    <button class="btn btn-warning" @click="addOdd(num)">奇数再加</button>
    &nbsp;
    <button class="btn btn-warning" @click="addWait(num)">等会在加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'count',
  data () {
    return {
      num: 1,
    }
  },
  computed: {
    ...mapState ('count', ['sum', 'name', 'age']),
    ...mapGetters ('count', { calculate: 'calculate' }),
  },
  methods: {
    ...mapMutations ('count', {
      add: 'ADD',
      deadd: 'DEADD',
    }),

    ...mapActions ('count', ['addWait', 'addOdd']),
  },
  mounted () {
    console.log (this)
  },
}
</script>

<style scoped>

</style>
