export default {
  state() {
    return {
      userId: '',
    }
  },
  mutations: {
    addAuthUserId(state, payload) {
      state.userId = payload;
    }
  },
  actions: {},
  getters: {
    showId(state) {
      return state.userId
    }
  }
}