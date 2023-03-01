<template>
  <h3>{{ counter }}</h3>
  <button @click="addCount">Add 10</button>
  <slot></slot>
</template>

<script>
  export default {
    computed: {
      counter() {
        // return this.$store.state.counter;
        return this.$store.getters.normalizedCounter;
      }
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
