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
var _a;
import { Const_Mut } from './constants';
export var mutations = (_a = {},
    _a[Const_Mut.ADD_Mut] = function (state, value) {
    },
    _a.SET_HOME_DATA = function (state, args) {
        var pro = args[0];
        state.searchTips = args[1].search.placeholder;
        state.searchList = args[1].searchList;
        // 203  通用广告模板
        var adTemplate = [];
        // 202  "轮播图"
        var carousel = [];
        // 235  "每日疯抢4个"
        var dailyRush = [];
        // 256  "[1.15]非标品推荐模板"  养宠风尚 拒绝平庸
        var nonStandardComm = [];
        // 252  一级菜单推荐
        var AMenuComm = [];
        // 259  "单品推荐"
        var singleProductComm = [];
        // 258  "单单有礼"
        var justPolite = [];
        // 253  心选特惠
        var selectedSpecials = [];
        for (var _i = 0, _a = args[2]; _i < _a.length; _i++) {
            var rootObjectDatasList = _a[_i];
            switch (rootObjectDatasList.type) {
                case '203':
                    adTemplate.push(rootObjectDatasList);
                    break;
                case '202':
                    carousel.push(rootObjectDatasList);
                    break;
                case '235':
                    dailyRush.push(rootObjectDatasList);
                    break;
                case '256':
                    nonStandardComm.push(rootObjectDatasList);
                    break;
                case '252':
                    AMenuComm.push(rootObjectDatasList);
                    break;
                case '259':
                    singleProductComm.push(rootObjectDatasList);
                    break;
                case '258':
                    justPolite.push(rootObjectDatasList);
                    break;
                case '253':
                    selectedSpecials.push(rootObjectDatasList);
                    break;
            }
        }
        // console.log(adTemplate)
        // console.log(dailyRush)
        // console.log(nonStandardComm)
        // console.log(justPolite)
        // console.log(selectedSpecials)
        console.log(dailyRush);
        state.justPolite = justPolite;
        state.bgImg = carousel[0].data.background_img.img_url;
        state.carouselImgs = carousel[0].data.images;
        state.aMenu = AMenuComm[0].data.menus;
        state.singleProductComm = singleProductComm;
        pro.resolve('数据修改成功');
    },
    _a);
//# sourceMappingURL=mutations.js.map