<!--
  ~ Time:2022/3/3 19:56 21
  ~ Name:addTo.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <input v-model.trim.lazy="name" placeholder="名字" type="text">
    <input v-model.trim.lazy="sex" placeholder="性别" type="text">
    <input v-model.trim.lazy.number="age" placeholder="年龄" type="number">
    <hr>
    <button class="btn btn-success" @click="add">添加一个人</button>
  </div>
</template>

<script>

export default {
  name: 'addTo',
  data () {
    return {
      name: '',
      sex: '',
      age: '',
    }
  },
  components: {},
  methods: {
    // 原始的完整写法
    add () {
      let obj = {
        name: this.name, sex: this.sex, age: this.age,
      }
      // 直接访问 mutations 中的方法
      // this.$store.commit('persons/ADDTO',obj)

      // 访问到的是 actions 中的方法
      this.$store.dispatch('persons/addTo', obj).then(() => {
        console.log('添加成功')
      }, () => {
        console.log('添加失败')
      })
    },
  },
}
</script>

<style scoped>

</style>



