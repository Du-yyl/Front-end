/**
 * Time:2022/6/2 16:27 19
 * Name:test.ts
 * Path:src/util
 * ProjectName:vite_vue_ts
 * Author:charlatan
 * Doc:
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 节流(ts)
export class Throttle {
  private timer: number | undefined
  private stop: boolean = false
  private death: boolean = false
  
  /**
   * @param func 需要包装的函数
   * @param delay 延迟时间，单位ms
   * @param immediate 是否默认执行一次(第一次不延迟)
   */
  public use (
    func: Function, delay: number, immediate: boolean = false): Function {
    let flag = true
    const self = this
    return (...args: any) => {
      if (this.death) {
        func.apply(this, args)
        return
      }
      if (this.stop) {
        func.apply(this, args)
        return
      }
      if (immediate) {
        func.apply(this, args)
        immediate = false
        return
      }
      if (!flag) {
        return
      }
      flag = false
      self.timer = setTimeout(() => {
        func.apply(this, args)
        flag = true
      }, delay)
    }
  }
  
  // 销毁
  public destroy () {
    this.death = true
    this.stop = true
    if (!!this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
  }
  
  // 开启
  public open () {
    if (!this.death) {
      this.stop = false
    }
  }
  
  // 关闭
  public close () {
    this.stop = true
  }
}
