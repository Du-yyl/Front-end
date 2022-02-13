/**
 * Time:2022/2/10 15:19 37
 * Name:user.js
 * Path:Web代码/src/com/charlatan/practice/Node/留言板
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

class User {
  get id () {
    return this.#id
  }
  
  set id (value) {
    this.#id = value
  }
  
  get isDelete () {
    return this.#isDelete
  }
  
  set isDelete (value) {
    this.#isDelete = value
  }
  
  #name
  #age
  #sex
  #address
  #isDelete
  #id
  
  constructor (name, age, sex, address, id) {
    this.#name = name
    this.#age = age
    this.#sex = sex
    this.#address = address
    this.#isDelete = false
    this.#id = id
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
  
  set age (value) {
    this.#age = value
  }
  
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
  
  toString () {
    return '  name:' + this.#name
      + '  age:' + this.#age
      + '  sex:' + this.#sex
      + '  address:' + this.#address
  }
}

module.exports = User
