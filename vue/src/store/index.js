import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, addUdid, getUdid, getProfileList, createProfile, getCerList } from '@/api'
import user from "./modules/user"
import normalCert from "./modules/normalCert"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    udid: "",
    token: "",
    udidList: [],
    profileList: [],
    profile: '',
    cerList: []
  },
  mutations: {
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
      } catch (error) {
        if (error.response.status === 409) {
          console.log("udid exsit")
          commit('SET_UDID', data.data.attributes.udid)
          dispatch('recordGetUdidList')
        }
      }
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
      const profile = createProfile(data)
      commit('SET_PROFILE', profile)
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
