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
      // console.log(state);
    },
    increase(state, payload) {
      state.counter += payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment')
      },2000)
    },
    increase(context, payload) {
      console.log('Context',context)
      context.commit({
        type: 'increase',
        value: payload.value
      })
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_state, getters) {
      const finalCounter = getters.finalCounter;

      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter
      }
    }
  }
})

export default store