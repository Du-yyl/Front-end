import request from '../../utils/request'

Page({
    data: {
        // phone showPhone
        phoneInputClass: 'phone',
        // showPhoneText
        phoneInputTextClass: 'phoneText',
        
        passwordInputClass: 'password',
        passwordInputTextClass: 'passwordText',
        
        inputFocus: false,
        passwordFocus: false,
        
        phone: '',
        password: '',
        
        phoneHintShow: true,
        passwordHintShow: true,
        
        phoneHintTextValue: '',
        passwordHintTextValue: '',
        
    },
    bindPhoneFocus () {
        this.setData({
            phoneInputClass: 'phone showPhone',
            phoneInputTextClass: 'phoneText showPhoneText',
            phoneHintShow: false,
        })
    },
    bindPhoneBlur () {
        let value = this.data.phone.trim()
        if (value === '') {
            this.setData({
                phoneInputClass: 'phone',
                phoneInputTextClass: 'phoneText',
            })
            //  使用微信内容内容进行信息的提示
            //   wx.showToast({
            //     title:"手机号不能为空",
            //     icon:"error"
            //   })
        } else {
            if (value.length !== 11) {
                this.setData({
                    phoneHintShow: true,
                    phoneHintTextValue: '手机号长度非法',
                })
            } else {
                let exg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
                if (exg.test(value)) {
                    //  到这里，手机号合法
                    this.setData({
                        phoneHintShow: false,
                        phoneHintTextValue: '',
                    })
                } else {
                    this.setData({
                        phoneHintShow: true,
                        phoneHintTextValue: '手机号格式违法',
                    })
                }
            }
        }
    },
    
    bindPasswordFocus () {
        this.setData({
            passwordInputClass: 'password showPassword',
            passwordInputTextClass: 'passwordText showPasswordText',
            passwordHintShow: false,
        })
    },
    bindPasswordBlur () {
        let value = this.data.password.trim()
        if (value === '') {
            this.setData({
                passwordInputClass: 'password',
                passwordInputTextClass: 'passwordText',
            })
        } else {
            if (value.length < 6 || value.length > 20) {
                this.setData({
                    passwordHintShow: true,
                    passwordHintTextValue: '密码长度非法',
                })
            } else {
                this.setData({
                    passwordHintShow: false,
                    passwordHintTextValue: '',
                })
            }
        }
    },
    
    handleInput (event) {
        let type = event.target.id
        let value = event.detail.value
        // console.log(event.currentTarget.dataset.type);
        this.setData({
            [type]: value.trim(),
        })
    },
    
    handleLogin: async function () {
        let { phoneHintShow, passwordHintShow, phone, password } = this.data
        if (!phoneHintShow && !passwordHintShow) {
            let res = await request('/login/cellphone', { phone, password, isLogin: true })
            let { code, message, msg } = res
            if (code === 200) {
                wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                })
                // 登录成功将信息存储在本地内存中
                wx.setStorageSync('userInfo', JSON.stringify({
                    token: res.token,
                    bgUrl: res.profile.backgroundUrl,
                    userID: res.profile.userId,
                    nickName: res.profile.nickname,
                    avaUrl: res.profile.avatarUrl,
                    city: res.profile.city,
                    singStr: res.profile.signature,
                }))
                
                // 这里不能使用 navigateTo 因为这个方法不能跳转到 tabber 页面
                // wx.navigateTo({
                //   url:'/pages/personal/personal'
                // })
                
                // 关闭其他页面，回到 tabbar 页面
                wx.switchTab({
                    url: '/pages/personal/personal',
                })
            } else {
                wx.showToast({
                    title: message || msg,
                    icon: 'error',
                })
            }
        } else {
            wx.showToast({
                title: '登录失败',
                icon: 'error',
            })
        }
    },
    onLoad: function (options) {
    },
})
