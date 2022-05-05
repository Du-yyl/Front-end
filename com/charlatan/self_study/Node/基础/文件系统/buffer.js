/**
 * Date:2022/1/2 14:00 10
 * Name:buffer.js
 * Path:Web代码/src/com/charlatan/self_study/Node/基础/文件系统
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/*
 *  buffer（缓存区）
 *   -buffer的结构和数组很像，操作的方法和数组类似
 *   -数组中不能存储二进制数据文件，但是 buffer可以
 *
 * 在buffer中存储都是二进制数组，但是显示的是16进制的形式显示
 *   buffer中一个内容占有一个字节
 *
 * 将指定字符串进行转换到buffer中，在buffer中是按实际的内存二进制进行存储的
 *   输出的字符串的长度是一个字符串的长度
 *   而buffer中的长度，其实是内存中实际存储的长度
 *
 *   一个英文字母存一个字节，而中文字符是3个字节
 *
 * */

let str = 'Hello World'
let str1 = '你好，世界'
// 创建buffer
let bf = Buffer.from (str)
console.log (str)
console.log (str.length)
console.log (bf)
console.log (bf.length)

let bf1 = Buffer.from (str1)
console.log (str1)
console.log (str1.length)
console.log (bf1)
console.log (bf1.length)

/*
 * 创建一个指定大小的buffer
 *   buffer的构造函数都是废弃的
 *
 Buffer.alloc(size[, fill[, encoding]])#
 
 size <integer> 新的 Buffer 所需的长度。
 fill <string> | <Buffer> | <Uint8Array> | <integer> 用于预填充新 Buffer 的值。 默认值: 0。
 encoding <string> 如果 fill 是字符串，则这就是它的编码。 默认值: 'utf8'。
 分配 size 个字节的新 Buffer。 如果 fill 为 undefined，则 Buffer 将以零填充。
 *
 * 可以通过下标直接更改指定buffer的字节内容
 *
 * buffer 的大小一旦确定，就不能进行修改，buffer实际是对底层内存的直接操作【所以buffer不能和数组一样进行扩容】
 * 当赋值超过最大（255）时，会将指定的的数字转换成二进制数组，对最后8位进行截断，并将他转换为16进制
 *
 * 当进行读取时，会将16进制数字再转换为10进制进行输出
 *   当需要转换成其他进制时，可以使用toString(指定进制)进行转换
 * */

let bf2 = new Buffer (10)
console.log (bf2.length)
console.log (bf2)

let bf3 = Buffer.alloc (20)
console.log (bf3)
bf3[0] = 30
bf3[2] = 50
bf3[3] = 60
bf3[1] = 256
bf3[4] = 70
bf3[21] = 70
// console.log(bf3);
// console.log(bf3[2]);
// console.log(bf3[2].toString(16));
// console.log(bf3[2].toString(5));
// for (let i = 0; i < bf3.length; i++) {
// 	console.log(bf3[i].toString(16));
// }

/*
 *
 * Buffer.allocUnsafe(size)#
 
 size <integer> 新的 Buffer 所需的长度。
 分配 size 个字节的新 Buffer。 如果 size 大于 buffer.constants.MAX_LENGTH 或小于 0，则抛出 ERR_INVALID_ARG_VALUE。
 
 以这种方式创建的 Buffer 实例的底层内存不会被初始化。 新创建的 Buffer 的内容是未知的，可能包含敏感的数据。
 使用 Buffer.alloc() 来用零初始化 Buffer 实例。
 * 创建可能存在有敏感数据的buffer
 *
 * 使用alloc创建的数据是一块新的地址，内存中寸的数据都是空的
 * 而allocUnsafe创建的数据是直接将一个地址拿过来，这个地址中有可能存有其他元素已经存的数据，使用是不安全的
 * */

let bf4 = Buffer.allocUnsafe (9999)
console.log ('--' + bf4)

let bf5 = Buffer.from ('我是测试的字符串')
console.log (bf5)

/*
 * 调用toStirng（）可以将缓冲区中的内容转换为字符串
 * */
console.log (bf5.toString ())

