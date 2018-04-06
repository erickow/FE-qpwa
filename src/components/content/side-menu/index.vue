<template>
  <div class="c-side-menu">
    <v-layout row wrap>
        <v-flex xs4 @click="swapComponent('Current')">
            <v-card dark color="secondary">
            <v-card-text class="px-0">current</v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs4 @click="swapComponent('Saved')">
            <v-card dark color="secondary">
            <v-card-text class="px-0">saved</v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs4 @click="swapComponent('History')">
            <v-card dark color="secondary">
            <v-card-text class="px-0">history</v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
    <div :is="currentComponents"></div>    
  </div>  
</template>

<script>
import { Current, Saved, History } from './components/index'
export default {
  name: 'c-side-menu',
  components: {
    Current,
    Saved,
    History
  },
  data () {
    return {
      currentComponents: Current,
      componentArray: ['Current', 'Saved', 'History']
    }
  },
  methods: {
    swapComponent: function (component) {
      this.currentComponents = component
    }
  }
}
</script>
