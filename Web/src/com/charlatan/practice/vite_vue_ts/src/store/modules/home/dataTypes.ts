/**
 * Time:2022/6/1 15:52 44
 * Name:dataTypes.ts
 * Path:src/store/modules/home
 * ProjectName:vite_vue_ts
 * Author:charlatan
 * Doc: Home 组件要使用的数据的数据类型
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */

// todo:如何处理请求的类型

/**
 * Home 返回数据
 */
export type RootObject = {
  msg: string;
  code: string;
  login_status: number;
  mall_uid: string;
  mall_user: string;
  sys_time: number;
  hash: string;
  epet_site: string;
  page_can_pull_up: boolean;
  page_title: string;
  sensor: RootObjectSensor;
  real_page_id: number;
  datas: RootObjectDatas;
  show_subscription_dialog: RootObjectShow_subscription_dialog;
  code_remind: RootObjectCode_remind;
  alert_target: RootObjectAlert_target[];
}
export type RootObjectSensor = {
  page_type: string;
  page_pam: string;
  big_type: string;
}
export type RootObjectDatasNavsMenusDefault_color = {
  default_color: string;
  choose_color: string;
}
export type RootObjectDatasNavsMenusFloat_color = {
  default_color: string;
  choose_color: string;
}
export type RootObjectDatasNavsMenus = {
  default_color: RootObjectDatasNavsMenusDefault_color;
  float_color: RootObjectDatasNavsMenusFloat_color;
  data: any[];
}
export type RootObjectDatasNavsSearch = {
  placeholder: string;
}
export type pro = {
  resolve: Function,
  reject: Function,
}

export type RootObjectDatasNavsSearchList = [
  {
    sort: string;
    words: string;
  }]
export type RootObjectDatasNavs = {
  bg_color: string;
  menus: RootObjectDatasNavsMenus;
  search: RootObjectDatasNavsSearch;
  pet_name: string;
  pet_img: string;
  searchList: RootObjectDatasNavsSearchList;
}
export type RootObjectDatasListCss = {
  margin_bottom: number;
  background_color: string;
  padding_color: string;
}
export type RootObjectDatasListData = {
  img_url: string;
}

export type RootObjectDatasList = {
  index: string;
  module_name_for_google_utm: string;
  is_show: number;
  type: string;
  is_dynamic: string;
  type_name: string;
  css: RootObjectDatasListCss;
  data: RootObjectDatasListData;
  is_first: number;
}
export type RootObjectDatasExtend = {
  icon_version: string;
}
export type RootObjectDatasNewUserConfig = {}
export type RootObjectDatas = {
  navs: RootObjectDatasNavs;
  list: RootObjectDatasList[];
  extend: RootObjectDatasExtend;
  current_page_name: string;
  searchFontColor: string;
  searchBgColor: string;
  iconColor: string;
  bgColor: string;
  petFontColor: string;
  petColor: string;
  newUserConfig: RootObjectDatasNewUserConfig;
}
export type RootObjectShow_subscription_dialog = {}
export type RootObjectCode_remind = {}
export type RootObjectAlert_target = {
  text: string;
  target: string;
}

export type aMenu = [
  {
    name: string,
    img_url: string,
  }]

export type Navs = {
  bg_color: string;
  menus: RootObjectMenus[];
  search: RootObjectSearch;
  pet_name: string;
  pet_img: string;
  searchList: RootObjectSearchList[];
}
export type RootObjectMenusDefault_color = {
  default_color: string;
  choose_color: string;
}
export type RootObjectMenusFloat_color = {
  default_color: string;
  choose_color: string;
}
export type RootObjectMenus = {
  img_url: string,
  name: string
}
export type RootObjectSearch = {
  placeholder: string;
}
export type RootObjectSearchList = {
  sort: string;
  words: string;
  
}

export type Lists = RootObjectChild[];
export type RootObjectChildCss = {
  margin_bottom: number;
  background_color: string;
  padding_color: string;
}
export type RootObjectChildData = {
  right_title: string
  sign_url: string
  sign: string
  vipTost: string
  
  margin_bottom: string;
  background_color: string;
  padding_color: string;
  left_title: string;
  show_notice: number;
  column_images: '';
  background_img: { img_url: string },
  images: [{ img_url: string }],
  menus: [{ img_url: string, name: string }],
  goods_list: [
    {
      img_url: string
      mark: string
      market_price: string
      sale_price: string
      target: { mode: 'goods_extend' }
      title: string
    }],
  color_conf: {
    
    angle_mark_bg_color: string
    angle_mark_text_color: string
    bg_end_color: string
    bg_start_color: string
    goods_bg_color: string
    price_bg_color: string
    price_text_color: string
    title_text_color: string
    underline_price_color: string
  }
}
export type RootObjectChild = {
  
  index: string;
  module_name_for_google_utm: string;
  is_show: number;
  type: string;
  is_dynamic: string;
  type_name: string;
  css: RootObjectChildCss;
  data: RootObjectChildData;
  is_first: number;
  margin_bottom: string;
  background_color: string;
  padding_color: string;
  left_title: string;
  
}

export type HomeCarousel = RootObjectChild[];
export type RootObjectChildCsss = {
  margin_bottom: number;
  background_color: string;
  padding_color: string;
}
export type RootObjectChildDataImagesTargetSensor = {
  referer_detail: string;
  click_info: string;
  button_name: string;
}
export type RootObjectChildDataImagesTarget = {
  mode: string;
  param: string;
  sensor: RootObjectChildDataImagesTargetSensor;
}
export type RootObjectChildDataImages = {
  img_url: string;
  img_size: string;
  target: RootObjectChildDataImagesTarget;
}
export type RootObjectChildDataBackground_imgTarget = {}
export type RootObjectChildDataBackground_img = {
  img_url: string;
  img_size: string;
  target: RootObjectChildDataBackground_imgTarget;
}
export type RootObjectChildData1 = {
  images: RootObjectChildDataImages[];
  background_img: RootObjectChildDataBackground_img;
}
export type RootObjectChild1 = {
  index: string;
  module_name_for_google_utm: string;
  is_show: number;
  type: string;
  is_dynamic: string;
  type_name: string;
  css: RootObjectChildCss;
  data: RootObjectChildData;
}

export type singleProductComm = RootObjectChild[];
export type singleProductCommCss = {
  margin_bottom: number;
  background_color: string;
  padding_color: string;
}
export type RootObjectChildDataColor_conf = {
  bg_start_color: string;
  bg_end_color: string;
  angle_mark_text_color: string;
  angle_mark_bg_color: string;
  title_text_color: string;
  price_bg_color: string;
  price_text_color: string;
  underline_price_color: string;
  goods_bg_color: string;
}
export type RootObjectChildDataGoods_listTargetParam = {
  gid: string;
}
export type RootObjectChildDataGoods_listTargetSensor = {
  referer_detail: string;
  click_info: string;
  button_name: string;
}
export type RootObjectChildDataGoods_listTarget = {
  mode: string;
  param: RootObjectChildDataGoods_listTargetParam;
  sensor: RootObjectChildDataGoods_listTargetSensor;
}
export type RootObjectChildDataGoods_list = {
  mark: string;
  img_url: string;
  title: string;
  sale_price: string;
  market_price: string;
  target: RootObjectChildDataGoods_listTarget;
}
export type singleProductCommData = {
  color_conf: RootObjectChildDataColor_conf;
  goods_list: RootObjectChildDataGoods_list[];
}
export type RootCommChild = {
  index: string;
  module_name_for_google_utm: string;
  is_show: number;
  type: string;
  is_dynamic: string;
  type_name: string;
  css: RootObjectChildCss;
  data: RootObjectChildData;
}

export type justPolite = justPoliteChild[];
export type justPoliteChildCss = {
  margin_bottom: number;
  background_color: string;
  padding_color: string;
}
export type justPoliteChildDataSignTarget = {
  mode: string;
  param: string;
}
export type justPoliteChildDataSignDataList = {
  day: number;
  done: number;
  group_key: string;
  desc: string;
  image: string;
}
export type justPoliteChildDataSign = {
  level_appendtext: string;
  target: justPoliteChildDataSignTarget;
  dataList: justPoliteChildDataSignDataList[];
}
export type justPoliteChildDataVipTostTarget = {
  mode: string;
  param: string;
}
export type justPoliteChildDataVipTostListBtnParam = {
  gid: string;
  pam: string;
}
export type justPoliteChildDataVipTostListBtn = {
  param: justPoliteChildDataVipTostListBtnParam;
}
export type justPoliteChildDataVipTostList = {
  id: string;
  subject: string;
  stock: string;
  emoney: string;
  cash: string;
  threshold: number;
  show_threshold: string;
  img_url: string;
  btn: justPoliteChildDataVipTostListBtn;
  price: string;
  is_vip: number;
}
export type justPoliteChildDataVipTost = {
  target: justPoliteChildDataVipTostTarget;
  tips: string;
  list: justPoliteChildDataVipTostList[];
}
export type justPoliteChildData = {
  margin_bottom: string;
  background_color: string;
  padding_color: string;
  left_title: string;
  right_title: string;
  sign_url: string;
  sign: justPoliteChildDataSign | string;
  vipTost: justPoliteChildDataVipTost | string;
}
export type justPoliteChild = {
  index: string;
  module_name_for_google_utm: string;
  is_show: number;
  type: string;
  is_dynamic: string;
  type_name: string;
  css: justPoliteChildCss;
  data: justPoliteChildData;
}
