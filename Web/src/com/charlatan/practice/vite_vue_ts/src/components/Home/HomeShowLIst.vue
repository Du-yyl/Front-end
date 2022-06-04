<!--
  ~ Time:2022/6/2 12:17 42
  ~ Name:Carousel.vue
  ~ Path:src/components/HomeShowLIst
  ~ ProjectName:vite_vue_ts
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde :
  ~     c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<script setup lang="ts">
import { getters } from '../../store/modules/home/getters'
import { reactive } from 'vue'

let aMenu = reactive([{ name: '', img_url: '' }])

const props = defineProps({
  pro: {
    type: Object,
    required: true,
  },
})
props.pro.then(() => {
  for (let aMenu1 of getters.getAMenu())
    aMenu.push(aMenu1)
  aMenu.shift()
})

</script>

<template>
  <ul class="ul">
    <li class="li" v-for="(item,index) in aMenu" :key="index">
      <img class="img" :src="item.img_url" alt="">
    </li>
  </ul>
</template>

<style scoped lang="less">
.ul {
  width: 100vw;
  height: 6rem;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .li {
    width: 20vw;
    height: 20vw;

    .img {
      height: 17.6vw;
    }
  }
}
</style>
