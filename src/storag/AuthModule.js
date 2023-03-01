export const authModule = {
  state() {
    return {
      userAuthValid: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.userAuthValid = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', {isAuth: true})
    },
    logout(context) {
      context.commit('setAuth', {isAuth: false})
    },
  },
  getters: {
    userAuthVisible(state) {
      return state.userAuthValid
    }
  }
}