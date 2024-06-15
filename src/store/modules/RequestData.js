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
    },
    setRequests(state, payload) {
      state.requests = payload
    }
  },
  actions: {
    async contactCoach(context, payload) {
      const randomId = Math.round(Math.random()* 10000)
      const reqId = `req${randomId + 1 + new Date().toISOString()}`
      const newRequest = {
        id: reqId,
        coachId: payload.coachId,
        userEmail: payload.email,
        userMessage: payload.message
      };
      
      const response = await fetch('http://localhost:3020/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON;charset=utf-8',
          
        },
        body: JSON.stringify(newRequest)
      });
      const result = await response.json();
      console.log('Response for question');
      console.log(result);
      console.log('_____________________________');

      context.commit('addRequest', newRequest);
    },
    async getRequests(context) {
      const coachIdReq = context.rootGetters.showId;
      const response = await fetch(`http://localhost:3020/requests?coachId=${coachIdReq}`);
      const result = await response.json();

      if (!response.ok) {
        const error = new Error(result.message || 'Faild to featch!');
        console.log(error)
      }
      console.log(response)
      context.commit('setRequests', result)
    } 
  },
  getters: {
    showRequests(state) {
      return state.requests
    },
    hasRequests(_state, getters) {
      return getters.showRequests && getters.showRequests.length > 0;
    }
  }
}