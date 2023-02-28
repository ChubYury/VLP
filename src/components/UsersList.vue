<template>
  <ul>
    <li 
    v-for="(user, index) in users" 
    :key="user"
    @click="delUser(index)"
    >{{ user }}</li>
  </ul>
  <div>
    <input type="text" name="" id="userInp" v-model="userInpVal">
    <button @click="addUser"> Add user</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: ['Max', 'Menu', 'Julie', 'Angela', 'Michael'],
        userInpVal: '',
      }
    },
    methods: {
      addUser() {
        const newUser = this.userInpVal;
        this.users.push(newUser);
      },
      delUser(idxUser) {
        this.users.splice(idxUser, 1);
      }
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
  }
</style>