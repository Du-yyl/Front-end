'use strict';
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
    class Class {
        constructor (name, age, address) {
            this.name = name
            this.age = age
            this.address = address
        }
    }
    
    class Person {
        constructor (name, age) {
            this._age = age
            this._name = name
        }
        
        get name () {
            return this._name
        }
        
        set name (value) {
            this._name = value
        }
        
        get age () {
            return this._age
        }
        
        set age (value) {
            this._age = value
        }
    }
    
    let p1 = new Person('Kodie Arnold', 10)
    console.log(p1)
})()
