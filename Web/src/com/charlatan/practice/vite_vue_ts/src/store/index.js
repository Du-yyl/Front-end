/**
 * store 的核心文件，进行各个数据和数据操作的交互
 */
import { createLogger, createStore } from 'vuex';
import home from './modules/home';
var plugins = [createLogger({})];
export var store = createStore({
    plugins: plugins,
    modules: {
        home: home,
    },
});
//# sourceMappingURL=index.js.map