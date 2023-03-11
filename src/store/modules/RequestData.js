export default {
  namespaced: true,
  state() {
    return{
      requests: [],
    }
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    }
  },
  actions: {
    contactCoach(context, payload) {
      const reqId = `req${context.getters.showRequests.length + 1 + new Date().toISOString()}`
      const newRequest = {
        id: reqId,
        coachId: payload.coachId,
        userEmail: payload.email,
        userMessage: payload.message
      }
      console.log(newRequest)
      context.commit('addRequest', newRequest)
    }
  },
  getters: {
    showRequests(state) {
      return state.requests
    }
  }
}