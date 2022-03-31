/*!*
  * Time:2022/3/30 21:41 17
  * Name:1、抽象类.ts
  * Path:
  * ProjectName:basic
  * Author:charlatan
  *
  *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  */

(
  function () {
    /**
     * 使用抽象类：
     *  抽象类和其他类区别不大
     *  抽象类是专门用来被继承的类
     *
     * 抽象类可以添加抽象方法
     *  抽象方法只能被重写
     */
    abstract class Person {
      private name: string
      age: number
    
      constructor (name: string, age: number) {
        this.name = name
        this.age = age
      }

// 定义抽象方法用来被实现
      //  抽象方法使用 abstract 开始
      //  不用写方法体
      //  只能定义在抽象类中
      //  子类必须对他进行实现
      abstract sayHello (): void
    }
  
    class Xiao extends Person {
      sayHello () {
        console.log('我是子类的你好')
      }
    }
  }
)()
