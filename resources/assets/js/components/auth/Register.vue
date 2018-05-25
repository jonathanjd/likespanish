<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs6 offset-xs3>
            <v-card class="mt-4 pa-4">
              <v-card-text>
                <v-form>
                  <v-text-field type="text" label="Name" required></v-text-field>
                  <v-text-field type="email" label="Email" required></v-text-field>
                  <v-text-field type="password" label="Password" required></v-text-field>
                  <v-text-field type="password" label="Confirm Password" required></v-text-field>
                  <v-btn color="success" block dark large>Register</v-btn>
                </v-form>
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