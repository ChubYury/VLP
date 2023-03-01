<template>
  <h3>{{ counter }}</h3>
  <button @click="inm">Add 1</button>
  <button @click="ins({ value: 11})">Add 11</button>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    computed: {
      counter() {
        return this.$store.state.counter
      }
    },
    methods: {
      // addCount() {
      //   // this.$store.state.counter++;
      //   this.$store.dispatch('increment')
      // },
      
      // ...mapActions(['increment', 'increase'])
      ...mapActions({
        inm: 'increment',
        ins: 'increase'
      })
    }
  };
</script>
