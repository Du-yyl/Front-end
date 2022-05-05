<!--
  ~ Time:2022/3/2 15:17 20
  ~ Name:search.vue
  ~ Path:Web/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <span>开始搜索</span>
    <br>
    <br>
    <input id="input" v-model.trim.lazy='value' name="" placeholder="点击开始搜索" type="text">
    &nbsp;&nbsp;
    <button class="btn btn-warning" @click="search">搜索</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search',
  data () {
    return {
      value: '',
    }
  },
  components: {},
  methods: {
    search () {
      if ( this.value !== '' ) {
        this.$bus.$emit ('wait', '', false)
        let userArr = []
        console.log ('开始搜索', this.value)
        axios.get ('https://api.github.com/search/users?q=' + this.value).then ((res) => {
          for ( let item of res.data.items ) {
            userArr.push ({
              img: item.avatar_url,
              id: item.id,
              username: item.login,
            })
          }
          this.$bus.$emit ('sends', userArr)
        }, (err) => {
          this.$bus.$emit ('wait', err, true)
          console.log (err)
        })
      }
    },
  },
}
</script>

<style scoped>

</style>
