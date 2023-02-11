const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },

  watch: {
    counter(value){
      if ( value > 50 ) { 
        const that = this;
        setTimeout(() => { this.counter = 0 }, 2000)
      }
    }

    // name(value) {
    //   if (value === '') { this.fullName = '' } 
    //   else { this.fullName = value + ' ' + this.lastName };
    // },
    
    // lastName(value) {
    //   if (value === '') { this.fullName = ''} 
    //   else { this.name + ' ' + value}
    // }
  },

  computed: {
    fullName() {
      console.log('Runing agane...');
      if (this.name === '' && this.lastName === '') { return '' } 
      else { return this.name + ' ' + this.lastName};
    }
  },

  methods: {
    add(num) { this.counter = this.counter + num },
    
    reduce(num) { this.counter = this.counter - num },

    resetInp() { this.name = '' }
  }
});

app.mount('#events');