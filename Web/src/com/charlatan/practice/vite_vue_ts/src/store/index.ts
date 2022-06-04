/**
 * store 的核心文件，进行各个数据和数据操作的交互
 */
import { createLogger, createStore } from 'vuex'
import home from './modules/home'
import { homeState } from './modules/home/state'

export interface RootState {
  home: homeState
}

const plugins = [createLogger({})]
export const store = createStore({
  plugins,
  modules: {
    home,
  },
})
