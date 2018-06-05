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
              class="elevation-4"
              :loading="loadingTeachers"
              :items="compuUserTeacher"
            >
              <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
              <template slot="items" slot-scope="teacher">
                <td class="text-xs-center">{{ teacher.item.id }}</td>
                <td class="text-xs-center">{{ teacher.item.name }}</td>
                <td class="text-xs-center">{{ teacher.item.email }}</td>
                <td class="text-xs-center">{{ teacher.item.teacher.skypeid }}</td>
                <td class="justify-center layout px-0">
                  <v-btn icon class="mx-0">
                    <v-icon color="info">info</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0">
                    <v-icon color="warning">edit</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0">
                    <v-icon color="error">delete</v-icon>
                  </v-btn>
                </td>
              </template>
              <template slot="pageText" slot-scope="props">
                Lignes {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
              </template>
              <template slot="no-data">
                <v-alert :value="true" color="error" icon="warning">
                  Sorry, Nothing to Display Here
                </v-alert>
              </template>
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
      loadingTeachers: false,
      headers: [
        {
          text: '*',
          align: 'center',
          sortable: false,
          name: 'id'
        },
        {
          text: 'Name',
          align: 'center',
          sortable: false,
          name: 'name'
        },
        {
          text: 'Email',
          align: 'center',
          sortable: false,
          name: 'email'
        },
        {
          text: 'Skype',
          align: 'center',
          sortable: false,
          name: 'spkype'
        },
        {
          text: 'Actions',
          align: 'center',
          value: 'actions',
          sortable: false
        }
      ]
    };
  },

  created() {
    this.loadingTeachers = true;
    let token = localStorage.getItem('token');
    this.$store.dispatch('loadUserTeacher', token).then(() => {
      this.loadingTeachers = false;
    });
  },

  computed: {
    compuUserTeacher() {
      return this.$store.getters.getUserTeacher;
    }
  }
};
</script>

<style>
</style>