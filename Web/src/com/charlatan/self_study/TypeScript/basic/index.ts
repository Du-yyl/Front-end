/**
 * 节流
 * - 使用时在函数后正常传递参数，如果要使用 events 那么要将 events 变量放在第一个
 * @param {Function}callback 要执行的回调
 * @param {Number}timer  每次间隔时间
 * @param args 回调执行的参数
 * @returns {(function(*): (*|undefined))|*} 要指定的函数以闭包形式返回
 */
export function Throttle (
  callback: Function, timer: number, ...args: any): Function {
  let flag = true
  return ():any => {
    if (flag) {
      flag = false
      setTimeout((): void => {
        flag = true
      }, timer)
      return callback.apply(this, args)
    }
  }
}
function func() {
    console.log(this);
}
