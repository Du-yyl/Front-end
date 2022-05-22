<template>
  <view>
    <uni-card :is-shadow="false" is-full>
      <text class="uni-h6">搜索栏组件，通常用于搜索商品、文章等。</text>
    </uni-card>

    <uni-section title="基本用法" type="line">
      <uni-search-bar v-model="searchValue" :focus="true" @blur="blur" @cancel="cancel" @clear="clear" @confirm="search"
                      @focus="focus" @input="input">
      </uni-search-bar>
      <view class="search-result">
        <text class="search-result-text">当前输入为：{{ searchValue }}</text>
      </view>

    </uni-section>

    <uni-section subTitle="使用 bgColor 属性自定义背景色" title="自定义样式" type="line">
      <uni-search-bar bgColor="#EEEEEE" placeholder="自定义背景色" @confirm="search"/>
    </uni-section>
    <uni-section title="自定义icon" type="line">
      <uni-search-bar cancel-text="cancel" placeholder="自定义searchIcon" @cancel="cancel" @confirm="search">
        <uni-icons v-slot:searchIcon color="#999999" size="18" type="home"/>
      </uni-search-bar>
    </uni-section>
    <uni-section subTitle="使用 clearButton 属性设置清除按钮" title="控制清除/取消按钮" type="line">
      <uni-search-bar cancelButton="always" clearButton="always" placeholder="一直显示" radius="5" @cancel="cancel"
                      @confirm="search"/>
      <uni-search-bar cancelButton="none" class="uni-mt-10" clearButton="auto" placeholder="自动显示隐藏" radius="5"
                      @confirm="search"/>
      <uni-search-bar cancelButton="none" class="uni-mt-10" clearButton="none" placeholder="一直不显示" radius="100"
                      @confirm="search"/>
    </uni-section>
  </view>
</template>

<script>
export default {
  data () {
    return {
      searchValue: '123123',
    }
  },
  methods: {
    search (res) {
      uni.showToast({
        title: '搜索：' + res.value,
        icon: 'none',
      })
    },
    input (res) {
      console.log('----input:', res)
    },
    clear (res) {
      uni.showToast({
        title: 'clear事件，清除值为：' + res.value,
        icon: 'none',
      })
    },
    blur (res) {
      uni.showToast({
        title: 'blur事件，输入值为：' + res.value,
        icon: 'none',
      })
    },
    focus (e) {
      uni.showToast({
        title: 'focus事件，输出值为：' + e.value,
        icon: 'none',
      })
    },
    cancel (res) {
      uni.showToast({
        title: '点击取消，输入值为：' + res.value,
        icon: 'none',
      })
    },
  },
  onBackPress () {
    // #ifdef APP-PLUS
    plus.key.hideSoftKeybord()
    // #endif
  },
}
</script>

<style lang="scss">

.search-result {
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
}

.search-result-text {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.example-body {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  padding: 0px;
}

.uni-mt-10 {
  margin-top: 10px;
}
</style>
