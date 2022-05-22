<!--
  ~ Time:2022/3/8 19:03 06
  ~ Name:Discover.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="Discover">
    <DiscoverCarousel id="DiscoverCarousel"></DiscoverCarousel>
    <div id="download">
      <div class="bgImg">
        <img alt="" src="../static/imgs/download.png">
      </div>
      <span class="downSpan">
        PC 安卓 iPhone WP iPad Mac 六大客户端
      </span>
    </div>
    <DiscoverLeftShow id="DiscoverLeftShow"></DiscoverLeftShow>
    <DiscoverRightShow id="DiscoverRightShow"></DiscoverRightShow>
  </div>
</template>

<script>
import DiscoverCarousel from '@/components/DiscoverCarousel'
import DiscoverLeftShow from '@/components/DiscoverLeftShow'
import DiscoverRightShow from '@/components/DiscoverRightShow'

export default {
  name: 'Discover',
  data () {
    return {}
  },
  components: {
    DiscoverCarousel,
    DiscoverLeftShow,
    DiscoverRightShow,
  },
}
</script>

<style lang="less" scoped>
#Discover {
  #DiscoverCarousel {
    position: absolute;
    top: 0;
    left: 0;
  }
}

#download {
  width: 16em;
  height: 17.9em;
  position: absolute;
  background: #000;
  top: 0;
  z-index: 11;
  right: 20em;

  .bgImg {
    width: 100%;
    height: inherit;
    overflow: hidden;
    cursor: pointer;
  }

  .downSpan {
    font-size: .8em;
    position: absolute;
    bottom: 1em;
    z-index: 13;
    color: #838383;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
  }
}

// 推荐页左边展示区域
#DiscoverLeftShow {
  position: absolute;
  //height: 30em;
  top: 18em;
  width: 45.7em;
  background: #ffffff;
  left: 20em;
  border-right: 2px solid #d7d7d7;
  border-left: 2px solid #b9b9b9;
}

//推荐页右边展示区域
#DiscoverRightShow {
  position: absolute;
  top: 19.2em;
  width: 16.79em;
  right: 21.35em;
  z-index: 99999999;
  border-right: 2px solid #d7d7d7;
}
</style>
