import Vue from 'vue';
import Vuex from 'vuex';
import vxUser from './modules/vx-user';
import vxUserTeacher from './modules/vx-user-teacher';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    vxUser,
    vxUserTeacher
  }
});