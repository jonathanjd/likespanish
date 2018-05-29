<template>
  <section>
    <v-navigation-drawer permanent absolute>

      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense>
        <v-divider></v-divider>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app>
      <v-toolbar-title>LikeSpanish</v-toolbar-title>
    </v-toolbar>
    <v-snackbar
      :timeout="timeout"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      snackbar: false,
      color: 'error',
      mode: '',
      timeout: 6000,
      text: ''
    };
  },

  methods: {
    logout() {
      const token = localStorage.getItem('token');
      axios
        .delete('/api/auth/logout?token='.concat(token))
        .then(response => {
          localStorage.removeItem('token');
          this.$router.push({ name: 'login' });
        })
        .catch(error => {
          let myError = error.data;
          this.text = myError.msg;
          this.snackbar = true;
        });
    }
  }
};
</script>

<style>
</style>