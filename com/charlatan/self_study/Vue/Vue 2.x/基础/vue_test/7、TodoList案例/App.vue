<!--
  ~ Time:2022/2/24 15:25 43
  ~ Name:App.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div class="div">
    <search :addObj="addObj"></search>
    <todos :Obj="tos" :removeObj="removeObj"></todos>
    <all :all="all" :lisNum="lisNum" :checkAll="checkAll" :removeAll="removeAll"></all>
  </div>
</template>

<script>
import search from '@/components/search'
import todos from '@/components/todos'
import all from '@/components/all'

export default {
  name: 'App',
  data () {
    return {
      tos: [
        { id: '001', value: '第一个', done: true },
        { id: '002', value: '第二个', done: true },
        { id: '003', value: '第三个', done: false },
        { id: '004', value: '第四个', done: true },
      ],
    }
  },
  computed: {
    all () {
      let num = 0
      this.tos.forEach(item => {
        num++
      })
      return num
    },
    lisNum () {
      let num = 0
      this.tos.forEach(item => {
        if (item.done) {
          num++
        }
      })
      return num
    },
  },
  components: {
    search, todos, all,
  },
  methods: {
    addObj (obj) {
      this.tos.unshift(obj)
    },
    removeObj (obj) {
      console.log(obj.id)
      this.tos = this.tos.filter(item => item.id !== obj.id)
      console.log(this.tos)
    },

    /**
     * 全选
     */
    checkAll (flag) {
      this.tos.forEach(item => {
        item.done = flag
      })
    },

    /**
     * 删除指定内容跟
     */
    removeAll () {
      this.tos = this.tos.filter(item => !item.done)
    },
  },

}
</script>

<style scoped>
.div {
  width: 600px;
  position: absolute;
  top: 100px;
  left: 200px;
  background: #e6f6fa;
  border-radius: 5px;
  border: 1px solid red;
  height: 500px;
}
</style>
