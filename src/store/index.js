import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  login: true, // 是否登录
  viewDirection: '' // 视图方向
}

export default new Vuex.Store({
  state,
  mutations
})
