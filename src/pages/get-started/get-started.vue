<template lang='pug' src='./get-started.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import Hero from 'components/hero/hero'
import Icon from 'components/icon/icon'
import BlockBox from 'components/block/block-text-box/block-text-box'
import ImageButton from 'components/custom/custom-image-button/custom-image-button'

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
    NavTrigger,
    Hero,
    Icon,
    BlockBox,
    ImageButton
  }
}
</script>
