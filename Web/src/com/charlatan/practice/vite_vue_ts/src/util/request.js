/**
 * 发送请求的封装
 */
import axios from 'axios';
export function request(url, method) {
    axios({
        url: url,
        method: method,
    }).then(function (value) {
        return value;
    }, function (reason) {
        return reason;
    });
}
//# sourceMappingURL=request.js.map