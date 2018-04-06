<template>
  <div class="c-saved">
    <v-layout row wrap>
        <v-flex xs12>
            <v-card dark color="secondary">
                <v-card-text
                v-text="lorem">
                </v-card-text>
                <v-card-text
                v-text="lorem">
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
  </div>  
</template>

<script>
export default {
  name: 'c-saved',
  data () {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>
