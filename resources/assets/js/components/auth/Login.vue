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
                  <v-text-field type="email" label="Email" v-model="formLogin.email"></v-text-field>
                  <v-text-field type="password" label="Password" v-model="formLogin.password"></v-text-field>
                  <v-btn color="success" @click.prevent="login" block dark large>Login</v-btn>
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
      formLogin: {
        email: '',
        password: ''
      }
    };
  },

  methods: {
    login() {
      axios
        .post('/api/login', this.formLogin)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          const token = localStorage.getItem('token');
          axios.get('/api/auth/user?token='.concat(token)).then(response => {
            let user = response.data;
            if (user.data.type == 'student') {
              this.$router.push({ name: 'admin' });
            }
          });
        })
        .catch(error => {});
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