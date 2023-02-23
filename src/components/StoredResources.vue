<template>
  <section>
    <ul>
      <!-- <learning-resorce></learning-resorce> -->
      <learning-resource 
      v-for="resource in resourcesLs" 
      :item="resource"
      :key="resource.id"
    ></learning-resource>
    </ul>
  </section>
</template>

<script>
  import LearningResource from './learning-resources/LearningResource.vue'
  
  export default {
    components: {LearningResource},
    props: ['resourcesLs'],
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
  }
</style>