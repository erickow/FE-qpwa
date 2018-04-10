<template>
  <div class="v-home">
      <v-container grid-list-md fluid>
        <v-layout fill-height row wrap>
            <v-flex >
                <v-card dark color="primary">
                    <v-card-text>
                      <p>Surah Ke</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
        <v-flex d-flex xs12 sm12 md8 lg8>
            <v-card dark color="primary">
             <v-container grid-list-md fluid>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card dark color="secondary">
                            <v-card-text class="px-0">
                                <v-card-text>
                                    <h1 dir="rtl">
                                        <span v-for="q in quran"
                                        :key="q.id">
                                        {{ q.text }}  ({{ q.aya }})
                                        </span>  
                                    </h1>
                                </v-card-text>
                            </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
        <v-flex xs12 sm12 md4 lg4>
            <v-card dark color="primary">
                <v-container grid-list-md fluid>
                    <side-menu></side-menu>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
  </div>  
</template>

<script>
import SideMenu from '@/components/content/side-menu'
export default {
  name: 'v-home',
  components: {
    SideMenu
  },
  created () {
    this.$store.dispatch('loadData')
  },
  data () {
    return {
      surah: '1',
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  },
  computed: {
    quran () {
      return this.$store.getters.quran
    },
    active (sura) {
      this.quran.filter((q) => q.sura === sura)
    }
  }
}
</script>

<style>

</style>
