<template>
  <div>
    <h2 ref="title">{{ name }}</h2>
    <button @click="showHtml">点击输出html</button>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {
      name: '测试内容',
    }
  },
  methods: {
    showHtml () {
      console.log (this.$refs.title)
    },
  },

}
</script>

<style scoped>

</style>
