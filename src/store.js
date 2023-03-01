import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
      console.log(state);
    }
  }
})

export default store