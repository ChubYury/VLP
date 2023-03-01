<template>
  <h3>{{ finalCounter }}</h3>
  <button @click="addCount">Add 10</button>
  <slot></slot>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      // counter() {
      //   // return this.$store.state.counter;
      //   return this.$store.getters.normalizedCounter;
      // },
      ...mapGetters(['finalCounter']),
    },
    methods: {
      addCount() {
        // this.$store.state.counter += 11;
        // this.$store.commit('increase', { value: 10 });
        this.$store.dispatch({
          type: 'increase',
          value: 10,
        })
      },
    }
  };
</script>
