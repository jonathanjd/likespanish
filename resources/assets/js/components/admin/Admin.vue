<template>
  <v-app>
    <app-toolbar-admin></app-toolbar-admin>
    <v-content>
      <h1>Admin</h1>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Footer from '../include/Footer';
import ToolbarAdmin from '../include/ToolbarAdmin';
export default {
  components: {
    appFooter: Footer,
    appToolbarAdmin: ToolbarAdmin
  }
};
</script>

<style>
</style>
