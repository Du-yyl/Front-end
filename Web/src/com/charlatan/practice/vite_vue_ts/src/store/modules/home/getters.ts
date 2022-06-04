/**
 * Time:2022/6/1 19:27 06
 * Name:getters.ts
 * Path:src/store/modules/home
 * ProjectName:vite_vue_ts
 * Author:charlatan
 * Doc:
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */
import { state } from './state'
import {
  aMenu,
  justPolite,
  RootObjectDatasListData,
  RootObjectSearchList,
  singleProductComm,
} from './dataTypes'
import { Const_Get } from './constants'

export  type Getters = {
  /**
   * 返回**提示框搜索内容**
   */
  [Const_Get.getSearchTips] (): string
  
  /**
   * 返回**搜索提示列表**
   */
  [Const_Get.getSearchList] (): RootObjectSearchList[]
  
  /**
   * 返回**轮播图数据**
   */
  [Const_Get.getCarouselImages] (): RootObjectDatasListData[]
  
  /**
   * 返回**主页背景图**
   */
  [Const_Get.getBackgroundImg] (): string
  
  /**
   * 返回**主页一级菜单**
   */
  [Const_Get.getAMenu] (): aMenu
  
  /**
   * 返回**主页展示数据**
   */
  [Const_Get.getSingleProductComm] (): singleProductComm
  
  /**
   * 返回**单单有理**
   */
  [Const_Get.getJustPolite] (): justPolite
}

export const getters: Getters = {
  getJustPolite (): justPolite {
    return state.justPolite
  },
  
  getSingleProductComm (): singleProductComm {
    return state.singleProductComm
  },
  getAMenu (): aMenu {
    return state.aMenu
  },
  getBackgroundImg (): string {
    return state.bgImg
  },
  getCarouselImages (): RootObjectDatasListData[] {
    return state.carouselImgs
  },
  getSearchTips (): string {
    // todo:通过 vuex 中设置的 getter 同样是异步的
    return state.searchTips
  },
  getSearchList (): RootObjectSearchList[] {
    return state.searchList
  },
}
