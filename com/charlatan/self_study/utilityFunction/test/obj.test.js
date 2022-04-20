/**
 * Time:2022/4/19 15:44 51
 * Name:obj.test.js
 * Path:test
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


function Person (name, age) {
  this.name = name
  this.age = age
}

require('../src/对象相关/newInstance')
// New 的基本实现
// let obj = Person.newInstance('张三', 13)
// console.log(obj)
// console.log(new Person('张三', 13))

require('../src/对象相关/rewriteInstanceof')
// instanceof 实现
// let obj = new Person()
// console.log(obj instanceof Person);
// console.log(obj instanceof Function);
// console.log(obj instanceof Object);
// console.log('----------------');
// console.log(obj.rewriteInstanceof(Person));
// console.log(obj.rewriteInstanceof(Function));
// console.log(obj.rewriteInstanceof(Object));

require('../src/对象相关/mergeObject')
// 对象合并
let obj = new Person('张三')
let obj1 = new Person('李四', 20)
let obj2 = { a: 1, b: 2, C: 3 }
console.log(obj.mergeObject(obj1, obj2, obj))
