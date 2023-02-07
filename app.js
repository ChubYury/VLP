const app = Vue.createApp({
 data() {
  return {
    userName: 'Jon',
    userAge: 10,
    favPhotoLink: 'https://p16.tiktokcdn-us.com/tos-useast5-avt-0068-tx/692de2e0d56771d619114b56e3eb9ba4~c5_720x720.jpeg'
  }
 },
 methods: {
  nextAge() {return this.userAge + 5},

  favNumber() {return Math.random()}
 }
});

app.mount('#assignment')