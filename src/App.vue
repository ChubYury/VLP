<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <base-card>
      <cours-goals #default="slotProps">
        <!-- <template #default="slotProps"> -->
          <h2>{{ slotProps.item }}</h2>
          <p>{{ slotProps.anotherProp }}</p>
        <!-- </template> -->
      </cours-goals>
    </base-card>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import CoursGoals from './components/CoursGoals'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'

export default {
  components: {TheHeader, BadgeList, UserInfo , CoursGoals},
  
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
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