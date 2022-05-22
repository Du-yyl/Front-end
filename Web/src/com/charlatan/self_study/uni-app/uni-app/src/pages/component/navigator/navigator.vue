<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-btn-v">
        <navigator hover-class="navigator-hover" url="navigate/navigate?title=navigate">
          <button type="default">跳转到新页面</button>
        </navigator>
        <navigator hover-class="other-navigator-hover" open-type="redirect" url="redirect/redirect?title=redirect">
          <button type="default">在当前页打开</button>
        </navigator>
        <navigator v-if="!hasLeftWin" hover-class="other-navigator-hover" open-type="switchTab"
                   url="/pages/tabBar/extUI/extUI">
          <button type="default">跳转tab页面</button>
        </navigator>
      </view>
    </view>
  </view>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      title: 'navigator',
    }
  },
  computed: {
    ...mapState({
      hasLeftWin: state => !state.noMatchLeftWindow,
    }),
  },
}
</script>
