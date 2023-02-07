const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      linkVue: 'http://vuejs.org/'
    };
  }
});

app.mount('#user-goal');
