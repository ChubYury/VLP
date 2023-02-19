<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleVisible">{{flagHide ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="flagHide">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        friend: {},
        flagHide: false,
      }
    },
    methods: {
      toggleVisible() { this.flagHide = !this.flagHide },
    },
  }
</script>