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
  /*
    public 公共的 任意位置都能访问
    private 私有属性 只能在这个类中进行修改
    protected 受保护的 只能在当前类和当前类的子类中使用
   */
  class Class {
    constructor (
      public name: string, protected age: number, private address: string) {}
  }
  
  class Person {
    constructor (name: string, age: number) {
      this._age = age
      this._name = name
    }
  
    private _name: string
  
    get name (): string {
      return this._name
    }
  
    set name (value: string) {
      this._name = value
    }
  
    _age: number
  
    get age (): number {
      return this._age
    }
  
    set age (value: number) {
      this._age = value
    }
  }
  
  let p1 = new Person('Kodie Arnold', 10)
  console.log(p1)
})()
