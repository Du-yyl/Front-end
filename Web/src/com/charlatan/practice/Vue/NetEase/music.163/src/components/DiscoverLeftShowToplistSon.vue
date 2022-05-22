<!--
  ~ Time:2022/3/10 10:23 02
  ~ Name:DiscoverLeftShowToplistSon.vue
  ~ Path:src/components
  ~ ProjectName:music.163
  ~ Author:charlatan
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="DiscoverLeftShowToplistSon">

    <div id="top">
      <div class="imgs">
        <div class="img2"></div>
        <img :alt="list.name" :src="list.imgUrl" :title="list.name" class="img1">
      </div>

      <span class="span">
        {{ list.name }}
      </span>
      <div class="icons">
        <div class="icon1"></div>
        <div class="icon2"></div>
      </div>
    </div>

    <ul class="ul">
      <li v-for="(lis,index) in list.soars">
        <div class="span">
          <div class="span1">
            {{ index + 1 }}
          </div>
          <div class="span2">
            {{ lis.name }}
          </div>
          <div class="ic">
            <div class="ic1"></div>
            <div class="ic2"></div>
            <div class="ic3"></div>
          </div>
        </div>
      </li>
    </ul>

    <div class="more">
      <span>
        查看全部>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DiscoverLeftShowToplistSon',
  data () {
    return {}
  },
  components: {},
  props: ['list'],
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

// -------DiscoverLeftShowToplistSon----------
#DiscoverLeftShowToplistSon {
  position: relative;
  width: 13.7em;
  height: inherit;
  background: #e8e8e8;
  border: 1px solid #c7c7c7;

  #top {
    width: 100%;
    height: 7.5em;
    background: #f4f4f4;

    .imgs {
      width: 5.6em;
      height: 5.6em;
      position: relative;
      top: .9em;
      left: .9em;

      .img1 {
        position: absolute;
        top: 0;
        width: 5.3em;
        height: 5.3em;
        right: 0;
        left: 0;
        margin: auto;
      }

      .img2 {
        position: absolute;
        top: 0;
        width: inherit;
        height: inherit;
        background: url("../static/imgs/coverall.png") no-repeat 0 -27.2em;
        background-size: 15em;
      }
    }

    .span {
      font-weight: 900;
      position: absolute;
      top: 1.5em;
      right: 25%;

    }

    .icons {
      width: 5em;
      height: 2.5em;
      position: absolute;
      top: 3em;
      right: 1.7em;

      .icon1 {
        width: 2.2em;
        height: 2.2em;
        background: url("../static/imgs/index.png") no-repeat -19.1em -14.7em;
        background-size: 30em;
        cursor: pointer;
        position: absolute;
        left: 0;
        transition: all .5s cubic-bezier(0, 1.5, .6, 1);

        &:hover {
          background: url("../static/imgs/index.png") no-repeat -19.1em -16.7em;
          background-size: 30em;
        }
      }

      .icon2 {
        width: 2.2em;
        height: 2.2em;
        background: url("../static/imgs/index.png") no-repeat -21.4em -14.7em;
        position: absolute;
        right: 0;
        background-size: 30em;
        transition: all .5s cubic-bezier(0, 1.5, .6, 1);
        cursor: pointer;

        &:hover {
          background: url("../static/imgs/index.png") no-repeat -21.4em -16.9em;
          background-size: 30em;
        }
      }
    }
  }

  .ul {
    position: relative;
    width: inherit;
    background: #8efa8f;

    li {
      height: 2em;
      line-height: 2em;
      position: relative;

      .span {
        width: 12em;
        background: #fcb4b4;
        position: relative;
        left: 1em;

        .span1 {
          width: 2em;
          position: absolute;
          left: 0;
          text-align: center;


        }

        .span2 {
          width: 9em;
          height: inherit;
          position: absolute;
          left: 2.5em;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: all .5s cubic-bezier(0, 1.5, .6, 1);
          white-space: nowrap;
        }

        &:hover .span2 {
          width: 4.79em;
        }

        .ic {
          transition: all .5s cubic-bezier(0, 1.5, .6, 1);
          height: 2em;
          position: absolute;
          top: 0;
          display: flex;
          width: 0;
          right: .1em;
          flex-wrap: nowrap;

          .ic1 {
            width: 1.4em;
            height: 1.4em;
            background: url("../static/imgs/index.png") no-repeat -13.4em -10.3em;
            background-size: 21em;
            position: relative;
            top: .4em;
            left: .3em;

            &:hover {
              transition: all .5s cubic-bezier(0, 1.5, .6, 1);
              background: url("../static/imgs/index.png") no-repeat -13.4em -11.83em;
              background-size: 21em;
            }
          }

          .ic2 {
            width: 1.4em;
            height: 1.4em;
            background: url("../static/imgs/icon.png") no-repeat .3em -40.9em;
            background-size: 5em;
            position: relative;
            top: .4em;
            left: .4em;

            &:hover {
              background-size: 5em;
              background: url("../static/imgs/icon.png") no-repeat -1.13em -43.5em;
            }
          }

          .ic3 {
            width: 1.4em;
            height: 1.4em;
            position: relative;
            top: .4em;
            left: .5em;
            background: url("../static/imgs/index.png") no-repeat -15em -10.3em;
            background-size: 21em;

            &:hover {
              transition: all .5s cubic-bezier(0, 1.5, .6, 1);
              background: url("../static/imgs/index.png") no-repeat -15em -11.8em;
              background-size: 21em;
            }
          }
        }


        &:hover .ic {
          width: 4.8em;
        }
      }

      cursor: pointer;


      &:nth-child(odd) {
        background: #e8e8e8;
      }

      &:nth-child(even) {
        background: #f4f4f4;
      }

      &:nth-child(-n+3) .span1 {
        color: #c10d0c;
        font-weight: 700;
      }

    }
  }

  .more {
    height: 2em;
    line-height: 2em;
    background: #e8e8e8;
    position: relative;

    span {
      cursor: pointer;
      position: absolute;
      right: 1em;
      background: #e8e8e8;
      transition: all .5s cubic-bezier(0, 1.5, .6, 1);

      &:hover {
        border-bottom: 1px solid #000000;
      }
    }
  }
}
</style>
