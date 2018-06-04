<template>
  <section>
    <v-toolbar dark fixed app>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat :to="{ name: 'home' }" exact>Home</v-btn>
      <v-btn flat :to="{ name: 'about' }">About Us</v-btn>
      <v-btn flat :to="{ name: 'plans' }">Plans</v-btn>
      <v-btn flat :to="{ name: 'register' }">Register</v-btn>
      <v-btn flat :to="{ name: 'login' }">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>