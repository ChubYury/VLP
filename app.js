const app = Vue.createApp({
  data() {
    return {
      taskInp: '',
      taskList: [],
      flagHidden: false
    }
  },

  watch: {},

  computed: {
    showTitle() {
      return this.flagHidden ? 'Show List' : 'Hide' 
    }
  },

  methods: {
    addTask() {
      this.taskList.push(this.taskInp);
      this.taskInp = '';
    },

    delTask(idx) {this.taskList.splice(idx, 1)},

    hideList() {
      this.flagHidden = !this.flagHidden
    }
  }
})

app.mount('#assignment')