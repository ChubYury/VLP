<template>
  <section>
    <base-card>
      <base-btn 
        @click="changeResource('stored-resources')"
        :mode="resourceToggle === 'stored-resources' ? null : 'flat'"
      >Stored resources</base-btn>
      
      <base-btn 
        @click="changeResource('add-resource')"
        :mode="resourceToggle === 'add-resource' ? null : 'flat'"
      >Add resource</base-btn>
    </base-card>
  </section>
  <keep-alive>
    <component :is="resourceToggle"></component>
  </keep-alive>
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