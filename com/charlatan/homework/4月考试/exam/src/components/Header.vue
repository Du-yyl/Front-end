<!--
  ~ Time:2022/4/15 14:41 53
  ~ Name:Header.vue
  ~ Path:src/components
  ~ ProjectName:exam
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Header">
    <label for="header-btn" id="heard-label">
      <input
          id="header-btn"
          v-model="isChecked"
          @change="handleChange($event)"
          name=""
          type="checkbox">
      全选
    </label>
    <span id="span-1">商品</span>
    <span id="span-2">单价</span>
    <span id="span-3">数量</span>
    <span id="span-4">小计</span>
    <span id="span-5">操作</span>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'Header',
  data () {
    return {
      isChecked: false,
    }
  },
  methods: {
    handleChange (event) {
      pubsub.publish('changeAll', event.target.checked)
    },
  },
  mounted () {
    pubsub.subscribe('change', (msg, { num, allNum }) => {
      console.log(num, allNum)
      num === allNum ? this.isChecked = true : this.isChecked = false
    })

  },
  components: {},
}
</script>

<style scoped lang="less">

</style>
