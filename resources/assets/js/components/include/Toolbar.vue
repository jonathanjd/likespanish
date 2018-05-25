<template>
  <section>
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{ name: 'home' }">Home</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>info
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{ name: 'about' }">About Us</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>shopping_cart
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{ name: 'plans' }">Plans</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{ name: 'register'}">Register</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link :to="{ name: 'login'}">Login</router-link></v-list-tile-title>
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