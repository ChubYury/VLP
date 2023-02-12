const app = Vue.createApp({
  data() {
    return {
      userInp: '',
      varVisible: 'block',
      colorInp: ''
    }
  },

  watch: {},

  computed: {
    setClasses() { return this.userInp },
  },

  methods: {
    toggleVisible() {
      if (this.varVisible === 'block') { this.varVisible = 'hidden' }
      else { this.varVisible = 'block' }
    }
  }
})

app.mount('#assignment')