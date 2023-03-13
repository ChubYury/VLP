<template>
  <base-dialog 
    :show="!!error"
    title="An error occurred!"
    @close="handleError"
  >
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <filters-block @change-filter="setFilters"></filters-block>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches(refresh = true)">Refresh</base-button>
        <base-button 
          v-if="isAuthCoach && !isLoading"
          link 
          to="/register"
        >Register as Coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches" :key="coach.id"
          :id = "coach.id"
          :firstName = "coach.firstName"
          :lastName = "coach.lastName"
          :areas = "coach.areas"
          :rate = "coach.hourlyRate"
        ></coach-item>
      </ul>
      <h3 v-else>Not coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
  import FiltersBlock from '../../components/modules/FiltersBlock.vue';
  import CoachItem from '../../components/modules/CoachItem.vue';
  

  export default {
    components: {CoachItem, FiltersBlock},
    data() {
      return {
        isLoading: false,
        error: null,
        activeFilters: {
          frontend: true,
          backend: true,
          career: true
        }
      }
    },
    computed: {
      filteredCoaches() {
        const coaches = this.$store.getters['coaches/setCoaches'];
        return coaches.filter(coach => {
          if (this.activeFilters.frontend && coach.areas.includes('frontend')) return true
          else if (this.activeFilters.backend && coach.areas.includes('backend')) return true
          else if (this.activeFilters.career && coach.areas.includes('career')) return true
          else return false
        })
      },
      hasCoaches() {
        return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
      },
      isAuthCoach() {
        return this.$store.getters['coaches/isCoach'];
      }
    },
    methods: {
      setFilters(updateFilters) {
        this.activeFilters = updateFilters;
      },
      async loadCoaches(refresh = false) {
        this.isLoading = true;
        try {
          await this.$store.dispatch('coaches/getCoaches', { forceRefresh: refresh });
        } catch (error) {
          this.error = error.message || 'Someting went wrong!';
        }
        this.isLoading = false;
      },
      handleError() {
        this.error = null;
      }
    },
    created() {
      this.loadCoaches();
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>
