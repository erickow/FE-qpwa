<template>
  <header class="c-header">
      <v-toolbar id="header">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title >Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" id="header">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'c-header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#header {
    background-color: #4e878c !important;
}
</style>
