<!--
  ~ Time:2022/3/9 17:56 36
  ~ Name:DiscoverLeftShowAlbum.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="DiscoverLeftShowAlbum">
    <div id="top">
      <div class="topLeft">
        新碟上架
      </div>
      <div class="more">
        更多
      </div>
    </div>
    <div class="showDiv">
      <div class="ulShow">
        <ul :style="hotLists" class="hotLists">
          <li v-for="list in albums" class="list">
            <div class="imgs">
              <img :src="list.imgUrl" alt="" class="img1">
              <div class="img2"></div>
            </div>
            <span class="span1">
              {{ list.albumName }}
            </span>
            <span class="span2">
              {{ list.artistName }}
            </span>
          </li>
        </ul>
      </div>
      <div class="btn leftBtn" @click="back"></div>
      <div class="btn rightBtn" @click="next"></div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import throttling from '@/tools/throttling'

export default {
  name: 'DiscoverLeftShowAlbum',
  data () {
    return {
      albums: [],

      hotLists: {
        left: '-99.7%',
        transition: 'all .7s cubic-bezier(0, 1.5, .6, 1)',
      },
    }
  },
  mounted () {
    axios.get('http://localhost:3000/album/list?limit=10').then((value) => {
      for (let product of value.data.products) {
        this.albums.push({
          id: product.albumId,
          albumName: product.albumName,
          artistName: product.artistName,
          imgUrl: product.coverUrl,
          toRout: '',
        })
      }
      this.albums = this.albums.concat(this.albums)
    })
  },
  methods: {
    back:
    /**
     *回到上一张，先对原先的数组进行拼接，将长度为10的数组，进行了复制。展示中间部分，这样能做到无论是前进还是后退
     * 都能正确的显示，然后通过改变整体的位置来进行操作内容的位置，
     */
        throttling((that) => {
          that.hotLists.left = '-.7%'
          setTimeout(() => {
            let forward = that.albums.splice(0, 5)
            let behind = that.albums
            that.albums = behind.concat(forward)
            that.hotLists.transition = ''
            that.hotLists.left = '-99.7%'
            setTimeout(() => {
              that.hotLists.transition = 'all .7s cubic-bezier(0, 1.5, .6, 1)'
            }, 700)
          }, 700)
        }, 1400),
    next: throttling((that) => {
      that.hotLists.left = '-198.7%'
      setTimeout(() => {
        let forward = that.albums.splice(0, 5)
        let behind = that.albums
        that.albums = behind.concat(forward)
        that.hotLists.transition = ''
        that.hotLists.left = '-99.7%'
        setTimeout(() => {
          that.hotLists.transition = 'all .7s cubic-bezier(0, 1.5, .6, 1)'
        }, 700)
      }, 700)
    }, 1400),
  },
}
</script>

<style lang="less" scoped>
// -------DiscoverLeftShowAlbum----------

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

#DiscoverLeftShowAlbum {
  padding-bottom: 2em;

  //user-select: none;
  // 顶部样式
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
        background: #ffffff url("../static/imgs/index.png")  -11em -7.7em no-repeat;
        content: "";
        display: block;
        position: absolute;
        top: .2em;
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
        background: #ffffff url("../static/imgs/index.png") 0 -15.8em;
        position: absolute;
        display: block;
        content: "";
        top: .4em;
        right: -1em;
      }
    }
  }

  // 热门推荐列表
  .showDiv {
    width: 95%;
    height: 13.4em;
    left: 2%;
    margin-top: 1em;
    position: relative;
    display: block;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
    overflow: hidden;

    .ulShow {
      width: 89.7%;
      left: 2em;
      height: 10em;
      position: absolute;
      top: 2em;
      overflow: hidden;

      .hotLists {
        //height: 6.8em;
        //width: 6.8em;
        position: absolute;
        display: flex;
        flex-wrap: nowrap;
        top: 0;

        .list {
          width: 7.25em;
          height: 7em;
          background: rgba(255, 255, 255, 0);
          margin: 0 .5em;

          .img1 {
            width: 6.5em;
            height: 6.5em;
            position: absolute;
            top: .2em;
          }

          .img2 {
            width: 8.25em;
            height: 7em;
            background: url("../static/imgs/coverall.png")  no-repeat -1em -44em;
            background-size: 29em;
          }

          .span1 {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 6em;
            display: block;
            left: .3em;
            position: relative;

          }

          .span2 {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 6em;
            display: block;
            left: .3em;
            position: relative;
          }
        }
      }
    }


    .btn {
      width: 1em;
      height: 2.2em;
      position: absolute;
      z-index: 9;
      top: 40%;
    }

    // 左按钮
    .leftBtn {
      left: .3em;
      background: url("../static/imgs/index.png") no-repeat -19.1em  -5.5em;
      background-size: 30em;
      cursor: pointer;

      &:hover {
        background: url("../static/imgs/index.png") no-repeat -20.6em  -5.5em;
        transition: all .7s cubic-bezier(0, 1.5, .6, 1);
        background-size: 30em;
      }
    }

    // 右按钮
    .rightBtn {
      right: .3em;
      background: url("../static/imgs/index.png") no-repeat -22.1em  -5.5em;
      background-size: 30em;
      cursor: pointer;
      transition: all .7s cubic-bezier(0, 1.5, .6, 1);

      &:hover {
        background: url("../static/imgs/index.png") no-repeat -23.6em  -5.5em;
        background-size: 30em;
      }
    }
  }
}
</style>
