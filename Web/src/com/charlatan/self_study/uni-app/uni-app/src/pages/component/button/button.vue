<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <button type="primary">页面主操作 Normal</button>
      <button :loading="loading" type="primary">页面主操作 Loading</button>
      <button disabled="true" type="primary">页面主操作 Disabled</button>

      <button type="default">页面次要操作 Normal</button>
      <button disabled="true" type="default">页面次要操作 Disabled</button>

      <button type="warn">警告类操作 Normal</button>
      <button disabled="true" type="warn">警告类操作 Disabled</button>

      <view class="button-sp-area">
        <button plain="true" type="primary">按钮</button>
        <button disabled="true" plain="true" type="primary">不可点击的按钮</button>

        <button plain="true" type="default">按钮</button>
        <button disabled="true" plain="true" type="default">按钮</button>

        <button class="mini-btn" size="mini" type="primary">按钮</button>
        <button class="mini-btn" size="mini" type="default">按钮</button>
        <button class="mini-btn" size="mini" type="warn">按钮</button>
      </view>
      <!-- #ifdef MP-WEIXIN || MP-QQ || MP-JD -->
      <button app-parameter="uni-app" open-type="launchApp" @error="openTypeError">打开APP</button>
      <button open-type="feedback">意见反馈</button>
      <!-- #endif -->
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      title: 'button',
      loading: false,
    }
  },
  onLoad () {
    this._timer = null
  },
  onShow () {
    this.clearTimer()
    this._timer = setTimeout(() => {
      this.loading = true
    }, 300)
  },
  onUnload () {
    this.clearTimer()
    this.loading = false
  },
  methods: {
    openTypeError (error) {
      console.error('open-type error:', error)
    },
    clearTimer () {
      if (this._timer != null) {
        clearTimeout(this._timer)
      }
    },
  },
}
</script>

<style>
button {
  margin-top: 30 rpx;
  margin-bottom: 30 rpx;
}

.button-sp-area {
  margin: 0 auto;
  width: 60%;
}

.mini-btn {
  margin-right: 10 rpx;
}
</style>
