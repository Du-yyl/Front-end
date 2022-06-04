"use strict";
/*!*
  * Time:2022/3/30 21:41 17
  * Name:1、抽象类.ts
  * Path:
  * ProjectName:basic
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Person = (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var Xiao = (function (_super) {
        __extends(Xiao, _super);
        function Xiao() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xiao.prototype.sayHello = function () {
            console.log('我是子类的你好');
        };
        return Xiao;
    }(Person));
})();
//# sourceMappingURL=1%E3%80%81%E6%8A%BD%E8%B1%A1%E7%B1%BB.js.map