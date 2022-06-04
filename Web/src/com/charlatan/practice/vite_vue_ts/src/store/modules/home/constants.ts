/**
 * Time:2022/5/31 15:23 35
 * Name:constants.ts
 * Path:src/store/modules/home
 * ProjectName:vite_vue_ts
 * Author:charlatan
 * Doc: home 中所需常量
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 响应操作数据方法
 */

export enum Const_Mut {
  ADD_Mut = 'ADD_Mut',
  SET_HOME_DATA = 'SET_HOME_DATA'
}

/**
 * 响应用户操作动作
 */
export enum Const_Act {
  setHomeData = 'setHomeData'
}

/**
 * getter 中使用的常量
 */
export enum Const_Get {
  getSearchTips = 'getSearchTips',
  getSearchList = 'getSearchList',
  getCarouselImages = 'getCarouselImages',
  getBackgroundImg = 'getBackgroundImg',
  getAMenu = 'getAMenu',
  getSingleProductComm = 'getSingleProductComm',
  getJustPolite = 'getJustPolite'
}

