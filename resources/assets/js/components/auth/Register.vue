<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs6 offset-xs3>
            <transition name="fadeUp" appear>
              <v-card class="mt-4 elevation-12">
                <v-toolbar dark color="primary">
                  <v-icon>person</v-icon>
                  <v-toolbar-title>
                    Register Form
                  </v-toolbar-title>
                </v-toolbar>
                <v-card-text class="pa-4">
                  <v-form>

                    <v-text-field name="name" type="text" label="Name" v-validate="'required|max:255'" :error-messages="errors.collect('name')"
                      data-vv-name="name" v-model="formData.name" required></v-text-field>

                    <v-text-field name="email" type="email" label="Email" v-validate="'required|email|max:255'" :error-messages="errors.collect('email')"
                      data-vv-name="email" v-model="formData.email" required></v-text-field>

                    <v-text-field name="password" type="password" label="Password" v-validate="'required|min:6|max:255'" :error-messages="errors.collect('password')"
                      data-vv-name="password" v-model="formData.password" required></v-text-field>

                    <v-text-field name="password_confirmation" type="password" label="Confirm Password" v-validate="'required|confirmed:password|min:6|max:255'"
                      :error-messages="errors.collect('password_confirmation')" data-vv-name="password_confirmation" v-model="formData.password_confirmation"
                      required></v-text-field>

                    <v-btn :loading="loading" :disabled="loading" color="success" block large @click.prevent="register">
                      Register
                    </v-btn>

                  </v-form>
                </v-card-text>
              </v-card>

            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <app-footer></app-footer>

    <v-snackbar :timeout="timeout" :color="color" :multi-line="mode === 'multi-line'" :vertical="mode === 'vertical'" v-model="snackbar">
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
      loading: false,
      snackbar: false,
      color: 'error',
      mode: '',
      timeout: 7000,
      text: '',
      formData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },

  methods: {
    register() {
      this.loading = true;

      this.$validator.validateAll().then(res => {
        if (res) {
          //Success Form
          //Axios Start
          axios
            .post('/api/register', this.formData)
            .then(response => {
              this.color = 'success';
              this.snackbar = true;
              this.text = 'User Registered';
              setTimeout(() => {
                this.color = 'error';
                this.snackbar = false;
                this.$router.push({ name: 'login' });
              }, 3000);
            })
            .catch(error => {
              this.text = error.response.data.msg;
              this.snackbar = true;
              this.loading = false;
            });
          //Axios End
        } else {
          //Error Form
          this.loading = false;
          this.snackbar = true;
          this.text = 'Error In The Form';
        }
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