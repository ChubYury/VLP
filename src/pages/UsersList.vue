<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    }
  },
  methods: {
    confirmInput() {
      // code...
      this.$router.push('/teams');
      // this.$router.back();
      // this.$router.forward();
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(_to, _from , next) {
    console.log('Users beforeRouterEnter');
    next();
  },
  beforeRouteLeave(_to, _from, next) {
    console.log('UserList beforeRouteLeave');
    if (this.changesSaved) {
      next()
    } else {
      const userWantsToLeavel = confirm('Are you sure? you got unsaved changes!')
      next(userWantsToLeavel)
    }
  },
  unmounted() {
    console.log('unmouted');
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