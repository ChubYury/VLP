<template>
  <header>
    <h2>My friends</h2>
  </header>
  <section>
    <ul>
      <user-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-num="friend.phone"
        :email-addr="friend.email"
        :is-favorite= "friend.isFavorite"
        @toggle-favorite="favoriteStatus"
      ></user-contact>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        friends: [
          {id: 'friend001', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com', isFavorite: true},
          {id: 'friend002', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com', isFavorite: false},
        ],
      };
    },
    methods: {
      favoriteStatus(userId) {
        const userActive = this.friends.find((friend) => friend.id === userId);
        
        userActive.isFavorite = !userActive.isFavorite
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

  @import url('./styles.css');
</style>