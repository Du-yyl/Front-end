/**
 * Time:2022/4/20 15:59 40
 * Name:消息订阅和发布.js
 * Path:src/消息订阅和发布
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 消息订阅和发布
 * @type {{
 * subscribe(*, *): (string|undefined),
 * unsubscribe(*): void,
 * publish(*, ...[*]): void,
 * ID: number,
 * events: {}}}
 */
const PubSub = {
    // 指定　ID　进行递增
    ID: 0,
    // 事件的统一存储
    events: {},
    /**
     * 订阅
     * @param channel 订阅的频道
     * @param callback 订阅的回调
     */
    subscribe (channel, callback) {
        if (typeof channel === 'object') {
            console.warn('->\'' + JSON.stringify(channel) + '\'<-' + '绑定频道无效，订阅失败')
        } else if (channel === '__uid__') {
            console.warn('->\'' + JSON.stringify(channel) + '\'<-' + '该名称非法，订阅失败')
        } else {
            if (Object.prototype.toString.call(callback).slice(8, -1) === 'Function') {
                let ID = '__uid__' + this.ID++
                channel in this.events ? this.events[channel][ID] = callback : this.events[channel] = { [ID]: callback }
                return ID
            } else
                console.warn('->\'' + callback + '\'<-' + '事件类型错误，绑定失败')
        }
    },
    /**
     * 发布消息
     * @param channel 发布频道
     * @param data 发布数据
     */
    publish (channel, ...data) {
        if (channel in this.events) {
            for (const event in this.events[channel])
                this.events[channel][event](...data)
        } else
            console.warn('订阅没有指定')
    },
    /**
     * 解除订阅
     * @param channel 频道
     */
    unsubscribe (channel) {
        if (typeof channel === 'object' || channel === undefined || channel === '__uid__') {
            console.warn('->\'' + JSON.stringify(channel) + '\'<-' + '该名称无效，取消订阅失败')
        } else if (/^\b__uid__+[\w]*/.test(channel)) {
            // 取消订阅号
            if (channel in this.events) {
                for (let eventKey in this.events)
                    for (let event in this.events[eventKey])
                        if (channel === event) {
                            delete this.events[eventKey][event]
                            return
                        } else
                            console.warn('->\'' + JSON.stringify(channel) + '\'<-' + '已取消订阅')
            } else
                console.warn('->\'' + JSON.stringify(channel) + '\'<-' + '已取消订阅')
        } else {
            // 取消整个频道
            if (channel in this.events) {
                for (let eventKey in this.events)
                    if (channel === eventKey) {
                        delete this.events[eventKey]
                        return
                    } else
                        console.warn('->\'' + JSON.stringify(channel) + '\'<-' + '已取消订阅')
            } else
                console.warn('->\'' + JSON.stringify(channel) + '\'<-' + '已取消订阅')
        }
    },
}
