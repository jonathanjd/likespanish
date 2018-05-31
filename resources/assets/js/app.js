/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('vue2-animate/dist/vue2-animate.min.css');

window.Vue = require('vue');
import {
    store
} from "./store/store";
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify)

import {
    routes
} from './routes'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});