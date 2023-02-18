const app = Vue.createApp({
  data() {
    return {
      friends: [
        {id: 'friend001', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' },
        {id: 'friend002', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com'},
      ],
      // flagHide: false,
    }
  },

  watch: {},

  computed: {},

  // methods: {
  //   toggleVisible() {this.flagHide = !this.flagHide},
  // }
});

app.component('user-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleVisible">{{flagHide ? 'Hide' : 'Show'}} Details</button>
      <ul v-if="flagHide">
        <li><strong>Phone: </strong>{{ friend.phone }}</li>
        <li><strong>Email: </strong>{{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      flagHide: false,
      friend: {
        id: 'friend001', 
        name: 'Manuel Lorenz', 
        phone: '01234 5678 991', 
        email: 'manuel@localhost.com' 
      }
    }
  },
  
  methods: {
    toggleVisible() {this.flagHide = !this.flagHide},
  },
})

app.mount('#app');