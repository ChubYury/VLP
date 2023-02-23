<template>
  <the-header></the-header>
  <section>
    <base-card>
      <base-btn 
        :classes="'flat'"
        @btn-click="test"
      >Stored resources</base-btn>
      <base-btn 
        :classes="'flat'"
        @btn-click="test"
      >Add resource</base-btn>
    </base-card>
  </section>
  <ul>
    
  </ul>
  <stored-resources
    :resourcesLs="resources"
  ></stored-resources>
  <!-- <button @click="test">Test</button> -->
</template>

<script>
  import {lsResources} from './db.js'

  import TheHeader from "./components/blocks/TheHeader.vue";
  import StoredResources from './components/StoredResources.vue'
  

  // import BaseCard from './components/BaseCard.vue';

  export default {
    components: {TheHeader, StoredResources},
    data() {
      return {
        resources: lsResources
      }
    },
    
    // provide() {
    //   return {
    //     resources: lsResources,
    //   }
    // },
    methods: {
      test() {
        console.log('Work btn');
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