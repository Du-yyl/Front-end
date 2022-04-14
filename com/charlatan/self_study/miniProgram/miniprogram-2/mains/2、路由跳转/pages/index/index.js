// pages/index/index.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    msg: '初始化默认数据',
  },
  handleParent () {
    console.log('父元素')
  },
  handleChild () {
    console.log('子元素')
  },
  
  toLog () {
    // 跳转到指定的页面，通过配置对象中的 url 进行定义，并且这个路径需要是绝对路径
    // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
    // wx.navigateTo({
    //   url:'/pages/log/log'
    // })
    
    // 关闭当前页面，跳转到应用内的某个页面。
    // wx.redirectTo({
    //   url:"/pages/log/log"
    // })
    
    // 关闭所有页面，打开到应用内的某个页面
    wx.reLaunch({
      url: '/pages/log/log',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('这个方法是最先执行的')
    this.setData({
      msg: '这是修改之后的数据',
    })
    console.log(this)
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
