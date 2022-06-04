/**
 * Time:2022/6/1 15:14 30
 * Name:Throttle.ts
 * Path:src/util
 * ProjectName:vite_vue_ts
 * Author:charlatan
 * Doc:
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */


export default {
  /**
   * 节流
   * - 使用时在函数后正常传递参数，如果要使用 events 那么要将 events 变量放在第一个
   * @param {Function}callback 要执行的回调
   * @param {Number}timer  每次间隔时间
   * @param args 回调执行的参数
   * @returns {(function(*): (*|undefined))|*} 要指定的函数以闭包形式返回
   */
  Throttle (callback: Function, timer: number, ...args: any): Function {
    let flag = true
    return (): any => {
      if (flag) {
        flag = false
        setTimeout((): void => {
          flag = true
        }, timer)
        return callback.apply(this, args)
      }
    }
  },
}
// todo：TS如何使用 this
// todo：TS中如何实现 防抖 和 节流

function Throttle12 (
  callback: Function, timer: number, ...args: any): Function {
  let flag = true
  return (): any => {
    if (flag) {
      flag = false
      setTimeout((): void => {
        flag = true
      }, timer)
      // @ts-ignore
      return callback.apply(this, args)
    }
  }
}
