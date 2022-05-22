<template>
  <div id="app">
    <TopBar class="TopBar"></TopBar>
    <div class="TopNav">
      <ul class="navs">
        <li
            v-for="nav in navs"
            :key="nav.id"
            class="nav">
          <router-link
              :exact=true
              :to=nav.toRout
              active-class="navShow"
              class="router"
          >
            {{ nav.title }}
            <img v-if="nav.showImg" alt="版权" class="img" src="./static/imgs/copyright.png">
          </router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
      <transition
          enter-active-class="animate__flipInY"
          leave-active-class="animate__fadeOutDown"
          name="animate__animated animate__bounce">
        <router-view class="routerView"></router-view>
      </transition>
    </keep-alive>

    <!--    <song id="song"></song>-->
  </div>
</template>

<script>

import 'animate.css'

import TopBar from '@/components/TopBar'
import Discover from '@/components/Discover'
import Toplist from '@/pages/Toplist/Toplist'
import song from '@/pages/song/song'

export default {
  name: 'App',
  data () {
    return {
      navs: [
        { id: '001', title: '推荐', jumpRout: '', showImg: false, toRout: '/' },
        { id: '002', title: '排行榜', jumpRout: '', showImg: false, toRout: '/Toplist' },
        { id: '003', title: '歌单', jumpRout: '', showImg: true, toRout: '/awef' },
        { id: '004', title: '主播电台', jumpRout: '', showImg: false, toRout: '/awf' },
        { id: '005', title: '歌手', jumpRout: '', showImg: false, toRout: '/egr' },
        { id: '006', title: '新碟上架', jumpRout: '', showImg: false, toRout: '/earw' },
      ],
      navShowIndex: 0,
    }
  },
  components: {
    TopBar,
    Discover,
    Toplist,
    song,
  },
  methods: {},
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

// 默认的样式
a:link {
  color: #000000;
  text-decoration: none;
}

a:visited {
  color: #e1dbdb;
}

a:hover {
  color: #494848;
}

a:active {
  color: #e35169;
}

li {
  list-style: none;
}


#app {
  font-family: YouYuan, serif;
  text-decoration: none;

  .TopNav {
    width: 100%;
    height: 2.4em;
    background: #c20c0c;
    color: white;
    position: relative;

    .navs {
      width: 40%;
      height: inherit;
      position: absolute;
      top: 0;
      left: 27.3em;
      z-index: 4;

      .nav {
        float: left;
        margin: .7em .4rem 0 .4rem;
        font-size: 13px;
        height: 1.6em;
        line-height: 1.5em;
        cursor: pointer;
        padding: 1em;
        position: relative;
        top: -.9em;

        .img {
          width: .9em;
        }

        .router {
          padding: .2em .7em;
          background: #c20c0c;
          display: block;
          border-radius: 10em 10em 10em 10em;
        }

        .navShow {
          background: #9b0909;
        }
      }
    }
  }

  .routerView {
    position: relative;
    top: 0;
  }

  #song {
    width: 60%;
    height: 40em;
    position: relative;
    background: #e8e8e8;
    left: 19%;
  }
}

#Discover {
  position: relative;
  top: 0;
  left: 0;
}


</style>
