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

// const { findUserId } = require('./algorithm')
// // findUserId()
// setTimeout(function () {
//   for (let i = 0; i < 1000; i++) {
//     console.log(findUserId())
//   }
// }, 100)

const { ContentDataSchema, ContentInformationSchema } = require('./data')
const mongoose = require('mongoose')

let obj = {
  'name': '测试用例',
  'eMail': '123456@163.com',
  'isAnonymous': true,
  'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

createContent(obj)

// function createContent(obj) {
//   let id = mongoose.Types.ObjectId().toString()
//   ContentDataSchema.create({
//     content: obj.content,
//     _id: id,
//   }, function (err) {
//     if (!err) {
//       console.log('用户评论内容添加成功')
//       ContentInformationSchema.create({
//         name: obj.name,
//         eMail: obj.eMail,
//         isAnonymous: obj.isAnonymous,
//         contentDataId:id
//       },function (err) {
//         if (!err){
//           console.log('用户评论信息添加成功');
//         }else {
//           console.log("用户评论信息添加失败");
//           throw err
//         }
//       })
//     } else {
//       console.log('用户评论内容添加失败')
//       throw err
//     }
//   })
// }

