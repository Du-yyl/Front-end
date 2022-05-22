<!--
  ~ Time:2022/3/10 19:35 24
  ~ Name:DiscoverRightShowSinger.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="DiscoverRightShowSinger">
    <div id="top">
      <div class="span1">
        入住歌手
      </div>
      <div class="span2">
        查看全部>
      </div>
    </div>

    <ul class="ul">
      <li v-for="singer in singers" :key="singer.id">
        <div class="div">
          <img :src="singer.imgUrl" alt="" class="img">
        </div>

        <div class="span1">
          {{ singer.name }}
        </div>
        <div class="span2">
          介绍
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DiscoverRightShowSinger',
  data () {
    return {
      singers: [],
    }
  },
  components: {},
  mounted () {
    axios.get('http://localhost:3000/top/artists?limit=10').then((value) => {
      for (let artist of value.data.artists) {
        this.singers.push({
          id: artist.id,
          name: artist.name,
          imgUrl: artist.img1v1Url,
        })
      }
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

// -------DiscoverRightShowSinger----------
#DiscoverRightShowSinger {
  #top {
    width: 100%;
    height: 3em;
    position: relative;
    top: 0;
    left: 0;
    border-bottom: 1px solid #cccccc;

    .span1 {
      width: 4em;
      font-weight: 900;
      height: inherit;
      display: block;
      line-height: 3em;
      padding-left: 1em;
    }

    .span2 {
      position: absolute;
      top: 0;
      right: 1em;
      height: inherit;
      line-height: 3em;
      cursor: pointer;

      &:hover:after {
        display: block;
        width: 4em;
        height: 1px;
        background: #000;
        content: '';
        position: absolute;
        top: 2.2em;
      }
    }
  }

  .ul {
    width: 100%;
    position: relative;
    border-top: 1px solid rgba(255, 0, 0, 0);

    li {
      width: 90%;
      height: 4.4em;
      margin: 5%;
      //margin: 5% 5% 0;
      position: relative;
      background: #fafafa;

      .div {
        width: 4.4em;
        height: inherit;

        .img {
          width: 100%;
          height: 100%;
        }
      }

      .span1 {
        position: absolute;
        font-weight: 900;
        top: .5em;
        left: 5em;
      }

      .span2 {
        position: absolute;
        top: 2.4em;
        left: 5em;
      }
    }
  }
}
</style>
