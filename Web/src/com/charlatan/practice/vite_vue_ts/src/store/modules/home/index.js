/**
 * home 的 store 的整合
 */
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
var store = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
};
export default store;
//# sourceMappingURL=index.js.map