import axios from 'axios'

/**
 * 请求示例
 * @param pageSize 页数
 * @param pageIndex 页数下标
 */
export function homeApi ({
  pageSize = 10,
  pageIndex = 1,
} = {
  pageIndex: 1,
  pageSize: 10,
}) {
  return axios.get('homeApi/')
}
