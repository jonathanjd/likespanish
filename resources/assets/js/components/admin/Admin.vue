<template>
  <v-app>
    <app-toolbar-admin></app-toolbar-admin>
    <v-content>
        <transition name="fadeUp" mode="out-in" appear>
          <router-view></router-view>
        </transition>
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
