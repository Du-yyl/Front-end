"use strict";
/*!*
  * Time:2022/3/31 15:19 18
  * Name:4、泛型.ts
  * Path:basic
  * ProjectName:TypeScript
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */
(function () {
    function func(a) {
        return a;
    }
    function func1(a) {
        return a;
    }
    func1(2);
    func1('string');
    function func2(num1, num2) {
        return num2;
    }
    function func3(num1) {
        return num1;
    }
    function func4(num1) {
        return num1;
    }
    var Class = (function () {
        function Class(name) {
            this.name = name;
        }
        return Class;
    }());
    var c1 = new Class('你好');
})();
//# sourceMappingURL=4%E3%80%81%E6%B3%9B%E5%9E%8B.js.map