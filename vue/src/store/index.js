import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, addUdid, getUdid, getProfileList, createProfile, getCerList, getBundleIdList, delProfile } from '@/api'
import user from "./modules/user"
import normalCert from "./modules/normalCert"
import { Notification } from "element-ui"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    udid: "",
    token: "",
    udidList: [],
    profileList: [],
    profile: '',
    cerList: [],
    bundleIDList: []
  },
  mutations: {
    SET_BUNDLEIDLIST (state, bundleIDList) {
      state.bundleIDList = bundleIDList
    },
    SET_TOKEN (state, token) {
      state.token = token
      window.localStorage.setItem('token', JSON.stringify(token))
    },
    SET_UDID (state, udid) {
      state.udid = udid
    },
    SET_UDIDLIST (state, udidList) {
      state.udidList = udidList
    },
    SET_PROFILELIST (state, profileList) {
      state.profileList = profileList.reverse()
    },
    SET_PROFILE (state, profile) {
      state.profile = profile
    },
    SET_CERLIST (state, cerList) {
      state.cerList = cerList
    }
    // updateIsLogin(state, isLogin) { //设置参数
    //   state.isLogin = isLogin;
    // },
  },
  getters: {
    udidRealList: state => {
      return state.udidList.filter(item => item.attributes.udid === state.udid)[0]
    }
  },
  actions: {
    // recordUserInfo({commit}, userinfo) {
    //   commit('updataUserInfo', userinfo)
    // },
    async recordToken ({ commit }) {
      const { data } = await getToken()
      const token = data.token
      commit('SET_TOKEN', token)
    },
    async recordAddUdid ({ commit }, data) {
      try {
        await addUdid(data)
        this.recordGetUdidList()
      } catch (error) {
        if (error.response.status === 409) {
          console.log("udid exsit")
        //  commit('SET_UDID', data.data.attributes.udid)
          // dispatch('recordGetUdidList')
        }
      }
    },
    async recordGetBundleIDList ({ commit }) {
      const { data } = await getBundleIdList()
      commit('SET_BUNDLEIDLIST', data.data)
    },
    recordDelProfile ({ commit }, id) {
      delProfile(id).then(() => {
        Notification.success({
          title: '删除成功',
          message: "删除一条签名文件"
        })
      })
      // commit('SET_BUNDLEIDLIST', data.data)
    },
    async recordGetUdidList ({ commit }) {
      const { data } = await getUdid()
      commit('SET_UDIDLIST', data.data)
    },
    async recordGetProfileList ({ commit }) {
      const { data } = await getProfileList()
      commit('SET_PROFILELIST', data.data)
    },
    recordCreateProfile ({ commit }, data) {
      createProfile(data).then( () => {
        Notification.success({
          title: '新建成功',
          message: "新间一条签名文件"
        })
      })
    },
    async recordGetCerList ({ commit }) {
      const { data } = await getCerList()
      commit('SET_CERLIST', data.data)
    }
  },
  modules: {
    user,
    normalCert
  }
})
