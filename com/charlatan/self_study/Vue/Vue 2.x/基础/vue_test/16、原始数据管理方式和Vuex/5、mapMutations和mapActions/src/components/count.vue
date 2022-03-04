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
      <option class="js-options-table" :value=1>1</option>
      <option class="js-options-table" :value=2>2</option>
      <option class="js-options-table" :value=3>3</option>
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
    ...mapState(['sum', 'name', 'age']),
    ...mapGetters({
      calculate: 'calculate',
    }),
  },
  methods: {
    // add () {
    // 因为逻辑业务简单，直接联系 mutations
    // this.$store.dispatch('add', this.num)
    //   this.$store.commit('ADD', this.num)
    // },
    // deadd () {
    //   this.$store.commit('DEADD', this.num)
    // },

    // 这里使用这种形式的时候，在调用的时候不传参数，但是生成的函数中是会传入一个参数的，如果不指定，那么就会把event传入进去，这时如果再进行其他操作就会出现错误
    // 解决方法：在调用的时候传入参数，并指定参数的内容
    ...mapMutations({
      add: 'ADD',
      deadd: 'DEADD',
    }),

    // addOdd () {
    //   this.$store.dispatch('addOdd', this.num)
    // },
    // addWait () {
    //   this.$store.dispatch('addWait', this.num)
    // },

    ...mapActions(['addWait', 'addOdd']),
  },
  mounted () {
    console.log(this)
  },
}
</script>

<style scoped>

</style>
