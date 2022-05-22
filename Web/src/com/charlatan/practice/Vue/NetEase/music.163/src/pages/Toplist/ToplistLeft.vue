<!--
  ~ Time:2022/3/10 20:29 03
  ~ Name:ToplistLeft.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="ToplistLeft">
    <h3>
      云音乐特色榜
    </h3>
    <ul class="ul">
      <li
          v-for="(list,index) in lists"
          :key="list.id"
          :class="{showLi : actives === index}"
          class="li"
          @click="changeIndex(index,list.id,list.updateFreq,list.updateTime)">
        <h3 v-if="index === 4" class="h3">
          全球媒体榜
        </h3>
        <div class="div">
          <img v-lazy="list.imgUrl" alt="" class="img">
        </div>
        <div class="spans">
          <div class="span1">
            {{ list.name }}
          </div>
          <div class="span2">{{ list.updateFreq }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ToplistLeft',
  data () {
    return {
      lists: [],
      actives: 0,
    }
  },
  components: {},
  methods: {
    /**
     * 通过全局时间总线发送向指定组件发送内容
     * @param index{Number} 获取点击ID，然后让他变颜色
     * @param updateFreq{string} 更新时间的形式
     * @param id　{number} 点击元素要访问的链接ID
     * @param updateTime{string}更新的时间
     */
    changeIndex (index, id, updateFreq, updateTime) {
      this.$store.state.topListNum = this.actives = index
      this.$bus.$emit('sendSings', 'http://localhost:3000/playlist/detail?id=' + id, updateFreq, updateTime)
    },
  },
  mounted () {
    let num = this.$store.state.topListNum
    this.actives = num
    /**
     * 第一次挂载的时候自动加载第一个榜单中的数据将数据通过调用指定函数的形式进行发送，然后调用指定回调
     */
    axios.get('http://localhost:3000/toplist').then((value) => {
      let id = value.data.list[num].id
      let updateFreq = value.data.list[num].updateFrequency
      let updateTime = new Date(parseInt(value.data.list[num].updateTime)).toLocaleString().
          replace(/:\d{1,2}$/, ' ')

      this.$bus.$emit('sendSings', 'http://localhost:3000/playlist/detail?id=' + id, updateFreq, updateTime)
      for (let listElement of value.data.list) {
        let time = new Date(parseInt(listElement.updateTime)).toLocaleString().replace(/:\d{1,2}$/, ' ')
        this.lists.push({
          id: listElement.id,
          updateFreq: listElement.updateFrequency,
          imgUrl: listElement.coverImgUrl,
          listId: listElement.id,
          title: listElement.description,
          name: listElement.name,
          updateTime: time,
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
    color: #000000;
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

// -------ToplistLeftTop----------
#ToplistLeft {
  position: relative;
  padding-top: 2.5em;

  h3 {
    padding-left: 1em;
  }

  .ul {
    margin-top: .8em;
    position: relative;

    .li {
      height: 4em;
      padding-left: 1em;
      position: relative;

      .h3 {
        height: 3em;
        margin: 3em;
        position: relative;
        top: -2em;
        left: -4em;
      }

      .div {
        width: 3em;
        height: 3em;
        position: absolute;
        top: .5em;

        .img {
          width: 100%;
        }
      }

      .spans {
        position: absolute;
        left: 5em;
        top: .5em;

        .span1 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 9em;
        }

        .span2 {
          font-weight: 100;
          font-size: .8em;
          color: #787880;
          margin-top: .7em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 9em;
        }
      }

      transition: all .2s;

      &:hover {
        background: #f4f2f2;
        cursor: pointer;
      }
    }

    .showLi {
      background: #e6e6e6;
    }


  }
}

</style>
