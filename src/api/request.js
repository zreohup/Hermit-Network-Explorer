import axios from 'axios'
import { Message, Loading } from 'element-ui'
const ConfigBaseURL = 'http://45.32.116.172:1317' //默认路径，这里也可以使用env来判断环境
// const ConfigBaseURL = 'http://167.179.118.118:1317'
// const ConfigBaseURL = ''
// const ConfigBaseURL = 'http://158.247.237.78:8888'
let loadingInstance = null //这里是loading
//使用create方法创建axios实例
export const Service = axios.create({
  timeout: 10000, // 请求超时时间
  baseURL: ConfigBaseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 添加请求拦截器
Service.interceptors.request.use(config => {
  // loadingInstance = Loading.service({
  //    lock: true,
  //    text: 'loading...'
  // })
  return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
  // loadingInstance.close()
  //  console.log(response)
  return response.data
}, error => {
  console.log('error', error)
  const msg = error.Message !== undefined ? error.Message : ''
  Message({
    message: '网络错误' + msg,
    type: 'error',
    duration: 3 * 1000
  })
  loadingInstance.close()
  return Promise.reject(error)
})