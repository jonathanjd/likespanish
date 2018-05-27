<template>
  <section>
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list>

        <v-list-tile :to="{ name: 'home' }">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'about' }">
          <v-list-tile-action>
            <v-icon>info
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About Us</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'plans' }">
          <v-list-tile-action>
            <v-icon>shopping_cart
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Plans</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'register'}">
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Register</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ name: 'login'}">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>LikeSpanish</v-toolbar-title>
    </v-toolbar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style>
</style>