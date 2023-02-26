<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // code...
      this.$router.push('/teams');
      // this.$router.back();
      // this.$router.forward();
    }
  },
  beforeRouteEnter(_to, _from , next) {
    console.log('Users beforeRouterEnter');
    next();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>