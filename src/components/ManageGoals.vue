<template>
  <h2>Manage goals</h2>
  <input type="text" ref="goal">
  <button @click="setGoal">Set goal</button>
  <teleport to="body">
    <error-alert v-if="inputIsValid">
      <h2>Input is invalid</h2>
      <p>Please enter at least a few charecters...</p>
      <button @click="confirmError">Ok</button>
    </error-alert>
  </teleport>
</template>

<script>
  import ErrorAlert from '../components/ErrorAlert.vue';

  export default {
    components: {ErrorAlert},
    data() {
      return {
        inputIsValid: false,
      }
    },
    methods: {
      setGoal() {
        const valueInp = this.$refs.goal.value;
        if (valueInp === '') {
          this.inputIsValid = true;
        }
      },
      confirmError() {
        this.inputIsValid = false;
      }
    },
  };
</script>