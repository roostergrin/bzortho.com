<template lang='pug' src='./about-us.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'about-us',
  computed: {
    props () {
      return this.$store.state.pages.aboutus
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  }
}
</script>
