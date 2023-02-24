<template>
  <the-header title="Big app for learn Vue"></the-header>
  <the-resources></the-resources>
</template>

<script>
  import {lsResources} from './db.js'

  import TheHeader from "./components/blocks/TheHeader.vue";
  import TheResources from './components/learning-resources/TheResources.vue'
  
  export default {
    components: {TheHeader, TheResources},
    data() {
      return {
        resourcesLs: lsResources,
      }
    },
    
    provide() {
      return {
        resources: this.resourcesLs,
        getResource: this.addResource,
        delResource: this.deleteResource
      }
    },
    methods: {
      addResource(newRes) {this.resourcesLs.push(newRes)},
      
      deleteResource(idItem) {
        this.resourcesLs.forEach((item, index) => {
          if (item.id === idItem) this.resourcesLs.splice(index, 1)
        });
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }
</style>