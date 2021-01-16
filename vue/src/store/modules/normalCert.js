import { getCertLists, getCertList, getfileContent } from '@/api/server'
import { Notification } from 'element-ui'
const normalCert = {
  namespaced: true,
  state: {
    certLists: [],
    certList: [],
    certName: '',
    defaultCert: ''
  },
  mutations: {
    // 更新所有cert目录的信息
    updatecertLists (state, certLists) {
      state.certLists = certLists
    },
    updateDefaultCert (state, defaultCert) {
      state.defaultCert = defaultCert
    },
    // 更新选中的cert目录下的信息
    updatecertList (state, datas) {
      state.certList = datas.certList
      state.certName = datas.certName
      Notification.success({
        title: '切换成功',
        message: datas.certName
      })
    }
  },
  actions: {
    async RECORD_UPDATECERTLISTS ({ commit }) {
      const { data } = await getCertLists()
      commit("updatecertLists", data.data)
    // commit("updateDefaultCert", data.defaultCert)
    },
    async RECORD_UPDATECERTLIST ({ commit }, val) {
      const { data } = await getCertList(val)
      const datas = { certList: data.data, certName: val }
      commit("updatecertList", datas)
    }
  },
  getters: {
  }
}
export default normalCert
