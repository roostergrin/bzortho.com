<template lang='pug' src='./treatments.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import Hero from 'components/hero/hero'
import TreatTitle from 'components/block/block-treatments-title/block-treatments-title'
import TreatBody from 'components/block/block-treatments-body/block-treatments-body'
import TreatTabs from 'components/block/block-tab-section/block-tab-section'
import TreatImage from 'components/block/block-treatments-image/block-treatments-image'

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
    TreatTitle,
    TreatBody,
    TreatTabs,
    TreatImage
  }
}
</script>
