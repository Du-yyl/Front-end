/**
 * Time:2022/2/9 10:58 02
 * Name:ceshi.js
 * Path:Web代码/src/com/charlatan/self#study/MongoDB/Mongoose
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

class User {
  #name
  #age
  #sex
  #address
  
  constructor (name, age, sex, address) {
    this.#name = name
    this.#age = age
    this.#sex = sex
    this.#address = address
  }
  
  get name () {
    return this.#name
  }
  
  set name (value) {
    this.#name = value
  }
  
  get age () {
    return this.#age
  }
  
  set age (value) { this.#age = value }
  
  get sex () {
    return this.#sex
  }
  
  set sex (value) {
    this.#sex = value
  }
  
  get address () {
    return this.#address
  }
  
  set address (value) {
    this.#address = value
  }
  
  read () {
    console.log('用户创建成功')
  }
  
  toString () {
    return 'name:' + this.#name
      + '  age:' + this.#age
      + '  sex:' + this.#sex
      + '  address:' + this.#address
  }
}

let user_1 = new User('张三', 12, '男', '北京')
let user_2 = new User('李四', 13, '女', '天津')
let user_3 = new User('王五', 14, '未知', '上海')

for (let user1Key in user_1) {
  console.log(user1Key)
}
console.log(user_1)

console.log(user_1.age)
console.log(user_1.toString())
console.log(user_1.age = 30)
console.log(user_1.age)
