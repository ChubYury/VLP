<template>
  <transition-group tag="ul" name="users-list">
    <li 
    v-for="(user, index) in users" 
    :key="user"
    @click="delUser(index)"
    >{{ user }}</li>
  </transition-group>
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
        this.users.unshift(newUser);
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
  .users-list-enter-from {
    opacity: 0;
    transform: translateX(-30px)
  }
  .users-list-enter-active {
    transition: all 1s ease-out;
  }
  .users-list-enter-to,
  .users-list-leave-from  {
    opacity: 1;
    transform: translateX(0);
  }
  .users-list-leave-active {
    transition: all 1s ease-out;
    position: absolute;
  }
  .users-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .users-list-move {
    transition: transform 0.8s ease;
  }
</style>