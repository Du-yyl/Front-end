import request from '../../../utils/request'

let startY = 0
let start = 0
let moveY = 0
Page({
    data: {
        translateY: start,
        userInfo: {
            nickName: '游客',
            avaUrl: '/static/images/personal/missing-face.png',
            bgUrl: '/static/images/personal/bgImg2.jpg',
            userID: '',
        },
        recentSongs: [],
        
    },
    handleTouchStart (event) {
        // console.log('触摸开始')
        // console.log(event.target.offsetTop)
        // 因为用户点击的时候要进行数据的存储，所以这个数据在 event 的 touches 中进行保存
        // 因为用户不一定是一个手指进行接触，所以使用数组进行保存
        startY = event.touches[0].clientY
    },
    handleTouchMove (event) {
        moveY = event.touches[0].clientY - startY
        if (moveY < 48 && moveY >= 0) {
            this.setData({
                translateY: moveY,
            })
        }
    },
    handleTouchEnd () {
        this.setData({
            translateY: start,
        })
    },
    handleLogin () {
        wx.navigateTo({
            url: '/subProgram/pages/login/login',
        })
    },
    onLoad: function (options) {
    
    },
    onShow: async function () {
        //  进入后直接读取内存，如果登陆过，直接进行登录处理
        let text = wx.getStorageSync('userInfo')
        if (text) {
            //  能进入一定是有数据的
            this.setData({
                userInfo: JSON.parse(text),
            })
            let allData = await request('/user/record', { uid: this.data.userInfo.userID, type: 0 })
            let recentSongs = []
            for (let allDatum of allData.allData.splice(0, 10)) {
                recentSongs.push({
                    id: allDatum.song.id,
                    name: allDatum.song.name,
                    picUrl: allDatum.song.al.picUrl,
                })
            }
            this.setData({
                recentSongs,
            })
        }
        
    },
})
