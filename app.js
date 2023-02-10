const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) { this.counter += num },
    
    reduce(num) { this.counter > 0 ? this.counter -= num : this.counter = 0 },

    setName(event, lastName) { this.userName = event.target.value +' '+ lastName },

    submitForm() { console.log('Submited!') },

    confirmInp() { this.confirmedName = this.userName },
  }
})

app.mount('#events')