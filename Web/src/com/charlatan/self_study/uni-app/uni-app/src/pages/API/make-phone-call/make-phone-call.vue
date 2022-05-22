<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-hello-text uni-center">请在下方输入电话号码</view>
      <input class="input uni-common-mt" name="input" type="number" @input="bindInput"/>
      <view class="uni-btn-v uni-common-mt">
        <button :disabled="disabled" type="primary" @tap="makePhoneCall">拨打</button>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      title: 'makePhoneCall',
      disabled: true,
    }
  },
  methods: {
    bindInput: function (e) {
      this.inputValue = e.detail.value
      if (this.inputValue.length > 0) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    makePhoneCall: function () {
      uni.makePhoneCall({
        phoneNumber: this.inputValue,
        success: () => {
          console.log('成功拨打电话')
        },
      })
    },
  },
}
</script>

<style>
.input {
  height: 119 rpx;
  line-height: 119 rpx;
  font-size: 78 rpx;
  border-bottom: 1 rpx solid #E2E2E2;
  text-align: center;
}
</style>
