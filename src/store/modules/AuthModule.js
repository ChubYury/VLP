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
    async login() {
      const response = await fetch('http://localhost:3020/products')
      console.log(response.body)
      
      const result = await response.json();
      console.log('Response for question');
      console.log(result);
      console.log('_____________________________');
    },
    
    async signup(context, payload) {
      try {
        const response = await fetch('http://localhost:3020/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/JSON;charset=utf-8' },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        console.log('Result: ', result);
        
        context.commit('setUser', {
          token: result.token,
          userId: result.userId,
          tokenExpiration: result.expiresIn
        })
      } catch (error) {console.error(error)}
    }
  },
  getters: {
    showId(state) {
      return state.userId
    }
  }
}