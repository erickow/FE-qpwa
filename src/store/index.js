import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import quran from './modules/quran'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    quran
  },
  getters
})

export default store
