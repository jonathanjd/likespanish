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
                  <v-text-field type="email" prepend-icon="email" label="Email" v-model="formLogin.email"></v-text-field>
                  <v-text-field type="password" prepend-icon="lock" label="Password" v-model="formLogin.password"></v-text-field>
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
      },
      loading: false
    };
  },

  methods: {
    login() {
      this.loading = true;
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
        .catch(error => {});
    }
  },

  components: {
    appToolbar: Toolbar,
    appFooter: Footer
  }
};
</script>