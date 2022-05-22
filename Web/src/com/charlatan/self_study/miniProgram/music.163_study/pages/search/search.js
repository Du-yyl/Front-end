import request from '../../utils/request'

Page({
    isEnd: true,
    data: {
        //  搜索关键字
        inputValue: '请输入关键字',
        //  搜索结果
        searchResult: '',
        //  输入的内容
        inputContent: '',
        // 搜索
        search: [],
        values: '',
        //  搜索历史
        searchHistory: wx.getStorageSync('searchHistory') || [],
    },
    onLoad: async function (options) {
        let inputValue = await request('/search/default', {})
        let hotSong = await request('/search/hot/detail', {})
        // console.log(hotSong.data);
        this.setData({
            inputValue: inputValue.data.showKeyword,
            searchResult: hotSong.data,
        })
    },
    
    /**
     * 这个函数中会返回一个返回值。因为时异步的，所以返回的是一个 promise 并且这个 promise 会在搜索结果返回之后才会被解析。
     * 并这个结果作为最终的 value 交给 input 进行解析
     * 解决方式：将这个方法变成同步的就行了
     * @param e
     * @returns {Promise<void>}
     */
    handleInput: function (e) {
        let value = e.detail.value.trim()
        if (value === '') {
            this.setData({
                search: [],
            })
            return
        }
        this.setData({
            inputContent: value,
        })
        if (this.isEnd) {
            this.isEnd = false
            // 防抖处理
            this.timer = setTimeout(async () => {
                this.isEnd = true
                clearTimeout(this.timer)
                let searchValue = await request('/search', { keywords: value, limit: 10 })
                searchValue = searchValue.result.songs
                // 添加记录之前判断原来有没有这个记录
                if (this.data.searchHistory.indexOf(value) === -1) {
                    wx.setStorageSync('searchHistory', [value, ...this.data.searchHistory])
                }
                this.setData({
                    search: searchValue,
                    searchHistory: wx.getStorageSync('searchHistory'),
                })
                
                wx.setStorageSync('searchHistory', this.data.searchHistory)
            }, 500)
        }
    },
    /**
     * 点击取消搜索
     */
    handleSearchCancel () {
        this.setData({
            search: [],
            values: '',
        })
    },
    /**
     * 点击搜索结果，重新搜索
     * @param event
     * @returns {Promise<void>}
     */
    async handleHistaySearch (event) {
        let value = event.currentTarget.dataset.value
        let searchValue = await request('/search', { keywords: value, limit: 10 })
        searchValue = searchValue.result.songs
        this.setData({
            search: searchValue,
            values: value,
        })
    },
    // 清除历史记录
    handleClearHistory () {
        let that = this
        // 弹出提示框，如果点击的是确定，那么执行的删除，反之不执行
        wx.showModal({
            content: '确认清除吗？',
            success (res) {
                if (res.confirm) {
                    wx.removeStorageSync('searchHistory')
                    that.setData({
                        searchHistory: [],
                    })
                }
            },
        })
    },
})
