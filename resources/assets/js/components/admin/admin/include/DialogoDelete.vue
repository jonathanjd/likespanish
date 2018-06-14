<template>
  <v-dialog v-model="myDialogoDelete" max-width="500px">
    <v-card>
      <v-toolbar dark color="error">
        <v-icon>delete</v-icon>
        <v-toolbar-title>
          Delete Teacher
        </v-toolbar-title>
      </v-toolbar>
      <v-card-title primary-title>
        <div>
          <h3 class="title">{{ myDataTeacher.name }}</h3>
        </div>

      </v-card-title>
      <v-card-text>
       <p>Do you want delete Teacher?</p>
      </v-card-text>
      <v-card-actions>
        <v-btn :loading="loading" :disabled="loading" color="error" flat @click.prevent="deleteTeacher">Delete</v-btn>
        <v-btn color="primary" flat @click="closeDialogo">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      loading: false
    };
  },

  props: ['myDialogoDelete', 'myDataTeacher', 'myListTeacher', 'myShowSnackBarDelete'],

  methods: {
    closeDialogo() {
      this.$emit('myDialogoDeleteWasChange', false);
    },

    deleteTeacher() {
      this.loading = true;
      const token = localStorage.getItem('token');
      axios
        .delete('/api/auth/user/' + this.myDataTeacher.id + '?token=' + token)
        .then(response => {
          if (response.status === 200) {
            console.log('Delete Teacher');
            this.loading = false;
            this.closeDialogo();
            this.myListTeacher();
            this.myShowSnackBarDelete();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>