<template>
  <base-container title="Vuex">
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

  export default {
    components: {
      BaseContainer,
      TheCounter,
      ChangeCounter,
      FavoriteValue
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