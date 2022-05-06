<!--
  ~ Time:2022/3/2 15:17 29
  ~ Name:users.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <ul>
      <li v-for="i in arr" :key="i.id">
        <br>
        <img :src="i.img" alt="" class="img-circle img">
        <br>
        <span class="span">{{ i.username }}</span>
      </li>
    </ul>
    <h1 v-if="!arr.length">{{ str }}</h1>

  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      arr: [],
      str: '欢迎',
    }
  },
  components: {},
  mounted () {
    this.$bus.$on('wait', (str, is = false) => {
      if (is) {
        this.str = str
        this.arr = []
      } else {
        this.str = '加载中'
      }
    })
    this.$bus.$on('sends', (data) => {
      this.arr = data
    })

  },
  beforeDestroy () {
    this.$bus.$off('sends')
  },
}
</script>

<style scoped>
li {
  list-style: none;
  float: left;
  margin: 30px;
  position: relative;
}

.span {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  margin: 5px auto auto;
}

.img {
  width: 200px;
}
</style>
