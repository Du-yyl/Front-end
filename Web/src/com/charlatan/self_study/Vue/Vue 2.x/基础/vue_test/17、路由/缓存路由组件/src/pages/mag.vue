<!--
  ~ Time:2022/3/4 19:40 54
  ~ Name:mag.vue
  ~ Path:Vue 2.x/基础/vue_test/src/pages
  ~ ProjectName:Vue
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <ul style="display: flex;width: 300px ;flex-wrap: wrap;">
      <li v-for="msg in msgs" :key="msg.id" class="li">
        {{ msg.value }} --> <input id="" name="" placeholder="输入" type="text">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mag',
  data () {
    return {
      msgs: [
        { id: '001', value: '第一个msg信息' },
        { id: '002', value: '第二个msg信息' },
        { id: '003', value: '第三个msg信息' },
      ],
    }
  },
  components: {},
  beforeDestroy () {
    console.log('销毁开始')
  },
}
</script>

<style scoped>
.li {
  color: green;
  width: 600px;
  /* background:#000; */
  position: relative;
}
</style>
