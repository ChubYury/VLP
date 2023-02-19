<template>
  <li>
    <h2>{{ name }} {{ flagFavorite ? '(Favorite)' : '' }}</h2>
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
    // props: ["name", "phoneNum", "emailAddr", "isFavorite"],
    props: {
      name: String,
      phoneNum: {
        type: String,
        required: true,
      },
      emailAddr: {
        type: String,
        required: true,
        default: 'Not email'
      },
      isFavorite: {
        type: Boolean,
        requared: false,
        default: false
      }
      // isFavorite: {
      //   type: String,
      //   required: false,
      //   default: '0',
      //   validator: (value) => {
      //     return value === '1' || value === '0';
      //   }
      // },
    },
    data() {
      return {
        friend: {},
        flagHide: false,
        flagFavorite: this.isFavorite,
      }
    },
    methods: {
      toggleVisible() { this.flagHide = !this.flagHide },

      toggleFavorite() { this.flagFavorite = !this.flagFavorite },
    },
  }
</script>