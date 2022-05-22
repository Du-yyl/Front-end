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
  /*
  在定义类和函数时，如果变量的类型不确定，那么可以使用泛型
   */
  
  // 这个函数传入什么类型数据，就返回什么类型数据
  function func (a: number): number {
    return a
  }
  
  // a 的类型不确定，但是传入类型和返回类型一样
  function func1<T> (a: T): T {
    return a
  }
  
  // 不指定泛型，TS 进行自动推断
  func1(2)
  // 指定泛型
  func1<string>('string')
  
  // 指定两个泛型
  function func2<T, K> (num1: T, num2: K): K {
    return num2
  }
  
  interface Inter {
    length: number
  }
  
  // 指定泛型实现接口进行类型显示
  function func3<T extends Inter> (num1: T): T {
    return num1
  }
  
  // 指定泛型实现指定类型
  function func4<T extends number | string> (num1: T): T {
    return num1
  }
  
  // 类中使用泛型
  class Class<T> {
    name: T
    
    constructor (name: T) {
      this.name = name
    }
  }
  
  let c1 = new Class<string>('你好')
  
})()
