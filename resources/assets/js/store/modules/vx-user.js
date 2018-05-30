import axios from 'axios';

const state = {
  name: '',
  type: '',
  data: ''
};


const getters = {

  getName(state) {
    return state.name;
  },

  getData(state) {
    return state.data;
  },

  getType(state) {
    return state.type;
  },

};

const mutations = {

  setName(state, payload) {
    state.name = payload;
  },

  setData(state, payload) {
    state.data = payload;
  },

  setType(state, payload) {
    state.type = payload;
  },

};

const actions = {

  loadName({
    commit
  }, payload) {
    commit('setName', payload);
  },

  loadData({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.get('/api/auth/user?token='.concat(payload)).then(response => {
        if (response.status === 200) {
          commit('setData', response.data);
          commit('setName', response.data.data.name);
          commit('setType', response.data.data.type);
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