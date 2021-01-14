import { reqLogin } from '@/api/server'
import { Notification } from 'element-ui'
const user = {
  namespaced: true,
  state: {
    userInfo: ''
  },
  mutations: {
    // 更新登陆的用户信息
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async RECORD_UPDATEUSERINFO ({ commit }, ruleForm) {
      const { data } = await reqLogin(ruleForm)
      console.log(data)
      if (data.code === 0) {
        Notification({
          title: '登陆成功',
          message: data.msg,
          type: 'success'
        })
        const userInfo = data.data
        commit("updateUserInfo", userInfo)
        // 登陆成功，信息存入vuex中
      } else if (data.code === 1) {
        Notification.error({
          title: '登陆失败',
          message: data.msg
        })
      }
    }
  },
  getters: {
    getNameA (state) {
      return state.name
    }
  }
}
export default user
