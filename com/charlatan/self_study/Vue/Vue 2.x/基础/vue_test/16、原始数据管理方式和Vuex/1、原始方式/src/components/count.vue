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
    &nbsp;
    <select v-model.number="num">
      <option :value=1 class="js-options-table">1</option>
      <option :value=2 class="js-options-table">2</option>
      <option :value=3 class="js-options-table">3</option>
    </select>
    &nbsp;
    <button class="btn btn-warning" @click="add">+</button>
    &nbsp;
    <button class="btn btn-warning" @click="deadd">-</button>
    &nbsp;
    <button class="btn btn-warning" @click="addOdd">奇数再加</button>
    &nbsp;
    <button class="btn btn-warning" @click="addWait">等会在加</button>
  </div>
</template>

<script>
export default {
  name: 'count',
  data () {
    return {
      sum: 0,
      num: 1,
    }
  },
  components: {},
  methods: {
    add () {
      this.sum += this.num
    },
    deadd () {
      this.sum -= this.num
    },
    addOdd () {
      if ( this.sum % 2 !== 0 ) {
        this.add ()
      }
    },
    addWait () {
      setTimeout (this.add, 2000)
    },
  },
}
</script>

<style scoped>

</style>
