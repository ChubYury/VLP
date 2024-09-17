export default {
  state() {
    return {
      token: null,
      userId: null,
      tokenExpiration: null
    }
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    }
  },
  actions: {
    async login(context, payload) {
      const response = await fetch('http://localhost:3020/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      
      if (!response.ok) {
        const error = new Error(result.mess || 'Faild to authenticate');
        throw error;
      }
      
      context.commit('setUser', {
        token: result.token,
        userId: result.userId,
        tokenExpiration: result.expiresIn
      });
    },
    
    async signup(context, payload) {
      const response = await fetch('http://localhost:3020/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      
      if (!response.ok) {
        const error = new Error(result.mess || 'Faild to authenticate');
        throw error;
      }

      context.commit('setUser', {
        token: result.token,
        userId: result.userId,
        tokenExpiration: result.expiresIn
      })
    },

    logout(context) {
      context.commit('setUser', {
        token: null,
        userId: null,
        tokenExpiration: null
      })
    }
  },
  getters: {
    showId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !state.token;
    }
  }
}