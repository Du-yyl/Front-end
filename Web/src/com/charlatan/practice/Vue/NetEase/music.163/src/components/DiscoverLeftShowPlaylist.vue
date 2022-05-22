<!--
  ~ Time:2022/3/9 14:40 33
  ~ Name:DiscoverLeftShowPlaylist.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="DiscoverLeftShowPlaylist">
    <div id="top">
      <div class="topLeft">
        热门推荐
      </div>
      <ul class="topUl">
        <li v-for="topList in topLists" :key="topList.id" class="topLi">
          {{ topList.title }}
        </li>
      </ul>
      <div class="more">
        更多
      </div>
    </div>

    <ul class="hotLists">

      <li v-for="list in lists" :key="list.id" class="list">
        <div class="listDiv">
          <img :src="list.imgUrl" alt="" class="listImg">
        </div>

        <div class="listBot">
          <span class="listBotSpan">
            {{ list.playCount }}
          </span>
        </div>
        <span class="icon1"></span>
        <span class="title">
          {{ list.name }}
        </span>
      </li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DiscoverLeftShowPlaylist',
  data () {
    return {
      topLists: [
        { id: '001', title: '华语', toRout: '', toUrl: '' },
        { id: '002', title: '流行', toRout: '', toUrl: '' },
        { id: '003', title: '摇 滚', toRout: '', toUrl: '' },
        { id: '004', title: '民谣', toRout: '', toUrl: '' },
        { id: '005', title: '电子', toRout: '', toUrl: '' },
      ],
      lists: [],
    }
  },
  components: {},
  mounted () {
    axios.get('http://localhost:3000/personalized?limit=8').then((value) => {
      for (const valueElement of value.data.result) {
        if (valueElement.playCount > 10000) {
          valueElement.playCount = parseInt(valueElement.playCount / 10000) + '万'
        }
        this.lists.push({
          id: valueElement.id,
          name: valueElement.name,
          imgUrl: valueElement.picUrl,
          playCount: valueElement.playCount,
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

// -------DiscoverLeftShowPlaylist----------
#DiscoverLeftShowPlaylist {
  user-select: none;
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

    .topUl {
      color: #66667f;
      width: 20em;
      height: 30px;
      background: #ffffff;
      position: absolute;
      top: 1.2em;
      left: 10em;

      .topLi {
        float: left;
        margin: .3em .9em .3em .9em;
        cursor: pointer;
        position: relative;

        &:hover {
          border-bottom: 1px solid #1c1c1c;
          color: #181818;
        }
      }

      .topLi:nth-child(-n+4):before {
        width: 1px;
        height: 1em;
        background: #ccd0db;
        position: absolute;
        top: .2em;
        left: 3em;
        display: block;
        content: "";
      }
    }

    .more {
      position: absolute;
      top: 1em;
      height: 2em;
      right: 3em;
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
  .hotLists {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3em;

    .list {
      width: 9.7em;
      height: 13.2em;
      overflow: hidden;
      background: #ffffff;
      margin: 1.1em 1.1em 2.8em;
      position: relative;

      .listDiv {

        width: 100%;
        height: 10em;
        max-height: 9.3em;
        background: bisque;

        .listImg {
          width: 100%;
          pointer-events: none;
        }

      }

      .listBot {
        height: 2rem;
        width: 100%;
        background: rgba(98, 98, 103, 0.67);
        color: white;
        line-height: 2rem;
        position: relative;
        top: -2em;
        text-indent: 2rem;
        font-size: .8rem;

        &:before {
          width: 1.2em;
          height: 1.2em;
          background: url("../static/imgs/iconall.png") 0 -1.8em;
          display: block;
          content: "";
          position: absolute;
          top: .7em;
          left: .9em;
        }

        &:after {
          width: 1.2em;
          height: 1.2em;
          background: url("../static/imgs/iconall.png") 0 0;
          display: block;
          content: "";
          position: absolute;
          top: .6em;
          right: .9em;

        }

        cursor: pointer;

        &:hover:after {
          background: url("../static/imgs/iconall.png") 0 -4.7em;
        }
      }

      .title {
        cursor: pointer;
        color: #000000;
        position: absolute;
        top: 10.5em;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;

        &:hover {
          color: #c10d0c;
        }
      }
    }
  }


}
</style>
