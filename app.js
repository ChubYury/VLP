const app = Vue.createApp({
  data () {
    return {
      goalValueInp: '',
      goals: []
    }
  },

  watch: {},

  computed: {},

  methods: {
    addGoal() {
      this.goals.push(this.goalValueInp);
      this.goalValueInp = '',
      console.log(this.goals);
    },
  }
})

app.mount('#user-goals')