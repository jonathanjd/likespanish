<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card class="ma-4 elevation-5">
          <template v-if="myUserTeacher == ''">
            <v-progress-linear :indeterminate="true"></v-progress-linear>
          </template>
          <template v-else>
            <v-toolbar dark color="indigo" :height="150">
              <v-layout row wrap align-center>
                <v-flex class="text-xs-center">
                  <v-avatar :tile="false" :size="120" color="grey lighten-4">
                    <img :src="'/img/admin/' + myUserTeacher.teacher.photo" alt="avatar">
                  </v-avatar>
                </v-flex>
              </v-layout>
            </v-toolbar>
            <v-card-title primary-title>
              <h1>Teacher: {{ myUserTeacher.name }}</h1>
            </v-card-title>

            <v-card-text>
              <p><strong>Email:</strong> {{ myUserTeacher.email }}</p>
              <p><strong>Skype:</strong> {{ myUserTeacher.teacher.skypeid }}</p>
              <template v-if="myUserTeacher.active === 1">
                <p><strong>Active:</strong> <v-icon>done</v-icon></p>
              </template>
              <template v-else>
                <p><strong>Active:</strong> <v-icon>block</v-icon></p>
              </template>
              <p><strong>Address:</strong> {{ myUserTeacher.teacher.address }}</p>
              <p><strong>City:</strong> {{ myUserTeacher.teacher.city }}</p>
              <p><strong>Country:</strong> {{ myUserTeacher.teacher.country }}</p>
              <p><strong>TimeZone:</strong> {{ myUserTeacher.teacher.timezone }}</p>
              <p><strong>Details:</strong> {{ myUserTeacher.teacher.details }}</p>
              <v-divider></v-divider>
              <v-btn color="warning">Edit</v-btn>
              <v-btn color="error">Delete</v-btn>
            </v-card-text>
          </template>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myUserTeacher() {
      return this.$store.getters.getShowUserTeacher;
    }
  },

  created() {
    this.fetchUserTeacher();
  },

  methods: {
    fetchUserTeacher() {
      const payload = {
        id: this.$route.params.id,
        token: localStorage.getItem('token')
      };
      this.$store.dispatch('loadShowUserTeacher', payload);
    }
  }
};
</script>

<style>
</style>
