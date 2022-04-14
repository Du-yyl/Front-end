// pages/index/index.js
import request from '../../utils/request'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    carouselImages: [
      { id: '001', bgUrl: '/static/images/img-1.jpg' },
      { id: '002', bgUrl: '/static/images/img-2.jpg' },
      { id: '003', bgUrl: '/static/images/img-3.jpg' },
      { id: '004', bgUrl: '/static/images/img-4.jpg' },
      { id: '005', bgUrl: '/static/images/img-5.jpg' },
      { id: '006', bgUrl: '/static/images/img-6.jpg' },
    ],
    // 五个主要列表
    navs: [
      { id: '001', handleFunc: 'recommendedSongs', class: 'iconfont icon-fangzi', title: '每日推荐' },
      { id: '002', handleFunc: '', class: 'iconfont icon-gedan', title: '歌单' },
      { id: '003', handleFunc: '', class: 'iconfont icon-paixingbang', title: '排行榜' },
      { id: '004', handleFunc: '', class: 'iconfont icon-diantai', title: '电台' },
      { id: '005', handleFunc: '', class: 'iconfont icon-zhibo', title: '直播' },
    ],
    songLists: [],
    topLists: [],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取用户唯一ID
    // 获取用户登录凭证
    wx.login({
      success: async res => {
        let code = res.code
        // 获取用户凭证
        console.log(res.code)
        //   发送给服务器
        let ans = await request('/getOpenId', {code})
        console.log(ans)
      },
    })
    
    let that = this
    // 设备类型
    let apparatusType = 2
    // 请求轮播图数据
    let res = await request('/banner', { type: apparatusType })
    let carouselImages = []
    for (let banner of res.banners) {
      carouselImages.push({
        id: banner.bannerId,
        bgUrl: banner.pic,
        title: banner.typeTitle,
      })
    }
    that.setData({
      carouselImages,
    })
    
    //  请求推荐个但是数据
    let limit = 10
    let songLists = []
    let songs = await request('/personalized', { limit })
    for (const list of songs.result) {
      songLists.push({
        id: list.id,
        name: list.name,
        listUrl: list.picUrl,
      })
    }
    that.setData({ songLists })
    
    //  热歌榜数据
    let topLists = []
    for (let i = 0, len = 4; i < len; i++) {
      let res = await request('/top/list', { idx: i })
      let songList = []
      for (let j = 0, len = 4; j < len; j++) {
        songList.push({
          id: res.playlist.tracks[j].id,
          name: res.playlist.tracks[j].name,
          bgUrl: res.playlist.tracks[j].al.picUrl,
        })
      }
      let obj = {
        id: res.playlist.id,
        name: res.playlist.name,
        title: res.playlist.description,
        songList,
      }
      topLists.push(obj)
      that.setData({
        topLists,
      })
    }
    
  },
  /**
   * 点击每日推荐按钮后跳转
   */
  recommendedSongs () {
    wx.navigateTo({
      url: '/pages/recommendedSongs/recommendedSongs',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
})
