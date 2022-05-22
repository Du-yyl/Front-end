<!--
  ~ Time:2022/3/10 20:29 15
  ~ Name:ToplistRight.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="ToplistRight">
    <div id="top">
      <div class="div">
        <img :src="playListInform.imgUrl" alt="" class="img">
      </div>
      <div class="spans">
        <div class="span1">
          {{ playListInform.name }}
        </div>
        <div class="span2">
          {{ playListInform.updateTimeStr }}
          <span class="span3">
            {{ playListInform.updateTime }}
          </span>
        </div>
      </div>
    </div>
    <songList id="songList"></songList>
  </div>
</template>
<script>
import songList from '@/pages/Toplist/songList'
import axios from 'axios'

export default {
  name: 'ToplistRight',
  data () {
    return {
      playListInform: {
        imgUrl: '',
        title: '',
        playSongs: [],
        name: '',
      },
    }
  },
  components: {
    songList,
  },
  beforeCreate () {
    this.$bus.$on('sendSings', (value, updateTimeStr, updateTime) => {
      axios.get(value).then((value) => {
        this.playListInform.imgUrl = value.data.playlist.coverImgUrl
        this.playListInform.title = value.data.playlist.description
        this.playListInform.playSongs = value.data.playlist.trackIds
        this.playListInform.name = value.data.playlist.name
        this.playListInform.updateTime = updateTime
        this.playListInform.updateTimeStr = updateTimeStr
        this.$bus.$emit('updateSongs', this.playListInform.playSongs)
      })
    })
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

// -------ToplistRight----------
#ToplistRight {
  position: relative;
  top: 0;
  left: 0;

  #top {
    width: 100%;
    height: 17em;
    position: relative;

    .div {
      width: 9.5em;
      height: 9.5em;
      position: absolute;
      top: 3.5em;
      left: 3.5em;

      .img {
        width: 100%;
      }
    }

    .spans {
      width: 20em;
      height: 4em;
      position: absolute;
      top: 4.5em;
      left: 15em;

      .span1 {
        font-weight: 900;
        font-size: 1.3em;
      }

      .span2 {
        margin-top: 1em;
        margin-left: 2em;

        &:before {
          width: 1em;
          height: 1em;
          background: url("../../static/imgs/icon.png") no-repeat -1em -39.9em;
          background-size: 5em;
          display: block;
          content: '';
          position: absolute;
          left: .9em;
        }
      }
    }
  }
}
</style>
