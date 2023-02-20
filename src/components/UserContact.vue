<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite"> Toggle favorite</button>
    <button @click="toggleVisible">{{flagHide ? 'Hide' : 'Show'}} Details</button>
    <button @click="$emit('del-user', id)">Delet</button>
    <ul v-if="flagHide">
      <li><strong>Phone:</strong>{{ phoneNum }}</li>
      <li><strong>Email:</strong>{{ emailAddr }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
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
        default: false,
      }
    },
    emits: ['toggle-favorite', 'del-user'],
    // emits: {
    //   'toggle-favorite': function(id) {
    //     if (id) {
    //       return true;
    //     } else {
    //       console.warn('ID is missings!');
    //       return false;
    //     }
    //   },
    // },
    data() {
      return {
        flagHide: false,
      }
    },
    methods: {
      toggleVisible() { this.flagHide = !this.flagHide },

      toggleFavorite() {
        this.$emit('toggle-favorite', this.id);
      },
    },
  }
</script>