const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    // setName(event, lastName) { this.name = event.target.value },

    outputFullName(yourLastName) {
      console.log('Runing agane...');
      if (this.name === '') { return '' } 
      else { return this.name + ' ' + yourLastName}
    },

    add(num) { this.counter = this.counter + num },
    
    reduce(num) { this.counter = this.counter - num },

    resetInp() { this.name = '' }
  }
});

app.mount('#events');