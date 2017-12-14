<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import NavTrigger from 'components/Nav/custom-nav-trigger/custom-nav-trigger'
import BlockBox from 'components/block/block-text-box/block-text-box'
import BlockSlider from 'components/block/block-slider-container/block-slider-container'
import Hero from 'components/Hero/Hero'
import Slider from 'components/slider/slider'
import SliderItem from 'components/slider/slider-item'

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
    Hero
  },
  mounted () {
    this.list = this.props
    // console.log(this.list)
  }
}
</script>
