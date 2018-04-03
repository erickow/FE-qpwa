import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Full',
      component: Full,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})
