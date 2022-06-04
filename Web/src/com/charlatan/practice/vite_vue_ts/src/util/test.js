/**
 * Time:2022/6/2 16:27 19
 * Name:test.ts
 * Path:src/util
 * ProjectName:vite_vue_ts
 * Author:charlatan
 * Doc:
 *  Il n'ya qu'un héroïsme au monde :
 *     c'est de voir le monde tel qu'il est et de l'aimer.
 */
// 节流(ts)
var Throttle = /** @class */ (function () {
    function Throttle() {
        Object.defineProperty(this, "timer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "death", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    /**
     * @param func 需要包装的函数
     * @param delay 延迟时间，单位ms
     * @param immediate 是否默认执行一次(第一次不延迟)
     */
    Object.defineProperty(Throttle.prototype, "use", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (func, delay, immediate) {
            var _this = this;
            if (immediate === void 0) { immediate = false; }
            var flag = true;
            var self = this;
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (_this.death) {
                    func.apply(_this, args);
                    return;
                }
                if (_this.stop) {
                    func.apply(_this, args);
                    return;
                }
                if (immediate) {
                    func.apply(_this, args);
                    immediate = false;
                    return;
                }
                if (!flag) {
                    return;
                }
                flag = false;
                self.timer = setTimeout(function () {
                    func.apply(_this, args);
                    flag = true;
                }, delay);
            };
        }
    });
    // 销毁
    Object.defineProperty(Throttle.prototype, "destroy", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.death = true;
            this.stop = true;
            if (!!this.timer) {
                clearTimeout(this.timer);
                this.timer = undefined;
            }
        }
    });
    // 开启
    Object.defineProperty(Throttle.prototype, "open", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!this.death) {
                this.stop = false;
            }
        }
    });
    // 关闭
    Object.defineProperty(Throttle.prototype, "close", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.stop = true;
        }
    });
    return Throttle;
}());
export { Throttle };
//# sourceMappingURL=test.js.map