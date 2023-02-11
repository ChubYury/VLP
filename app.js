const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      mesRes: ''
    }
  },

  watch: {
    result(value) {
      console.log('watch');
      const that = this;
      if (this.counter > 37) {
      }
      setTimeout(() => { 
        that.counter = 0
        value = '' 
      }, 2000);
    }
  },

  computed: {
    result() {
      if (this.counter < 37) { return 'Not there yet'} 
      else if (this.counter === 37 ){ return 'Goal'} 
      else { return 'Too much'}
    }
  },

  methods: {
    addNum(num) { this.counter += num }
  }
})

app.mount('#assignment')