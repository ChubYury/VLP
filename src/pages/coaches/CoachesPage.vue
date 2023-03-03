<template>
  <filters-block></filters-block>
  <coach-list></coach-list>
</template>

<script>
  import FiltersBlock from '../../components/modules/FiltersBlock.vue'
  import CoachList from '../../components/modules/CoachList.vue'

  export default {
    components: {CoachList, FiltersBlock},
  }
</script>