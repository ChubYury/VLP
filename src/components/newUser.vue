<template>
  <form action="" @submit.prevent>
    <div>
      <label for="nameInp">Name:</label>
      <input id="nameInp" type="text" v-model="nameInp">
    </div>
    <div>
      <label for="phoneInp">Phone:</label>
      <input id="phoneInp" type="tel" v-model="phoneInp">
    </div>
    <div>
      <label for="emailInp">Email:</label>
      <input id="emailInp" type="email" v-model="emailInp">
    </div>
    <div>
      <input id="checkFavorite" type="checkbox" v-model="checkFavorite">
      <label for="checkFavorite">Is favorite?</label>
    </div>
    <button @click="getDataUser"> Add new friend</button>
    <!-- <p>{{ firstNameInp + ' ' + checkFavorite}} </p> -->
  </form>
</template>

<script>
  export default {
    props:['countUser'],
    emits: ['set-user'],
    data() {
      return {
        nameInp: '',
        phoneInp: '',
        emailInp: '',
        checkFavorite: false,
      }
    },

    computed: {},

    methods: {
      getDataUser() {
        if (this.nameInp === '' || this.phoneInp === '' || this.emailInp === '') {
          alert('Not all fields are field'); 
          return;
        }
        const newUser = {
          id: `friend${this.countUser + 1}`,
          name: this.nameInp,
          phone: this.phoneInp,
          email: this.emailInp,
          isFavorite: this.checkFavorite
        };

        this.nameInp = '';
        this.phoneInp = '';
        this.emailInp = '';
        
        this.$emit('set-user', newUser);
      }
    }
  }
</script>

