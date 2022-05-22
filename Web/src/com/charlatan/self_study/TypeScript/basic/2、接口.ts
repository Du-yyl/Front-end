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
  type myType = {
    name: string,
    age: number,
    [propName: string]: string | number
  }
  
  /*
  定义一个接口

    接口用来定义一个类结构，用来定义一个类中应该包含
    同时接口可以当作类型声明去使用
    接口可以重复定义，会将不同的内容进行叠加，重复的内容如果类型不一样，那么将会报错
   */
  interface myInterface {
    name: string,
    age: number
  }
  
  interface myInter {
    gender: string,
    
    sayHello (): void
  }
  
  const obj: myInterface = {
    name: '张三',
    age: 20,
    // address: '北京',
  }
  
  /*
      接口可以在定义类的时候限制类的结构
      接口中所有的属性都不能由实际的值
      接口只定义对象的结构，而不考虑实际值
      在接口中，所有的方法都是抽象方法
    定义一个类的时候，可以指定实现一个接口
   */
  
  class Demo implements myInter {
    constructor (gender: string) {
      this._gender = gender
    }
    
    private _gender: string
    
    get gender (): string {
      return this._gender
    }
    
    set gender (value: string) {
      this._gender = value
    }
    
    sayHello (): void {
    
    }
    
  }
})()
