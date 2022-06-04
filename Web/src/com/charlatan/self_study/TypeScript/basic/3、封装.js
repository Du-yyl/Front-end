"use strict";
/*!*
  * Time:2022/3/31 14:50 16
  * Name:3、封装.ts
  * Path:basic
  * ProjectName:TypeScript
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */
(function () {
    var Class = (function () {
        function Class(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        return Class;
    }());
    var Person = (function () {
        function Person(name, age) {
            this._age = age;
            this._name = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (value) {
                this._age = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p1 = new Person('Kodie Arnold', 10);
    console.log(p1);
})();
//# sourceMappingURL=3%E3%80%81%E5%B0%81%E8%A3%85.js.map