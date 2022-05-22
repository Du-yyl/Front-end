<!--
  ~ Time:2022/3/8 10:18 22
  ~ Name:TopBar.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="TopBar">
    <div class="FullLogo"></div>

    <ul class="TopCenter">
      <li
          v-for="(item,index) in items"
          :key="item.id"
          :class="{TopCentersShow :toShow===index}"
          @click="changeShow(index)">
        <a
            :class="{TopCenterShow :toShow===index}"
            :href="item.url"
            class="TopCenterA"
            @click="changeShow(index)">
          {{ item.title }}

          <div v-if="item.showHot" class="TopLiImg"></div>
        </a>
        <div :class="{TopCenterAfterBefore :toShow===index }" class="TopCenterAfter">
          <div class="TopCenterAfterImg"></div>
        </div>
      </li>
    </ul>


    <SearchResults></SearchResults>

    <div class="creatorCenter">
      创作者中心
    </div>

    <span class="TopLogin">
      登录
    </span>
  </div>
</template>

<script>
// import axios from 'axios'
import SearchResults from '@/components/SearchResults'

export default {
  name: 'TopBar',
  data () {
    return {
      items: [
        { id: '001', title: '发现音乐', showHot: false, url: 'javascript:;' },
        { id: '002', title: '我的音乐', showHot: false, url: 'javascript:;' },
        { id: '003', title: '关注', showHot: false, url: 'javascript:;' },
        { id: '004', title: '商城', showHot: false, url: 'javascript:;' },
        { id: '005', title: '音乐人', showHot: false, url: 'javascript:;' },
        { id: '006', title: '下载客户端', showHot: true, url: 'javascript:;' },

      ],
      toShow: 0,
      searchValue: '',
    }
  },
  components: {
    SearchResults,
  },
  methods: {
    /**
     * 通过点击事件返回到指定的index
     * @param index{number} 点击时元素的下标
     */
    changeShow (index) {
      this.toShow = index
    },

  },
}
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

// 顶部导航栏的统一配置
#TopBar {
  width: 100%;
  height: 4.2em;
  position: relative;
  top: 0;
  left: 0;
  background: #242424;
  display: block;
  color: #c7c4c7;

  // 顶部左侧logo
  .FullLogo {
    width: 11em;
    height: inherit;
    position: absolute;
    background: url("../static/imgs/topbar.png") no-repeat .4em 0;
    top: 0;
    left: 16em;
  }

  // 顶部中间的展示栏
  .TopCenter {
    width: 35em;
    height: inherit;
    background: #242424;
    position: absolute;
    top: 0;
    left: 27.3em;
    display: block;

    li {
      font-weight: 500;
      position: relative;
      width: auto;
      //width: 5em;
      padding: 0 1em 0 1em;
      float: left;
      height: 4.2em;
      display: block;
      text-align: center;
      line-height: 4.2em;
      cursor: pointer;

      .TopCenterA {
        position: relative;
        top: 0;
        left: 0;
        z-index: 2;

        .TopLiImg {
          position: absolute;
          top: -40%;
          left: 110%;
          width: 2em;
          height: 1em;
          background: url("../static/imgs/topbar.png") no-repeat -13.5em 0em;
          background-size: 17em;
        }
      }

      .TopCenterShow {
        font-weight: 900;
        color: white;
      }
    }

    .TopCenterAfter {
      display: block;
      width: 100%;
      height: 0;
      background: #000000;
      background-size: 9em;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      z-index: 1;
      transition: all .6s cubic-bezier(0, 1.5, .6, 1);

      .TopCenterAfterImg {
        position: absolute;
        width: 1em;
        height: .6em;
        background: #000000 url("../static/imgs/topbar.png") no-repeat -7.8em -5.2em;
        display: flex;
        left: 40%;
        bottom: 0;
        background-size: 9em;
      }
    }

    .TopCenterAfterBefore {
      height: 4.2em;
    }
  }


  //   创作者中心
  .creatorCenter {
    width: 7em;
    height: 2.2em;
    position: absolute;
    background: #242424;
    color: #accccc;
    top: 1em;
    right: 17em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10em 10em 10em 10em;
    border: 1px solid #4f4f4f;
    cursor: pointer;

    &:hover {
      border: 1px solid #cccccc;
      color: #ffffff;
    }
  }

  //  登录
  .TopLogin {
    position: absolute;
    color: #787878;
    cursor: pointer;
    top: 1.6em;
    right: 13.5em;

    &:hover {
      color: #adadad;
      text-decoration: #787878;
    }
  }


}


</style>
