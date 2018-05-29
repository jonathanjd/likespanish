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
                  <v-text-field type="text" label="Name" v-model="formData.name" required></v-text-field>
                  <v-text-field type="email" label="Email" v-model="formData.email" required></v-text-field>
                  <v-text-field type="password" label="Password" v-model="formData.password" required></v-text-field>
                  <v-text-field type="password" label="Confirm Password" v-model="formData.password_confirmation" required></v-text-field>
                  <v-btn color="success" @click.prevent="saveUser" block dark large>Register</v-btn>
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
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },

  methods: {
    saveUser() {
      axios
        .post('/api/register', this.formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  components: {
    appToolbar: Toolbar,
    appFooter: Footer
  }
};
</script>

<style>
</style>