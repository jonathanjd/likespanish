import axios from 'axios';

const state = {
  userTeacher: [],
  showUserTeacher: ''
};


const getters = {

  getUserTeacher(state) {
    return state.userTeacher;
  },

  getShowUserTeacher(state) {
    return state.showUserTeacher;
  },

};

const mutations = {

  setUserTeacher(state, payload) {
    state.userTeacher = payload;
  },

  setShowUserTeacher(state, payload) {
    state.showUserTeacher = payload;
  },

};

const actions = {

  loadShowUserTeacher({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.get('/api/auth/user/teacher/' + payload.id + '?token='.concat(payload.token))

        .then(response => {

          if (response.status === 200) {
            commit('setShowUserTeacher', response.data);
            resolve();
          }

        })
        .catch(error => {
          reject();
        });
    });
  },

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