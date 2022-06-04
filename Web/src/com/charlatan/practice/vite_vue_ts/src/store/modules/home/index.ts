/**
 * home 的 store 的整合
 */

import { Module } from 'vuex'
import { homeState, state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { RootState } from '../../index'
import { getters } from './getters'

const store: Module<homeState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
export default store
