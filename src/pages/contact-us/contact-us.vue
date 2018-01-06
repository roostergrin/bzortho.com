<template lang="pug" src="./contact-us.pug"></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import CustomContactIntro from 'components/custom/custom-contact-intro/custom-contact-intro'
import CustomContactBody from 'components/custom/custom-contact-body/custom-contact-body'

export default {
  computed: {
    props () {
      return this.$store.state.pages.contact
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    CustomContactIntro,
    CustomContactBody,
    Loader,
    NavTrigger
  }
}
</script>
