<template lang="pug" src="./custom-nav-trigger.pug"></template>

<script>
export default {
  name: 'Trigger',
  props: ['props'],
  data () {
    return {
      intersectionOptions: {
        offset: '50%'
      }
    }
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
