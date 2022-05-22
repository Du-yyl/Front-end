<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap">
      <view class="uni-title">默认样式</view>
      <view>
        <label class="radio" style="margin-right: 30rpx;">
          <radio checked="true" value="r1"/>
          选中
        </label>
        <label class="radio">
          <radio value="r2"/>
          未选中
        </label>
      </view>
    </view>
    <view class="uni-padding-wrap">
      <view class="uni-title">不同颜色和尺寸的radio</view>
      <view>
        <label class="radio" style="margin-right: 30rpx;">
          <radio checked="true" color="#FFCC33" style="transform:scale(0.7)" value="r1"/>
          选中
        </label>
        <label class="radio">
          <radio color="#FFCC33" style="transform:scale(0.7)" value="r2"/>
          未选中
        </label>
      </view>
    </view>
    <view class="uni-title uni-common-mt uni-common-pl">推荐展示样式</view>
    <view class="uni-list">
      <radio-group @change="radioChange">
        <label v-for="(item, index) in items" :key="item.value" class="uni-list-cell uni-list-cell-pd">
          <view>
            <radio :checked="index === current" :value="item.value"/>
          </view>
          <view>{{ item.name }}</view>
        </label>
      </radio-group>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      title: 'radio 单选框',
      items: [
        {
          value: 'USA',
          name: '美国',
        },
        {
          value: 'CHN',
          name: '中国',
          checked: 'true',
        },
        {
          value: 'BRA',
          name: '巴西',
        },
        {
          value: 'JPN',
          name: '日本',
        },
        {
          value: 'ENG',
          name: '英国',
        },
        {
          value: 'FRA',
          name: '法国',
        },
      ],
      current: 0,
    }
  },
  methods: {
    radioChange (evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.detail.value) {
          this.current = i
          break
        }
      }
    },
  },
}
</script>

<style>
.uni-list-cell {
  justify-content: flex-start
}
</style>
