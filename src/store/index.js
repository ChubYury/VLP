import { createStore } from 'vuex';

import CoachData from './modules/coaches';
import RequestData from './modules/RequestData.js'
import AuthModule from './modules/AuthModule.js'

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
  modules: {
    coaches: CoachData,
    req: RequestData,
    auth: AuthModule
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store