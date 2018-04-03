<template>
  <div class="v-home">
    <section>
      <v-container grid-list-md fluid>
            <v-layout row wrap>
                <v-flex xs12 sm12 md7 lg7>
                    <v-card dark color="primary">
                    <v-card-text class="px-0">12</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md5 lg5>
                    <v-card dark color="primary">
                    <v-card-text class="px-0">12</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
  </section>  
  <section>
      <v-container grid-list-md fluid>
            <v-layout row wrap>
                <v-flex xs12 sm12 md8 lg8>
                    <v-card dark color="primary">
                     <v-container grid-list-md fluid>
                            <v-layout row wrap>
                                <v-flex xs12>
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
        </v-container>
  </section>  
  </div>  
</template>

<script>
export default {
  name: 'v-home',
  data () {
    return {
    }
  }
}
</script>
