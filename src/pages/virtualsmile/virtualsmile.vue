<template lang='pug' src='./virtualsmile.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import Hero from 'components/hero/hero'
import BlockCTA from 'components/block/block-cta-home/block-cta-home'
import VirtualSmileExplain from 'components/block/block-virtualsmile-explain/block-virtualsmile-explain'
import VirtualSmileDemo from 'components/block/block-virtualsmile-demo/block-virtualsmile-demo'

export default {
  name: 'virtualsmile',
  computed: {
    props () {
      return this.$store.state.pages['virtualsmile']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    NavTrigger,
    Hero,
    BlockCTA,
    VirtualSmileExplain,
    VirtualSmileDemo
  }
}
</script>
