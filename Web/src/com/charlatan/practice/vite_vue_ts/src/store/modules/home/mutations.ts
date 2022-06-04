/**
 * Time:2022/5/31 15:25 05
 * Name:mutations.ts
 * Path:src/store/modules/home
 * ProjectName:vite_vue_ts
 * Author:charlatan
 * Doc: 响应 action 的操作
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */

import { Const_Mut } from './constants'
import { homeState } from './state'
import {
  HomeCarousel, justPolite,
  justPoliteChild,
  Lists,
  Navs,
  pro,
  singleProductComm,
} from './dataTypes'

/**
 * 操作数据函数类型
 */
export type Mutations<T = homeState> = {
  [Const_Mut.ADD_Mut] (state: T, value: number): void
  /**
   * 设置仓库内数据
   * @param state 要操作的数据
   * @param args 理想数据
   */
  [Const_Mut.SET_HOME_DATA] (state: T, args: [
    pro,
    Navs,
    Lists
  ]): void
}

export const mutations: Mutations = {
  [Const_Mut.ADD_Mut] (state: homeState, value: number): void {
  },
  
  SET_HOME_DATA (state, args): void {
    let pro = args[0]
    state.searchTips = args[1].search.placeholder
    state.searchList = args[1].searchList
    
    // 203  通用广告模板
    let adTemplate = []
    
    // 202  "轮播图"
    let carousel: HomeCarousel = []
    
    // 235  "每日疯抢4个"
    let dailyRush = []
    
    // 256  "[1.15]非标品推荐模板"  养宠风尚 拒绝平庸
    let nonStandardComm = []
    
    // 252  一级菜单推荐
    let AMenuComm = []
    
    // 259  "单品推荐"
    let singleProductComm: singleProductComm = []
    
    // 258  "单单有礼"
    let justPolite: justPolite = []
    
    // 253  心选特惠
    let selectedSpecials = []
    
    for (let rootObjectDatasList of args[2]) {
      switch (rootObjectDatasList.type) {
        case '203' :
          adTemplate.push(rootObjectDatasList)
          break
        case '202':
          carousel.push(rootObjectDatasList)
          break
        case '235':
          dailyRush.push(rootObjectDatasList)
          break
        case '256':
          nonStandardComm.push(rootObjectDatasList)
          break
        case '252':
          AMenuComm.push(rootObjectDatasList)
          break
        case '259':
          singleProductComm.push(rootObjectDatasList)
          break
        case '258':
          justPolite.push(rootObjectDatasList)
          break
        case '253':
          selectedSpecials.push(rootObjectDatasList)
          break
      }
    }
    
    // console.log(adTemplate)
    // console.log(dailyRush)
    // console.log(nonStandardComm)
    // console.log(justPolite)
    // console.log(selectedSpecials)
    console.log(dailyRush)
    state.justPolite = justPolite
    state.bgImg = carousel[0].data.background_img.img_url
    state.carouselImgs = carousel[0].data.images
    state.aMenu = AMenuComm[0].data.menus
    state.singleProductComm = singleProductComm
    pro.resolve('数据修改成功')
  },
}

