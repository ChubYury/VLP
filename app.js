const app = Vue.createApp({
  data() {
    return {
      firstVal: ' ',
      secondVal: '',
    }
  },

  methods: {
    showAlert(yourText) { alert('Show alert: ' + yourText) },

    getFirstVal(event) { this.firstVal = event.target.value },

    getSecondVal(event) { this.secondVal = event.target.value }
  }
})

app.mount('#assignment')