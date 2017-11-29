<template lang='pug' src='./wild-smiles.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/Hero/Hero'
import Icon from 'components/icon/icon'

export default {
  name: 'WildSmiles',
  computed: {
    props () {
      return this.$store.state.pages.wildsmiles
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
