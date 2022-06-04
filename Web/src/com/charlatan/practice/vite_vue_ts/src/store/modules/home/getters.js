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
import { state } from './state';
import { Const_Get } from './constants';
export var getters = {
    getJustPolite: function () {
        return state.justPolite;
    },
    getSingleProductComm: function () {
        return state.singleProductComm;
    },
    getAMenu: function () {
        return state.aMenu;
    },
    getBackgroundImg: function () {
        return state.bgImg;
    },
    getCarouselImages: function () {
        return state.carouselImgs;
    },
    getSearchTips: function () {
        // todo:通过 vuex 中设置的 getter 同样是异步的
        return state.searchTips;
    },
    getSearchList: function () {
        return state.searchList;
    },
};
//# sourceMappingURL=getters.js.map