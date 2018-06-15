<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-4 elevation-5">
          <v-toolbar  dark color="primary">
            <v-icon>calendar_today</v-icon>
            <v-toolbar-title>
              Schedule Teacher - Private Class
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <app-table-private-class></app-table-private-class>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TablePrivateClass from './include/TablePrivateClass';
export default {
  components: {
    appTablePrivateClass: TablePrivateClass
  }
};
</script>

<style>
</style>
