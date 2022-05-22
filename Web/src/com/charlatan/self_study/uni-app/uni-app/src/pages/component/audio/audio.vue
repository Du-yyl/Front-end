<template>
  <view>
    <page-head title="audio"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-center">
        <audio :action="audioAction" :author="current.author" :name="current.name" :poster="current.poster"
               :src="current.src"
               controls style="text-align: left"></audio>
        <view class="">audio组件不再维护，建议使用能力更强的uni.createInnerAudioContext()</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      current: {
        poster: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c517b410-5184-11eb-b997-9918a5dda011.jpeg',
        name: '致爱丽丝',
        author: '暂无',
        src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
      },
      audioAction: {
        method: 'pause',
      },
    }
  },
}
</script>
