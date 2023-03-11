<template>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
      </header>
      <ul v-if="hasRequests">
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
</template>

<script>
  import RequestItem from '../../components/modules/RequestItem.vue'

  export default {
    components: { RequestItem},
    // data() {
    //   return {
    //     reqList: [],
    //   }
    // },
    computed: {
      reqList() {
        return this.$store.getters['req/showRequests']
      },
      hasRequests() {
        return this.$store.getters['req/hasRequests']
      }
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