<!--
  ~ Time:2022/3/9 14:38 13
  ~ Name:DiscoverRightShow.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="DiscoverRightShow">
    <DiscoverRightShowSinger id="DiscoverRightShowSinger"></DiscoverRightShowSinger>
  </div>
</template>

<script>
import DiscoverRightShowSinger from '@/components/DiscoverRightShowSinger'

export default {
  name: 'DiscoverRightShow',
  data () {
    return {}
  },
  components: {
    DiscoverRightShowSinger,
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font: 500 15px/1.3em YouYuan;
  text-decoration: none;
}

a {
  &:link {
    color: #b700ff;
  }

  &:visited {
    color: #0066ff;
  }

  &:hover {
    color: #FF00FF;
  }

  &:active {
    color: #ff8800;
  }
}

ul:after {
  content: "";
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;

  li {
    cursor: pointer;
    position: relative;
    list-style: none;
  }
}

// -------DiscoverRightShow----------
#DiscoverRightShow {

}
</style>
