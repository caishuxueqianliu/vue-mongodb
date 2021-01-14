import axios1 from 'axios'
// import store from '@/store'
const BASE = '/api2'

export const getcaptcha = () => axios1.get(BASE + '/login/captcha')
export const reqLogin = (value) => axios1.post(BASE + '/login/login/', value)
