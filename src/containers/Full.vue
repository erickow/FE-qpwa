<template>
  <div class="full">
    <v-app>
      <AppHeader/>
        <v-content>
          <router-view></router-view>
        </v-content>
      <AppFooter/>
    </v-app>     
  </div>
</template>

<script>
import { Header as AppHeader, Footer as AppFooter } from '@/components'
// import { checkCredentials, getUsername } from '@/utils/auth'

export default {
  name: 'full',
  components: {
    AppHeader,
    AppFooter
  },
  mounted () {

  },

  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>


