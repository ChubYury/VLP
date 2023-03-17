<template>
  <section>
    <base-card>
      <h2>Registration</h2>
      <coach-form @set-data="setNewCoach"></coach-form>
    </base-card>
  </section>
</template>

<script>
  import CoachForm from '../../components/modules/coachForm.vue';
  export default {
    components: { CoachForm },
    methods: {
      setNewCoach(dataCoach) {
        // console.log(dataCoach)
        this.$store.dispatch('coaches/registerCoach', dataCoach);
        this.$router.replace('/coaches');
      }
    }
  };
</script>

