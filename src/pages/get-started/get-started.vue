<template lang='pug' src='./get-started.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/Hero/Hero'
import Icon from 'components/icon/icon'

export default {
  name: 'get-started',
  computed: {
    props () {
      return this.$store.state.pages.getstarted
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    Icon
  }
}
</script>
