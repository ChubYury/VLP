<template>
  <section>
    <form action="" @submit.prevent>
      <h1>Enter data</h1>
      <div>
        <label for="nameInp">Name</label>
        <input type="text" name="" id="nameInp" v-model="nameValue" placeholder="Your name">
      </div>
      <div>
        <label for="ageInp">Age</label>
        <input type="text" name="" id="ageInp" v-model="ageValue" placeholder="Your age">
      </div>
      <!-- <button @click="$emit('set-data', this.nameValue, this.ageValue)"> Change data</button> -->
      <button @click="enterData"> Change data</button>
    </form>
  </section>
</template>

<script>
  export default {
    emits: ['set-data'],
    data() {
      return {
        nameValue: '',
        ageValue: ''
      };
    },
    methods: {
      enterData() {
        this.$emit('set-data', this.nameValue, this.ageValue);
        this.nameValue = '';
        this.ageValue = '';
      }
    }
  }
</script>