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
        {{ msg.value }} --> <input type="text" name="" id="" placeholder="输入">
      </li>
    </ul>
    <div class="div" :style="{opacity}">
      我是文字内容
    </div>
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
      opacity: 1,
    }
  },
  components: {},
  beforeDestroy () {
    console.log('销毁开始')
    clearInterval(this.timer)
  },
  // 定时函数放在这里存在的问题： 因为要保留组件，所以组件不会消失，但是因为进行组件的切换时，组件已经不再显示，但是定时器仍然继续，所以存在效率问题
  mounted () {
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      this.opacity = this.opacity <= 0 ? 1 : this.opacity
    }, 10)
    console.log(this.$route.meta)
  },
  /**
   * 激活
   * 激活时触发能保证组件在显示的
   */
  activated () {
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      this.opacity = this.opacity <= 0 ? 1 : this.opacity
    }, 10)
  },
  /**
   * 失活
   */
  deactivated () {
    clearInterval(this.timer)
  },

}
</script>

<style scoped>
.li {
  color: green;
  width: 600px;
  position: relative;
}

.div {
  font-size: 30px;
  font-weight: 900;
}
</style>
