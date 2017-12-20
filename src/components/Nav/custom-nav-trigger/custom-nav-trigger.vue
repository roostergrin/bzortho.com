<template lang="pug" src="./custom-nav-trigger.pug"></template>

<script>
export default {
  name: 'Trigger',
  props: ['props'],
  created () {
    // console.log('ksdlfksj')
  },
  methods: {
    isScrolled () {
      this.$store.dispatch('VIEW_NAV', 1)
    },
    isNotScrolled () {
      this.$store.dispatch('VIEW_NAV', 2)
    }
  }
}
</script>
