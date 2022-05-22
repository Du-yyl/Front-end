// pages/index/index.js
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        msg: '初始化默认数据',
        avaUrl: '/static/imgs/img_1.jpg',
    },
    handleParent () {
        console.log('父元素')
    },
    handleChild () {
        console.log('子元素')
    },
    
    toLog () {
        wx.reLaunch({
            url: '/pages/log/log',
        })
    },
    // 获取用户数据
    // getUserInfo () {
    // console.log("获取用户信息");
    // },
    // 通过这个回调能获取指定用户的数据，通过传参进行数据交换
    handleGetUserInfo (res) {
        // 通过返回对象中的 detail 进行判断，新版本中直接会进行获取，老版本中会将用户数据保存在 detail 中的 userinfo 中
        // 直接通过保存的数据进行修改，完成头像更新
        this.setData({
            avaUrl: res.detail.userInfo.avatarUrl,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        console.log('onLoad')
        this.setData({
            msg: '这是修改之后的数据',
        })
        /**
         * 通过这个可以在加载的时候就判断内存中有无要使用的数据，直接进行获取
         */
        wx.getUserInfo({
            success (res) {
                // 如果成功获取，真的有要使用的数据，那么直接进行使用，进行更新数据
                console.log('success -> ', res)
                that.setData({
                    avaUrl: res.userInfo.avatarUrl,
                })
            },
            // 如果获取失败，没有数据，那么就直接使用默认的内容
            fail (res) {
                console.log('fail -> ', res)
                that.setData({
                    avaUrl: '/static/imgs/img_1.jpg',
                })
            },
            
        })
    },
    
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () { },
    
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () { },
    
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () { },
    
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () { },
    
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
