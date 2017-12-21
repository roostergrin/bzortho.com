<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import BlockBox from 'components/block/block-text-box/block-text-box'
import BlockSlider from 'components/block/block-slider-container/block-slider-container'
import CustomSectionHome from 'components/custom/custom-section-home/custom-section-home'
import RepeaterTabsHome from 'components/repeaters/repeaters-tabs-home/repeaters-tabs-home'
import Hero from 'components/hero/hero'
import Slider from 'components/slider/slider' // TODO: LUKE
import SliderItem from 'components/slider/slider-item' // TODO: LUKE
import RepeatersHomeImages from 'components/repeaters/repeaters-home-images/repeaters-home-images'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  data () {
    return {
      list: []
    }
  },
  components: {
    Loader,
    Slider,
    SliderItem,
    NavTrigger,
    BlockBox,
    BlockSlider,
    Hero,
    CustomSectionHome,
    RepeaterTabsHome,
    RepeatersHomeImages
  },
  mounted () {
    this.list = this.props
  }
}
</script>
