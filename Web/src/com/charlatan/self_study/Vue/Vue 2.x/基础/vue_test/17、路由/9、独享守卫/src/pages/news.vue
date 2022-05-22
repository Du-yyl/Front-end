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
    <ul class="ul">
      <li v-for="now in news" :key="now.id" class="li">
        <router-link
            :to="{
          name:'now',
          params:{
            id:now.id,
            title:now.value
          }
            }"
            active-class="action"
        >
          {{ now.value }}
        </router-link>
        <br>
        <button class="btn btn-success btns" @click="pushShow(now)">push查看</button>
        <button class="btn btn-success btns" @click="replaceShow(now)">replace查看</button>
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
  methods: {
    pushShow (now) {
      this.$router.push({
        name: 'now',
        params: {
          id: now.id,
          title: now.value,
        },
      })
    },
    replaceShow (now) {
      this.$router.replace({
        name: 'now',
        params: {
          id: now.id,
          title: now.value,
        },
      })
    },
  },
  mounted () {
    console.log(this.$route.meta)
  },
}
</script>

<style scoped>
.ul {
  background: #e7caca;
  width: 300px;
  display: flex;
  height: 100px;
  flex-wrap: wrap;
}

.li {
  color: red;
  height: 30px;
}

.show {
  position: relative;
  top: -100px;
  left: 600px;
  width: 200px;
}

.btns {
  position: relative;
  top: 200px;
  margin: 5px;
}
</style>
