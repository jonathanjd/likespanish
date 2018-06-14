<template>
  <v-snackbar :color="myColor" v-model="mySnackBar">
    {{ myText }}
    <v-btn dark flat @click.native="closeSnackBar">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: ['myTimeOut', 'myColor', 'mySnackBar', 'myText'],

  methods: {
    closeSnackBar() {
      this.$emit('myActiveWasChange', false);
    }
  }
};
</script>

<style>
</style>