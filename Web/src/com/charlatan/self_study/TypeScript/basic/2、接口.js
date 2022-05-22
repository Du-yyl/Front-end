'use strict';
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
    const obj = {
        name: '张三',
        age: 20,
    }
    
    class Demo {
        constructor (gender) {
            this._gender = gender
        }
        
        get gender () {
            return this._gender
        }
        
        set gender (value) {
            this._gender = value
        }
        
        sayHello () {
        }
    }
})()
