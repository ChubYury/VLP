<template>
  <div>
    <base-dialog 
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <header>
      <base-card>
        <h2>Requests received</h2>
      </base-card>
    </header>
    <section>
      <base-card>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests">
          <request-item
            v-for="reqItem in reqList"
            :key="reqItem.id"
            :email="reqItem.userEmail"
            :message="reqItem.userMessage"
          ></request-item>
        </ul>
        <h3 v-else>You haven`t received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
  import RequestItem from '../../components/modules/RequestItem.vue'

  export default {
    components: { RequestItem},
    data() {
      return {
        isLoading: false,
        error: null,
      }
    },
    computed: {
      reqList() {
        return this.$store.getters['req/showRequests']
      },
      hasRequests() {
        return this.$store.getters['req/hasRequests']
      },
    },
    methods: {
      async loadRequests() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('req/getRequests');
        } catch (error) {
          this.error = error.message || 'Someting went wrong!'
        }
        this.isLoading = false;
      },
      handleError() {
        this.error = null;
      }
    },
    created() {
      this.loadRequests();
    }
  }
</script>

<style scoped>
  header {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
  }

  h3 {
    text-align: center;
  }
</style>