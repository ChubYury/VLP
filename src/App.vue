<template>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
  <base-container title="Vuex"  v-if="visAuth">
  <favorite-value></favorite-value>
    <the-counter>
      <change-counter></change-counter>
    </the-counter>
  </base-container>
</template>

<script>
  import BaseContainer from './components/BaseContainer.vue';
  import TheCounter from './components/TheCounter.vue'
  import ChangeCounter from './components/ChangeCounter.vue'
  import FavoriteValue from './components/FavoriteValue.vue'
  import UserAuth from './components/UserAuth.vue'

  export default {
    components: {
      BaseContainer,
      TheCounter,
      ChangeCounter,
      FavoriteValue,
      UserAuth
    },
    computed: {
      visAuth() {
        return this.$store.getters.userAuthVisible
      }
    },
  };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>