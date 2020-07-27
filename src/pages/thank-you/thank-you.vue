<template lang='pug' src='./thank-you.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import BackgroundLogo from 'components/custom/custom-background/custom-background'
import Hero from 'components/hero/hero'

export default {
  name: 'thank-you',
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    NavTrigger,
    Hero,
    BackgroundLogo
  }
}
</script>
