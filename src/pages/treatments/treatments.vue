<template lang='pug' src='./treatments.pug'></template>

<script>
import Loader from 'components/loader/loader'
import BackgroundLogo from 'components/custom/custom-background/custom-background'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import Hero from 'components/hero/hero'
import Accordion from 'components/accordion/accordion-treatments/accordion-treatments'
import Tabs from 'components/tabs/tabs-treatments/tabs-treatments'

export default {
  name: 'treatments',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    NavTrigger,
    Hero,
    BackgroundLogo,
    Accordion,
    Tabs
  }
}
</script>
