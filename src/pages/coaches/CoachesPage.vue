<template>
  <h1>Coach page</h1>
  <filters-block></filters-block>
  <coach-list></coach-list>
</template>

<script>
  import FiltersBlock from '../../components/modules/FiltersBlock.vue'
  import CoachList from '../../components/modules/CoachList.vue'

  export default {
    components: {CoachList, FiltersBlock},
    data() {
      return {}
    },
  }
</script>