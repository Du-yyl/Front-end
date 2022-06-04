<!--
  主页面
-->
<script setup lang="ts">
import Search from './Search.vue'
import Carousel from './Carousel.vue'
import HomeShowLIst from './HomeShowLIst.vue'
import HomeShow from './HomeShow.vue'
import { useStore } from 'vuex'
import ThreeMusketeers from './ThreeMusketeers.vue'

const store = useStore()

let pro = new Promise((resolve, reject) => {
  let obj = {
    resolve,
    reject,
  }
  store.dispatch('home/setHomeData', obj)
})

</script>

<template>
  <Search :pro="pro" class="Search"></Search>
  <Carousel :pro="pro" class="Carousel"></Carousel>
  <HomeShowLIst :pro="pro" class="HomeShowLIst"></HomeShowLIst>
  <HomeShow :pro="pro" class="HomeShow"></HomeShow>
  <ThreeMusketeers :pro="pro" class="ThreeMusketeers"></ThreeMusketeers>
</template>

<style scoped lang="less">
.Search {
  position: fixed;
  top: 0;
  z-index: 10;
}

.Carousel {
  position: relative;
  top: 0;
  z-index: 1;
}

.HomeShowLIst {
  position: relative;
  top: -.24rem;
}

.HomeShow {
  position: relative;
  top: -1.68rem;
}

.ThreeMusketeers {
  position: relative;
  top: -1.68rem;
}
</style>
