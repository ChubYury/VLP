import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      userAuthValid: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
      // console.log(state);
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
    setAuth(state, payload) {
      state.userAuthValid = payload.isAuth;
    },
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
    },
    login(context) {
      context.commit('setAuth', {isAuth: true})
    },
    logout(context) {
      context.commit('setAuth', {isAuth: false})
    },
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
    },
    userAuthVisible(state) {
      return state.userAuthValid
    }
  }
})

export default store