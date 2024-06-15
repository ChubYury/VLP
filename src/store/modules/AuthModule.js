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
  actions: {
    async login() {
      const response = await fetch('http://localhost:3020/products')
      // , {
      //   method: 'GET',
      //   mode:'no-cors',
      //   cache: 'no-cache', 
      //   credentials: 'omit',
      // }
      
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .then(response => console.log(response))
      


      console.log(response)
      console.log(response.ok)
      console.log(response.bodyUsed)
      console.log(response.status)
      console.log(response.type)
      console.log(response.body)
      const result = await response.json();
      console.log('Response for question');
      console.log(result);
      console.log('_____________________________');
    },
    
    async signup(_context, payload) {
      const newRequest = {
        email: payload.email,
        password: payload.password
      };

      console.log(newRequest)
      // await fetch('http://localhost:3020/signup')
      
      const response = await fetch('http://localhost:3020/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON;charset=utf-8',
        },
        body: JSON.stringify(newRequest),
      });
      const result = await response.json();
      console.log('Response for question');
      console.log(result);
      console.log('_____________________________');
    }
  },
  getters: {
    showId(state) {
      return state.userId
    }
  }
}