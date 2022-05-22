<!--
  ~ Time:2022/3/9 14:38 01
  ~ Name:DiscoverLeftShow.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="DiscoverLeftShow">
    <DiscoverLeftShowPlaylist id="DiscoverLeftShowPlaylist"></DiscoverLeftShowPlaylist>
    <DiscoverLeftShowAlbum id="DiscoverLeftShowAlbum"></DiscoverLeftShowAlbum>
    <DiscoverLeftShowToplist id="DiscoverLeftShowToplist"></DiscoverLeftShowToplist>
  </div>
</template>

<script>
import DiscoverLeftShowPlaylist from '@/components/DiscoverLeftShowPlaylist'
import DiscoverLeftShowAlbum from '@/components/DiscoverLeftShowAlbum'
import DiscoverLeftShowToplist from '@/components/DiscoverLeftShowToplist'

export default {
  name: 'DiscoverLeftShow',
  data () {
    return {}
  },
  components: {
    DiscoverLeftShowPlaylist,
    DiscoverLeftShowAlbum,
    DiscoverLeftShowToplist,
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
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

// -------DiscoverLeftShow----------
#DiscoverLeftShow {
  #DiscoverLeftShowPlaylist {
    position: relative;
  }

  #DiscoverLeftShowToplist {
    position: relative;
  }
}
</style>
