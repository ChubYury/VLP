import { createStore } from 'vuex';

import counterModule  from './modules/counter';
import authModule from './modules/auth';

import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'

const store = createStore({
  modules: {
    numbers: counterModule,
    auth: authModule
  },
  state() {
    return {
      
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
})

export default store