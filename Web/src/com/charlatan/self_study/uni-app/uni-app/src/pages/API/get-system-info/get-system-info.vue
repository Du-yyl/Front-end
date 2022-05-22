<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-common-mt">
      <view class="uni-list">
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">设备型号</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.model" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">客户端平台</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.platform" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">操作系统版本</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.system" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">语言</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.language" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">版本</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.version" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">屏幕宽度</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.screenWidth" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">屏幕高度</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.screenHeight" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">可使用窗口高度</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.windowHeight" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">可使用窗口的顶部位置</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.windowTop" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">可使用窗口的底部位置</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.windowBottom" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">状态栏的高度</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.statusBarHeight" class="uni-input" placeholder="未获取"
                   type="text"/>
          </view>
        </view>
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">DPI</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.pixelRatio" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <!-- #ifdef MP -->
        <view class="uni-list-cell">
          <view class="uni-pd">
            <view class="uni-label" style="width:180px;">基础库版本</view>
          </view>
          <view class="uni-list-cell-db">
            <input :disabled="true" :value="systemInfo.SDKVersion" class="uni-input" placeholder="未获取" type="text"/>
          </view>
        </view>
        <!-- #endif -->
      </view>
      <view class="uni-padding-wrap">
        <view class="uni-btn-v">
          <button type="primary" @tap="getSystemInfo">获取设备系统信息</button>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      title: 'getSystemInfo',
      systemInfo: {},
    }
  },
  onUnload: function () {
    this.systemInfo = {}
  },
  methods: {
    getSystemInfo: function () {
      uni.getSystemInfo({
        success: (res) => {
          this.systemInfo = res
        },
      })
    },
  },
}
</script>

<style>
.uni-pd {
  padding-left: 30 rpx;
}
</style>
