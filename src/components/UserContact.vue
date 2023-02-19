<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleVisible">{{flagHide ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="flagHide">
      <li><strong>Phone:</strong>{{ phoneNum }}</li>
      <li><strong>Email:</strong>{{ emailAddr }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: [
      'name',
      'phoneNum',
      'emailAddr'
    ],
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