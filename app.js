const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: '',
    };
  },
  methods: {
    add(num) { this.counter += num },
    
    reduce(num) { 
      this.counter > 0 ? this.counter -= num : this.counter = 0;
    },

    setName(event, lastName) {
      this.userName = event.target.value +' '+ lastName;
    }
  }
})

app.mount('#events')