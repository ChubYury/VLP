const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Learn Vue!',
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      linkVue: 'http://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();

      if (randomNum < 0.5) return this.courseGoalA
      else return this.courseGoalB;
    }
  }
});

app.mount('#user-goal');
