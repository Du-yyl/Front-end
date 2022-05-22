import request from '../../utils/request'
import pubsub from 'pubsub-js'

Page({
    data: {
        //  展示的今日时间
        dataTime: '',
        //  推荐歌曲数据
        recommendSongs: [],
    },
    
    onLoad: async function (options) {
        this.setData({
            dataTime: new Date().getFullYear() + '/ ' + (new Date().getMonth() + 1) + '/ ' + new Date().getDate(),
        })
        
        //  使用 pubsub 进行页面通信事件的绑定
        pubsub.subscribe('switchMusic', (_, obj) => {
            let { type, index } = obj
            index = index << 0
            let songs = this.data.recommendSongs
            let len = songs.length
            // if (type === 'pre') {
            //   index =  songs[index === 0 ? len-1 : --index].id
            // } else {
            //   index =  songs[index === len-1 ? 0 : ++index].id
            // }
            let id = type === 'pre' ?
                songs[index === 0 ? len - 1 : --index].id
                :
                songs[index === len - 1 ? 0 : ++index].id
            pubsub.publish('acceptID', { id, index })
        })
        
    },
    /**
     * 分享歌曲
     */
    onShareAppMessage (event) {
        return event.from === 'button' ? {
            title: '来自三个点的分享',
            imageUrl: event.target.id,
            page: '/pages/song/song',
        } : {
            title: '来自整个页面的分享',
            page: '/pages/song/song',
        }
    },
    
    /**
     * 点击跳转指定的指定的播放页面
     */
    handleSongsTap (event) {
        // 使用 query 进行参数的传递
        wx.navigateTo({
            url: '/pages/song/song?songID=' + event.currentTarget.id + '&index=' + event.currentTarget.dataset.index,
        })
    },
    
    /**
     * 只要展示就判断登录没登录
     */
    async onShow () {
        // 判断用户是否登录
        let isLogin = wx.getStorageSync('cookie')
        if (isLogin) {
            let songs = await request('/recommend/songs', {})
            console.log(songs)
            if (songs.code === 301) {
                wx.showToast({
                    title: '请登录',
                    icon: 'error',
                })
                setTimeout(() => {
                    wx.hideToast()
                    wx.navigateTo({
                        url: '/pages/login/login',
                    })
                }, 1000)
            }
            this.setData({
                recommendSongs: songs.recommend,
            })
        } else {
            wx.showToast({
                title: '请登录',
                icon: 'error',
            })
            setTimeout(() => {
                wx.hideToast()
                wx.navigateTo({
                    url: '/pages/login/login',
                })
            }, 1000)
        }
    },
})
