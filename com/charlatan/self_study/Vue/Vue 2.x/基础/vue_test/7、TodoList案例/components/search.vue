<!--
  ~ Time:2022/2/24 15:35 37
  ~ Name:search.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <input v-model:value="value" class="search" placeholder="输入内容开始搜索" type="search" @keydown.enter="add">
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: 'search',
  data () {
    return {
      value: '',
    }
  },
  methods: {
    add () {
      let value = this.value.trim ()
      if ( value === '' ) {
        console.log ('请输入内容')
        this.value = ''
      } else {
        this.addObj ({ id: nanoid (), value, done: false })
        this.value = ''
      }
    },
  },
  components: {},
  props: {
    addObj: Function,
    // all: Number,
  },
}
</script>

<style lang="less" scoped>
.search {
  width: 400px;
  height: 50px;
  border-radius: 5px;
  position: relative;
  top: 20px;
  left: 80px;
  outline: none;

  &:focus {
    box-shadow: 0 0 3px 3px #bcc3ce;
  }

  &::placeholder {
    padding-left: 5px;
  }
}
</style>
