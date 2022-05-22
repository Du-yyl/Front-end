<template>
  <view class="container">
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">用于收藏功能，可点击切换选中、不选中的状态。</text>
    </uni-card>
    <uni-section title="基本用法" type="line">
      <view class="example-body">
        <uni-fav :checked="checkList[0]" class="favBtn" @click="favClick(0)"/>
        <uni-fav :checked="checkList[1]" :star="false" class="favBtn" @click="favClick(1)"/>
        <uni-fav :checked="checkList[2]" :circle="true" bg-color="#dd524d" bg-color-checked="#007aff"
                 class="favBtn" fg-color="#ffffff" fg-color-checked="#ffffff" @click="favClick(2)"/>
        <uni-fav :checked="checkList[3]" bg-color="#f8f8f8" bg-color-checked="#eeeeee" class="favBtn"
                 fg-color="#333333" fg-color-checked="#333333" @click="favClick(3)"/>
      </view>
    </uni-section>

    <uni-section title="自定义文字" type="line">
      <view class="example-body">
        <uni-fav :checked="checkList[4]" :content-text="contentText" @click="favClick(4)"/>
      </view>
    </uni-section>

    <uni-section title="在自定义导航栏使用" type="line">
      <uni-nav-bar :fixed="false" background-color="#FFFFFF" color="#333333" left-icon="arrowleft" style="width: 100%;"
                   title="标题">
        <template v-slot:right>
          <uni-fav :checked="checkList[5]" :circle="true" @click="favClick(5)"/>
        </template>
      </uni-nav-bar>
    </uni-section>
    <view class="example-body example-body-fullWidth">

    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      checkList: [false, false, false, false, false, false],
      contentText: {
        contentDefault: '追番',
        contentFav: '已追番',
      },
    }
  },
  methods: {
    favClick (index) {
      this.checkList[index] = !this.checkList[index]
      console.log(this.checkList[index])
      this.$forceUpdate()
    },
  },
}
</script>

<style lang="scss">
.example-body {
  display: flex;
  padding: 10px 15px;
}

/* #ifdef MP-ALIPAY */
.uni-fav {
  margin-left: 20 rpx;
}

/* #endif */


.favBtn {
  margin: 0 20 rpx 20 rpx 0;
}


.example-body-fullWidth {
  padding: 32 rpx 0;
}

.example-body-first {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  justify-content: flex-start;
}

.favBtn-nav {
  // left:-50rpx;
}
</style>
