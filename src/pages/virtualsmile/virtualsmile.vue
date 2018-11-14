<template lang='pug' src='./virtualsmile.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import Hero from 'components/hero/hero'

export default {
  name: 'virtualsmile',
  computed: {
    props () {
      return this.$store.state.pages['virtualsmile']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    NavTrigger,
    Hero
  }
}
</script>
