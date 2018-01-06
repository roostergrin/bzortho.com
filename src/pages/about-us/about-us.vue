<template lang='pug' src='./about-us.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import BackgroundLogo from 'components/custom/custom-background/custom-background'
import Hero from 'components/hero/hero'
import BlockBox from 'components/block/block-text-box/block-text-box'
import CustomAboutUsDoctor from 'components/custom/custom-about-us-doctor/custom-about-us-doctor'
import CustomAboutUsTeam from 'components/custom/custom-about-us-team/custom-about-us-team'
import SliderAboutUsOffice from 'components/slider/slider-about-us-office/slider-about-us-office'

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
    NavTrigger,
    Hero,
    BlockBox,
    CustomAboutUsDoctor,
    CustomAboutUsTeam,
    SliderAboutUsOffice,
    BackgroundLogo
  }
}
</script>
