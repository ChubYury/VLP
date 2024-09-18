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
      return context.dispatch('auth',{
        ...payload,
        mode: 'login'
      });
    },
    
    async signup(context, payload) {
      return context.dispatch('auth',{
        ...payload,
        mode: 'signup'
      });
    },
    async auth(context, payload) {
      const mode = payload.mode;
      let url ='';
      
      if (mode === 'login') url = 'http://localhost:3020/api/login';
      else url = 'http://localhost:3020/api/signup';
       
      delete payload.mode

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      
      if (!response.ok) {
        const error = new Error(result.mess || 'Faild to authenticate');
        throw error;
      }
      
      localStorage.setItem('token', result.token);
      localStorage.setItem('userId', result.userId);
      // localStorage.setItem('tokenExpiration', result.expiresIn);

      console.log(result.userId);

      context.commit('setUser', {
        token: result.token,
        userId: result.userId,
        tokenExpiration: result.expiresIn
      });
    },
    tryLogin(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
          tokenExpiration: null
        });
      }
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