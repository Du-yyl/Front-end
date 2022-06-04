import axios from 'axios';
/**
 * 请求示例
 * @param pageSize 页数
 * @param pageIndex 页数下标
 */
export function homeApi(_a) {
    var _b = _a === void 0 ? {
        pageIndex: 1,
        pageSize: 10,
    } : _a, _c = _b.pageSize, pageSize = _c === void 0 ? 10 : _c, _d = _b.pageIndex, pageIndex = _d === void 0 ? 1 : _d;
    return axios.get('homeApi/');
}
//# sourceMappingURL=home.js.map