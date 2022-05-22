<!--
  ~ Time:2022/3/4 19:41 03
  ~ Name:news.vue
  ~ Path:Vue 2.x/基础/vue_test/src/pages
  ~ ProjectName:Vue
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div>
    <ul>
      <li v-for="now in news" :key="now.id" class="li">
        <!--        路由携带参数，to的字符串写法-->
        <!--        <router-link-->
        <!--            :to="'/home/news/' + now.link + '?id=' + now.id + '&title=' + now.value"-->
        <!--            active-class="action"-->
        <!--        >-->
        <!--          {{ now.value }}-->
        <!--        </router-link>-->


        <!--        to的对象写法-->
        <router-link
            :to="{
          path:'/home/news/' + now.link,
          query:{
            id:now.id,
            title:now.value,
          }
            }"
            active-class="action"
        >
          {{ now.value }}
        </router-link>
      </li>
    </ul>
    <router-view class="show">

    </router-view>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      news: [
        { id: '001', value: '第一个news信息', link: 'now' },
        { id: '002', value: '第二个news信息', link: 'now' },
        { id: '003', value: '第三个news信息', link: 'now' },
      ],
    }
  },
  components: {},
}
</script>

<style scoped>
.li {
  color: red;
}

.show {
  position: relative;
  top: -100px;
  left: 600px;
  width: 200px;
}
</style>
