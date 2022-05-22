/**
 * Time:2022/4/19 17:18 38
 * Name:copy.js
 * Path:test
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

require('../src/拷贝/deepCopy')
let obj = {
    a: 1,
    b: [1, 2, 3],
    c: { a: 1, b: 2 },
}
obj.b.push(obj.c)
obj.c.d = obj.b

let obj1 = obj.deepCopy(obj)
console.log(obj)
console.log('--------')
console.log(obj1)
