<template lang='pug' src='./get-started.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import Icon from 'components/icon/icon'
import CustomGetStartedFirstVisit from 'components/custom/custom-get-started-first-visit/custom-get-started-first-visit'
import CustomGetStartedServices from 'components/custom/custom-get-started-services/custom-get-started-services'
import BlockTextBox from 'components/block/block-text-box/block-text-box'
import CustomPatientForms from 'components/custom/custom-patient-forms/custom-patient-forms'

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
    Icon,
    CustomGetStartedServices,
    BlockTextBox,
    CustomPatientForms,
    CustomGetStartedFirstVisit
  }
}
</script>
