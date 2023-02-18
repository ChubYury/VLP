const app = Vue.createApp({
  data() {
    return {
      friends: [
        {id: 'friend001', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' },
        {id: 'friend002', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com'},
      ],
      flagHide: false,
    }
  },

  watch: {},

  computed: {},

  methods: {
    toggleVisible() {this.flagHide = !this.flagHide},
  }
});

app.mount('#app');