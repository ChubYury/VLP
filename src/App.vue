<template>
  <section>
    <h2>My friends</h2>

    <ul>
      <li></li>
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
    
    computed: {},

    method: {}
  }
</script>