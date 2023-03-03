import { createStore } from 'vuex';

import CoachData from './modules/CoachData.js';
import RequestData from './modules/RequestData.js'

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
  modules: {
    coaches: CoachData,
    req: RequestData
  },
  state() {
    return {

    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store