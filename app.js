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
      this.goalValueInp = '';
    },

    removeGoal(idx) { this.goals.splice(idx, 1) },
  }
})

app.mount('#user-goals')