<!--
  ~ Time:2022/2/26 9:36 06
  ~ Name:Component1.vue
  ~ Path:Web代码/src/com/charlatan/self_study/Vue/Vue 2.x/基础/vue_test/src/components
  ~ ProjectName:WWW
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <div>我是第一个模板，接受的数据： {{ msg }}</div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'Component1',
  data () {
    return {
      msg: '',
    }
  },
  mounted () {
    this.pubId = pubsub.subscribe ('sends', (infoName, info) => {
      console.log ('有人发布信息的')
      console.log (info)
      this.msg = info
    })
  },
  beforeDestroy () {
    // 取消订阅【根据订阅时的ID进行取消订阅】
    pubsub.unsubscribe (this.pubId)
  },
}
</script>

<style scoped>

</style>
