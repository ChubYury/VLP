const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() { this.counter++ },
    
    reduce() { this.counter > 0 ? this.counter-- : false }
  }
})

app.mount('#events')