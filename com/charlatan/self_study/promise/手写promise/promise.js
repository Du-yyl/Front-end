/**
 * Time:2022/2/28 17:49 34
 * Name:promise.js
 * Path:Web代码/src/com/charlatan/self_study/promise/手写promise
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * Promise源码复原
 * @param executor 声明 Promise 时要传入一个指定的函数【含有两个形参：resolve,reject】
 * @constructor
 */
function Promise (executor) {
  // 设置初始状态是 pending【后面更改为成功和失败】
  this.PromiseState = 'pending'
  
  // 设置初始值【后面设置为成功时的值，或者失败的原因】
  this.PromiseResult = null
  
  // 如果promise中存在promise，那么要将多个promise中的调用的参数，按照顺序存放在数组中，按顺序调用
  this.callbacks = []
  
  // 保存this的值
  let that = this
  
  /**
   * 成功时的回调
   * @param data 保存赋值
   */
  function resolve (data) {
    // 通过判断来保证promise的状态只能被更改一次
    if (that.PromiseState === 'pending') {
      // 这时结果的值（promiseResult
      that.PromiseResult = data
      
      // 修改对象的状态（promiseState【确保状态只会被更改一次
      that.PromiseState = 'fulfilled'
      
      // 如果状态的更改是异步的，那么将原来的存储的内容，在更改状态的时候，确保多个回调的正确执行
      that.callbacks.forEach((item) => {
        // 当状态是异步的，调用then中的 onResolved 方法，将状态进行统一的更改
        item.onResolved(data)
      })
    }
  }
  
  /**
   * 失败时的调用【具体注释参考成功的回调】
   * @param data 保存赋值
   */
  function reject (data) {
    if (that.PromiseState === 'pending') {
      that.PromiseResult = data
      that.PromiseState = 'rejected'
      that.callbacks.forEach((item) => {
        item.onRejected(data)
      })
    }
  }
  
  // 如果在promise中发生了异常，那么应该先进行异常的处理，再进行后续的操作
  try {
    // 如果没有问题【将传入的方法进行处理，并绑定他的形参】
    executor(resolve, reject)
  } catch (error) {
    // 如果发生异常，那么执行第二个回调函数，并将异常信息作为报错数据
    reject(error)
  }
}

/**
 * promise中的 then 函数
 *
 * - ① 如果抛出异常, 新 promise 变为 rejected, reason 为抛出的异常
 * - ② 如果返回的是非 promise 的任意值, 新 promise 变为 resolved, value 为返回的值
 * - ③ 如果返回的是另一个新 promise, 此 promise 的结果就会成为新 promise 的结果
 * @param onResolved 成功的回调
 * @param onRejected 失败的回调
 * @returns {Promise} 返回值的类型是一个promise类型的值
 */
Promise.prototype.then = function (onResolved, onRejected) {
  // 保存正确的 this
  let that = this
  
  // 判断指定的形参是否是一个函数
  if (typeof onResolved !== 'function') {
    // 如果不是将 new promise 时的value进行直接返回赋值
    onResolved = value => value
  }
  
  /**
   * 实现异常穿透
   * (1) 当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调,
   * (2) 前面任何操作出了异常, 都会传到最后失败的回调中处理
   */
  if (typeof onRejected !== 'function') {
    // 如果第二个参数不是一个参数，那么配置一个默认的函数
    onRejected = reason => {
      throw reason
    }
  }
  
  return new Promise((resolve, reject) => {
    
    /**
     * 对统一代码的封装
     * @param eventType 要进行操作的方法类型
     */
    function callback (eventType) {
      // 保证不会出现异常
      try {
        // 将回调中的方法尝试执行，并保存返回值，如果then中的返回值不是promise，那么将这个值最为数据返回
        let result = eventType(that.PromiseResult)
        
        // 判断是否是promise类型
        if (result instanceof Promise) {
          // 如果是的话，那么他一定能够调用then中的方法，并配置成功和失败的回调
          result.then((value) => {
            resolve(value)
          }, (rej) => {
            reject(rej)
          })
        } else {
          // 如果不是一个promise类型的数据，那么将返回值作为返回结果进行使用
          resolve(result)
        }
      } catch (error) {
        // 如果出现异常，那么直接将调用错误的回调
        reject(error)
      }
    }
    
    // 判断是否状态是在哪一个阶段，并使用不同的回调【下同】
    if (this.PromiseState === 'fulfilled') {
      callback(onResolved)
    }
    
    if (this.PromiseState === 'rejected') {
      callback(onRejected)
    }
    
    // 如果能运行到这里，那么说明，这个回调状态的改变是异步的，将所有的回调保存在数组中，确保在状态更改的时的正确调用
    if (this.PromiseState === 'pending') {
      // 这里的思路：因为目前的then都是同步的，所以当调用的时候，会先执行then中的内容，这时会获取到then中的两个方法
      // 如果是异步函数，那么这个经过判断，那么这两个参数中的方法会被保存到callback对象中，
      // 当异步调用的时候就会执行原本在callback中保存的内容【如果是同步的，那么不会走这个判断】，因为是异步的，
      // 所以当调用的时候先执行的then，所以可以保证执行的正确
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved)
        },
        onRejected: function () {
          callback(onRejected)
        },
      })
    }
  })
}

/**
 *  then()的语法糖, 相当于: then(undefined, onRejected)
 * @param onRejected 失败的回调函数
 * @returns {Promise}
 */
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}

/**
 * 返回一个成功 promise 对象【如果调用，返回一个成功的promise对象，如果参数是一个promise，那么promise的结果决定成功与否
 * @param value 成功的数据或 promise 对象
 * @returns {Promise}
 */
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then((value) => {
        resolve(value)
      }, (rej) => {
        reject(rej)
      })
    } else {
      resolve(value)
    }
  })
}

/**
 * 返回一个失败时的promise，无论是什么数据和返回结果，都没用
 * @param reason 失败的原因
 * @returns {Promise}
 */
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

/**
 * 返回一个新的 promise, 只有所有的 promise 都成功才成功, 只要有一个失败了就直接失败，并把失败的返回；
 * 如果成功，那么将数组作为数据返回
 * @param promises 包含 n 个 promise 的数组
 * @returns {Promise}
 */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = []
    for (let i = 0; i < promises.length; i++) {
      // 判断状态的成功与否
      if (promises[i] !== 'fulfilled') {
        // 如果是成功的，那么将这个元素的状态保存在一个数组中，并且按照遍历时的下标存储【因为下标一定不重复】
        arr[i] = promises[i].PromiseResult
      } else {
        // 如果失败，那么直接将这个作为错误回调使用，结束代码
        reject(promises[i].PromiseResult)
      }
    }
    // 如果能运行到这，那么所有的内容绝对没有问题，将这个数组作为promise的数据进行调用返回
    resolve(arr)
  })
}

/**
 * 返回一个新的 promise, 第一个完成的 promise 的结果状态就是最终的结果状态
 * @param promises 包含 n 个 promise 的数组
 * @returns {Promise}
 */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      // 思路：当完成的时候，无论谁先执行，只要发生改变，就把改变的元素，无论是成功还是失败，都会直接调用
      // 然后直接输出
      item.then((val) => {
        resolve(val)
      }, (rej) => {
        reject(rej)
      })
    })
  })
}
