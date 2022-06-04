"use strict";
/*!*
 * Time:2022/3/30 17:56 14
 * Name:6、enum和tuple.ts
 * Path:base/1、变量类型
 * ProjectName:TypeScript
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
let h;
h = ['hello', 123];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let i;
i = {
    name: '张三',
    gender: Gender.Male,
};
console.log(i);
let k;
let l;
