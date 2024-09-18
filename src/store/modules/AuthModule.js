let timer;

export default {
  state() {
    return {
      token: null,
      userId: null,
      didAutoLogout: false
    }
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.didAutoLogout = false;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
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

      const expiresIn = +result.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn
      
      localStorage.setItem('token', result.token);
      localStorage.setItem('userId', result.userId);
      localStorage.setItem('tokenExpiration', expirationDate);

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn)

      context.commit('setUser', {
        token: result.token,
        userId: result.userId,
      });
    },
    tryLogin(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) return;

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
        });
      }
    },
    logout(context) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');

      clearTimeout(timer);

      context.commit('setUser', {
        token: null,
        userId: null,
      })
    },
    autoLogout(context) {
      context.dispatch('logout');
      context.commit('setAutoLogout');
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
    },
    didAutoLogout(state) {
      return state.didAutoLogout;
    }
  }
}