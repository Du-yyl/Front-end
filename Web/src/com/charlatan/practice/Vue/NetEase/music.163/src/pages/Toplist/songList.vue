<!--
  ~ Time:2022/3/11 16:34 08
  ~ Name:songList.vue
  ~ Path:src/pages/Toplist
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="songList">
    <h3>
      歌曲列表
    </h3>
    <table class="table">
      <thead class="thead">
      <tr>
        <th class="th1"></th>
        <th class="th2">&nbsp;标题</th>
        <th class="th4">&nbsp;歌手</th>
      </tr>
      </thead>
      <tr
          v-for="(list,index) in lists"
          :key="list.id"
          class="tr"
          @click="playMusic(list.id)"
          @mouseenter="list.show = true"
          @mouseleave="list.show = false">
        <td class="td1">
          <span class="serial">{{ index + 1 }}</span>

          <!--          <div class="up">-->
          <!--            <div class="up"></div>-->
          <!--            <span class="span">-->
          <!--              2-->
          <!--          </span>-->
          <!--          </div>-->

          <!--          <div class="down">-->
          <!--            <div class="down"></div>-->
          <!--            <span class="span">-->
          <!--              2-->
          <!--            </span>-->
          <!--          </div>-->

          <div class="flat">
            <div class="flat"></div>
            <span class="span">
              0
            </span>
          </div>

          <!--          <div class="new"></div>-->

        </td>
        <td class="td2">
          <div class="div">
            <img
                v-lazy="list.imgUrl"
                :class="{imgs:list.show}"
                alt=""
                class="img"/>
          </div>
          <div class="span">
            <router-link :to="{
              path:'song',
              query:{
                id:list.id
              }
            }">
              }
              {{ list.songName }}
            </router-link>
          </div>
        </td>
        <td class="td4">
          {{ list.authorName }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'songList',
  data () {
    return {
      lists: [],
    }
  },
  methods: {
    playMusic (id) {
      this.$bus.$emit('playMus', id)
    },
  },
  beforeCreate () {
    this.$bus.$on('updateSongs', (songs) => {
      this.lists = []
      for (let song of songs) {
        axios.get('http://localhost:3000/song/detail?ids=' + song.id).then((value) => {
          this.lists.push({
            songName: value.data.songs[0].name,
            id: value.data.songs[0].id,
            authorName: value.data.songs[0].al.name,
            imgUrl: value.data.songs[0].al.picUrl,
            show: false,
          })
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

// 默认的样式
a:link {
  color: #000000;
  text-decoration: none;
}

a:visited {
  color: #000000;
}

a:hover {
  color: #494848;
}

a:active {
  color: #e35169;
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

// -------songList----------
#songList {
  h3 {
    font-weight: 100;
  }

  .table {
    border-top: 2px solid #c20c0c;
    margin-top: 1em;

    .thead {

      .th1 {
        width: 5em;
        text-align: left;
        border-bottom: 1px solid #c5bebe;
        padding: 1em;
      }

      .th2 {
        width: 27em;
        text-align: left;
        border-bottom: 1px solid #c5bebe;
        border-left: 1px solid #c5bebe;
      }

      .th3 {
        width: 5em;
        text-align: left;
        border-bottom: 1px solid #c5bebe;
        border-left: 1px solid #c5bebe;
      }

      .th4 {
        width: 10em;
        text-align: left;
        border-bottom: 1px solid #c5bebe;
        border-left: 1px solid #c5bebe;
      }
    }

    .tr {
      position: relative;

      .td1 {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        top: .5em;

        .serial {
          width: 3em;
          height: 3em;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        // 榜单提升
        .up {
          display: flex;
          flex-wrap: nowrap;
          position: relative;

          .up {
            width: .4em;
            height: 1em;
            background: url("../../static/imgs/icon.png") no-repeat -4.3em -17.5em;
            background-size: 5em;
            position: absolute;
            top: 1em;
            left: 1em;
          }

          .span {
            display: block;
            position: absolute;
            left: 1.5em;
            top: 1em;
            color: #d33a31;
          }
        }

        // 榜单下降
        .down {
          display: flex;
          flex-wrap: nowrap;
          position: relative;

          .down {
            width: .4em;
            height: 1em;
            background: url("../../static/imgs/icon.png") no-repeat -4.3em -18.7em;
            background-size: 5em;
            position: absolute;
            top: 1em;
            left: 1em;
          }

          .span {
            display: block;
            position: absolute;
            left: 1.5em;
            top: 1em;
            color: #d33a31;
          }
        }

        // 名次不变
        .flat {
          display: flex;
          flex-wrap: nowrap;
          position: relative;

          .flat {
            width: .4em;
            height: 1em;
            background: url("../../static/imgs/icon.png") no-repeat -4.3em -15.7em;
            background-size: 5em;
            position: absolute;
            top: 1em;
            left: 1em;
          }

          .span {
            display: block;
            position: absolute;
            left: 1.5em;
            top: 1em;
            color: #999999;
          }
        }

        // 新歌
        .new {
          width: 1.4em;
          height: 1em;
          position: absolute;
          top: 1em;
          left: 4em;
          background: url("../../static/imgs/icon.png") no-repeat -3.8em -16.7em;
          background-size: 5em;
        }
      }

      .td2 {
        position: relative;

        .div {
          width: 4em;
          height: 4em;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          .img {
            width: 2em;
            position: relative;
            top: .5em;
            left: .5em;
            transition: all .5s cubic-bezier(0, 1.5, .6, 1);
            z-index: 99999;

            &:hover {
              width: 6em;
            }
          }

          .imgs {
            width: 3em;
          }
        }

        .span {
          position: absolute;
          top: 1.5em;
          left: 6em;

          &:hover {
            border-bottom: 1px solid black;
          }
        }
      }

      &:hover {
        cursor: pointer;
        background: #ffffff;
      }

      &:nth-child(odd) {
        background: #f7f7f7;
      }
    }
  }
}
</style>
