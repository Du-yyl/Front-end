"use strict";
/*!*
  * Time:2022/3/31 14:22 19
  * Name:2、接口.ts
  * Path:basic
  * ProjectName:TypeScript
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */
(function () {
    var obj = {
        name: '张三',
        age: 20,
    };
    var Demo = (function () {
        function Demo(gender) {
            this._gender = gender;
        }
        Object.defineProperty(Demo.prototype, "gender", {
            get: function () {
                return this._gender;
            },
            set: function (value) {
                this._gender = value;
            },
            enumerable: false,
            configurable: true
        });
        Demo.prototype.sayHello = function () {
        };
        return Demo;
    }());
})();
//# sourceMappingURL=2%E3%80%81%E6%8E%A5%E5%8F%A3.js.map