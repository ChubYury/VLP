const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.dir(this.$refs.userText);
    },
  },

  // Starting create app Vue
  beforeCreate() {console.log('beforCreate()')},

  // Finished creating the app Vue
  created() {console.log('created()')},

  // Starting mount the app Vue
  beforeMount() {console.log('beforMount()')},

  // Finished mount the app Vue 
  mounted() {console.log('mounted()');},

  // Starting element update in the app Vue
  beforeUpdate() {console.log('beforeUpdate()');},

  // Finished element update in the app Vue
  updated() {console.log('updated()');},

  // Starting unmount the app Vue
  beforeUnmount() {console.log('beforUnmount()')},
  
  // Finished unmount the app Vue 
  unmounted() {console.log('unmounted()');},
});

app.mount('#app');

// setTimeout(function () { 
  // Delet app Vue
  // app.unmount('#app')
// }, 3000)

const app2 = Vue.createApp({
  template: `
    <h2>How create two app</h2>
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
})

app2.mount('#app2')

// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! World!'
// };

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' World!';
//     }
//     target.message = value;
//   }
// };

// const proxy = new Proxy(data, handler);

// proxy.message = 'Hello!!!!';

// console.log(proxy.longMessage);