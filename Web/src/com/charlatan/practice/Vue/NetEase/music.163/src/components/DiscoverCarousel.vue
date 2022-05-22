<!--
  ~ Time:2022/3/8 19:05 15
  ~ Name:DiscoverCarousel.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="DiscoverCarousel" @mouseleave="turnTime" @mouseover="clearTimer">
    <ul class="DiscoverCarouselUl">
      <transition-group
          :enter-active-class="Animation.enter"
          :leave-active-class="Animation.leave"
          name="animate__animated animate__bounce">
        <li v-for="(banner,index) in banners" v-show="pointShow === index" :key="index">
          <!--        背景图-->
          <div class="bottomBackground">
            <img :alt=banner.Title :src='banner.Img' class="bannerBacImg">
          </div>
          <!--        轮播图-->
          <a :href='banner.To' :title="banner.Title" class="bannerA">
            <div class="banner">
              <img :alt=banner.Title :src='banner.Img' class="bannerImg">
            </div>
          </a>
        </li>
      </transition-group>

    </ul>
    <!--  点-->
    <ul class="liPoints">
      <li v-for="(banner,index) in banners" :class="{pointShow : pointShow === index}" class="point"
          @click="changePoint(index)"></li>
    </ul>
    <!--  箭头-->
    <div class="leftBtn btn" @click="previous()"></div>
    <div class="rightBtn btn" @click="next"></div>
  </div>
</template>

<script>
let timer
import axios from 'axios'
import 'animate.css'
import throttling from '../tools/throttling'

let vc = {
  name: 'DiscoverCarousel',
  data () {
    return {
      banners: [],
      pointShow: 0,
      Animation: {
        enter: 'animate__backInLeft',
        leave: 'animate__backOutRight',
      },
    }
  },
  components: {},
  methods: {
    // 点击小圆点
    changePoint (index) {
      if (index % 2) {
        this.Animation.enter = 'animate__flipInX'
        this.Animation.leave = 'animate__flipOutX'
      } else {
        this.Animation.enter = 'animate__flipInY'
        this.Animation.leave = 'animate__flipOutY'
      }

      this.pointShow = index
    },

    // 下一个图片
    next: throttling(function () {
      this.Animation.enter = 'animate__backInLeft'
      this.Animation.leave = 'animate__backOutRight'
      this.pointShow = this.pointShow === this.banners.length - 1 ? 0 : ++this.pointShow
    }, 1200),

    // 上一个图片
    previous: throttling(function () {
      this.Animation.enter = 'animate__backInRight'
      this.Animation.leave = 'animate__backOutLeft'
      this.pointShow = this.pointShow === 0 ? this.banners.length - 1 : --this.pointShow
    }, 1200),

    //  清除定时器
    clearTimer () {
      clearInterval(this.timers)
    },
    // 开启定时器
    turnTime () {
      this.Animation.enter = 'animate__backInLeft'
      this.Animation.leave = 'animate__backOutRight'
      clearInterval(this.timers)
      this.timers = setInterval(() => {
        this.pointShow = this.pointShow === this.banners.length - 1 ? 0 : ++this.pointShow
      }, 4500)
    },
  },
  /**
   * 进入组件的时候开始定时器
   */
  activated () {
    clearInterval(this.timers)
    this.timers = setInterval(() => {
      this.pointShow = this.pointShow === this.banners.length - 1 ? 0 : ++this.pointShow
    }, 4500)
  },
  /**
   * 离开组件停止定时器
   */
  deactivated () {
    clearInterval(this.timers)
  },
  mounted () {
    this.timers = timer
    // 挂在完毕发送请求
    axios.get('http://localhost:3000/banner').then((value) => {
      for (let banner of value.data.banners) {
        this.banners.push(
            { Img: banner.imageUrl, Id: banner.targetId, Title: banner.Title, To: 'javascript:;' })
      }
      clearInterval(this.timers)
      this.timers = setInterval(() => {
        this.pointShow = this.pointShow === this.banners.length - 1 ? 0 : ++this.pointShow
      }, 4500)
    })
  },
}
export default vc
</script>

<style lang="less" scoped>
// 默认的样式
a:link {
  color: #c7cccc;
  text-decoration: none;
}

a:visited {
  color: #c7cccc;
}

a:hover {
  color: #ffffff;
}

a:active {
  color: #e35169;
}

li {
  list-style: none;
}

#DiscoverCarousel {
  width: 100%;
  height: 18em;
  position: relative;
  background: #efbebe;
  //轮播的ul
  .DiscoverCarouselUl {
    width: inherit;
    height: inherit;
    position: relative;
    overflow: hidden;
    // 轮播的子元素
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      //轮播背景
      .bottomBackground {
        filter: blur(2em);
        position: absolute;
        z-index: 1;

        .bannerBacImg {
          position: relative;
          top: -40%;
          left: -40%;
          width: 250vw;
        }
      }

      // 轮播图片
      .bannerA {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        .banner {
          position: absolute;
          top: 0;
          left: 20.2em;
          height: 18em;

          .bannerImg {
            height: 100%;
          }
        }
      }
    }
  }

  .liPoints {
    width: 19em;
    height: .5em;
    position: absolute;
    //background: #000;
    z-index: 3;
    bottom: 1.2em;
    left: calc(50% - 15em);

    .point {
      width: .4em;
      height: .4em;
      background: #e3e3e8;
      position: relative;
      float: left;
      border-radius: 50%;
      margin: 0 .7em 0 .7em;
      cursor: pointer;
      //transition: all .6s cubic-bezier(0, 1.5, .6, .5);

      &:hover {
        background: #b80a0a;
        width: .6em;
        height: .6em;
      }
    }


    .pointShow {
      background: #b80a0a;
      width: .6em;
      height: .6em;
    }
  }

  //按钮
  .btn {
    width: 2.4em;
    height: 4em;
    background: #000;
    position: absolute;
    margin: 10px;
    top: 30%;
    z-index: 4;
    cursor: pointer;
  }

  .leftBtn {
    background: url("../static/imgs/banner.png") no-repeat 0 -23.1em;
    background-size: 2.5em;
    left: 15em;
    transition: all .4s cubic-bezier(0, 1.4, .6, 1);

    &:hover {
      background: url("../static/imgs/banner.png") no-repeat 0 -27.58em;
      background-size: 2.5em;
    }
  }

  .rightBtn {
    right: 16.5em;
    background: url("../static/imgs/banner.png") no-repeat 0 -32.1em;
    background-size: 2.5em;
    transition: all .4s cubic-bezier(0, 1.4, .6, 1);

    &:hover {
      background: url("../static/imgs/banner.png") no-repeat 0 -36.58em;
      background-size: 2.5em;
    }
  }
}
</style>
