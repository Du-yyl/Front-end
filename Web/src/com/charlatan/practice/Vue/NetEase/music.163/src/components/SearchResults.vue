<!--
  ~ Time:2022/3/8 14:49 33
  ~ Name:SearchResults.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="SearchResults">

    <input
        v-model.trim="searchValue"
        class="TopBarSearch"
        placeholder=" 音乐/视频/电台/用户"
        type="text"
        @blur="isShow = false"
        @focus="isShow = true"
        @input=search
        @keydown.enter="searchGo">

    <div v-show="searchValue !== '' && isShow && isReceive" class="TopSearchAns">
      <p class="TopSearchAnsP">搜"{{ searchValue }}"相关用户 ></p>

      <!--    返回的信息渲染的列表-->
      <div v-for="list in backLists" v-if="list.lists === undefined || list.lists.length !==  0" :key="list.id"
           class="BackLists">
        <div>
          <img :alt=list.listTitle :src=list.listImgUrl class="BackListsImg">
          <span>{{ list.listTitle }}</span>
          <ul class="backLists">
            <li v-for="lis in list.lists" class="lists">
              {{ lis }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchResults',
  data () {
    return {
      searchValue: '',
      isShow: false,
      isReceive: false,
      backLists: [
        {
          listTitle: '单曲',
          // 如果一定要使用指定地址，要使用require进行引入，并且这个代表引入一个外部的资源
          listImgUrl: require('../static/imgs/music.png'),
          // Vue中指定的图片不能直接写地址，写地址反而找不到指定内容，使用base64就能解决
          // listImgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAkpJREFUSMfFlD1IG3EYxp83aaIEcdCIoK4HFUsMFCE0UPToYMHFyqG4ZrA6mEHE3MXzCDZRUsFVDAEFP6FiHYUK2qlODlUwUod2cIgUTFRivcu9HaxCkRC5VPqM79f/x/O+/AkWpbHGGrvdhttwG+7JSVvWlrVlp6fH9XF9XD84eOgcm1UAPagH9WB7O95yH/cFAmZ7vj5fv75+A1ZV9egAto9cx3VlZXcBD3rRKwjGjh7X4zs7qkN1qI6mpmJznlgFMD9TD/UQUS1qUMOMcnKRSxT5iq/4anHR/J7vznfv7Y0+U+aUudVV+0+H5tCGhiIUoQil06U78IZ3eZcICmTIzFGKUpS2tx3lRrPR3NKCb/DCm0xyPRJIdHQYH/SgHtzclCRJkiS7vWSAQopQ/Ch+dHISfRk7i5319/9qvm67bmtowHOIEF0uISWkhFRjY8kA5hfqpE4ijEGFylyobmphamFq4fKSWvmQD+Px3ExuJjdzfHybt3wDd5IRQqgwwK3e/ZgITYSSSbz4O176Coo4UEwPdkAWZVEWq6udW84t55b+RwBkjGDkEQDCSlgJK5KEr7zES9EoPPDBJwjGqB7WwwB9whrWslk8hRde6wbeW4Gsyqqs+v3I8QVfrKzcfjD3Ol+hC12VldafLgBAGcpQxueDCxWosBW/kVZ44c1k/hmAOWwOm8MbG3gNP/zn58UGkIZlLM/OWgWgQgllUBlUBj0eBBBAQNOoFqc49XjwHgMYSKd5AvvYn5+POWPOmDORuOmyfoz/Tb8ByQXwkwNJXTwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMDhUMTY6MDY6MzYrMDg6MDDqluJOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTA4VDE2OjA2OjM2KzA4OjAwm8ta8gAAAEd0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fYWp6M2xpaXB3bC95aW5sZS5zdmcqtuWxAAAAAElFTkSuQmCC',
          id: '001',
          lists: [],
          accessID: 'artists',
        },
        {
          listTitle: '歌手',
          listImgUrl: require('../static/imgs/user.png'),
          id: '002',
          lists: [],
          accessID: 'artists',
        },
        {
          listTitle: '专辑',
          listImgUrl: require('../static/imgs/album.png'),
          id: '003',
          lists: [],
          accessID: 'artists',
        },
        {
          listTitle: '歌单',
          listImgUrl: require('../static/imgs/songList.png'),
          id: '004',
          lists: [],
          accessID: 'artists',
        },
      ],
    }
  },
  components: {},
  methods: {
    /**
     * 开始搜索
     */
    searchGo () {
      if (this.searchValue) {
        console.log('开始搜索')
        console.log(this.searchValue)
        this.searchValue = ''
      } else {
        console.log('内容为空')
      }
    },

    /**
     * 内容改变就会发送请求
     */
    search () {
      let value = this.searchValue.trim()
      if (value === '' || value.length > 15) {
        console.log('输入内容非法')
      } else {

        this.isReceive = true
        // 单曲
        axios.get('http://localhost:3000/search?keywords=' + value).then((res) => {

          this.backLists[0].lists = []

          if (res.data.result !== undefined) {
            let music = res.data.result.songs.slice(0, 4)
            for (let music1 of music) {
              this.backLists[0].lists.push(music1.name + '-' + music1.artists[0].name)
            }
          }
        }, (reason) => {
          console.log(reason)
        })

        // 歌手
        axios.get('http://localhost:3000/search?keywords=' + value + '&type=100').then((res) => {
          this.backLists[1].lists = []
          if (!res.data.result !== undefined) {
            let users = res.data.result.artists.slice(0, 2)
            for (let user of users) {
              this.backLists[1].lists.push(user.name)
            }
          }
        }, (reason) => {
          console.log(reason)
        })

        // 专辑
        axios.get('http://localhost:3000/search?keywords=' + value + '&type=10').then((res) => {
          this.backLists[2].lists = []
          if (!res.data.result !== undefined) {
            let list = res.data.result.albums.slice(0, 2)
            for (let listElement of list) {
              this.backLists[2].lists.push(listElement.name + '-' + listElement.artists[0].name)
            }
          }
        }, (reason) => {
          console.log(reason)
        })

        // 歌单
        axios.get('http://localhost:3000/search?keywords=' + value + '&type=1000').then((res) => {
          this.backLists[3].lists = []
          if (!res.data.result !== undefined) {
            let lists = res.data.result.playlists.slice(0, 2)
            for (let list of lists) {
              this.backLists[3].lists.push(list.name + '-' + list.track.name)
            }
          }
        }, (reason) => {
          console.log(reason)
        })
      }
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

#SearchResults {
  color: #666666;
  line-height: 1.4em;
  font-size: 14px;
  //  搜索返回内容渲染
  .TopSearchAns {
    z-index: 99;
    transition: all .2s ease-in;
    width: 15rem;
    //height: 15rem;
    background: #ffffff;
    position: absolute;
    top: 4rem;
    right: 22.5rem;
    box-shadow: 0 4px 2px 2px blanchedalmond;
    border-radius: 4px;
    padding: 1rem 1rem 0 1rem;
    cursor: pointer;


    .TopSearchAnsP:after {
      transition: all .2s ease-in;

      width: 100%;
      height: 1px;
      background: #e2e2e2;
      content: "";
      display: block;
      position: relative;
      margin: 1rem 0 .5rem 0;
    }

    .BackLists {
      transition: all .2s ease-in;
      z-index: 99;
      position: relative;
      background: #fff5f5;
      width: 100%;
      top: -1em;
      padding-top: 1em;
      border-radius: 5px;

      .BackListsImg {
        position: relative;
        top: .25em;
      }

      .backLists {
        //background:#000;
        width: 11rem;
        padding-left: 1rem;
        position: relative;
        top: -1.3rem;
        left: 4rem;
        border-left: 1px solid #e14d4d;

        .lists {
          width: 10em;
          height: auto;
          border-radius: 3px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: all .3s ease-in;

          &:hover {
            background: #e3e5e7;
            box-shadow: bisque;
          }
        }
      }

      &:nth-child(odd) {
        transition: all .2s ease-in;
        background: #f9f8f8;
      }
    }
  }

  //  搜索框
  .TopBarSearch {
    font-family: inherit;
    width: 12rem;
    height: 2.1rem;
    position: absolute;
    top: 1.1rem;
    right: 25rem;
    border-radius: 20px 20px 20px 20px;
    padding-left: 2.1rem;
    outline: none;
    background: white url("../static/imgs/topbar.png") no-repeat 0rem -8rem;
    background-size: 19rem;
    transition: all .2s ease-in;

    &:focus {
      box-shadow: 0 0 2px 2px lemonchiffon;
    }
  }
}
</style>
