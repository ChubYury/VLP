<template>
  <header><h1>My first Vue app</h1></header>
  <user-data
    @set-data="getData"
  ></user-data>
  <active-user
    :data-name="userName"
    :data-age="userAge"
  ></active-user>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        userAge: ''
      }
    },

    methods: {
      getData(name, age) {
        console.log(name, age);
        this.userName = name;
        this.userAge = age;
      }
    }
  }
</script>

<style>
  @import url('./styles.css');
</style>