import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(axios, VueAxios)

const BaseURL = 'http://127.0.0.1:8089/'

export function requestPublic (method, url, data) {
  return Vue.axios({
    method: method,
    url: BaseURL + url,
    data: data
  })
}
