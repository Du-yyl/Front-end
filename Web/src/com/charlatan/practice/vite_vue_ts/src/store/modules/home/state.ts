/**
 * 数据数据保存位置
 */

import {
  justPolite,
  RootObjectDatasListData,
  RootObjectSearchList,
  singleProductComm,
} from './dataTypes'

/**
 * 数据类型
 */
export interface homeState {
  // 搜索提示词
  searchTips: string
  // 循环提示搜索内容
  searchList: RootObjectSearchList[]
  // 轮播图
  carouselImgs: RootObjectDatasListData[]
  // 主页背景图
  bgImg: string
  // 一级商品菜单
  aMenu: [
    {
      name: string,
      img_url: string,
    }]
  // 首页展示数据
  singleProductComm: singleProductComm
  // 单单有礼
  justPolite: justPolite
}

export const state: homeState = {
  justPolite: [],
  searchTips: '',
  searchList: [
    {
      sort: '',
      words: '',
    }],
  carouselImgs: [
    {
      img_url: '',
    }],
  bgImg: '',
  aMenu: [{ img_url: '', name: '' }],
  singleProductComm: [],
}
