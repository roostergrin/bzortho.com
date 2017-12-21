<template lang='pug' src='./invisalign.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import Icon from 'components/icon/icon'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import CustomInvisalignSection from 'components/custom/custom-invisalign-section/custom-invisalign-section'

export default {
  name: 'get-started',
  computed: {
    props () {
      return this.$store.state.pages.invisalign
    },
    loading () {
      return this.$store.state.loading
    }
  },
  created () {

  },
  components: {
    Loader,
    Hero,
    Icon,
    NavTrigger,
    CustomInvisalignSection
  }
}
</script>
