<template lang="pug" src="./custom-nav-trigger.pug"></template>

<script>
export default {
  props: ['props'],
  methods: {
    isScrolled () {
      this.$store.dispatch('VIEW_NAV', 1)
      console.log(this.$store.state.nav)
    },
    isNotScrolled () {
      this.$store.dispatch('VIEW_NAV', 2)
      console.log(this.$store.state.nav)
    }
  }
}
</script>
