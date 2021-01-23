import axios from 'axios'
import store from '@/store'
const BASE = '/api'
const BASE1 = '/api1'

// 请求拦截器

axios.interceptors.request.use(function (config) {
  const token = JSON.parse(window.localStorage.getItem('token'))
  // console.log(token)
  config.headers.Authorization = 'Bearer ' + token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  }, async (error) => {
    if (error.response && error.response.status === 401) {
      // 如果有refresh_token，则请求获取新的 token
      console.log(1111)
      try {
        const { data } = await getToken()
        //  如果获取成功，则把新的 token 更新到容器中
        console.log(data)
        store.commit('SET_TOKEN', data.token)
        return axios(error.config)
      } catch (err) {
        // 如果获取失败，直接跳转 登录页
        console.log('请求刷线 token 失败', err)
      }
      return
    } else if (error.response.status === 500) {
      console.log('服务端异常，请稍后重试')
    }
    return Promise.reject(error)
  }
)
export const getToken = () => axios.get(BASE1 + '/getToken')
export const addUdid = (value) => axios.post(BASE + '/v1/devices', value)
export const getUdid = () => axios.get(BASE + '/v1/devices')
export const getProfileList = () => axios.get(BASE + '/v1/profiles')
export const createProfile = (data) => axios.post(BASE + '/v1/profiles', data)

export const test = () => axios.get(BASE + '/v1/bundleIds')
export const test2 = () => axios.get(BASE + '/v1/certificates')
export const test3 = () => axios.get(BASE + '/v1/profiles/RWPZTZ4T7U')

export const getCerList = () => axios.get(BASE + '/v1/certificates')

export const delProfile = (id) => axios.delete(BASE + '/v1/profiles/'+id)
export const getBundleIdList = () => axios.get(BASE + '/v1/bundleIds')
// DELETE https://api.appstoreconnect.apple.com/v1/profiles/{id}
// https://api.appstoreconnect.apple.com/v1/bundleIds
