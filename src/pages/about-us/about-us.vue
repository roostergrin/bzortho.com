<template lang='pug' src='./about-us.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/Hero/Hero'

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
  created () {
    console.log(this.props)
  },
  components: {
    Loader,
    Hero
  }
}
</script>
