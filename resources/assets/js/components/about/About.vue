<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-text>
                <h1>Componete About Us</h1>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Toolbar from '../include/Toolbar';
import Footer from '../include/Footer';
export default {
  components: {
    appToolbar: Toolbar,
    appFooter: Footer
  }
};
</script>

<style>
</style>
