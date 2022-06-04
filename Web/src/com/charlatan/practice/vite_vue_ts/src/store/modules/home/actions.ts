/**
 * Time:2022/5/31 17:18 38
 * Name:actions.ts
 * Path:src/store/modules/home
 * ProjectName:vite_vue_ts
 * Author:charlatan
 * Doc: 响应用户数据操作
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */

import axios from 'axios'
import { Const_Act, Const_Mut } from './constants'

/**
 * 响应操作的动作
 */
export type Actions = {
  /**
   * 在这个方法中进行请求的发送，并且设置数据
   * @param context 要调用的上下文
   * @param pro
   */
  [Const_Act.setHomeData] (
    context: { commit: Function },
    pro: { reject: Function, resolve: Function }): void
}

export const actions: Actions = {
  setHomeData (context: { commit: Function }, pro): void {
    axios.get('homeApi/').then((value) => {
      context.commit(Const_Mut.SET_HOME_DATA,
        [
          pro,
          value.data.datas.navs,
          value.data.datas.list,
        ])
    }, (reason) => {
      pro.reject(reason.message)
    })
  },
  
  /* todo:发送请求的示例代码，和 apis 中的代码配合进行使用
  这里返回的是一个 promise 所以在组件内可以直接进行使用
    setHomeData (context: { commit: Function }, pro): any {
    return homeApi().then((value) => {
      context.commit(Const_Mut.SET_HOME_DATA,
        [
          pro,
          value.data.datas.navs,
          value.data.datas.list,
        ])
    }, (reason) => {
      pro.reject(reason.message)
    })
   */
}


