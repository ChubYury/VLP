<template>
  <ul>
    <li :class="{active: modelValue === 'A'}">
      <button @click="activate('A')">Poor</button>
    </li>
    <li :class="{active: modelValue === 'B'}">
      <button @click="activate('B')">Average</button>
    </li>
    <li :class="{active: modelValue === 'C'}">
      <button @click="activate('C')">Great</button>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    
    methods: {
      activate(option) {
        this.$emit('update:modelValue', option);
      }
    }
  }
</script>
<style scoped>
  .active {
    border-color: #a00078;
  }

  .active button {
    color: #a00078;
  }

  ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
  }
  li {
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>