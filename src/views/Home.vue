<template>
  <div class="v-home">
      <v-container grid-list-md fluid>
    <section>
      
            <v-layout row wrap>
                <v-flex >
                    <v-card dark color="primary">
                        <v-card-text
                        v-text="lorem.slice(0, 70)">
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        
  </section>  
  <section>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm12 md8 lg8>
                    <v-card dark color="primary">
                     <v-container grid-list-md fluid>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-card dark color="secondary">
                                    <v-card-text class="px-0">12</v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md4 lg4>
                    <v-card dark color="primary">
                        <v-container grid-list-md fluid>
                            <v-layout row wrap>
                                <v-flex xs4>
                                    <v-card dark color="secondary">
                                    <v-card-text class="px-0">12</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4>
                                    <v-card dark color="secondary">
                                    <v-card-text class="px-0">12</v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4>
                                    <v-card dark color="secondary">
                                    <v-card-text class="px-0">12</v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-card dark color="secondary">
                                    <v-card-text class="px-0">12</v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
  </section>  
  </v-container>
  </div>  
</template>

<script>
export default {
  name: 'v-home',
  data () {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>

<style>
.container {
  min-height: 55vh
}
</style>
