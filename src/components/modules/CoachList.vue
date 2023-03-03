<template>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <h2>Coach list</h2>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>Not coaches found.</h3>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/setCoaches']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  }
}
</script>
