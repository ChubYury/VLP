<template>
  <h3>User: 
    <button @click="login" v-if="!visAuth">Login</button>
    <button @click="logout" v-else>Logout</button>
  </h3>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    computed: {
      visAuth() {
        return this.$store.getters.userAuthVisible
      }
    },
    methods: {
      ...mapActions(['login','logout'])
    }
  }
</script>