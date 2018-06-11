<template>
  <section>
    <v-navigation-drawer v-model="drawer"
      fixed
      app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="/img/admin/user-admin.png" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ myTileTitle }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense>
        <v-divider></v-divider>
        <transition-group name="fadeLeft">
          <template v-if="myTypeUser === 'admin'">
            <v-list-tile @click="" v-for="(item, index) in navigationAdmin" exact :key="index" :to="{ name: item.link }">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </transition-group>


        <v-list-tile @click="logout" :disabled="loading">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-if="loading">
            <v-progress-circular indeterminate></v-progress-circular>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app>
      <v-toolbar-title>Awesome CV</v-toolbar-title>
    </v-toolbar>
    <v-snackbar
      :timeout="timeout"
      color="error"
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
      drawer: true,
      loading: false,
      snackbar: false,
      mode: '',
      timeout: 6000,
      text: '',
      navigationTeacher: [{ title: 'Dashboard', icon: 'dashboard', link: '' }],
      navigationStudent: [{ title: 'Dashboard', icon: 'dashboard', link: '' }],
      navigationAdmin: [
        { title: 'Dashboard', icon: 'dashboard', link: 'admin.dashboard' },
        { title: 'Create Student', icon: 'create', link: 'admin.create.student' },
        { title: 'Create Teacher', icon: 'create', link: 'admin.create.teacher' },
        { title: 'List Teacher', icon: 'list', link: 'admin.list.teacher' }
      ]
    };
  },

  created() {
    const token = localStorage.getItem('token');
    this.$store.dispatch('loadData', token);
  },

  computed: {
    myTileTitle() {
      return this.$store.getters.getName === '' ? 'Loading...' : this.$store.getters.getName;
    },
    myTypeUser() {
      return this.$store.getters.getType === '' ? false : this.$store.getters.getType;
    }
  },

  methods: {
    logout() {
      this.loading = true;
      const token = localStorage.getItem('token');
      axios
        .delete('/api/auth/logout?token='.concat(token))
        .then(response => {
          localStorage.removeItem('token');
          this.$router.push({ name: 'login' });
        })
        .catch(error => {
          if (error.response.status === 401) {
            localStorage.removeItem('token');
            this.$router.push({ name: 'login' });
          } else {
            let myError = error.data;
            this.text = myError;
          }
          this.snackbar = true;
        });
    }
  }
};
</script>

<style>
</style>