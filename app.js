Vue.createApp({
  data() {
    return {
      goals: [],
      inpValue: ''
    };
  },
  methods: {
    addGoals() {
      console.log(this.inpValue);
      this.goals.push(this.inpValue);
      this.inpValue = '';
    }
  }
}).mount('#app');

// const btnEl = document.querySelector('button');
// const inpEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const inpValue = inpEl.value;
//   const listItemEl = document.createElement('li');
  
//   listItemEl.textContent = inpValue;
//   listEl.append(listItemEl);
//   inpEl.value = '' 
// };

// btnEl.addEventListener('click', addGoal);