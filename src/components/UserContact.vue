<template>
  <li>
    <h2>{{ name }} {{ flagFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite"> Toggle favorite</button>
    <button @click="toggleVisible">{{flagHide ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="flagHide">
      <li><strong>Phone:</strong>{{ phoneNum }}</li>
      <li><strong>Email:</strong>{{ emailAddr }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: ["name", "phoneNum", "emailAddr", "isFavorite"],
    data() {
      return {
        friend: {},
        flagHide: false,
        flagFavorite: this.isFavorite,
      }
    },
    methods: {
      toggleVisible() { this.flagHide = !this.flagHide },

      toggleFavorite() {
        if (this.flagFavorite === '1') {
          this.flagFavorite = '0';
        } else {
          this.flagFavorite = '1';
        }
      },
    },
  }
</script>