<!--
  ~ Time:2022/3/14 12:13 53
  ~ Name:song.vue
  ~ Path:music.163/src/pages/song
  ~ ProjectName:NetEase
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="song">

    <div class="imgDiv">
      <img :src="song.imgUrl" alt="" class="img">
    </div>

    <div class="head">
      <div class="mainTitle">
        {{ song.name }}
      </div>
      <div class="singer">
        歌手：
        <span class="sing">
          {{ song.singer }}
        </span>
      </div>
    </div>

    <audio autoplay="autoplay" controls="controls" loop="loop">
      <source :src=song.musicUrl type="audio/mpeg">
    </audio>

    <button class="btn">播放</button>
    <div class="lyrics">
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <p class="spans">我是测试的例子</p>
      <div class="expand">展开</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'song',
  data () {
    return {
      song: {
        name: '',
        id: '',
        imgUrl: '',
        singer: '',
        musicUrl: '',
      },
    }
  },
  components: {},
  mounted () {
    axios.get('http://localhost:3000/song/url?id=' + this.$route.query.id).then((value) => {
      this.musicUrl = value.data.data[0].url
    })
    axios.get('http://localhost:3000/song/detail?ids=' + this.$route.query.id).then((value) => {
      this.song.name = value.data.songs[0].name
      this.song.singer = value.data.songs[0].ar[0].name
      this.song.imgUrl = value.data.songs[0].al.picUrl
      this.song.id = value.data.songs[0].id
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

// -------song----------
#song {
  position: absolute;
  top: 0;

  .imgDiv {
    width: 14em;
    height: 14em;
    background: url("../../static/imgs/coverall.png")  -59em  -38em;
    background-size: 25em;
    position: absolute;
    display: block;
    top: 3em;
    left: 3em;
    content: '';
    border-radius: 50%;

    .img {
      width: 100%;
    }
  }

  .head {
    width: 30em;
    height: 10em;
    background: #cc9b9b;
    position: absolute;
    top: 5em;
    left: 18em;

    .mainTitle {
      width: 15rem;
      height: 4rem;
      background: #dad7d7;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 2em;
      text-align: center;
    }

    .singer {
      width: 10em;
      height: 4em;
      background: #dcd3d3;
      position: absolute;
      top: 4em;
      left: 1em;

      .sing {
        color: #0c73c2;
      }
    }

    .album {
      width: 10em;
      height: 4em;
      background: #dcd3d3;
      position: absolute;
      top: 6em;
      left: 1em;

      span {
        color: #0c73c2;
      }
    }
  }

  .lyrics {
    background: #fad5d5;
    position: absolute;
    top: 15em;
    left: 19em;
    height: 20em;

    .expand {
      width: 4em;
      height: 2em;
      background: #e0abab;
      position: absolute;
      text-align: center;
      line-height: 2em;
      cursor: pointer;
    }
  }
}
</style>
