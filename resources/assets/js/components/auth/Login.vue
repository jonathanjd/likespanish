<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs6 offset-xs3>
            <v-card class="mt-4 elevation-12">
              <v-toolbar dark color="primary">
                <v-icon>person</v-icon>
                <v-toolbar-title>Login Form</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pa-4">
                <v-form>
                  <v-text-field v-validate="'required|email|max:255'" :error-messages="errors.collect('email')" data-vv-name="email" type="email" prepend-icon="email" label="Email" v-model="formLogin.email"></v-text-field>
                  <v-text-field v-validate="'required|max:255'" :error-messages="errors.collect('password')" data-vv-name="password" type="password" prepend-icon="lock" label="Password" v-model="formLogin.password"></v-text-field>
                  <v-btn :loading="loading" :disabled="loading" color="success" block large @click.prevent="login">
                    Login
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <app-footer></app-footer>
    <v-snackbar
      :timeout="timeout"
      color="error"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn dark flat @click.native="closeSnackbar">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Toolbar from '../include/Toolbar';
import Footer from '../include/Footer';
import axios from 'axios';
export default {
  data() {
    return {
      snackbar: false,
      mode: '',
      timeout: 7000,
      text: '',
      formLogin: {
        email: '',
        password: ''
      },
      loading: false
    };
  },

  methods: {
    login() {
      this.loading = true;
      this.$validator.validateAll().then(res => {
        if (res) {
          //Success Form
          axios
            .post('/api/login', this.formLogin)
            .then(response => {
              localStorage.setItem('token', response.data.token);
              const token = localStorage.getItem('token');
              axios.get('/api/auth/user?token='.concat(token)).then(response => {
                let user = response.data;
                if (user.data.type == 'admin') {
                  this.$router.push({ path: '/admin' });
                }
                if (user.data.type == 'student') {
                  this.$router.push({ path: '/admin/student' });
                }
                if (user.data.type == 'teacher') {
                  this.$router.push({ path: '/admin/teacher' });
                }
              });
            })
            .catch(error => {
              this.text = error.response.data.msg;
              this.snackbar = true;
              this.loading = false;
            });
        } else {
          //Error Form
          this.loading = false;
          this.snackbar = true;
          this.text = 'Error In The Form';
        }
      });
    },

    closeSnackbar() {
      this.snackbar = false;
      this.text = '';
    }
  },

  components: {
    appToolbar: Toolbar,
    appFooter: Footer
  }
};
</script>