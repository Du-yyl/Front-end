<!--
  ~ Time:2022/3/10 10:09 18
  ~ Name:DiscoverLeftShowToplist.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="DiscoverLeftShowToplist">
    <div id="top">
      <div class="topLeft">
        榜单
      </div>
      <div class="more">
        更多
      </div>
    </div>
    <div id="lists">

      <DiscoverLeftShowToplistSon
          v-for="(list,index) in lists"
          :key="index"
          :list="list"
          class="DiscoverLeftShowToplistSon"
      ></DiscoverLeftShowToplistSon>

    </div>
  </div>
</template>

<script>
import DiscoverLeftShowToplistSon from '@/components/DiscoverLeftShowToplistSon'
import axios from 'axios'

export default {
  name: 'DiscoverLeftShowToplist',
  data () {
    return {
      lists: [],
    }
  },
  components: {
    DiscoverLeftShowToplistSon,
  },
  mounted () {
    axios.get('http://localhost:3000/toplist?limit=3').then((value) => {
      let values = value.data.list.slice(0, 3)
      for (let i = 0; i < values.length; i++) {
        let id = value.data.list[i].id
        let name = value.data.list[i].name
        let imgUrl = value.data.list[i].coverImgUrl
        axios.get('http://localhost:3000/playlist/track/all?id=' + id + '&limit=10').then((value) => {
          this.lists.push({
            id,
            name,
            imgUrl,
            soars: [],
          })
          for (let song of value.data.songs) {
            this.lists[i].soars.push({
              name: song.name,
              author: song.ar[0].name,
              imgUrl: song.al.picUrl,
              id,
            })
          }
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

// -------DiscoverLeftShowToplist----------
#DiscoverLeftShowToplist {
  position: relative;
  padding-bottom: 5em;
  border-bottom: 2px solid #b9b9b9;
  margin-bottom: 5em;

  #top {
    width: 90%;
    height: 4em;
    background: #ffffff;
    position: relative;
    top: 0;
    left: 5%;
    border-bottom: 2px solid #c10d0c;

    .topLeft {
      width: 5em;
      height: 4em;
      font-size: 1.4em;
      position: absolute;
      top: .8em;
      left: 1em;

      &:before {
        width: 1em;
        height: 1em;
        background: url("../static/imgs/index.png")  -11.2em -7.8em no-repeat;
        background-size: 20em;
        content: "";
        display: block;
        position: absolute;
        top: .1em;
        left: -1em;
      }
    }

    .more {
      position: absolute;
      top: 1em;
      height: 2em;
      right: 4em;
      width: 2em;
      background: #ffffff;
      line-height: 2em;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid #1c1c1c;
        color: #181818;
      }

      &:after {
        width: .8em;
        height: 1em;
        background: url("../static/imgs/index.png") 0 -17.5em;
        background-size: 30em;
        position: absolute;
        display: block;
        content: "";
        top: .6em;
        right: -1em;
      }
    }
  }

  #lists {
    width: 90%;
    position: relative;
    left: 5%;
    top: 2em;
    height: 30em;
    border: 2px solid #d2d2d2;
    display: flex;
    flex-wrap: nowrap;

    .DiscoverLeftShowToplistSon {
      position: relative;
    }
  }
}
</style>
