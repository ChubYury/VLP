const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  computed: {
    fullName() {
      console.log('Runing agane...');
      if (this.name === '') { return '' } 
      else { return this.name + ' ' + 'yourLastName'};
    }
  },
  
  methods: {
    add(num) { this.counter = this.counter + num },
    
    reduce(num) { this.counter = this.counter - num },

    resetInp() { this.name = '' }
  }
});

app.mount('#events');