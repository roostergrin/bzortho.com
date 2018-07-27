import Vue from 'vue'
import Vuex from 'vuex'
import vuexCache from 'vuex-cache'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pages: {},
    nav: {},
    blog: {},
    currentBlog: {},
    body: {},
    types: {},
    showModal: {},
    modalContent: {},
    loading: true
  },
  plugins: [vuexCache],
  mutations: mutations,
  actions: actions
})

store.cache.dispatch('GET_BLOG')

export default store
