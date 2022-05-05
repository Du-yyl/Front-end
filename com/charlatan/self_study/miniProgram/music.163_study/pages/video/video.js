import request from '../../utils/request'

let preVideo = ''
Page ({
	data: {
		navs: [],
		navID: 'a',
		videos: [],
		videoID: '',
		// 是否正在更新数据
		isTrigger: false,
		// 视频播放长度
		playLens: [],
	},
	onLoad: async function (options) {
		let isLogin = wx.getStorageSync ('cookie')
		if ( isLogin ) {
			let navs = await request ('/video/group/list', {})
			this.setData ({
				navs: navs.data.slice (0, 10),
				navID: 'scroll' + navs.data[0].id,
			})
			await this.getData ()
		} else {
			wx.showToast ({
				title: '请登录',
				icon: 'error',
			})
			setTimeout (() => {
				wx.hideToast ()
				wx.navigateTo ({
					url: '/pages/login/login',
				})
			}, 1000)
		}
	},
	/**
	 * 发送请求
	 * @returns {Promise<void>}
	 */
	getData: async function () {
		wx.showLoading ({
			title: '正在加载',
		})
		let videos = await request ('/video/group', {
			id: this.data.navID.slice (6),
		})
		this.setData ({
			videos: videos.datas,
		})
		wx.hideLoading ()
	},
	
	/**
	 * 点击切换，通过不同的请求展示不同的内容
	 * @param event
	 * @returns {Promise<void>}
	 */
	async handleClick (event) {
		this.setData ({
			navID: event.currentTarget.id,
		})
		this.setData ({
			videos: [],
		})
		await this.getData ()
	},
	
	/**
	 * 不同的视频的破防触发，通过更新数据实现数据视频和图片的切换
	 * @param event
	 */
	handleVideoPlay (event) {
		let { playLens } = this.data
		let id = event.target.id
		// 这个方法接收一个ID，对应指定的视频，并返回一个对这个视频进行控制的方法，通过这个进行原来的其他视频的控制
		let nextVideo = wx.createVideoContext (id)
		
		// 先判断这个视频是否播放过，如果播放过，从指定的地方开始播放
		let preTime = playLens.find ((item) => item.id === id)
		if ( preTime ) {
			nextVideo.seek (preTime.time)
		}
		this.setData ({
			videoID: id,
		})
		// if (preVideo) {
		// //  如果能进入这里说明一定有数据，那么就不是第一次播放
		// //  如果点击暂停和下一个播放的视频是同一个，那么不应该暂停
		//   if (!nextVideo === preVideo) {
		//     //  将上一个视频进行暂停
		//     preVideo.pause()
		//     preVideo = nextVideo
		//   }
		// }else {
		// //  进入这里一定是第一次播放
		// //  将最新的播放进行替换
		//   preVideo = nextVideo
		// }
		
	},
	
	/**
	 * 播放时更新观看时长
	 * @param event
	 */
	handleTimeUpdate (event) {
		let obj = { id: event.currentTarget.id, time: event.detail.currentTime }
		let { playLens } = this.data
		let preTime = this.data.playLens.find (item => item.id === obj.id)
		if ( preTime ) {
			preTime.time = event.detail.currentTime
		} else {
			playLens.push (obj)
		}
		this.setData ({
			playLens,
		})
	},
	
	/**
	 * 视频播放结束调用
	 */
	handleEnded (event) {
		let { playLens } = this.data
		let index = playLens.findIndex ((item) => item.id === event.currentTarget.id)
		playLens.splice (index, 1)
		this.setData ({
			playLens,
		})
	},
	
	/**
	 * 下拉刷新
	 */
	async handleRefresh () {
		this.setData ({
			isTrigger: true,
		})
		await this.getData ()
		this.setData ({
			isTrigger: false,
		})
	},
	/**
	 * 触底加载
	 */
	async handleEnd () {
		// 模拟新数据
		let newList = [
			{
				'type': 1,
				'displayed': false,
				'alg': 'onlineHotGroup',
				'extAlg': null,
				'data': {
					'alg': 'onlineHotGroup',
					'scm': '1.music-video-timeline.video_timeline.video.181017.-295043608',
					'threadId': 'R_VI_62_3CDB6FF0713594D1EDCF01650DA12E25',
					'coverUrl': 'https://p1.music.126.net/QvQsh-HdboqCnb6fpJBIlA==/109951163996294231.jpg',
					'height': 360,
					'width': 640,
					'title': '小青：什么是成亲啊，成亲好玩吗？',
					'description': '',
					'commentCount': 199,
					'shareCount': 115,
					'resolutions': [
						{
							'resolution': 240,
							'size': 12977563,
						},
					],
					'creator': {
						'defaultAvatar': false,
						'province': 510000,
						'authStatus': 0,
						'followed': false,
						'avatarUrl': 'http://p1.music.126.net/s7iyNaijfSJTMe2ddoXa5Q==/109951163618982873.jpg',
						'accountStatus': 0,
						'gender': 2,
						'city': 510100,
						'birthday': 888940800000,
						'userId': 365410019,
						'userType': 0,
						'nickname': '橘子果纱',
						'signature': '是懒癌患者',
						'description': '',
						'detailDescription': '',
						'avatarImgId': 109951163618982880,
						'backgroundImgId': 109951164627830740,
						'backgroundUrl': 'http://p1.music.126.net/cdwduI0UwGg4BCamgy2IQA==/109951164627830742.jpg',
						'authority': 0,
						'mutual': false,
						'expertTags': null,
						'experts': null,
						'djStatus': 0,
						'vipType': 0,
						'remarkName': null,
						'avatarImgIdStr': '109951163618982873',
						'backgroundImgIdStr': '109951164627830742',
					},
					'urlInfo': {
						'id': '3CDB6FF0713594D1EDCF01650DA12E25',
						'url': 'http://vodkgeyttp9.vod.126.net/vodkgeyttp8/IbzH1Hoo_2443358492_sd.mp4?ts=1649583820&rid=096F19E7D11B77956A5CEC226A4969CA&rl=3&rs=kkkKdvDrFJGKCkeYWKSjtettYXTkiBFJ&sign=734f955363661c1a97f9b2cd0b74599b&ext=u2A%2FphZ5BUCMZ%2Bd376Qaby7SJc6v32FoEqddy8OxmSmZnsTgkTLSyFtU1ElC1I1ceydK%2FEHS0AiwlSMAbje%2FOveibeMe2kU4neNYj%2FTXKW0kWW3irMrU2zBrYJAXlG2sAfief%2BMpPe0zsg2PbNvjTRsfpiBmXHqQhQmRzBstV4xzVa5qNNisazXtxvTIjsrickMX6sOy5SIpvZVjwX2InQfn44KB3gcIUoxwNVyGNj4ziHnOOs4XerL8p7rh3eQY',
						'size': 12977563,
						'validityTime': 1200,
						'needPay': false,
						'payInfo': null,
						'r': 240,
					},
					'videoGroup': [
						{
							'id': 58101,
							'name': '听BGM',
							'alg': null,
						},
						{
							'id': 1105,
							'name': '最佳饭制',
							'alg': null,
						},
						{
							'id': 3107,
							'name': '混剪',
							'alg': null,
						},
						{
							'id': 3100,
							'name': '影视',
							'alg': null,
						},
						{
							'id': 23126,
							'name': '电视剧',
							'alg': null,
						},
						{
							'id': 76106,
							'name': '饭制混剪',
							'alg': null,
						},
						{
							'id': 14126,
							'name': '国产剧',
							'alg': null,
						},
						{
							'id': 13102,
							'name': '古装',
							'alg': null,
						},
					],
					'previewUrl': null,
					'previewDurationms': 0,
					'hasRelatedGameAd': false,
					'markTypes': null,
					'relateSong': [
						{
							'name': '雁行千峰',
							'id': 464647776,
							'pst': 0,
							't': 0,
							'ar': [
								{
									'id': 8062,
									'name': '灰色',
									'tns': [],
									'alias': [],
								},
								{
									'id': 12083041,
									'name': '未必',
									'tns': [],
									'alias': [],
								},
							],
							'alia': [],
							'pop': 70,
							'st': 0,
							'rt': null,
							'fee': 8,
							'v': 21,
							'crbt': null,
							'cf': '',
							'al': {
								'id': 35266173,
								'name': '雁锦',
								'picUrl': 'http://p4.music.126.net/brtKZnqe7ExowVrbT922Mg==/18599338697296502.jpg',
								'tns': [],
								'pic_str': '18599338697296502',
								'pic': 18599338697296504,
							},
							'dt': 265308,
							'h': {
								'br': 320000,
								'fid': 0,
								'size': 10615162,
								'vd': -4300,
							},
							'm': {
								'br': 192000,
								'fid': 0,
								'size': 6369115,
								'vd': -1600,
							},
							'l': {
								'br': 128000,
								'fid': 0,
								'size': 4246091,
								'vd': 200,
							},
							'a': null,
							'cd': '01',
							'no': 10,
							'rtUrl': null,
							'ftype': 0,
							'rtUrls': [],
							'djId': 0,
							'copyright': 2,
							's_id': 0,
							'mst': 9,
							'cp': 0,
							'mv': 0,
							'rtype': 0,
							'rurl': null,
							'publishTime': 1489507200007,
							'privilege': {
								'id': 464647776,
								'fee': 8,
								'payed': 1,
								'st': 0,
								'pl': 999000,
								'dl': 999000,
								'sp': 7,
								'cp': 1,
								'subp': 1,
								'cs': false,
								'maxbr': 999000,
								'fl': 128000,
								'toast': false,
								'flag': 256,
								'preSell': false,
							},
						},
					],
					'relatedInfo': null,
					'videoUserLiveInfo': null,
					'vid': '3CDB6FF0713594D1EDCF01650DA12E25',
					'durationms': 175594,
					'playTime': 787950,
					'praisedCount': 3391,
					'praised': false,
					'subscribed': false,
				},
			},
			{
				'type': 1,
				'displayed': false,
				'alg': 'onlineHotGroup',
				'extAlg': null,
				'data': {
					'alg': 'onlineHotGroup',
					'scm': '1.music-video-timeline.video_timeline.video.181017.-295043608',
					'threadId': 'R_VI_62_690F90C9B666C3B5D797B85ACAE900A1',
					'coverUrl': 'https://p1.music.126.net/Xf8iZI4-npHEuugYvRBXzQ==/109951163934797464.jpg',
					'height': 1080,
					'width': 1920,
					'title': '是老人变坏了？还是坏人变老了？老奶奶都一起去抢银行了',
					'description': '是老人变坏了？还是坏人变老了？老奶奶都一起去抢银行了',
					'commentCount': 20,
					'shareCount': 56,
					'resolutions': [
						{
							'resolution': 240,
							'size': 20158835,
						},
						{
							'resolution': 480,
							'size': 33442331,
						},
						{
							'resolution': 720,
							'size': 48304329,
						},
						{
							'resolution': 1080,
							'size': 84125493,
						},
					],
					'creator': {
						'defaultAvatar': false,
						'province': 370000,
						'authStatus': 0,
						'followed': false,
						'avatarUrl': 'http://p1.music.126.net/9DuTc5ZepPUopUvEdsb85A==/109951163986314185.jpg',
						'accountStatus': 0,
						'gender': 0,
						'city': 370600,
						'birthday': -2209017600000,
						'userId': 1718470049,
						'userType': 0,
						'nickname': '游音社',
						'signature': '乐玩游音尽在游音社',
						'description': '',
						'detailDescription': '',
						'avatarImgId': 109951163986314190,
						'backgroundImgId': 109951162868128400,
						'backgroundUrl': 'http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg',
						'authority': 0,
						'mutual': false,
						'expertTags': null,
						'experts': null,
						'djStatus': 0,
						'vipType': 0,
						'remarkName': null,
						'avatarImgIdStr': '109951163986314185',
						'backgroundImgIdStr': '109951162868128395',
					},
					'urlInfo': {
						'id': '690F90C9B666C3B5D797B85ACAE900A1',
						'url': 'http://vodkgeyttp9.vod.126.net/vodkgeyttp8/uTWpLoPz_2384290011_uhd.mp4?ts=1649583820&rid=096F19E7D11B77956A5CEC226A4969CA&rl=3&rs=WSLWVjMaIeWKARpUNZFGvtZjEZtVQIfh&sign=1c8aaa9abcee207ce87046352cef64ef&ext=u2A%2FphZ5BUCMZ%2Bd376Qaby7SJc6v32FoEqddy8OxmSmZnsTgkTLSyFtU1ElC1I1ceydK%2FEHS0AiwlSMAbje%2FOveibeMe2kU4neNYj%2FTXKW0kWW3irMrU2zBrYJAXlG2sAfief%2BMpPe0zsg2PbNvjTRsfpiBmXHqQhQmRzBstV4xzVa5qNNisazXtxvTIjsrickMX6sOy5SIpvZVjwX2InQfn44KB3gcIUoxwNVyGNj4ziHnOOs4XerL8p7rh3eQY',
						'size': 84125493,
						'validityTime': 1200,
						'needPay': false,
						'payInfo': null,
						'r': 1080,
					},
					'videoGroup': [
						{
							'id': 58101,
							'name': '听BGM',
							'alg': null,
						},
						{
							'id': 3100,
							'name': '影视',
							'alg': null,
						},
						{
							'id': 94101,
							'name': '评论与解说',
							'alg': null,
						},
						{
							'id': 15112,
							'name': '欧美电影',
							'alg': null,
						},
						{
							'id': 13198,
							'name': '动画',
							'alg': null,
						},
						{
							'id': 24127,
							'name': '电影',
							'alg': null,
						},
					],
					'previewUrl': null,
					'previewDurationms': 0,
					'hasRelatedGameAd': false,
					'markTypes': null,
					'relateSong': [],
					'relatedInfo': null,
					'videoUserLiveInfo': null,
					'vid': '690F90C9B666C3B5D797B85ACAE900A1',
					'durationms': 174080,
					'playTime': 323812,
					'praisedCount': 1810,
					'praised': false,
					'subscribed': false,
				},
			},
			{
				'type': 1,
				'displayed': false,
				'alg': 'onlineHotGroup',
				'extAlg': null,
				'data': {
					'alg': 'onlineHotGroup',
					'scm': '1.music-video-timeline.video_timeline.video.181017.-295043608',
					'threadId': 'R_VI_62_5F1523BE9045744C1EC74AC2BF03F3CA',
					'coverUrl': 'https://p1.music.126.net/KHSQrs2p4QgCa7i_p56J3g==/109951164065667471.jpg',
					'height': 1080,
					'width': 1920,
					'title': '《这个杀手不太冷》经典台词混剪',
					'description': '不要以为我不懂爱情，我的胃知道。它以前老是痛，现却是暖暖的。\n音乐：《But I Just Want to Grow Old with You》by Jugg$hots\n视频：Eleanor Hao\n\n',
					'commentCount': 61,
					'shareCount': 423,
					'resolutions': [
						{
							'resolution': 240,
							'size': 9829462,
						},
						{
							'resolution': 480,
							'size': 17555662,
						},
						{
							'resolution': 720,
							'size': 28542491,
						},
						{
							'resolution': 1080,
							'size': 105877196,
						},
					],
					'creator': {
						'defaultAvatar': false,
						'province': 510000,
						'authStatus': 1,
						'followed': false,
						'avatarUrl': 'http://p1.music.126.net/KqdUOqJMXHydPmj2SyRCKQ==/109951166455811228.jpg',
						'accountStatus': 0,
						'gender': 1,
						'city': 510500,
						'birthday': 888422400000,
						'userId': 1313152427,
						'userType': 4,
						'nickname': 'JuggShots_RADI8',
						'signature': 'Loneliness Is A Gift.',
						'description': '',
						'detailDescription': '',
						'avatarImgId': 109951166455811230,
						'backgroundImgId': 109951166455821180,
						'backgroundUrl': 'http://p1.music.126.net/BpC89sjhzk8h0jCgJttivg==/109951166455821182.jpg',
						'authority': 0,
						'mutual': false,
						'expertTags': [
							'电子',
						],
						'experts': null,
						'djStatus': 10,
						'vipType': 11,
						'remarkName': null,
						'avatarImgIdStr': '109951166455811228',
						'backgroundImgIdStr': '109951166455821182',
					},
					'urlInfo': {
						'id': '5F1523BE9045744C1EC74AC2BF03F3CA',
						'url': 'http://vodkgeyttp9.vod.126.net/vodkgeyttp8/BLdpGuSB_2494471010_uhd.mp4?ts=1649583820&rid=096F19E7D11B77956A5CEC226A4969CA&rl=3&rs=LKHFWuIpkRbFIrScrcnGLgGppTGcShhy&sign=eeee58ab3310bd8b49c8d2a92baa4011&ext=u2A%2FphZ5BUCMZ%2Bd376Qaby7SJc6v32FoEqddy8OxmSmZnsTgkTLSyFtU1ElC1I1ceydK%2FEHS0AiwlSMAbje%2FOveibeMe2kU4neNYj%2FTXKW0kWW3irMrU2zBrYJAXlG2sAfief%2BMpPe0zsg2PbNvjTRsfpiBmXHqQhQmRzBstV4xzVa5qNNisazXtxvTIjsrickMX6sOy5SIpvZVjwX2InQfn44KB3gcIUoxwNVyGNj4ziHnOOs4XerL8p7rh3eQY',
						'size': 105877196,
						'validityTime': 1200,
						'needPay': false,
						'payInfo': null,
						'r': 1080,
					},
					'videoGroup': [
						{
							'id': 58101,
							'name': '听BGM',
							'alg': null,
						},
						{
							'id': 1105,
							'name': '最佳饭制',
							'alg': null,
						},
						{
							'id': 3107,
							'name': '混剪',
							'alg': null,
						},
						{
							'id': 3100,
							'name': '影视',
							'alg': null,
						},
						{
							'id': 15112,
							'name': '欧美电影',
							'alg': null,
						},
						{
							'id': 13225,
							'name': '剧情',
							'alg': null,
						},
						{
							'id': 76106,
							'name': '饭制混剪',
							'alg': null,
						},
						{
							'id': 24127,
							'name': '电影',
							'alg': null,
						},
					],
					'previewUrl': null,
					'previewDurationms': 0,
					'hasRelatedGameAd': false,
					'markTypes': null,
					'relateSong': [],
					'relatedInfo': null,
					'videoUserLiveInfo': null,
					'vid': '5F1523BE9045744C1EC74AC2BF03F3CA',
					'durationms': 197113,
					'playTime': 226199,
					'praisedCount': 2104,
					'praised': false,
					'subscribed': false,
				},
			},
			{
				'type': 1,
				'displayed': false,
				'alg': 'onlineHotGroup',
				'extAlg': null,
				'data': {
					'alg': 'onlineHotGroup',
					'scm': '1.music-video-timeline.video_timeline.video.181017.-295043608',
					'threadId': 'R_VI_62_427BFC85A4E3B65DCFFB1973ADCBFCE7',
					'coverUrl': 'https://p1.music.126.net/k5y3TJJjYP07rf-75ObLoQ==/109951165207163847.jpg',
					'height': 720,
					'width': 1364,
					'title': '成了亲就可以为所欲为了？',
					'description': null,
					'commentCount': 65,
					'shareCount': 47,
					'resolutions': [
						{
							'resolution': 240,
							'size': 8817527,
						},
						{
							'resolution': 480,
							'size': 15133573,
						},
						{
							'resolution': 720,
							'size': 21266498,
						},
					],
					'creator': {
						'defaultAvatar': false,
						'province': 370000,
						'authStatus': 0,
						'followed': false,
						'avatarUrl': 'http://p1.music.126.net/7urfE48o6-Jf7y1IUMCTZA==/109951164984060995.jpg',
						'accountStatus': 0,
						'gender': 0,
						'city': 371700,
						'birthday': -2209017600000,
						'userId': 3322804075,
						'userType': 0,
						'nickname': '婉丽音乐',
						'signature': '',
						'description': '',
						'detailDescription': '',
						'avatarImgId': 109951164984061000,
						'backgroundImgId': 109951162868126480,
						'backgroundUrl': 'http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg',
						'authority': 0,
						'mutual': false,
						'expertTags': null,
						'experts': null,
						'djStatus': 0,
						'vipType': 0,
						'remarkName': null,
						'avatarImgIdStr': '109951164984060995',
						'backgroundImgIdStr': '109951162868126486',
					},
					'urlInfo': {
						'id': '427BFC85A4E3B65DCFFB1973ADCBFCE7',
						'url': 'http://vodkgeyttp9.vod.126.net/vodkgeyttp8/YXNuufVv_3079591200_shd.mp4?ts=1649583820&rid=096F19E7D11B77956A5CEC226A4969CA&rl=3&rs=ESIUGvLOsHkMCfjLnEOZPHmVveXZOkcB&sign=2a64b907b79dd9b432382deee96996ce&ext=u2A%2FphZ5BUCMZ%2Bd376Qaby7SJc6v32FoEqddy8OxmSmZnsTgkTLSyFtU1ElC1I1ceydK%2FEHS0AiwlSMAbje%2FOveibeMe2kU4neNYj%2FTXKW0kWW3irMrU2zBrYJAXlG2sAfief%2BMpPe0zsg2PbNvjTRsfpiBmXHqQhQmRzBstV4xzVa5qNNisazXtxvTIjsrickMX6sOy5SIpvZVjwX2InQfn44KB3gcIUoxwNVyGNj4ziHnOOs4XerL8p7rh3eQY',
						'size': 21266498,
						'validityTime': 1200,
						'needPay': false,
						'payInfo': null,
						'r': 720,
					},
					'videoGroup': [
						{
							'id': 58101,
							'name': '听BGM',
							'alg': null,
						},
						{
							'id': 1105,
							'name': '最佳饭制',
							'alg': null,
						},
						{
							'id': 3107,
							'name': '混剪',
							'alg': null,
						},
						{
							'id': 3100,
							'name': '影视',
							'alg': null,
						},
						{
							'id': 23126,
							'name': '电视剧',
							'alg': null,
						},
						{
							'id': 76106,
							'name': '饭制混剪',
							'alg': null,
						},
						{
							'id': 13102,
							'name': '古装',
							'alg': null,
						},
					],
					'previewUrl': null,
					'previewDurationms': 0,
					'hasRelatedGameAd': false,
					'markTypes': null,
					'relateSong': [],
					'relatedInfo': null,
					'videoUserLiveInfo': null,
					'vid': '427BFC85A4E3B65DCFFB1973ADCBFCE7',
					'durationms': 112918,
					'playTime': 226504,
					'praisedCount': 1198,
					'praised': false,
					'subscribed': false,
				},
			},
			{
				'type': 1,
				'displayed': false,
				'alg': 'onlineHotGroup',
				'extAlg': null,
				'data': {
					'alg': 'onlineHotGroup',
					'scm': '1.music-video-timeline.video_timeline.video.181017.-295043608',
					'threadId': 'R_VI_62_9FE90D68B6499FD25E10E2906F2E062B',
					'coverUrl': 'https://p1.music.126.net/ifdmEm2QsR3_KXkH6U8_AA==/109951163819063129.jpg',
					'height': 486,
					'width': 864,
					'title': '【春晚鬼畜】赵本山：我就是念诗之王！改革春风吹满地',
					'description': null,
					'commentCount': 260,
					'shareCount': 859,
					'resolutions': [
						{
							'resolution': 240,
							'size': 10762812,
						},
						{
							'resolution': 480,
							'size': 12474342,
						},
					],
					'creator': {
						'defaultAvatar': false,
						'province': 370000,
						'authStatus': 0,
						'followed': false,
						'avatarUrl': 'http://p1.music.126.net/LHYvv9qQQpE7orHVXO2lqQ==/109951163443875447.jpg',
						'accountStatus': 0,
						'gender': 1,
						'city': 370100,
						'birthday': 795024000000,
						'userId': 61000180,
						'userType': 204,
						'nickname': '民谣遇见摇滚',
						'signature': '热爱民谣、热爱摇滚、热爱现场音乐\r我是既民谣又摇滚的民谣日报\r视频投稿：463678708@qq.com',
						'description': '',
						'detailDescription': '',
						'avatarImgId': 109951163443875440,
						'backgroundImgId': 109951163300210850,
						'backgroundUrl': 'http://p1.music.126.net/DtaUPabiSRQWlxZsdTVijQ==/109951163300210848.jpg',
						'authority': 0,
						'mutual': false,
						'expertTags': null,
						'experts': {
							'1': '音乐视频达人',
						},
						'djStatus': 0,
						'vipType': 11,
						'remarkName': null,
						'avatarImgIdStr': '109951163443875447',
						'backgroundImgIdStr': '109951163300210848',
					},
					'urlInfo': {
						'id': '9FE90D68B6499FD25E10E2906F2E062B',
						'url': 'http://vodkgeyttp9.vod.126.net/cloudmusic/8412e937b271a42cd8671b7abb1281e2.mp4?ts=1649583820&rid=096F19E7D11B77956A5CEC226A4969CA&rl=3&rs=uyDEKtXofdQwDTCyIellOwUwRJSwfoEI&sign=70b63382a36ac7597de85c0566d3f4d5&ext=u2A%2FphZ5BUCMZ%2Bd376Qaby7SJc6v32FoEqddy8OxmSmZnsTgkTLSyFtU1ElC1I1ceydK%2FEHS0AiwlSMAbje%2FOveibeMe2kU4neNYj%2FTXKW0kWW3irMrU2zBrYJAXlG2sAfief%2BMpPe0zsg2PbNvjTRsfpiBmXHqQhQmRzBstV4xzVa5qNNisazXtxvTIjsrickMX6sOy5SIpvZVjwX2InQfn44KB3gcIUoxwNVyGNj4ziHnOOs4XerL8p7rh3eQY',
						'size': 12474342,
						'validityTime': 1200,
						'needPay': false,
						'payInfo': null,
						'r': 480,
					},
					'videoGroup': [
						{
							'id': 58101,
							'name': '听BGM',
							'alg': null,
						},
						{
							'id': 9100,
							'name': '指弹',
							'alg': null,
						},
						{
							'id': 75109,
							'name': '鬼畜剪辑',
							'alg': null,
						},
						{
							'id': 74120,
							'name': '鬼畜',
							'alg': null,
						},
					],
					'previewUrl': null,
					'previewDurationms': 0,
					'hasRelatedGameAd': false,
					'markTypes': null,
					'relateSong': [],
					'relatedInfo': null,
					'videoUserLiveInfo': null,
					'vid': '9FE90D68B6499FD25E10E2906F2E062B',
					'durationms': 145000,
					'playTime': 498605,
					'praisedCount': 3922,
					'praised': false,
					'subscribed': false,
				},
			},
			{
				'type': 1,
				'displayed': false,
				'alg': 'onlineHotGroup',
				'extAlg': null,
				'data': {
					'alg': 'onlineHotGroup',
					'scm': '1.music-video-timeline.video_timeline.video.181017.-295043608',
					'threadId': 'R_VI_62_129C0E1CF599A183BF46ECB452338A71',
					'coverUrl': 'https://p1.music.126.net/VT9MaskC1_sqbObCZkkYNg==/109951163899181875.jpg',
					'height': 720,
					'width': 1280,
					'title': '吊炸天的小栗旬，走路带风',
					'description': null,
					'commentCount': 286,
					'shareCount': 847,
					'resolutions': [
						{
							'resolution': 240,
							'size': 1544160,
						},
						{
							'resolution': 480,
							'size': 2799548,
						},
						{
							'resolution': 720,
							'size': 3473341,
						},
					],
					'creator': {
						'defaultAvatar': false,
						'province': 230000,
						'authStatus': 0,
						'followed': false,
						'avatarUrl': 'http://p1.music.126.net/KRGhzGtzeuwGbP763m-MPA==/109951163861724317.jpg',
						'accountStatus': 0,
						'gender': 2,
						'city': 230100,
						'birthday': 889200000000,
						'userId': 274808348,
						'userType': 0,
						'nickname': '劉江潋',
						'signature': '',
						'description': '',
						'detailDescription': '',
						'avatarImgId': 109951163861724320,
						'backgroundImgId': 109951165291450340,
						'backgroundUrl': 'http://p1.music.126.net/wvSN_O3iz19xV2TcR2zpuA==/109951165291450328.jpg',
						'authority': 0,
						'mutual': false,
						'expertTags': null,
						'experts': null,
						'djStatus': 0,
						'vipType': 0,
						'remarkName': null,
						'avatarImgIdStr': '109951163861724317',
						'backgroundImgIdStr': '109951165291450328',
					},
					'urlInfo': {
						'id': '129C0E1CF599A183BF46ECB452338A71',
						'url': 'http://vodkgeyttp9.vod.126.net/cloudmusic/1Qoj0ygJ_2349521615_shd.mp4?ts=1649583820&rid=096F19E7D11B77956A5CEC226A4969CA&rl=3&rs=VrWITrbHoIPLydzuKEdFsBjWLoPhuKpN&sign=96685f30919859e5bae0d75ef27a7faa&ext=u2A%2FphZ5BUCMZ%2Bd376Qaby7SJc6v32FoEqddy8OxmSmZnsTgkTLSyFtU1ElC1I1ceydK%2FEHS0AiwlSMAbje%2FOveibeMe2kU4neNYj%2FTXKW0kWW3irMrU2zBrYJAXlG2sAfief%2BMpPe0zsg2PbNvjTRsfpiBmXHqQhQmRzBstV4xzVa5qNNisazXtxvTIjsrickMX6sOy5SIpvZVjwX2InQfn44KB3gcIUoxwNVyGNj4ziHnOOs4XerL8p7rh3eQY',
						'size': 3473341,
						'validityTime': 1200,
						'needPay': false,
						'payInfo': null,
						'r': 720,
					},
					'videoGroup': [
						{
							'id': 58101,
							'name': '听BGM',
							'alg': null,
						},
						{
							'id': 1105,
							'name': '最佳饭制',
							'alg': null,
						},
						{
							'id': 3107,
							'name': '混剪',
							'alg': null,
						},
						{
							'id': 3100,
							'name': '影视',
							'alg': null,
						},
						{
							'id': 80100,
							'name': '日剧',
							'alg': null,
						},
						{
							'id': 23126,
							'name': '电视剧',
							'alg': null,
						},
						{
							'id': 76106,
							'name': '饭制混剪',
							'alg': null,
						},
						{
							'id': 14142,
							'name': '动作',
							'alg': null,
						},
					],
					'previewUrl': null,
					'previewDurationms': 0,
					'hasRelatedGameAd': false,
					'markTypes': null,
					'relateSong': [],
					'relatedInfo': null,
					'videoUserLiveInfo': null,
					'vid': '129C0E1CF599A183BF46ECB452338A71',
					'durationms': 18474,
					'playTime': 1309301,
					'praisedCount': 5426,
					'praised': false,
					'subscribed': false,
				},
			},
			{
				'type': 1,
				'displayed': false,
				'alg': 'onlineHotGroup',
				'extAlg': null,
				'data': {
					'alg': 'onlineHotGroup',
					'scm': '1.music-video-timeline.video_timeline.video.181017.-295043608',
					'threadId': 'R_VI_62_2E37BF748AD61E5A1F7600F98318519C',
					'coverUrl': 'https://p1.music.126.net/vLKf1ja8Us3Hu2Uto0i5fw==/109951163765259722.jpg',
					'height': 1080,
					'width': 1920,
					'title': '【漫展】成都东郊记忆 漫展混剪，最后一个小姐姐美若天仙！',
					'description': '#好想进入二次元#【漫展】成都东郊记忆 漫展混剪，最后一个小姐姐美若天仙！',
					'commentCount': 431,
					'shareCount': 294,
					'resolutions': [
						{
							'resolution': 240,
							'size': 6960606,
						},
						{
							'resolution': 480,
							'size': 11827666,
						},
						{
							'resolution': 720,
							'size': 17443767,
						},
						{
							'resolution': 1080,
							'size': 35384861,
						},
					],
					'creator': {
						'defaultAvatar': false,
						'province': 110000,
						'authStatus': 0,
						'followed': false,
						'avatarUrl': 'http://p1.music.126.net/s21aluCBLHAyHD4oVC6Yhw==/18967675091235840.jpg',
						'accountStatus': 0,
						'gender': 0,
						'city': 110101,
						'birthday': -2209017600000,
						'userId': 469550557,
						'userType': 0,
						'nickname': 'ACG分享菌',
						'signature': '不定期带来各类ACG内容',
						'description': '',
						'detailDescription': '',
						'avatarImgId': 18967675091235840,
						'backgroundImgId': 109951162868128400,
						'backgroundUrl': 'http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg',
						'authority': 0,
						'mutual': false,
						'expertTags': null,
						'experts': {
							'1': '音乐视频达人',
						},
						'djStatus': 0,
						'vipType': 0,
						'remarkName': null,
						'avatarImgIdStr': '18967675091235840',
						'backgroundImgIdStr': '109951162868128395',
					},
					'urlInfo': {
						'id': '2E37BF748AD61E5A1F7600F98318519C',
						'url': 'http://vodkgeyttp9.vod.126.net/vodkgeyttp8/TWq0uC80_2220469572_uhd.mp4?ts=1649583820&rid=096F19E7D11B77956A5CEC226A4969CA&rl=3&rs=VkUXrrFxmeFxyCGeVVfOTJPwjyrUoLXe&sign=45646bed3bd8193bc7de9dd45f7aaa94&ext=u2A%2FphZ5BUCMZ%2Bd376Qaby7SJc6v32FoEqddy8OxmSmZnsTgkTLSyFtU1ElC1I1ceydK%2FEHS0AiwlSMAbje%2FOveibeMe2kU4neNYj%2FTXKW0kWW3irMrU2zBrYJAXlG2sAfief%2BMpPe0zsg2PbNvjTRsfpiBmXHqQhQmRzBstV4xzVa5qNNisazXtxvTIjsrickMX6sOy5SIpvZVjwX2InQfn44KB3gcIUoxwNVyGNj4ziHnOOs4XerL8p7rh3eQY',
						'size': 35384861,
						'validityTime': 1200,
						'needPay': false,
						'payInfo': null,
						'r': 1080,
					},
					'videoGroup': [
						{
							'id': 58101,
							'name': '听BGM',
							'alg': null,
						},
						{
							'id': 3107,
							'name': '混剪',
							'alg': null,
						},
						{
							'id': 9107,
							'name': 'COS',
							'alg': null,
						},
						{
							'id': 3102,
							'name': '二次元',
							'alg': null,
						},
						{
							'id': 72116,
							'name': '短片',
							'alg': null,
						},
						{
							'id': 24143,
							'name': 'cosplay',
							'alg': null,
						},
					],
					'previewUrl': null,
					'previewDurationms': 0,
					'hasRelatedGameAd': false,
					'markTypes': [
						111,
					],
					'relateSong': [],
					'relatedInfo': null,
					'videoUserLiveInfo': null,
					'vid': '2E37BF748AD61E5A1F7600F98318519C',
					'durationms': 50267,
					'playTime': 1015074,
					'praisedCount': 5082,
					'praised': false,
					'subscribed': false,
				},
			},
			{
				'type': 1,
				'displayed': false,
				'alg': 'onlineHotGroup',
				'extAlg': null,
				'data': {
					'alg': 'onlineHotGroup',
					'scm': '1.music-video-timeline.video_timeline.video.181017.-295043608',
					'threadId': 'R_VI_62_594B9DDA6F84378ED87F816B53A46BE1',
					'coverUrl': 'https://p1.music.126.net/A8vqWA-isRqd6JemSN6H0w==/109951164160416707.jpg',
					'height': 720,
					'width': 1280,
					'title': 'CGI动画短片-电击动画',
					'description': null,
					'commentCount': 7,
					'shareCount': 21,
					'resolutions': [
						{
							'resolution': 240,
							'size': 28108333,
						},
						{
							'resolution': 480,
							'size': 43098422,
						},
						{
							'resolution': 720,
							'size': 56175743,
						},
					],
					'creator': {
						'defaultAvatar': false,
						'province': 310000,
						'authStatus': 0,
						'followed': false,
						'avatarUrl': 'http://p1.music.126.net/Y0Z54O5v3HVWiySiN6SgGA==/109951167140286548.jpg',
						'accountStatus': 0,
						'gender': 1,
						'city': 310101,
						'birthday': 757353600000,
						'userId': 350418560,
						'userType': 204,
						'nickname': 'irshatofficial',
						'signature': '年轻电音制作者, ᴜʏᴀɴǫi.ᴄᴏᴍ创建者/ʏᴏᴜᴛᴜʙᴇ流行ᴍᴠ搬运╰ ᴜʏɢʜᴜʀ✔ᴜᴢʙᴀᴋ✔ᴜɢ微电影✔欧美时尚之歌✔ ╯‖ 温馨提示 :如发现侵权内容，联系本人尽快删除 ‖',
						'description': '',
						'detailDescription': '',
						'avatarImgId': 109951167140286540,
						'backgroundImgId': 109951163778509260,
						'backgroundUrl': 'http://p1.music.126.net/h5nHSkx_XanV_PRHDnySsw==/109951163778509258.jpg',
						'authority': 0,
						'mutual': false,
						'expertTags': null,
						'experts': {
							'1': '音乐视频达人',
						},
						'djStatus': 10,
						'vipType': 11,
						'remarkName': null,
						'avatarImgIdStr': '109951167140286548',
						'backgroundImgIdStr': '109951163778509258',
					},
					'urlInfo': {
						'id': '594B9DDA6F84378ED87F816B53A46BE1',
						'url': 'http://vodkgeyttp9.vod.126.net/cloudmusic/HXKlNg01_2555859126_shd.mp4?ts=1649583820&rid=096F19E7D11B77956A5CEC226A4969CA&rl=3&rs=xDBBPhjoDfffxQpSoUoefujdLtoGxwlu&sign=973ae8b065a913a475d46e0ebe8dcfa9&ext=u2A%2FphZ5BUCMZ%2Bd376Qaby7SJc6v32FoEqddy8OxmSmZnsTgkTLSyFtU1ElC1I1ceydK%2FEHS0AiwlSMAbje%2FOveibeMe2kU4neNYj%2FTXKW0kWW3irMrU2zBrYJAXlG2sAfief%2BMpPe0zsg2PbNvjTRsfpiBmXHqQhQmRzBstV4xzVa5qNNisazXtxvTIjsrickMX6sOy5SIpvZVjwX2InQfn44KB3gcIUoxwNVyGNj4ziHnOOs4XerL8p7rh3eQY',
						'size': 56175743,
						'validityTime': 1200,
						'needPay': false,
						'payInfo': null,
						'r': 720,
					},
					'videoGroup': [
						{
							'id': 58101,
							'name': '听BGM',
							'alg': null,
						},
						{
							'id': 75117,
							'name': '创意动画',
							'alg': null,
						},
					],
					'previewUrl': null,
					'previewDurationms': 0,
					'hasRelatedGameAd': false,
					'markTypes': null,
					'relateSong': [],
					'relatedInfo': null,
					'videoUserLiveInfo': null,
					'vid': '594B9DDA6F84378ED87F816B53A46BE1',
					'durationms': 360000,
					'playTime': 54462,
					'praisedCount': 366,
					'praised': false,
					'subscribed': false,
				},
			},
		]
		
		// await this.getData()
		//  网易接口没有数据，模拟一个数据
		let videos = this.data.videos
		videos.push (...newList)
		this.setData ({
			videos,
		})
	},
	
	/**
	 * 页面的下拉刷新
	 * 相对应的也有上拉，不过这个例子中没有遇到，只要设置页面的滚动条就能实现，这里之说上拉
	 *
	 * 监听用户下拉刷新事件。
	 *
	 * 需要在 app.json 的 window 选项中或页面配置中开启 enablePullDownRefresh。
	 * 可以通过 wx.startPullDownRefresh 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
	 * 当处理完数据刷新后，wx.stopPullDownRefresh 可以停止当前页面的下拉刷新。
	 */
	onPullDownRefresh () {
	
	},
	
	/**
	 * 用户转发函数，将按钮的打开类型设置成 share 就能触发这个函数
	 * 如果不写这个函数，整个小程序的右上角是没有三个点分享的
	 */
	onShareAppMessage (event) {
		// 这个 event 的来自类型可能是 按钮 也可能是右上角的三个点，menu
		let imageUrl = event.target.id
		if ( event.from === 'button' ) {
			return {
				title: '来自点击按钮的转发',
				imageUrl,
				page: '/page/video/video',
			}
		}
		return {
			title: '自定义标题',
		}
	},
	/**
	 * 点击顶部，进入搜索
	 */
	handleTap () {
		wx.navigateTo ({
			url: '/pages/search/search',
		})
	},
})
