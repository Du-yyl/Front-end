function encrypt (key, offset, string) {
  let encryption = CryptoJS.enc.Utf8.parse(string)
  return CryptoJS.AES.encrypt(encryption, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(offset),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).ciphertext.toString().toUpperCase()
}

