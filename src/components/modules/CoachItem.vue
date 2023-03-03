<template>
  <li>
    <h3>{{ firstName + " " + lastName}}</h3>
    <h4>{{"$ "+rate}}</h4>
    <p>
      <span v-for="item in areas" :key="item">{{ item + " " }}</span>
    </p>
    <p class="actions">
      <router-link :to="coachContactLink">Contact</router-link>
      <router-link :to="coachDetailsLink">View Details</router-link>
    </p>
  </li>
</template>

<script>
 export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'rate'],
  computed: {
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact'
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id
    }
  }
 }
</script>

<style scoped>
  li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h3,
  h4 {
    margin: 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }
</style>