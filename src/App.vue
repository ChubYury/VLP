<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-else-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import CoursGoals from './components/CoursGoals';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  components: {TheHeader, ManageGoals, ActiveGoals},
  
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>