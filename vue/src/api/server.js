import axios1 from 'axios'
// import store from '@/store'
const BASE = '/api2'

export const getcaptcha = () => axios1.get(BASE + '/login/captcha')
export const reqLogin = (value) => axios1.post(BASE + '/login/login/', value)

// 提供cert目录的选项的接口
export const getCertLists = () => axios1.get(BASE + '/normal/getcertlists')
export const getCertList = (cert) => axios1.get(BASE + '/normal/getcertlist', { params: {cert}})
export const getfileContent = () => axios1.get(BASE + '/normal/readfilecontent')
export const downLoadFile = (value) => axios1.post(BASE + '/normal/base4download', value)
export const downLoadProfileFile = (value) => axios1.post(BASE + '/normal/base4profile', value)



