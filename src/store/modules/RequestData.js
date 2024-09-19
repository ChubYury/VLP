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
      const newRequest = {
        coachId: payload.coachId,
        userEmail: payload.email,
        userMessage: payload.message
      };
      
      const response = await fetch('https://vue-server-tau.vercel.app/api/setrequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON;charset=utf-8',
        },
        body: JSON.stringify(newRequest)
      });
      const result = await response.json();
      
      if (!response.ok) {
        const error = new Error(result.mess || 'Faild to featch!');
        console.log(error);
        throw error;
      }
      
      context.commit('addRequest', result);
    },
    async getRequests(context) {
      const token = context.rootGetters.token;
      
      const response = await fetch(`https://vue-server-tau.vercel.app/api/getrequests`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON;charset=utf-8',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const result = await response.json();

      if (!response.ok) {
        const error = new Error(result.mess || 'Faild to featch!');
        throw error;
      }

      context.commit('setRequests', result);
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