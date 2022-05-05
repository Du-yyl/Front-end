<!--
  ~ Time:2022/2/24 16:41 44
  ~ Name:all.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div class="divs">
    <input v-model="check" class="checkbox" type="checkbox" @change="checkAll(check)">
    <span>已完成 {{ lisNum }} / 全部 {{ all }}</span>
    <button v-show="check" @click="removeAll">删除</button>
  </div>
</template>

<script>
export default {
  name: 'all',
  data () {
    return {
      check: false,
    }
  },
  components: {},
  methods: {},
  props: {
    all: Number,
    lisNum: Number,
    checkAll: Function,
    removeAll: Function,
  },
}
</script>

<style lang="less" scoped>
.divs {
  width: 500px;
  height: 50px;
  background: #ace39d;
  position: relative;
  top: 50px;
  left: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-left: 10px;


  button {
    width: 50px;
    height: 30px;
    background: red;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 30px;
    position: relative;
    left: 200px;
  }

  .checkbox {
    width: 18px;
    height: 18px;
    padding-left: 40px;
  }
}
</style>
