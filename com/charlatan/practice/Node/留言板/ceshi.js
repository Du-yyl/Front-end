// const { login, getList } = require('./data.js')
// const { findID, UserModel } = require('./data')
//
// //
// function app () {
//   async function test () {
//     return findID()
//   }
//
//   return test().then(value => {
//     return value[value.length - 1].uid
//   })
// }

// app()
// app().then(r => {
//   return r + 1
// })
// test()

// async function test() {
//   return app().then(r => {
//     return r + 1
//   })
// }
// console.log(test());
// test()

// console.log(findID());

// setTimeout(function () {
// test().then(value => {
//   console.log(value);
// })

// console.log(findID());
// },100)

// async function test() {
//     const user = await findID()
// }

// console.log(findID());

// async function test() {
//   let doc = await findID()
// }
// test().then(value => {
//   console.log(value);
// })

// UserModel.model

// console.log();
// findID()
//
// console.log(findID())
// console.log(" --- > "+findID())
// console.log(findID())
//
// async function test() {
//   console.log(await findID())
//   return await findID()
// }
// test().then(req =>{
//   console.log(req);
// })

// function findIdApp() {
//   async function find() {
//     findID()
//   }
//   find().then(value => {
//     console.log(value);
//     console.log(value[value.length - 1].uid);
//     return value[value.length - 1].uid
//   })
// }
//
// findIdApp()

const { findUserId } = require('./algorithm')
// findUserId()
setTimeout(function () {
  for (let i = 0; i < 1000; i++) {
    console.log(findUserId())
  }
}, 100)
