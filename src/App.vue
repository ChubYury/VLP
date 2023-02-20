<template>
  <header>
    <h2>My friends</h2>
  </header>
  <section>
    <new-user 
      :count-user="friends.length"
      @set-user="addNewUser"
    ></new-user>
  </section>
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
          {id: 'friend1', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com', isFavorite: true},
          {id: 'friend2', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com', isFavorite: false},
        ],
      };
    },
    methods: {
      favoriteStatus(userId) {
        const userActive = this.friends.find((friend) => friend.id === userId);
        
        userActive.isFavorite = !userActive.isFavorite
      },

      addNewUser(newUser) {
        // console.log(newUser)
        this.friends.push(newUser);
        console.log(this.friends)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

  @import url('./styles.css');
</style>