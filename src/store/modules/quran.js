import { requestPublic } from '@/utils/request'
const quran = {
  state: {
    DATA: {
      index: '',
      sura: '',
      aya: '',
      text: ''
    }
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.DATA = data
    }
  },
  actions: {
    loadData: ({commit}) => {
      return requestPublic('get', 'quran')
        .then(
          response => {
            commit('SET_DATA', response.data)
          }
        )
    }
  }
}

export default quran
