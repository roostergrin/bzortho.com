<template lang='pug' src='./wild-smiles.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import Icon from 'components/icon/icon'
import Intro from 'components/custom/custom-wild-smiles-intro/custom-wild-smiles-intro'
import Sections from 'components/custom/custom-wild-smiles-sections/custom-wild-smiles-sections'

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
    Icon,
    Intro,
    Sections
  }
}
</script>
