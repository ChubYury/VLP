<template>
  <section>
    <base-card>
      <base-btn 
        @click="changeResource('stored-resources')"
      >Stored resources</base-btn>
      
      <base-btn 
        @click="changeResource('add-resource')"
      >Add resource</base-btn>
    </base-card>
  </section>
  <component :is="resourceToggle"></component>
</template>

<script>
  import StoredResources from './StoredResources.vue'
  import AddResource from './AddResource.vue'

  export default {
    components: {StoredResources, AddResource},
    data() {
      return {
        resourceToggle: 'stored-resources',
      }
    },
    methods: {
      changeResource(newResource) {this.resourceToggle = newResource}
    }
  }
</script>