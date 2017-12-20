<template lang='pug' src='./about-us.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/Hero/Hero'
import BlockBox from 'components/block/block-text-box/block-text-box'
import CustomAboutUsDoctor from 'components/custom/custom-about-us-doctor/custom-about-us-doctor'

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
    Loader,
    Hero,
    BlockBox,
    CustomAboutUsDoctor
  }
}
</script>
