<template>
  <header>
    <h2>My friends</h2>
  </header>
  <section>
    <ul>
      <user-contact
        name="man"
        phone-num="324"
        email-addr="qw@SD"
        is-favorite= "1"
      ></user-contact>

      <user-contact
        name="woman"
        phone-num="324"
        email-addr="qw@SD"
        
      ></user-contact>
    
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        friends: [
          {id: 'friend001', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' },
          {id: 'friend002', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com'},
        ],
      };
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

  @import url('./styles.css');
</style>