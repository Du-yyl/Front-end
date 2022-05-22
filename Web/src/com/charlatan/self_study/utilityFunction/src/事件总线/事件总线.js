/**
 * Time:2022/4/20 14:33 42
 * Name:事件总线.js
 * Path:src/事件总线
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 事件总线
 * @type {{
 * events: {},
 * emit(*, ...[*]): void,
 * off(*): void,
 * on(*, *): void
 * }}
 */
const eventBus = {
    // 绑定的事件存储
    events: {},
    /**
     * 绑定
     * @param type 触发事件类型
     * @param callback
     */
    on (type, callback) {
        if (typeof type === 'object') {
            console.warn('->\'' + JSON.stringify(type) + '\'<-' + '绑定元素名称无效')
        } else {
            if (Object.prototype.toString.call(callback).slice(8, -1) === 'Function')
                type in this.events ? this.events[type].push(callback) : this.events[type] = [callback]
            else
                console.warn('->\'' + callback + '\'<-' + '事件类型错误')
        }
    },
    /**
     * 解绑
     * @param name 要解绑的名称
     */
    off (name) {
        if (name in this.events)
            delete this.events[name]
        else
            console.warn('事件已解绑')
    },
    /**
     * 触发
     * @param type 要触发的事件
     * @param args 要传递的参数
     */
    emit (type, ...args) {
        if (type in this.events) {
            for (const eventElement of this.events[type])
                eventElement(...args)
        } else
            console.warn('事件没有绑定')
    },
}
