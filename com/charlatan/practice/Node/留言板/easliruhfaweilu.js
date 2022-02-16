const CryptoJS = require('crypto-js')  //引用AES源码js

/**
 * AES 解密【先将字符串进行base64的转换，然后进行加密】
 * @param key 密钥
 * @param offset 偏移量（必须是16位）
 * @param string 要加密的内容（必须是16位）
 * @returns {*} 要发送到前端的解密内容
 * @constructor
 */
function decrypt (key, offset, string) {
  
  let decryption = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(string))
  return CryptoJS.AES.decrypt(decryption, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(offset),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8).toString()
}

/**
 * 加密方法
 * @param key 加密的密钥
 * @param offset 偏移量
 * @param string 要加密的字符串
 * @returns {string} 返回要发送到后端的加密的内容
 * @constructor
 */
function encrypt (key, offset, string) {
  let encryption = CryptoJS.enc.Utf8.parse(string)
  return CryptoJS.AES.encrypt(encryption, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(offset),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).ciphertext.toString().toUpperCase()
}
