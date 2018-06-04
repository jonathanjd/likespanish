<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-4 elevation-5">
          <v-toolbar dark color="primary">
            <v-icon>list</v-icon>
            <v-toolbar-title>
              List Teacher
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-data-table
              :headers="headers"
              class="elevation-1"
              hide-actions
              :items="items"
            >

            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

      headers: [
        {
          text: '*',
          align: 'center',
          sortable: false,
          name: 'id',
        },
        {
          text: 'Name',
          align: 'center',
          sortable: false,
          name: 'name',
        },
        {
          text: 'Email',
          align: 'center',
          sortable: false,
          name: 'email',
        },
        {
          text: 'Skype',
          align: 'center',
          sortable: false,
          name: 'spkype',
        },
      ],

      items: [
        {
          id:1,
          name: "Jonathan Duran",
          email: "headjd@gmail.com",
          skype: "SkyJD123456",
        }
      ],

    }
  }
};
</script>

<style>
</style>