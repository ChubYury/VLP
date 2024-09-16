<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>$ {{ rate }} /hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink" mode="outline">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="item in areas"
          :key="item+'g'"
          :type="item"
          :title="item"
        >{{ item }}</base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        selectedCouch: null,
      }
    },
    computed: {
      fullName() {
        return this.selectedCouch.firstName + ' ' + this.selectedCouch.lastName;
      },
      rate() {
        return this.selectedCouch.hourlyRate;
      },
      contactLink() {
        return this.$route.path + '/contact';
      },
      areas() {
        return this.selectedCouch.areas;
      },
      description() {
        return this.selectedCouch.description;
      }
    },
    created() {
      const coachesList = this.$store.getters['coaches/setCoaches'];
      this.selectedCouch =  coachesList.find(
        (couch) => couch.userId === this.id
      );
    }
  }
</script>