<!--
  ~ Time:2022/3/10 20:27 08
  ~ Name:Toplist.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Toplist">
    <keep-alive>
      <ToplistLeft id="ToplistLeft"></ToplistLeft>
    </keep-alive>
    <keep-alive>
      <ToplistRight id="ToplistRight"></ToplistRight>
    </keep-alive>
  </div>
</template>

<script>
import ToplistLeft from '@/pages/Toplist/ToplistLeft'
import ToplistRight from '@/pages/Toplist/ToplistRight'

export default {
  name: 'Toplist',
  data () {
    return {}
  },
  components: {
    ToplistLeft,
    ToplistRight,
  },
  beforeDestroy () {
    console.log('销毁开始')
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
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

// -------Toplist----------
#Toplist {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  max-width: 110em;

  #ToplistLeft {
    width: 15.3em;
    position: absolute;
    left: 20em;
    top: 0;
    border-right: 2px solid #dedede;
    border-left: 2px solid #dedede;
  }

  #ToplistRight {
    width: 47em;
    height: 40em;
    position: absolute;
    top: 0;
    left: 35.5em;
  }
}
</style>
