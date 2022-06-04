/**
 * 发送请求的封装
 */
import axios from 'axios'

export function request (reg1: string, reg2: string): any
export function request (url: string, method: string): any {
  axios({
    url,
    method,
  }).then((value) => {
    return value
  }, (reason) => {
    return reason
  })
}
