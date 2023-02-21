<template>
  <section>
    <h1> Show data</h1>
    <h2><strong>Name:</strong>{{ dataName }}</h2>
    <h3><strong>Age:</strong>{{ dataAge }}</h3>
  </section>
</template>

<script>
  export default {
    props: {
      dataName: {
        type: String,
        required: true
      },
      dataAge: {
        type: String,
        required: true
      }
    }
  }
</script>