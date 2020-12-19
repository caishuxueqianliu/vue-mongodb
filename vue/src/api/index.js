import axios from 'axios'
const BASE = '/api'
// 请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' +
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6Ikc2UlYzVjdLNzcifQ.eyJpc3MiOiI0ODMzNTNlOS00MmFhLTQ4NWYtOWYxYS03ODU1NzAzMWUyYjkiLCJleHAiOjE2MDgzNDA4MDgsImF1ZCI6ImFwcHN0b3JlY29ubmVjdC12MSJ9.yWutpIY2ozeIeRM3Lptv-mkV1sKT45JGDt-jLIUldJiy693N5Zi9q_g2kpBo1vm68x8fSDUvF6uoU1VrO9Bg9Q'
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
export const addUdid = (value) => axios.post(BASE + '/v1/devices', value)
export const getUdid = () => axios.get(BASE + '/v1/devices')
