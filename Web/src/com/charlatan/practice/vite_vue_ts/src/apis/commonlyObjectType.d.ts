export interface event {
  /**
   * 触摸位置的数据
   */
  changedTouches: [
    {
      clientX: number
      clientY: number
      pageX: number
      pageY: number
      screenX: number
      screenY: number
    }
  ],
  /**
   * 数据是否有效
   */
  isTrusted: boolean,
  /**
   * 触摸位置数据
   */
  touches: [
    {
      clientX: number
      clientY: number
      pageX: number
      pageY: number
      screenX: number
      screenY: number
    }
  ]
}
