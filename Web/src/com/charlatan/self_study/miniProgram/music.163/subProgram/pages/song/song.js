import request from '../../../utils/request'
import pubsub from 'pubsub-js'
// 获取全局的数据
const appInstance = getApp()
Page({
    timer: null,
    bgMusic: null,
    data: {
        //  播放的遥感是否落下
        isPlay: false,
        //  是否随机播放
        isRandom: false,
        //  旋转角度
        rotationAngle: 0,
        //  本页的歌曲数据
        song: {},
        //  歌曲数据
        tune: '',
        //  目前的播放时长
        newSingTime: '00:00',
        //  当前歌曲总时长
        totalSongTime: '00:00',
        //  通过播放的百分比计算的进度条长度
        progressBar: 0,
        //  是否正在加载
        isLoading: false,
    },
    
    /**
     * 音乐播放结束进行触发，将内容进行回复
     */
    isEnd: function () {
        this.setData({
            isPlay: false,
            rotationAngle: 0,
        })
        this.noPlay()
        // 播放结束时，将全局中的播放属性进行更改
        appInstance.globalData.isMusicPlay = false
        appInstance.globalData.playMusicID = -1
        
    },
    
    /**
     * 加载完成时调用，只调用一次
     * 如果传入有参数，那么会在这进行保存，query 的参数就在这保存
     * @param options 这个参数中保存了 query 中传入的内容，并且这个参数只能是字符串，如果是其他类型，会调用指定的 toString 方法
     */
    
    onLoad: async function (options) {
        let ids = options.songID
        this.index = options.index
        // 如果数据量过大，会自动进行截断，所以这里接收到的是一个不完整的数据
        // console.log(options.songID);
        
        let song = await request('/song/detail', { ids: ids })
        
        // console.log(song.songs[0].dt);
        let s = Math.round(song.songs[0].dt / 1000)
        // this.timers = s
        this.setData({ song: song.songs[0], totalSongTime: this.computeM(s) })
        // 动态设置顶部歌名
        wx.setNavigationBarTitle({ title: song.songs[0].name })
        let tune = await request('/song/url', { id: ids })
        this.setData({ tune: tune.data[0].url })
        if (appInstance.globalData.isMusicPlay && appInstance.globalData.playMusicID === this.data.song.al.id) {
            //  进入这里说明一定有以前的数据，
            this.play()
        }
        
        //  这个实例能返回一个全局唯一的背景音乐播放对象，通过这个对音乐进行控制
        this.bgMusic = wx.getBackgroundAudioManager()
        // console.log("运行了");
        // 因为这个函数在页面加载时运行一次，所以将函数保存在这里，并指定进行调用
        // htis.bgMusic.play()
        this.bgMusic.onPlay(this.play)
        this.bgMusic.onPause(this.noPlay)
        // 监听音乐自然结束
        this.bgMusic.onEnded(() => {
            this.handleSwitch({
                target: {
                    id: 'pre',
                },
            })
        })
        //  监听音乐停止（可能用户直接把微信删了【万一呢】）
        this.bgMusic.onStop(() => {this.isEnd()})
        
        //   监听音乐能进入播放状态时触发【网络卡顿，能播放时候就触发】
        this.bgMusic.onCanplay(() => {
            // console.log('现在能吧播放');
            clearInterval(this.timer)
            // 这里绑定监听事件，如果开始播放就开始动画，并更改状态
            //  开始播放
            this.setData({
                isLoading: false,
            })
            this.timer = setInterval(() => {
                let { rotationAngle } = this.data
                rotationAngle += 10
                this.setData({
                    rotationAngle,
                })
            }, 160)
        })
        //  监听歌曲数据不足，需要停下来加载数据时触发
        this.bgMusic.onWaiting(() => {
            // console.log("现在需要加载数据");
            // this.bgMusic.pause()
            this.setData({
                isLoading: true,
            })
            clearInterval(this.timer)
        })
        
        //  实时显示更新当前播放进度
        this.bgMusic.onTimeUpdate(() => {
            // 获取当前播放进度【只读】
            let time = Math.round(this.bgMusic.currentTime)
            let nowTime = this.computeM(time)
            this.setData({
                newSingTime: nowTime,
                progressBar: time / s * 440,
            })
        })
    },
    /**
     * 输入秒，输出分钟数
     * @param second
     * @returns {string}
     */
    computeM (second) {
        return (Math.floor(second / 60) < 10 ? '0' + Math.floor(second / 60) : Math.floor(second / 60))
            + ':' +
            (Math.floor(second % 60) < 10 ? '0' + Math.floor(second % 60) : Math.floor(second % 60))
    },
    
    /**
     * 随机播放被点击
     */
    randomPlay () {
        
        this.setData({
            isRandom: !this.data.isRandom,
        })
        
    },
    
    /**
     * 是否播放
     */
    isPlay (_, isPlay = !this.data.isPlay, musicID) {
        // console.log(isPlay);
        // console.log(this.data.isPlay)
        if (!isPlay) {
            // 如果是播放状态，那么就暂停
            this.bgMusic.pause()
        } else {
            // 进入这里只当进行绑定，开始播放
            //  开始播放
            this.bgMusic.src = this.data.tune
            // 设置的音乐的播放必须含有 title 如果没有，音乐不能播放
            this.bgMusic.title = this.data.song.name
            // this.bgMusic.play()
        }
    },
    
    /**
     * 控制音乐的播放和暂停
     */
    musicPlay (isPlay) {
        // 实例上监视播放和暂停的回调
        if (isPlay) {
        
        } else {
        
        }
    },
    
    /**
     * 分享
     * @param event
     */
    onShareAppMessage (event) {
        return event.from === 'button' ? {
            title: '来自三个点的分享',
            imageUrl: event.target.id,
            page: '/pages/recommendedSongs/recommendedSongs',
        } : {
            title: '来自整个页面的分享',
            page: '/pages/recommendedSongs/recommendedSongs',
        }
    },
    
    // 播放事件
    play () {
        // 播放时，将全局中的播放属性进行更改
        
        appInstance.globalData.isMusicPlay = true
        appInstance.globalData.playMusicID = this.data.song.al.id
        clearInterval(this.timer)
        // 这里绑定监听事件，如果开始播放就开始动画，并更改状态
        //  开始播放
        this.timer = setInterval(() => {
            let { rotationAngle } = this.data
            rotationAngle += 10
            this.setData({
                rotationAngle,
            })
        }, 160)
        this.setData({
            isPlay: true,
        })
    },
    
    /**
     * 暂停事件
     */
    noPlay () {
        // 播放时，将全局中的播放属性进行更改
        appInstance.globalData.isMusicPlay = false
        // 这里绑定停止事件，这两个事件都是由总的一个函数进行调用，如果控制了开始和暂停，那么就会进行这个函数的调用，所以进行统一的指定
        clearInterval(this.timer)
        this.setData({
            isPlay: false,
        })
    },
    
    /**
     * 处理切换歌曲
     */
    handleSwitch (event) {
        
        //  当调用切换歌曲时，通过这个函数的调用，接收更新后的数据、
        // 因为每一次触发这个事件，都会将这个事件保存在 指定的ID 中进行触发，所以事件会多次绑定，并一起触发
        pubsub.subscribe('acceptID', async (_, obj) => {
            let { id, index } = obj
            // console.log(id, index)
            this.isEnd()
            // 将数据重新渲染
            await this.onLoad({ songID: id, index })
            this.isPlay('', true)
            // this.play()
            pubsub.unsubscribe('acceptID')
        })
        pubsub.publish('switchMusic', { type: event.target.id, index: this.index })
    },
    
})
