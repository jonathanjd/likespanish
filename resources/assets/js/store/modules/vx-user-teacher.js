import axios from 'axios';

const state = {
  userTeacher: []
};


const getters = {

  getUserTeacher(state) {
    return state.userTeacher;
  },

};

const mutations = {

  setUserTeacher(state, payload) {
    state.userTeacher = payload;
  },

};

const actions = {

  loadUserTeacher({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.get('/api/auth/user/teacher?token='.concat(payload)).then(response => {
        if (response.status === 200) {
          commit('setUserTeacher', response.data);
          resolve();
        } else {
          reject();
        }
      }).catch(error => {
        reject();
      });
    });
  }

};

export default {
  state,
  mutations,
  actions,
  getters
}