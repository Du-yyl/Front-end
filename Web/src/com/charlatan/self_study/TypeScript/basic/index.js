export function Throttle(callback, timer) {
    var _this = this;
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var flag = true;
    return function () {
        if (flag) {
            flag = false;
            setTimeout(function () {
                flag = true;
            }, timer);
            return callback.apply(_this, args);
        }
    };
}
function func() {
    console.log(this);
}
//# sourceMappingURL=index.js.map